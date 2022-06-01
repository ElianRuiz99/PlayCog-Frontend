import axios from 'axios';

function DeleteUser(id){
    axios({
        url: `https://playcog.uc.r.appspot.com/user/delete/${id}`,
    })
        .catch(err =>{
            console.log(err)
        })
}

export {DeleteUser}