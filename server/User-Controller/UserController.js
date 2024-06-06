const register = (req,res)=>{
    try {
        res.status(200).json("working")
    } catch (error) {
        res.json("error",error)
    }
}

module.exports=register