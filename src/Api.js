const url = 'https://threepointsix.azurewebsites.net/api/post';

export function PostNew(message){
    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: {
            Message: message,
            Authors: ['thatoneguy']
        }
    })
}

export function GetMessages(){
    return fetch(url, {
        method: 'GET',
    })
}