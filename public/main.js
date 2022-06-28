const btn = document.getElementById('hello-btn')


btn.addEventListener('click', () => {
  let txt = document.getElementById('enterName').value
  window.alert('Hi ' + txt + ', welcome to my page, try a right click next time.')
})

btn.addEventListener('auxclick', () => {
  window.alert("You right clicked, it didn't do anything but you did it")
})
