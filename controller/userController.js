const {users}=require('../store')

const username='sreeja'

const password=1234

const userLogin=(req,res,next)=>{
    try {
    console.log(req.body)
    if(username===req.body.username){
        if(password===req.body.password){
            res.status(200).json({message:'login sucessful'})
        }
        else{
            res.status(403).json({message:'wrong credentials'})
        }
    }
} catch (error) {
     console.log(error)   
}
};

const allUsers=((req,res,next)=>{
    res.status(200).json({data:users})
    //res.json(users)
})
// res.status(201).json(newProduct)
const singleUser=((req,res)=>{ 
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        res.json(user);  // If user is found, send user details
    } else {
        res.status(404).send('User not found');
    }
  })
const addUser=((req,res)=>{  const newUser = {
    id: users.length + 1,
    ...req.body
  };
  users.push(newUser);
  res.status(201).json(newUser);})

  const updateUser=((req,res)=>{ 
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (!user) return res.status(404).send('User not found');

    Object.assign(user, req.body);
    res.json(user);
  })
const userSignup=(req,res,next)=>{
    res.status(200).json('login router')
}
module.exports={userLogin,userSignup,allUsers,addUser,singleUser,updateUser}