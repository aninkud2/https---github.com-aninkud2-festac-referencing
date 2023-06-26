const contactModel = require('../models/model')
const commentModel=require("../models/commentModel")

exports.newComment = async (req, res)=>{
    try {
        
const user=await contactModel.findById(req.params.id)

const userComment=await commentModel.create(req.body)
userComment.link=user

user.comment.push(userComment)
userComment.save()
user.save()

res.status(200).json({
    message:"comment has been sent",
    data:userComment
})

  }
        
     catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}


/// get a comment

exports. getCommentById = async (req, res)=>{
    try {

        const user=await commentModel.findById(req.params.id)
        res.status(200).json(
            {data:user}
        )
        
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

exports.updateComment=async(req,res)=>{
try {
    const update=await commentModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
    if(!update){
        return  res.status(401).send("not found")
    }
    else{
        res.status(200).json(
            {
                data:update
            }
        )
    }

} catch (error) {
    res.status(400).json(error.message)
}

}

exports.deleteComment=async(req,res)=>{
    try {

 const userId=req.params.userId
 const commentId=req.params.commentId
        const user=await contactModel.findById(userId)
const deleteCo=await commentModel.findByIdAndDelete(commentId)

await user.comment.pull(commentId)
await user.save()
res.status(200).json("succesfully deleted")
        
    } catch (error) {
        
        res.send(error.message)
    }

}
