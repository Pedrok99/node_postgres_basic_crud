const express = require('express')
const routes = require('./routes/routes')
const app = express();
const port = 3000

app.use(express.json())
app.use(routes);

//middleware 
app.use((error, request, response, next)=>{ 
  response.status(error.status || 500);
  response.json({error : error.message})
})

app.listen(port, () => {
  console.log(`Listening to http://localhost:${port}`)
})