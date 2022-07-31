//Importing server dependancies
import express from 'express'
import morgan from 'morgan'
import colors from 'colors'
import dotenv from 'dotenv'
import cors from 'cors'

//
const app = express()

 //Configuring server dependancies
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())

colors.enable()

//dotenv confuguration settings
dotenv.config()

//Database configuration

//Routing functionality
app.get('/', (req, res) => {
    res.status(200).json("Welcome to Khanya E-Shopping home page.")
})

//Configuring server to accept for requests on a PORT
const PORT = process.env.PORT || 8001

//Configuring server to listen for requests on a PORT and IP 127.0.0.1 or localhost on development mode
app.listen(PORT, () => console.log(`Server listening for ,requests on http://localhost:${PORT}`.cyan.bold))



