import axios from 'axios';
import AsyncStoraged from '../client/AsyncStoraged';
class UserService {
    // send request to server when user authenticated google
    sendGoogleUserData(googleUser) {
        return axios({
            method: 'post',
            url: 'http://192.168.9.90:8080/api/v1/auth/google/',
            withCredentials: true,
            timeout: 1000,
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

    async uploadProfileImage(urlImage, _type) {
        const userStored = await AsyncStoraged.getData();
        if (!userStored) {
            throw new Error('User not found!');
        }

        const username = userStored.responseUser.email ? userStored.responseUser.email : userStored.responseUser.phonenumber;
        console.info('USERNAME:' + username);

        const userToken = userStored.token;
        console.info('USER TOKEN:' + userToken);
        // TODO: Check valid token - then refresh token or login again;

        const baseAPIImageUrl = 'https://deloy-springboot-mongodb.herokuapp.com/api/upload';
        let _url = baseAPIImageUrl;
        if (_type === 'avatar') { _url += '/avatar'; }
        else if (_type === 'cover') { _url += '/cover'; }
        else { throw new Error('Type Image Illegal!'); }

        let fileName = urlImage.split('/').pop();
        let match = /\.(\w+)$/.exec(fileName);
        let typeImage = match ? `image/${match[1]}` : `image`;

        let formData = new FormData();

        formData.append('file', {
            uri: urlImage,
            name: fileName,
            type: typeImage
        });
        formData.append('username', username);

        return await axios({
            method: 'post',
            url: _url,
            timeout: 3000,
            withCredentials: true,
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + userToken,
            },
            data: formData,
        });
    }

    async updateUser(user) {
        const api = 'https://deloy-springboot-mongodb.herokuapp.com/api/v1/users/update';
        const userStored = await AsyncStoraged.getData();
        if (!userStored) {
            throw new Error('User not found!');
        }

        const username = userStored.responseUser.email ? userStored.responseUser.email : userStored.responseUser.phonenumber;
        console.info('USERNAME:' + username);

        const userToken = userStored.token;
        console.info('USER TOKEN:' + userToken);
        return await axios({
            method: 'post',
            url: api,
            timeout: 1000,
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + userToken,
            },
            data: user,
        });
    }

}

export default new UserService();