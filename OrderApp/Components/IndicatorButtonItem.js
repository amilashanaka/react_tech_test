import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native'

import AppStyles from "../Constants/AppStyles";

function IndicatorButtonItem({titleText, itemCount, onPress}) {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[AppStyles.button_action, AppStyles.indicator_container]}>
                <Text style={AppStyles.button_action_text}>{titleText}</Text>
                <Text style={AppStyles.button_action_text}>[ {itemCount} ]</Text>

                
            </View>
        </TouchableOpacity>
    );
}
export default IndicatorButtonItem;