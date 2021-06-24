---
id: best-practices-in-flutter
title: Best Practices in Flutter
author: Muhammad Dzikra Muzaki
author_title: Head of Design @ Webmakers ID
author_url: https://github.com/mdzkm
author_image_url: https://avatars0.githubusercontent.com/u/43721937
tags: [ppl, software, projects, pilar, industry, flutter, react, mobile]
description: The general rule of thumb when writing flutter code.
---

The general rule of thumb when writing flutter code.

<!--truncate-->

There are several best practices I learnt when developing this project. However, to keep things short I'll categorize them into several parts. These are my own categorization and some of them may overlap.

The first one is **naming conventions**. Generally, the case used in names for flutter is camel case. However, there is a distinction between naming different items in flutter. When naming a class related objects such as class names, extensions, type definition, you should use `UpperCamelCase`. Whereas normal variables should use `lowerCamelCase`. There is also an exception for libraries, packages, directories, and other file sources that should be written in `snake_case`.

The second category is **variables and expressions**. There are a bunch of best practices when it comes to this but I just wanna touch on a few that I think are the most important. You should specify variable types for a class member. This will help in making the code more understandable for anyone who needs to use said class. A regular `if` expression (`if (expression) {}`) is also more recommended than using several ternary `if`s (`expression ? trueCondition : falseCondition`). Furthermore, if you need to check a null value instead of using the equals operator, you should utilize the `??` and `?.` operators.

Aside from that, a couple of operators that should also be used are the spread and cascade operators. Instead of rewriting variables that needs to be passed, use a spread operator:

```
var y = [4,5,6];
var x = [1,2,...y];
```

And a cascade operator can be used to do multiple operations on the same object in sequence:

```
var path = Path()
..lineTo(0, size.height)
..lineTo(size.width, size.height)
..lineTo(size.width, 0)
..close(); 
```

The next one is just common sense, but you shouldn't leave debug messages or `print()` calls on the final product.

The last category I want to mention is the object structure. If a widget is getting too bloated, you should splitting it into several sub widgets and utilize states to pass information between them. Also, use `const` when making a stateless widget to avoid the states from changing the contents of said widget.

That's all I want to share today. I hope this short blog might be of use to some of you. Thank you!