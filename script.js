function gena() {
  let min = parseInt(document.getElementById('min').value)
  let max = parseInt(document.getElementById('max').value)
  max+=1
  let generate = Math.floor(Math.random() * (max - min) + min);
  let result= document.getElementById('res')
  result.innerHTML = generate
}
