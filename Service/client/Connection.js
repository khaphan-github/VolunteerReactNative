
import NetInfo from '@react-native-community/netinfo';

class Connection {
   async isNetworkAvailable() {
        await NetInfo.fetch().then(state => {
            console.log("CLIENT Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            return state.isConnected;
        }).catch(error => {
            console.log('Connection'+error);
        })
    }
}

export default new Connection();