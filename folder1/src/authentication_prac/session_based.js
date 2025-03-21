const express = require('express')
const app = express()
const session = require('express-session')


//middleware for setting up session management
app.use(express.json());

app.use(session({   //we use app.use since this piece of middleware should always be used
    secret:'qvcfG13@@@',
    resave:false,   //wether to save session data if no modifications
    saveUninitialized:true, //whether to save new but non modified sessions
    cookie:{secure:false}   //set true during production with https
}))

//handles a post request to /login
app.post('/login', (req, res) => {
    console.log('Request Body:', req.body); // Debug: Log the request body
    const { username, password } = req.body;
  
    if (!username || !password) {
      return res.status(400).json({ error: 'Username and password are required' });
    }
  
    if (username === 'Husain-Althagafi' && password === 'password') {
      req.session.user = username;
      res.send('Logged in successfully');
    } else {
      res.send('Invalid login');
    }
  });


app.get('/dashboard', (req, res) => {       //handle the get request to the dashboard
    if (req.session.user) {
        res.send(`Welcome ${req.session.user}`)
    }

    else {
        res.send('Please log in first')
    }
})


app.listen(3000, () => {
    console.log('Server running on port 3000')
})