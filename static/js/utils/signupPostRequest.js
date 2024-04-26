const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+}{"':;?/>.<,])(?=.*[^\s]).{8,}$/;

export default async function signupPostRequest (email, password, repeatPassword) {
    const emailValidation = emailRegex.test(email);
    const passwordValidation = passwordRegex.test(password);

    if(email != "" && password != "") {
        if(emailValidation && passwordValidation) {
            if(password === repeatPassword) {
                const url = "http://localhost:5000/signup";
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
                fetch(url, options)
                .then(response => response.json())
                .catch(error => console.log(error))
            
                return await response;
            }
            else return "Passwords do not match"
        }
        else return "Email or password is invalid"
    }
    else return "Please provide both email and password"
};