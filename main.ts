// gta6-clipper-01 entry: hands the video's address to the house.
// The video itself is the entry — the house reads its views from YouTube,
// so this program only carries VIDEO.json from the repository root to /output
// and checks it names a video first. Nothing it writes is scored.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

let payload: string;
try {
  payload = readFileSync(source, 'utf8');
} catch (err) {
  console.error(`cannot read ${source}: ${(err as Error).message}`);
  process.exit(1);
}

let video: { url?: unknown };
try {
  video = JSON.parse(payload) as { url?: unknown };
} catch (err) {
  console.error(`VIDEO.json is not valid JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof video.url !== 'string' || video.url.length === 0) {
  console.error('VIDEO.json holds no url string');
  process.exit(1);
}

const youtube = /^(https?:\/\/)?(www\.|m\.)?(youtube\.com\/(shorts\/|watch\?v=)|youtu\.be\/)[A-Za-z0-9_-]{11}/;
if (!youtube.test(video.url)) {
  console.error(`VIDEO.json url is not a YouTube video address: ${video.url}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(target, payload);
console.log(`handed in ${video.url}`);
