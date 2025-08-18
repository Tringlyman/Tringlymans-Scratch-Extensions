# Raw Extension

### Official Raw extension's Documentation Page

**raw block**
```scratch
raw [alert("Hello World!")]::#3c3c3c
```
It will execute whater is inside the text input as JavaScript Code

<hr/>

**raw reporter**
```scratch
raw [return "hello World!"]::#3c3c3c reporter
```
It will execute whater is inside the text input as JavaScript Code\
But if the final code is to return something then it will return that value in the editor

<hr/>

**raw Boolean**
```scratch
raw [return 1 == 1]::#3c3c3c boolean
```
It will execute whater is inside the text input as JavaScript Code\
But if the final code is to return specifically the boolean operators (true/false) then it returns the boolean operator

<hr/>

> [!NOTE]
> ScratchBlocks doesn't have PenguinMod exlusive shapes so square is the closest to the actual shape of **JSON** and **OTHER** blocks

<hr/>

**JSON const**
```scratch
(::ring)const [obj] = \{["name": "Jack"]}(::ring)::#3c3c3c reporter ring
```
Returns `const` with name of your choice with value an object written by you\
<sup>curly brackets are by default</sup>

<hr/>

**JSON key/value**
```scratch
(::ring)[obj] : \{["name": "Jack"]}(::ring)::#3c3c3c reporter ring
```
Returns a `key/value` pair with key of your choice with value an object written by you\
<sup>curly brackets are by default</sup>

<hr/>

**JSON plain**
```scratch
(::ring)\{["name": "Jack"]}(::ring)::#3c3c3c reporter ring
```
Returns `key/value` pairs of your choice\
<sup>curly brackets are by default</sup>

<hr/>

**ARRAY const**
```scratch
(::ring)const [obj] = \[["name": "Jack"]](::ring)::#3c3c3c reporter ring
```
Returns `const` with name of your choice with value an array written by you\
<sup>brackets are by default</sup>

<hr/>

**ARRAY key/value**
```scratch
(::ring)[obj] : \[["name": "Jack"]](::ring)::#3c3c3c reporter ring
```
Returns a `key/value` pair with key of your choice with value an object written by you\
<sup>brackets are by default</sup>

<hr/>

**ARRAY plain**
```scratch
(::ring)\[["name": "Jack"]](::ring)::#3c3c3c reporter ring
```
Returns `value`s of your choice\
<sup>brackets are by default</sup>

<hr/>

**OTHER array of input**
```scratch
(::ring)["apple "], ["banana"](::ring)::#3c3c3c reporter ring
```
Returns the 2 `value`s with `, ` in between

<hr/>

**OTHER cover text**
```scratch
(::ring)cover [Hello World!] in [strings(') v](::ring)::#3c3c3c reporter ring
```
Returns the `value` covered in ('),(") or (`)

<hr/>

**OTHER raw join**
```scratch
(::ring)raw join ["apple "] + ["banana"](::ring)::#3c3c3c reporter ring
```
Returns the 2 `value`s with `+` in between

<hr/>

**OTHER raw and/or**
```scratch
(::ring)raw [1 === 1][and v]["1" === 1](::ring)::#3c3c3c reporter ring
```
Returns the 2 `value`s with `&&` or `||` in between

<hr/>

**OTHER raw not**
```scratch
(::ring)raw not[1 == 1](::ring)::#3c3c3c reporter ring
```
Returns `!(` `value` `)`