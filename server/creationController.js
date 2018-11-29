module.exports ={
    async getRaces(req, res){
        const  db = req.app.get('db')
       let races = await db.Get.getRaces()
       res.send(races).status(200)
    }
}