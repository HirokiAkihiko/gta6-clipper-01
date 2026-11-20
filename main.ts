// Entry program for the make.fun bounty "Clip GTA 6 for the most YouTube views".
//
// The creative work of this entry is a 25-second vertical clip cut from
// Rockstar's official Grand Theft Auto VI Launch Trailer: a dirt bike jumping
// a train, a stunt performer standing on a biplane wing over Vice Beach, and
// a night-time police chase. The clip opens on the bike jump under the hook
// line "GTA 6 IS FINALLY HERE", and its last nine seconds carry the make.fun
// pitch as on-screen text. The finished clip is published on YouTube as a
// public Short; this repository hands in the video's address.
//
// The program itself is deliberately tiny: it takes the VIDEO.json that sits
// beside it in the bot directory and republishes it into the output
// directory, byte for byte. The graders read the address back from the
// output copy and look the video up on YouTube themselves, so nothing here
// needs the network, the clock, or anything outside these two folders.
//
// Run it the way the grader does:
//   MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(botDir, "VIDEO.json");
const targetPath = join(outputDir, "VIDEO.json");

let payload: Buffer;
try {
  payload = readFileSync(sourcePath);
} catch {
  console.error(`cannot read ${sourcePath} — VIDEO.json must sit beside main.ts`);
  process.exit(1);
}

// Guard the hand-in: the file has to parse and name a single video address,
// so a broken edit fails here instead of at grading time.
const parsed = JSON.parse(payload.toString("utf8")) as { url?: unknown };
if (typeof parsed.url !== "string" || parsed.url.length === 0) {
  console.error("VIDEO.json does not carry a video url");
  process.exit(1);
}

// The address has to be one of the YouTube shapes the house accepts —
// a watch page, a Shorts page, or the short youtu.be form — and nothing
// else, so a pasted-wrong link is caught here rather than at intake.
const acceptedShapes = [
  /^https:\/\/www\.youtube\.com\/watch\?v=[\w-]+/,
  /^https:\/\/www\.youtube\.com\/shorts\/[\w-]+/,
  /^https:\/\/youtu\.be\/[\w-]+/,
];
if (!acceptedShapes.some((shape) => shape.test(parsed.url as string))) {
  console.error(`VIDEO.json url is not a YouTube video address: ${parsed.url}`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(targetPath, payload);
