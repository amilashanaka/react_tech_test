import React from 'react';
import { View, Text, TouchableOpacity} from 'react-native'

import AppStyles from "../Constants/AppStyles";

function PaymentButton({titleText, onPress}) {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[AppStyles.payment_button_action, AppStyles.button_container]}>
                <Text style={AppStyles.button_action_text}>{titleText}</Text>
            </View>
        </TouchableOpacity>
    );
}
export default PaymentButton;