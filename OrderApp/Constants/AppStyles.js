import { StyleSheet } from "react-native";
import  Constants from "expo-constants";

import Color from './AppColours';

export default StyleSheet.create({

    backgroud:{
        backgroundColor: Color.colorFaceBookBlue,
        flexDirection: "column",

    },
    img_container: {
        width: 50,
        height: 42,
        borderRadius: 5,
        borderColor: Color.colorWhite,
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderWidth: 2,
        alignContent: 'center',
        marginTop: 10
    },
    img:{
        width: 28,
        height: 28,
    },
    button_container: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
    },
    button_action:{
        backgroundColor: Color.colorPrimary,
        borderRadius: 5,
    },
    button_action_text:{
        color: Color.colorWhite,
        fontSize: 15,
        fontWeight:"700",
        padding: 10,
        textAlign: "center",
    },
    bottom_bar_container:{
        flex: 1,
    },
    indicator_container: {
        marginRight: 10,
        marginLeft: 10,
        marginTop: 10,
        flexDirection: "row"
    },
    list_item_container: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: Color.colorFaceBookBlue,
        margin: 20,
        borderRadius: 15,
        borderColor : Color.colorWhite,
        borderWidth: 2,
        padding: 10

    },
    list_item_title:{
        color: Color.colorWhite,
        fontSize: 20,
        fontWeight:"700",
        padding: 15,
        textAlign: "center",
    },
    list_item_text:{
        color: Color.colorWhite,
        fontSize: 14,
        fontWeight:"500",
        padding: 5,
        textAlign: "left",
    },
    list_item_desctext:{
        color: Color.colorWhite,
        fontSize: 24,
        fontWeight:"800",
        padding: 5,
        textAlign: "left",
    },
    navigation_container:{
        flexDirection: "row",
        flex: 1,
        marginLeft: 14,
        marginRight : 14,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        marginBottom: 10,
    },
    nav_container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: 'center',

    },bottom_bar_container:{
        flex: 1,
    },
    list_container:{
        marginTop: 37,
        marginLeft: 16,
        marginRight: 16,
    },


});