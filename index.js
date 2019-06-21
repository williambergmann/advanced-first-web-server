
const express = require('express')
const app = express()
const { users } = require('./state')
const bodyParser = require('body-parser')
//follow from video to move modules over
const userRouter = require('./routes/users')
const port = process.env.PORT || 4001

app.use(bodyParser.json())

app.get('/', (req, res) =>{
    res.send("'sup brohe?")
  }
)

app.get('/users', (req, res) =>{
  res.send(users)
}
)
app.get('/users', (req, res) =>{
    res.send('BODY'. req.body)
    res.send("nice bod'")
  }
)

app.post('/users', (req, res) =>{
  users.push(requ.body)
  res.json(users.length-1)
  const newUser = {
    "name": "test"

  }
})

app.listen(port, () => 
  console.log(`Example app listening on port ${port}!`))