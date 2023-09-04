import './style.css'

const randomNumber = Math.floor(Math.random() * 11);

const body = document.querySelector('body')

document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault()

  const numberFromUser = document.querySelector(".numberFromUser").value;

  if (numberFromUser != randomNumber) {
    body.style.backgroundColor = '#ff0000'
  } else {
    body.style.backgroundColor = '#008000'
  }
  console.log(randomNumber);
})
