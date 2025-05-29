# Escape Rules
- In regular expressions, some characters have special meanings (called metacharacters). To match these characters literally, you need to escape them.
- Escaping means adding a backslash \ before a special character to treat it as a normal character.

```
| Character | Purpose in Regex            | How to Escape    |      |
| --------- | --------------------------- | ---------------- | ---- |
| `.`       | Matches any character       | `\.`             |      |
| `\`       | Escape character itself     | `\\`             |      |
| `+`       | One or more quantifier      | `\+`             |      |
| `*`       | Zero or more quantifier     | `\*`             |      |
| `?`       | Optional or lazy quantifier | `\?`             |      |
| `^`       | Start of string anchor      | `\^`             |      |
| `$`       | End of string anchor        | `\$`             |      |
| `(`, `)`  | Grouping                    | `\(`, `\)`       |      |
| `{`, `}`  | Quantifier bounds           | `\{`, `\}`       |      |
| `[`, `]`  | Character class             | `\[`, `\]`       |      |
| \`        | \`                          | Alternation (OR) | `\|` |
```

