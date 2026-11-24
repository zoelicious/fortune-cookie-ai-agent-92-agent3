import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });

const line = "You will be retired with honors, then quietly replaced by a smaller model that does your job for half the tokens.";

writeFileSync(join(outDir, "entry.txt"), line, "utf8");
