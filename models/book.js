const mongoose = require('mongoose')
const coverImageBasePath = 'uploads/bookcovers'
const bookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    
    },

    publishedDate:{
        type: Date,
        required: true
    },
    pageCount:{
        type: Number,
        required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    },
    coverImageName:{
        type: String
        

    },
    description:{
        type: String
        

    },
    author:{
        type:mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Author'
    }
})
bookSchema.virtual('coverImagePath').get(function() {
    if (this.coverImageName != null) {
      return path.join('/', coverImageBasePath, this.coverImageName)
    }
  })
module.exports = mongoose.model('Book', bookSchema)
 module.exports.coverImageBasePath = coverImageBasePath