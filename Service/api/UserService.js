
import axios from 'axios';
import { BASE_REST_API_URL } from './Constants';

class UserService {
    getAuth(_username, _password) {
        var request = axios({
            method: 'post',
            url: BASE_REST_API_URL + '/users/auth',
            data: {
                username: _username,
                password: _password
            }
        });
        return request;
    }
}

export default new UserService();