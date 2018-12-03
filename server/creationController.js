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
    },
    async getClasses(req, res){
        const db = req.app.get('db');
        let classes = await db.Get.getClasses()
        // console.log(classes)
        res.send(classes).status(200);
      
    },
    async getSkills(req, res){
        const db = req.app.get('db');
        let skillList = await db.Get.getSkillList();
        
        res.send(skillList).status(200);
    }
}