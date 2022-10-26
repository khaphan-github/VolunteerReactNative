import axios from 'axios';


const AUTH_BASE_REST_API_URL = 'https://my-json-server.typicode.com/typicode/demo/posts';


class UserService {
    getAuth(_username, _password) {
        var request = axios({
            method: 'get',
            url: AUTH_BASE_REST_API_URL,
            params: {
                username: _username,
                password: _password
            }
        });
        return request;
    }
}

export default new UserService();