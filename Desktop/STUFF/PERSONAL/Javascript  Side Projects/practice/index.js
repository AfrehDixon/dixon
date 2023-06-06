// document.getElementsByTagName('h1').='MY NAME IS AFREH';
// var name=document.getElementsByTagName('h1')

// data=()=>{
//     timeout =setTimeout(alert('Data fetch successful'),10000)
// }


// dismenu=()=>{
//     const nav=document.getElementByquerySelector("nav")


// }
// const content = new XMLHttpRequest()

// const urlREquest=""
// const response =request.JSON();
// console.log(response)

const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://dad-jokes.p.rapidapi.com/random/joke',
  headers: {
    'X-RapidAPI-Key': '9309454a3dmsh298d26f290d8e84p1bdcdcjsn13838dbdfb43',
    'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});





