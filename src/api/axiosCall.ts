import axios from 'axios'

export const apiCall = async() =>{
    
    try {      
        const res = await axios.get("https://api-102.vercel.app/comments")
        console.log(res.data);
        
    } catch (error) {
        console.log(error);      
    }
}


