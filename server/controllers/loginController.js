const { findOne } = require('../models/user');
const UserModel = require('../models/user')

const login = async (req, res) => {
    const {password, email} = req.body;

    try {
      const user = findOne({email});
    
    } catch (error) {
      
    }
    res.send('fett äkta login')
}


  