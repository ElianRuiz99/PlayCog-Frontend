import axios from "axios";

// axios({
//     url: `http://localhost:8080/user/update/${id}`,
//     method: 'PUT',
//     data: newData,
// })

async function UpdateUser(newData, id){

    try {
        const response = await axios({
            url: `https://playcog.uc.r.appspot.com/user/update/${id}`,
            method: 'POST',
            data: newData,
        })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
  
}

export {UpdateUser};