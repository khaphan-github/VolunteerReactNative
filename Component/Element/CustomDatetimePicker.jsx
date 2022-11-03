import { SafeAreaView, View, Pressable, Image, Text} from 'react-native';

import DatePicker from 'react-native-modern-datepicker';

const CustomDatetimePicker = () => {
    return (
        <DatePicker selected={getFormatedDate(new Date(), 'jYYYY/jMM/jDD')} mode="calendar"/> 
    )
}

export default CustomDatetimePicker;