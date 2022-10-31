import React from 'react';
import { Text, View} from 'react-native';

const NoConnection = () => {
    return(
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
              <Text>NOTINTERNET</Text>
        </View>
      
    )
}   

export default NoConnection;