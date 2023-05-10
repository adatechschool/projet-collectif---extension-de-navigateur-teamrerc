let randomNumber = Math.ceil(Math.random() * 10-1) ;


fetch('http://localhost:5000/citations2')
  .then(response => response.json())
  .then(data => console.log(data[randomNumber5].message))
  .catch(error => console.log(error));



