
function getAdmins(map){
    let admins = []
    for([key, valeu] of map){
        if(valeu === 'Admin'){
            admins.push(key)
        }
        

    }
return admins;
}

const usuarios = new map();

usuarios.set('Luiz', 'Admin');
usuarios.set('Matheus', 'Admin');
usuarios.set('Jorginho','User');
usuarios.set('Lucas','Admin');

console.log(getAdmins(usuarios));