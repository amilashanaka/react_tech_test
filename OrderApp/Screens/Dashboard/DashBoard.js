import React, { useEffect, useState } from 'react';
import { Text, View, TouchableOpacity, Dimensions, FlatList, ScrollView } from 'react-native';
import ActionButtonItem from '../../Components/ActionButtonItem';
import IndicatorButtonItem from '../../Components/IndicatorButtonItem';
import OrderListItem from '../../Components/ListItem';
import AppStyles from '../../Constants/AppStyles';
import BottomNavigation from '../../Components/BottomNavigation';
import TableButton from '../../Components/ImageButton';
import NetworkManager from '../../APIs/NetworkManager';

function DashBoard({navigation}) {

    // api calls
    const [listing, setListing] = useState([]);

    useEffect(() => {
        loadProducts();
    }, []);

    const loadProducts = async () => {
        const responseData = await NetworkManager.getProdList();
        setListing(responseData);
    }

    const OrderData = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
        {
            id: 'bd7acbea-c1b1-f-aed5-3ad53abb28ba',
            title: 'First Item',
          },
          {
            id: 's-c605-48d3-a4f8-fbd91aa97f63',
            title: 'Second Item',
          },
          {
            id: '58694a0f-da-471f-bd96-145571e29d72',
            title: 'Third Item',
          },
      ];

      const AddTable = () => {}
      const ShowTableOrders = () => {}
      const ClickAndCollect = () => {}
      const ShowDeliveryOrders = () => {}
      const ShowReservations = () => {}

    return(
        <View style={AppStyles.backgroud}>
            <View style={{flexDirection: "row"}}>
                <ActionButtonItem titleText={"Add Table"} onPress={AddTable}/>
                <IndicatorButtonItem titleText={"Table Orders"} itemCount={"7"} onPress={ShowTableOrders}/>
                <IndicatorButtonItem titleText={"Click & Collect"} itemCount={"0"} onPress={ClickAndCollect} />
                <IndicatorButtonItem titleText={"Delivery"} itemCount={"0"} onPress={ShowDeliveryOrders} />
                <IndicatorButtonItem titleText={"Reservation"} itemCount={"0"} onPress={ShowReservations}/>
                <TableButton />
            </View>

            <View style={[AppStyles.list_container]}>
                <FlatList 
                    data={OrderData}
                    numColumns={3}
                    renderItem={({item}) => <OrderListItem title={item.title} tbn={1} hc={2} cn={"User 01"}/>}
                    keyExtractor={item => item.id}/>
            </View>

            <View style={[AppStyles.bottom_bar_container]}>    
                <BottomNavigation />        
            </View>
        </View>
    );
}

export default DashBoard;