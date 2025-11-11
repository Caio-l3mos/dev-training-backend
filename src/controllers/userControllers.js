let users =[
    {id: 1, fullfullName: 'Caio Lemos', email: 'caio@example.com'},

];

export const getUsers = (req, res) =>{
    res.json(users)
};

export const createUser = (req, res) =>{

    const { fullName, email} = req.body;
    const newUser = { id: Date.now(), fullName,email};
    users.push(newUser);
    res.status(201).json(newUser)
};

export const updateUser = (req, res) => {
    const {id} = req.body;
    const user = users.find(u => u.id == id);
    if (!user) return res.status(404).json({messege: `usuário não encontrado`});
    user.fullfullName = fullfullName || user.fullfullName;
    user.email = email || user.email;
    res.json(user)
};

export const deleteUser = (req, res)=>{
    const {id} = req.params;
    users = users.filter(u => u.id != id);
    res.status(204).send();
}