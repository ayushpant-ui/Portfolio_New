import express from 'express';
import cors from 'cors';
import contactRoute from './src/routes/contactRoute.js';

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res)=>{      
    try{              
    res.status(200).json({ 'message': 'Backend is running !'});
    }
    catch(error){
        console.log('Error in GET / route:', error);
        res.status(500).json({ error : 'Internal Server Error ',
            message : error.message,
            success : false
        });
    }
})

app.use('/api/contacts', contactRoute);
export default app ;