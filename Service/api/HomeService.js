import axios from 'axios';
import AsyncStoraged from '../client/AsyncStoraged';
const SPRINGBASEURL = 'https://deloy-springboot-mongodb.herokuapp.com/api/firebase/post';
const LOCALHOSTBASEURL = 'http://192.168.1.32:8080/api/firebase/post';

class HomeService {

    async getPostBy() {
        return await axios({
            method: 'get',
            url: SPRINGBASEURL + '/getAll',
            timeout: 5000,
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
            },
        });
    }
    async getPostByLimit(limitPost, beginState) {

        return await axios({
            method: 'get',
            url: SPRINGBASEURL + '/getpost' + '?limit=' + limitPost + '&begin=' + beginState,
            timeout: 10000,
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
            },
        });
    }
    async joinActivities(activitiesID) {
        const userStored = await AsyncStoraged.getData();
        if (!userStored) {
            throw new Error('User not found!');
        }
        const userToken = userStored.token;
        return await axios({
            method: 'post',
            url: SPRINGBASEURL + '/join' + '?activitiesID=' + activitiesID,
            timeout: 5000,
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + userToken,
            },
        });
    }
    async getActivities() {
        const userStored = await AsyncStoraged.getData();
        if (!userStored) {
            throw new Error('User not found!');
        }
        const userToken = userStored.token;
        return await axios({
            method: 'post',
            url: SPRINGBASEURL + '/getAct' + '?userID=' + userStored.responseUser._id,
            timeout: 5000,
            withCredentials: true,
            headers: {
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + userToken,
            },
        });
    }
}

export default new HomeService();