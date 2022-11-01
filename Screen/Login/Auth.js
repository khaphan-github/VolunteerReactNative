import UserService from "../../Service/api/UserService";


class Auth {
    isValidPhone = (phone) => {
        let reg = /(84|0[3|5|7|8|9])+([0-9]{8})\b/;
        return reg.test(phone);
    }
    isValidEmail = (email) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
        return reg.test(email);
    };
    isValidPassword = (password) => {
        return /[a-z]/.test(password) && 
        /[0-9]/.test(password);
    }; 
    getAuth = (username, password) => {  
        return UserService.getAuth(username, password);
    };
    testToken = () => {
        return UserService.testToken();
    }
};

export default new Auth(); 