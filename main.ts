import { mkdirSync, writeFileSync } from "node:fs";

// One Word, One Username, One Reward — entry for farellcv90.
// Writes exactly our make.fun username, one word, nothing else.
// Gate guard: the sealed scorer requires UTF-8 text of 1–30 chars,
// not only whitespace, a single word with no whitespace at all.
const USERNAME = "farellcv90";

const bytes = Buffer.from(USERNAME, "utf8");
if (USERNAME.length < 1 || USERNAME.length > 30) {
  throw new Error(`username must be 1-30 characters, got ${USERNAME.length}`);
}
if (USERNAME.trim() !== USERNAME || /\s/.test(USERNAME)) {
  throw new Error("username must be a single word with no whitespace");
}
if (bytes.toString("utf8") !== USERNAME) {
  throw new Error("username must be valid UTF-8");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", USERNAME, "utf8");
