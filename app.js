import axios from "axios";

const getData = async function(userId){
    const {data: user} = await axios(`https://jsonplaceholder.typicode.com/users/${userId}`)
    const {data: post} = await axios(`https://jsonplaceholder.typicode.com/posts?id=${userId}`)


    const total = {user, "posts": post}
console.log(total)
}

export default getData ;