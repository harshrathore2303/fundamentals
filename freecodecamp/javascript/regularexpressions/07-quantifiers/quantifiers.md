# Quantifiers
- Quantifiers denote how many times a character, a character class, or group should appear in the target text for a match to occur.

## Here are some peculiar ones:
```
| Symbol  | Meaning                   | Matches Example                  |
| ------- | ------------------------- | -------------------------------- |
| `*`     | 0 or more                 | `lo*` → `l`, `lo`, `loo`, `looo` |
| `+`     | 1 or more                 | `lo+` → `lo`, `loo`, `looo`      |
| `?`     | 0 or 1                    | `lo?` → `l`, `lo`                |
| `{n}`   | Exactly `n` times         | `o{2}` → `oo`                    |
| `{n,}`  | At least `n` times        | `o{2,}` → `oo`, `ooo`, ...       |
| `{n,m}` | Between `n` and `m` times | `o{2,3}` → `oo`, `ooo`           |
```