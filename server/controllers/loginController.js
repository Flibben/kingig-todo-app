const bcrypt = require('bcrypt')
const UserModel = require('../models/user')

const login = async (req, res) => {
    const {password, email} = req.body;

    try {
      const user = await UserModel.findOne({email});
      if(!user){
        res.json({message: 'That email doesn\'t exist'})
        return;
      }
      bcrypt.compare(password, user.password).then((result) => {
        if(result){
          return res.send('LOGGED IN')
        }
        return res.send('Wrong password, try something else!')
    });
    }
    catch (error) {
      res.status(500).json({message: error.message})
    }

}

module.exports = login;