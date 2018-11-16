const bcrypt = require('bcryptjs')
module.exports = {
   async newPlayer(req,res){
        const db = req.app.get('db')
        let{email, password, playerID, phoneNumber} = req.body;
        let [foundUser] = await db.player_check([email])
        if(foundUser) return res.status(200).send('Email currently in use')
        let salt = bcrypt.genSaltSync(10);
        let hash = bcrypt.hashSync(password, salt);
        let player = db.create_player([playerID,email, hash, phoneNumber])
        req.session.user = player
        res.status(200).send({status:'loggedIn', user:req.session.user})
    },
    async loginPlayer(req,res){
        const db = req.app.get('db')
        let {email, password} = req.body
        let [foundUser] = await db.player_check([email])
        if(!foundUser)return res.status(200).send('invalid email or password')
        let result = bcrypt.compareSync(password, foundUser.hashedpass)
        if(result){
            req.session.user = foundUser;
            res.status(200).send({status:'loggedIn', user:req.session.user.player_name})
        }else{
            console.log('invalid user or pass')
            res.status(401).send('invalid username or password');
        }
    },
    async logout(req,res){
        req.session.destroy();
        res.status(200).send('user logged out');
    }
    
}