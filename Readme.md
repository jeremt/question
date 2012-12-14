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