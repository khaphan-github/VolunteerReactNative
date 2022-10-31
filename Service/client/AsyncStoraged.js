import  AsyncStorage  from '@react-native-async-storage/async-storage';


class AsyncStoraged {  
    storeData = async (value) => {
        try {
            await AsyncStorage.setItem('Authorized', value);
        } catch (error) {
            console.log('Store'+ error);
        }
    }

    getData = async () => {
        try {
            return await AsyncStorage.getItem('Authorized');
        } catch (error) {
            console.log( 'get store', error);
        }
    }

    removeData = async () => {
        try {
          await AsyncStorage.removeItem('Authorized');
        } catch(e) {
          // remove error
        }
        console.log('Done.')
    }

    getToken = async () => {
        let jwt = '';
        await AsyncStorage.getItem('Authorized')
        .then((data) => {jwt = data;})
        .catch(error => {console.error(error);});
        return jwt;
    };

}
export default new AsyncStoraged();