import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';

import AppStyles from "../Constants/AppStyles";
import ActionButtonItem from './ActionButtonItem';
import PaymentButton from './PaymentButton';

function OrderListItem({title, tbn , hc, cn}) {
    return (

        <View style={AppStyles.list_item_container}>
            <View style={{flexDirection:"row", flex: 1,}}>
                <Text style={AppStyles.list_item_title} >Table {tbn}</Text> 
               <View>
                <ActionButtonItem titleText={"Clean table"} />
                </View> 
            </View>
            <View style={{flexDirection:"row"}}>
                <Text style={AppStyles.list_item_text}>HEAD COUNT :  {hc}</Text>
            </View>

            <View style={{flexDirection:"column"}}>
                <Text style={AppStyles.list_item_text} >CUSTOMER NAME</Text>
                <Text style={AppStyles.list_item_desctext}>{cn}</Text>
            </View>
           
            <View style={{flexDirection:"column"}}>
                <Text style={AppStyles.list_item_text}>PAYMENT TYPE</Text>
                <Text style={AppStyles.list_item_desctext}>{cn}</Text>
            </View>

            <View style={{flexDirection: "row-reverse"}}>
                <PaymentButton titleText={"Not Paid"} />
            </View>
        </View>

    );
    
}
export default OrderListItem;