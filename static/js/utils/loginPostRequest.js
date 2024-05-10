export default async function loginPostRequest (email, password) {
    if(email != "" && password != "") {
        const options = {
            method: "POST",
            headers: {
                "Content-Type" : "Application/json"
            },
            body: JSON.stringify({
                "email": email,
                "password": password
            }),
            mode: "cors"
        };
    
        const response =
        fetch("/login", options)
        .then(response => {
            if(response.redirected) window.location.href = response.url
            else response.json()
        })
        .then(data => console.log(data))
        .catch(error => console.log(error))
    
        return await response;
    }
    else return "Please provide both email and password"
};