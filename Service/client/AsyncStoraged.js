import AsyncStorage from '@react-native-async-storage/async-storage';


class AsyncStoraged {
    storeData = async (value) => {
        try {
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('Authorized', jsonValue);
        } catch (error) {
            console.log('Store' + error);
        }
    }

    getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('Authorized')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (error) {
            console.log('get store', error);
        }
    }

    removeData = async () => {
        try {
            await AsyncStorage.removeItem('Authorized');
        } catch (e) {
            // remove error
        }
        console.log('Done.')
    }

    getToken = async () => {
        let jwt = '';
        await AsyncStorage.getItem('Authorized')
            .then((data) => { jwt = data; })
            .catch(error => { console.error(error); });
        return jwt;
    };

}
export default new AsyncStoraged();