const express = require('express')
const router = express.Router()
const Book = require('../models/book')
router.get('/', async (req,res)=>{
    try{
        const books = await Book.find({})
        res.render('index', {books: books})

    }catch(err){
        console.log(err)
    }
    
}
)
module.exports = router