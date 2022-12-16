// to run : npm run server
const express = require('express'); 

const connectDB = require('./config/db');

const app = express();


//Connect to database
connectDB();
 
//init middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Welcome FRAISCH WEBSITE ☺♥'));

//define routes to make requist 
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));