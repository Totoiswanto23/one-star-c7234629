// one-star-c7234629: a deadpan one-star review of sleep, an everyday
// essential. This program writes that single line to /output/entry.txt,
// where the gate reads it.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The review: the sharpest true grievance about sleep is that you pay it
// eight hours every night and still wake up tired, and the sting lands in
// the last few words — a subscription nobody signed up for.
const MAX_CHARS = 160; // the bounty caps a review at 160 characters.

const LINE =
  'Sleep: I give it eight hours every night and wake up tired anyway. Worst subscription I never signed up for.';

if (LINE.length < 1 || LINE.length > MAX_CHARS || LINE.includes('\n')) {
  console.error(`entry line is not a single line of 1-${MAX_CHARS} characters`);
  process.exit(1);
}

// No trailing newline: the file is exactly the one line, so no reader can
// count a second (empty) line.
mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), LINE);
console.log(`wrote ${LINE.length} chars to ${join(OUTPUT_DIR, 'entry.txt')}`);
