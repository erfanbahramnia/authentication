
const validation = (data, type) => {
    
    const validEmailAdd = /\S+@\S+\.\S+/;
    const letterNumber = /^[0-9a-zA-Z]+$/;
    const error = {};

    if (!data.email) {
        error.email = "email is required";
    } else if (!validEmailAdd.test(data.email)) {
        error.email = "email is invalid!";
    } else {
        delete error.email;
    };

    if (!(data.pass)) {
        error.pass = "password is required";
    } else if (data.pass.length <= 6) {
        error.pass = "password must be longer than 6 characters";
    } else if (!letterNumber.test(data.pass)) {
        error.pass = "password musct contain with characters and numbers"
    } else {
        delete error.pass
    };

    if (type === "signup") {
        
        if (!data.name) {
            error.name = "name is required";
        } else if (data.name.length < 5) {
            error.name = "name must be longer than 4 characters";
        } else {
            delete error.name;
        };

        if (!data.confirmPass) {
            error.confirmPass = "confirm the password";
        } else if (data.confirmPass !== data.pass) {
            error.confirmPass = "passwords don't match each others";
        } else {
            delete error.confirmPass
        };

        if (!data.privacy) {
            error.privacy = "please accept the privacy policy";
        } else {
            delete error.privacy;
        };

    };

    return error;

}

export default validation;