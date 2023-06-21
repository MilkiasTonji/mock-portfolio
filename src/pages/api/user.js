

export default function user(req, res) {
    const {id} = req.params
    var users = [{id: 1, name: "Milkias", age: 25, department: "Software Engineering"}];
    const user = users.find(user => user.id === id);
    if(user){
        res.status(200).json({ user })     
    }else{
        res.status(200).json({ message: "No user found" })
    }
   
  }