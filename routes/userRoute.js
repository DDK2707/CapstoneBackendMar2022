const User = require("../models/userModel")
const router = require("express").Router();
const bcrypt = require("bcrypt")
//get single

//update user
 router.put("/:id", async (req, res) => {
    if (req.body.userId === req.params.id || req.user.isAdmin){
        if (req.body.password){
            try{
                const salt = await bcrypt.genSalt(10);
                req.body,password = await bcrypt.hash(req.body.password, salt)
            } catch(err){
                return res.status(500).json(err)
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body,
            });
            res.status(200).json("Account successfully updated")
        } catch(err) {
            return res.status(500).json(err)
        }
    } else{
        return res.status(403).json("You don't have permission to update this account")
    }
    
 })
//delete user

//follow

//unfollow 

module.exports = router