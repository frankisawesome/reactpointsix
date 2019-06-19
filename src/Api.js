require('dotenv').config()

const url = process.env.API_URL;

export function PostNew(user, message){
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            userId: user,
            message: message
        }
    })
    .then((res) => res.json)
}