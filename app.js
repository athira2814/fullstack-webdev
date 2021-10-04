 
var heading = document.getElementById('heading')
var body = document.querySelector('body')

heading.innerHTML="i was added by JS"
// replaces the text
heading.style="color:red;font-size:2rem"
// can add styles

heading.classList.add('five')
heading.classList.remove('one')
// can add and remove class

body.classList.remove('dark')
body.classList.add('dark')
// manual implementation of dark mode