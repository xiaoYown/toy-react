eg run: https://codepen.io/gaearon/pen/gWWZgR?editors=0010

记录:

```js
// [\s\S]+ 与 .+ 区别

/.+?/.test('\n')  // false
/[\s\S]+?/.test('\n')  // true

/.+?/.test('\r') // false
/[\s\S]+?/.test('\r')  // true
```