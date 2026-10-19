import type { APIRoute } from 'astro';
import { getCollection, type CollectionEntry } from 'astro:content';
import satori from 'satori';
import { Resvg } from '@resvg/resvg-js';
import { getOgTemplate } from '../../utils/og-template';
import fs from 'node:fs/promises';
import path from 'node:path';

// Cached font buffers across build-time renders
let fontDataCache: ArrayBuffer | null = null;
let monoDataCache: ArrayBuffer | null = null;

async function loadFonts() {
  if (!fontDataCache) {
    const fontPath = path.resolve(
      process.cwd(),
      'node_modules/@fontsource/space-grotesk/files/space-grotesk-latin-700-normal.woff'
    );
    const buf = await fs.readFile(fontPath);
    fontDataCache = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  }
  if (!monoDataCache) {
    const monoPath = path.resolve(
      process.cwd(),
      'node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff'
    );
    const buf = await fs.readFile(monoPath);
    monoDataCache = buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength);
  }
  return { fontData: fontDataCache, monoData: monoDataCache };
}

export async function getStaticPaths() {
  const works = await getCollection('work');
  return works.map((entry) => ({
    params: { slug: entry.id },
    props: { entry },
  }));
}

interface Props {
  entry: CollectionEntry<'work'>;
}

export const GET: APIRoute = async ({ props }) => {
  const { entry } = props as Props;
  const { fontData, monoData } = await loadFonts();

  const element = getOgTemplate({
    title: entry.data.title,
    client: entry.data.client,
  });

  const svg = await satori(element, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Space Grotesk',
        data: fontData,
        weight: 700,
        style: 'normal',
      },
      {
        name: 'IBM Plex Mono',
        data: monoData,
        weight: 500,
        style: 'normal',
      },
    ],
  });

  const resvg = new Resvg(svg, {
    fitTo: {
      mode: 'width',
      value: 1200,
    },
  });

  const pngData = resvg.render();
  const pngBuffer = pngData.asPng();

  return new Response(pngBuffer, {
    status: 200,
    headers: {
      'Content-Type': 'image/png',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
};
