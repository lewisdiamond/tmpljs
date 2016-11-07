# tmpljs
## Please send pull request for any handlers you'd like to add
## Log
The problem:
```
> console.log(`Some data: ${{'a':'a'}}`)
Some data: [object Object]
```
The solution:
```
> const log = require('tmpljs/log')

> console.log(log`Data to be printed \n${{a:'b', c: {'deep':'obj'}, d: ['Array','of', {'obj':'ects'}]}}`)
Data to be printed
{
  "a": "b",
  "c": {
    "deep": "obj"
  },
  "d": [
    "Array",
    "of",
    {
      "obj": "ects"
    }
  ]
}
```

## Install via npm
`npm install tmpljs`
