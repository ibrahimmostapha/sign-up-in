const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const authRoute = require('./routes/AuthRoute');
const userRoute = require('./routes/UserRoute');

const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());

// connect database
mongoose.connect('mongodb://127.0.0.1:27017/mernAuth', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(console.log("Connected to MongoDB"))
    .catch((err) => console.log(err));

// server response
app.get('/', (req, res) => {
    res.send('Hello from server!')
});

// Server listening on port   
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});

// user auth
app.use("/api/auth", authRoute);

// user routes
app.use("/api/users", userRoute);