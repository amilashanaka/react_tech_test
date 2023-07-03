import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import AppStyles from '../Constants/AppStyles';

function BottomNavigation(){
    return(
        <View style={[AppStyles.navigation_container]}>
             <TouchableOpacity style={[AppStyles.nav_container]}>
                 <View >
                    <Text>Dashboard</Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity style={[AppStyles.nav_container]}>
                 <View >
                    <Text>Orders</Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity style={[AppStyles.nav_container]}>
                 <View >
                    <Text>History</Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity style={[AppStyles.nav_container]}>
                 <View >
                    <Text>Lock</Text>
                </View>
             </TouchableOpacity>
             <TouchableOpacity style={[AppStyles.nav_container]}>
                 <View >
                    <Text>Settings</Text>
                </View>
             </TouchableOpacity>
        </View>
    );
}

export default BottomNavigation;