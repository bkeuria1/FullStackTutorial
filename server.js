if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require('express')
const app = express()
const methodOverride = require('method-override')
const expressLayouts = require('express-ejs-layouts')
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const indexRouter = require('./routes/index')
const authorRouter = require ('./routes/authors')
const bookRouter = require ('./routes/books')
app.set('view engine', 'ejs')
app.set('views',__dirname+'/views')
app.set('layout','layouts/layout')
app.use(methodOverride('_method'))
app.use(expressLayouts)


const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection
db.on('error', error=> console.error(error))
db.once('open', ()=> console.log('Connected'))

app.use('/',indexRouter)
app.use('/authors',authorRouter)
app.use('/books',bookRouter)

app.use(express.static('public'))
app.listen(process.env.PORT || 3000)
