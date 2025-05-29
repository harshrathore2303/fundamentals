# Anchor and Boundaries
- Anchors are metacharacters that match the start and end of a line of text they are examining.

# Character used for achoring:-  
- **^**: matched start of the line
- **$**: matched end of the line

Note that anchors characters ^ and $ match just the position of the characters in the pattern and not the actual characters themselves.

# Word Boundaries
- Word Boundaries are metacharacters that match the start and end position of a word – a sequence of alphanumeric characters.
- for example:- **\b** matches the start or end of a word.

- **\d** – matches any decimal digit and is shorthand for [0-9].
- **\w** – matches any alphanumeric character which could be a letter, a digit, or an underscore. \w is shorthand for [A-Za-z0-9_].
- **\s** – matches any white space character.
- **\D** – matches any non-digit and is the same as [^0-9.]
- **\W** – matches any non-word (that is non-alphanumeric) character and is shorthand for [^A-Za-z0-9_].
- **\S** – matches a non-white space character.
- **.**– matches any character.