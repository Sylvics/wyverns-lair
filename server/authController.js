const bcrypt = require('bcryptjs')
module.exports = {
   async newPlayer(req,res){
        const db = req.app.get('db')
        let{email, password, playerID, phoneNumber} = req.body;
        let [foundUser] = await db.player_check([email])
        if(foundUser) return res.status(200).send('Email currently in use')
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        let user = db.create_player([playerID,email, hash, phoneNumber])
        res.status(200).send(user)
    }
}