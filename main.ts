import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The epitaph: the dying man's own last words, carved on his stone.
const ENTRY = "Note to self: the snake was not a garden hose.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");

// Guard: one line, 1-150 characters, non-whitespace.
if (ENTRY.length < 1 || ENTRY.length > 150) {
  throw new Error("Entry must be 1-150 characters.");
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("Entry must be a single non-whitespace line.");
}

writeFileSync(outPath, ENTRY, "utf8");
