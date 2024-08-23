const user = require('../data bases/user')
const validator= require ('validator')

exports.getAllUsers = async (req,res)=>{
try{
//---------------------what im trying to achieive ----------------------
var users = await user.find() 
res.status(200).send(users)
}
catch(err){
res.status(404).send("404 not found")
}
}
//-----------------------------
exports.getUserById = async (req, res) => {
    try {
        const user = await user.findById(req.params.id);
        if (!user) return res.status(404).send('User not found');
        res.send(user);
    } catch (err) {
        res.status((500)).send('Invalid ID');
    }
};
//----------------------------------
exports.getUsersWithAgeGreaterThan20 = async (req, res) => {
    try {
        const users = await user.find({ age: { $gt: 20 } });
        res.send(users);
    } catch (err) {
        res.status(500).send('server error');
    }
};

//-------------------------------
exports.login = async (req, res) => {
    const { email, password } = req.body;
    
    try {
        const user = await user.findOne({ email });
        if (!user) {
            return res.status(404).send('User not found');
        }

        if (user.password === password) {
            return res.sendStatus(200); 
        } else {
            return res.status(401).send('Invalid password');
        }
    } catch (err) {
        res.status(500).send('Server error');
    }
};

//-----------------------------

exports.create = async (req, res) => {
    const { email, password } = req.body;

    if (!validator.isEmail(email)) {
        return res.status(400).send('Invalid email format');
    }

var userpassword = password
    if (password.length <= 5) {
        return res.status(400).send('Password should have more than 5 characters');
    }else if(password.length <6){
        res.status(404).send('password is less than 6 characteres')
    }else{
        const doc =await user.create({email:email,password:password,})
        res.status(200).send(doc)
    }




}




//---------------------------------------
exports.createUser = async (req, res) => {
    const { email, password,age } = req.body;
   var data = user.create({
    email : email,
    password:password
   })
    res.send(data);
};
//------------------------------------------------

exports.updateUser = async (req, res) => {
    const { email, password,age} = req.body;
    const data = await user.findByIdAndUpdate(req.params.id, { email, password ,age}, { new: true });
    res.send(data);
};
//-------------------------------------------
exports.deleteUser = async (req, res) => {
    const data = await user.findByIdAndDelete(req.params.id);
    res.send(data);
}
//-------------------------------------------
