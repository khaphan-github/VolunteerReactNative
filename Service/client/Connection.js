
import NetInfo  from '@react-native-community/netinfo';

class Connection {
    isNetworkAvailable() {
        NetInfo.fetch().then(state => {
            console.log("CLIENT Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            return state.isConnected;
        }).catch(error => {
            console.log(error);
        })
    }
}

export default new Connection();