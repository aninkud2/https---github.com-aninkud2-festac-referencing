const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
    writeComment: {
        type: String,
        required: [true, 'Name is required']
    },
// to join the user collection with the comment collection
   link:{type:mongoose.Schema.Types.ObjectId,
ref:"Book"} 
},
{timeStamp:true})

const commentModel = mongoose.model("mycomment", commentSchema)

module.exports = commentModel