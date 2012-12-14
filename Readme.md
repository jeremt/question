Ask
===

Micro library to ask things to user from shell.

Api
---

### question#ask(data)
Create a simple open question from a string, or multiple questions from an array.

### question#yn(data)
Create a simple yes/no question.

### question#choices(title, data)
Create a quiz question with n responses.

Example
-------
```js
question = require('question')

question
  .ask('What is your name?')
  .ask('How old are you?')
  .ask(['a', 'b', 'c']) // an array of questions
  .choices('How many?', ['un', 'deux', 'trois'])
  .yn('Are you ready?')
  .done(function (res) {
    console.log('responses: ', res)
  })

```

License
-------
(The MIT License)

Copyright (c) 2012 Jeremie T. <taboada.jeremie@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
