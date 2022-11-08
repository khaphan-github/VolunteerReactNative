import axios from 'axios';
import AsyncStoraged from '../client/AsyncStoraged';
class UserService {
    // send request to server when user authenticated google
    sendGoogleUserData(googleUser) {
        return axios({
            method: 'post',
            url: 'http://192.168.1.4:8080/api/v1/auth/google/',
            withCredentials: true,
            timeout: 10000,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            data: {
                email: googleUser.email,
                given_name: googleUser.given_name,
                id: googleUser.id,
                locale: googleUser.locale,
                name: googleUser.name,
                picture: googleUser.picture,
                verified_email: googleUser.verified_email
            }

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