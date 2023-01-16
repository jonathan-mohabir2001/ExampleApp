/*
ES6 syntax for Node development, and Express. 
*/
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//ROUTES DEFINED
app.get('/', (req, res) => {
  res.send('Backend created using express');
});



app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);

  //template strings, template literals, string interpolation
});


//NODEMON - to restart server automatically