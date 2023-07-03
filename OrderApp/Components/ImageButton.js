import React from 'react';
import {View, Image, TouchableOpacity} from "react-native"
import AppStyles from '../Constants/AppStyles';

function TableButton({onPress}) {

    return (
        <TouchableOpacity onPress={onPress}> 
        <View style={AppStyles.img_container}>
            <Image source={require("../assets/tableicon.png")} style={[AppStyles.img]}  />
        </View>
        </TouchableOpacity>
    )
    
}
export default TableButton;