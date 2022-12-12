import axios from 'axios';
import AsyncStoraged from '../client/AsyncStoraged';
class HDBankService {
    // Send request to spring boot (hdBankUsername, hdBankPassword, )
    async login(_username, _password) {
        const HDBanlLoginURL = 'http://192.168.9.90:8080/api/v1/auth/google/';
        return await axios({
            method: 'post',
            url: HDBanlLoginURL,
            withCredentials: true,
            timeout: 3000,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + await AsyncStoraged.getToken(),
            },
            data: {
                username: _username,
                password: _password,
            }
        });
    }

    async register(HDBankUser) {
        return await axios({
            method: 'post',
            url: 'http://192.168.9.90:8080/api/v1/auth/google/',
            withCredentials: true,
            timeout: 1000,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': 'Bearer ' + await AsyncStoraged.getToken(),
            },
            data: {
                
            }
        });
    }
    forgotPassword() {}
    tranfer() {}
    getBalance() {}
    getHistoryTranfer() {}
    tranferTuition() {}
    getTuitions() {}

    verifyOTP() {
        
    }
    resendOTP(phone) {

    }
}

export default new HDBankService();