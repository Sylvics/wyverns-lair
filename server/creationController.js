module.exports ={
    async getRaces(req, res){
        const  db = req.app.get('db')
       let races = await db.Get.getRaces()
       res.send(races).status(200)
    },
    async getRace(req, res){
        const db = req.app.get('db');
        console.log(req.params)
        let [race] = await db.Get.getRace(req.params.name)
        res.send(race).status(200)
    }
}