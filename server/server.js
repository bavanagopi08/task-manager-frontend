const express=require('express');
const authRoutes=require('./routes/authRoutes');
const taskRoutes=require('./routes/taskRoutes');
const mongoose=require('mongoose');
const cors=require('cors');
require('dotenv').config();

const app=express();

app.use(cors());
app.use(express.json());

app.use('/api/tasks', taskRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI)
.then(()=> console.log('MongoDB Connected'))
.catch((error)=> console.log(error));

app.get('/', (req, res)=> {
    res.send('Server Running');
});

const PORT = 5000;

app.listen(PORT, ()=> {
    console.log(`Server running on port ${PORT}`);
});