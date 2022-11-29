import axios from 'axios';
import AsyncStoraged from '../client/AsyncStoraged';
class HDBankService {
    // Send request to spring boot (hdBankUsername, hdBankPassword, )
    login(_username, _password) {
        return axios({
            method: 'post',
            url: 'http://192.168.9.90:8080/api/v1/auth/google/',
            withCredentials: true,
            timeout: 1500,
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            data: {
                username: _username,
                password: _password,
                token: '',
            }
        });
    }

    register(HDBankUser) {
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
                
            }
        });
    }
    forgotPassword() {}
    tranfer() {}
    getBalance() {}
    getHistoryTranfer() {}
    tranferTuition() {}
    getTuitions() {}
}

export default new HDBankService();