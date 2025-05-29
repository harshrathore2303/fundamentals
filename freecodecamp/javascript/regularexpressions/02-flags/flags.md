# Flags
What if there is no regex?
- We use basic logic to search and replace what we don't need.

But with regrex problem of searching is solved by solved.<br>

# Defination
Flags or modifiers are characters that enable advanced search features including case-insensitive and global searching.<br>
Each flag corresponds to one accessor property on the RegExp object.  
**d** -> Generate indices for substring matches.(**)  
**g** -> Global Search.(**)  
**i** -> Case-insensitive search.(**)  
**m** -> Makes '^' and "$" match the start and end of each line instead of those of the entire string.(**)  
**s** -> Allows "." to match newline characters.  
**u** -> "Unicode"; treat a pattern as a sequence of Unicode code points.(**)  
**v** -> An upgrade to the u mode with more Unicode features.  
**y** -> Perform a "sticky" search that matches starting at the current position in the target string.  

# How to use them?
**const expresssion = /Hello/g;**
**const expression = new RegExp('xyz', 'g')**
**const expresssion = /Hello/gi;** //for multiple flags

