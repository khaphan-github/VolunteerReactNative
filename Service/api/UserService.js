import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import AsyncStoraged from '../client/AsyncStoraged';

const BASE_REST_API_URL = 'https://deloy-springboot-mongodb.herokuapp.com/api/v1';

class UserService {
    googleAuth() {
        return axios({
            method: 'get',
            url: 'https://accounts.google.com/o/oauth2/v2/auth',
            withCredentials: true,
            timeout: 6000,
        });
    }
    
    getAuth(_username, _password) {
        return axios({
            method: 'post',
            url: 'https://deloy-springboot-mongodb.herokuapp.com/authenticate',
            withCredentials: true,
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            data: {
                username: _username,
                password: _password
            },
        });
    }


    register(_firstname, _lastname, _password, _email, _phonenumber, _type) {
        var url = '/users/register';
        return axios({
            method: 'post',
            url: BASE_REST_API_URL + url,
            body: {
                firstname: _firstname,
                lastname: _lastname,
                password: _password,
                email: _email,
                phonenumber: _phonenumber,
                type: _type
            }
        });
    }

    async testToken() {
        return axios({
            method: 'get',
            url: 'https://deloy-springboot-mongodb.herokuapp.com/api/hello',
            withCredentials: true,
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + await AsyncStoraged.getToken(),
            },
        });
    }
}

export default new UserService();