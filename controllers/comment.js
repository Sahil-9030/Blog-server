// import models

const Comment = require("../models/commentModel");
const Post = require("../models/postModel");

//logic

exports.createComment = async (req,res) =>{
    try{
        // fetch data from model
        const {post,user,body} = req.body;

        // create comment4
        const comment = new Comment({
            post,user,body
        })


        //save comment to the database

        const savedComment = await comment.save(); 

        //fine the post by id and add the new comment to the array of comments
        const updatedPost = await Post.findByIdAndUpdate(post, {$push :{comments: savedComment._id}},{new:true})
                            .populate("comments") // using populate we can access actual comment using id
                            .exec();
                            //here push operator is used to update or insert something and pull will delete
        // and "new : true" says that provide me the updated post after adding comments 

        res.json({
            post: updatedPost,
        });
    }
    catch(err){
        return res.status(500).json({
            error: "error while creating comment"
        });
    }
}