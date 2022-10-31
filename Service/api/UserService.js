import axios from 'axios';

const BASE_REST_API_URL = 'https://deloy-springboot-mongodb.herokuapp.com/api/v1';
class UserService {

    getAuth(_username, _password) {
        var url = '/users/auth';
        return axios({
            method: 'post',
            url: BASE_REST_API_URL + url,
            data: {
                username: _username,
                password: _password
            }
        });
    }

    register(_firstname, _lastname, _password, _email, _phonenumber, _type) {
        var url = '/users/register';
        return axios({
            method: 'post',
            url: BASE_REST_API_URL + url,
            data: {
                firstname: _firstname,
                lastname: _lastname,
                password: _password,
                email: _email,
                phonenumber: _phonenumber,
                type: _type
            }
        });
    }
}

export default new UserService();