// The Meeting That Should Have Been an Email — make.fun entry.
//
// Writes a single one-line joke (at most 200 characters) to
// /output/entry.txt. Deterministic, stdlib-only, no network, no input.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Twelve people gave up an hour so one of them could read aloud the email that invited us all here.";

const outPath = "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY + "\n", "utf8");
console.log(`wrote ${ENTRY.length} characters to ${outPath}`);
