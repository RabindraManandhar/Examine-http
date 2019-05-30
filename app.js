const express = require('express'); // to connect with express.js
const app = express(); // to connect with app

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Q.3

app.get('/api/exercise', (request, response) => {
    console.log(request.query);
    response.send(request.query);
});

// Q.4a

app.get('/api/exercise', (request,response) => {
    console.log(request.method, request.path);
    for (const key in request.query) {
        console.log(`${key}: ${request.query[key]}`);
    }
    response.send(request.query);
});

// Q.4b

app.post ('/api/exercise', (request,response) => {
    let text = '<h1>Hello from Express!</h1>';
    text += '<h2>POST parameters</h2>';
    text += '<p>I received these parameters: </p>';
    text += '<ul>';
  
    //console.log(request.body);
  
    for (const key in request.body){
        text += `<li>${key}: ${request.body[key]}</li>`
    }
  
    text += '</ul>';
    response.send(text);
  
  });
  
  // Q.5

  app.post ('/api/login', (request,response) => {
      const user = request.body.user;
      const pwd = request.body.pwd;

      if (user === '' || pwd === '0') {
          response.status(400).send(); // this gives you an error, then you know it works.
      } else if (user === 'mark' && pwd === 'giraffe') {
          response.status(200).json({user: user});
      } else {
          response.status(403).send(); // this gives you error code for 'access to localhost was denied'
      }
  })

app.listen(5000, () => console.log('server is running'));


