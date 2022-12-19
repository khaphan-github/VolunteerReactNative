import axios from 'axios';
import AsyncStoraged from '../client/AsyncStoraged';
const SPRINGBASEURL = 'https://deloy-springboot-mongodb.herokuapp.com/api/firebase/post';
class HomeService {

    async getPostBy() {
        const userStored = await AsyncStoraged.getData();
        if (!userStored) {
            throw new Error('User not found!');
        }
        const userToken = userStored.token;
        console.info('USER TOKEN:' + userToken);
        
        return await axios({
            method: 'get',
            url: SPRINGBASEURL + '/getAll',
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