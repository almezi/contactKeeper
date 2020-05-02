const express = require('express');
const connectDB = require('./config/db');
const app = express();

//init body parser middleware
app.use(express.json({ extended: false }));
//connect db
connectDB();
app.get('/', (req, res) => res.json({ msg: 'welcome to our API' }));
//Define Routes
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/contacts', require('./routes/contacts.routes'));
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));
