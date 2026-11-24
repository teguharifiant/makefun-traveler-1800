import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-sentence entry for make.fun "One Sentence for a Traveler from 1800":
// explain the modern internet to someone from 1800 using only things
// they already know — printing presses, libraries, post offices, wires,
// letters, and a kettle on the boil.
const text =
  "Imagine every printing press, library, and post office on earth joined by wires into one room in your house, so any letter you write reaches a stranger before your kettle boils.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate: the entry must be a single line of 1-200 characters.
const entryLength = [...text].length;
if (entryLength < 1 || entryLength > 200) {
  throw new Error(
    `entry must be 1-200 characters, got ${entryLength}`,
  );
}
if (text.includes("\n") || text.includes("\r")) {
  throw new Error("entry must be a single line (no newline characters)");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
