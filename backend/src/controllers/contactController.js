import mongoose from 'mongoose';
import Contact from '../model/Contact.js';
const createContact = async (req, res) =>{
    try {
    const { name , email , subject ,message } = req.body ;      // destructuring the request body to get the contact details
    const contact = await Contact.create({
        name,
        email,
        subject,
        message
    })
    console.log('Contact created successfully :', contact );
    res.status(201).json({ message : 'Contact created successfully' , 
        data : contact ,
        success : true 
     });
    }
    catch(error){
        console.log('Error creating contact:', error);
        res.status(500).json({ error : 'Internal Server Error ',
            message : error.message,
            success : false
        });
}}
export default createContact;