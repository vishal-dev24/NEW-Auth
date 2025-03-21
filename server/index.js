const express = require('express');
const path = require('path');
const cors = require('cors');
const userModel = require('./routes/users');
const upload = require('./routes/multer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// register User route
app.post('/register', upload.single('image'), async (req, res) => {
  const { username, email, password } = req.body;
  const imagefile = req.file ? req.file.filename : null;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      const createdUser = await userModel.create({ username, email, password: hash, image: imagefile });
      const token = jwt.sign({ email: email, userid: createdUser._id }, "shhh")
      res.cookie('token', token);
      res.json(), console.log("User registered successfully", { createdUser });
    })
  })
});

// login User route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await userModel.findOne({ email });
  if (!user) return res.status(400).json({ error: 'Wrong email' });
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      const token = jwt.sign({ email: email, userid: user._id }, 'shhh');
      res.cookie("token", token);
      res.json()
      console.log("User loggedin successfully", { user });
    }
    else res.json({ error: 'Wrong password' })
  })
})

// middleware to verify token
function isLoggedIn(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.redirect("/login");
  const { userid: _id, email } = jwt.verify(token, "shhh")
  req.user = { _id, email };
  next();
}

// logout User route
app.get('/logout', (req, res) => {
  res.cookie('token', '')
  res.json();
});

// user profile route
app.get('/profile', isLoggedIn, async (req, res) => {
  const user = await userModel.findOne({ email: req.user.email });
  res.json(user);
});

app.listen(5000);