import mongoose from 'mongoose';

// Defining the schema for the Contact.
const contactSchema = new mongoose.Schema({
    name: {
        type : String , 
        required : true,
    },
    email : {
        type : String ,
        required : true,
    },
    subject : {
        type : String ,
        required : true,
    },
    message :{
        type : String ,
        required : true
    }, 
},
    {
        timestamps : true
    }
);

// Creating the Contact model based on the contactSchema.
const Contact = mongoose.model('Contact', contactSchema);

export default Contact;