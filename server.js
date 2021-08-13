console.clear();
const express=require ('express')
const mongoose=require('mongoose')
const cors=require('cors')
const fileUpload=require('express-fileupload')
const cookieParser=require('cookie-parser')
require('dotenv').config()
const connectDB=require("./config/connectDB");



//pdf
const bodyParser = require('body-parser');
const pdf = require('html-pdf');

const pdfTemplate = require('./documents');
//pdf




const app=express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())

//pdf
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json()); 
//pdf1

app.use(fileUpload({
    useTempFiles: true
}))
// Routes
app.use('/user',require('./routes/userRouter'))
app.use('/api',require('./routes/categoryRouter'))
app.use('/api',require('./routes/upload'))
app.use('/api',require('./routes/productRouter'))
app.use("/api", require("./router/contact"));

//pdf
app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

// Connect to mongodb
connectDB();

const PORT = process.env.PORT || 5000
app.listen(PORT, () =>{
    console.log('Server is running on port', PORT)
})


