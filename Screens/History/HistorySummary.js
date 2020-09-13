import React,{useState ,useRef, useEffect }    from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground, Modal
} from 'react-native';

import {global} from '../../Styles/global';
import * as Animatable from 'react-native-animatable';
///import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
//import Toast from 'react-native-toast-message'




export default function HistorySummary({route, navigation}) {
  

  const {
    orders_id,
    customers_name,
    customers_street_address,
    orders_status,
    products_name,customer_comments
  } = route.params;










  return (
    <View style={global.container}>
      <ScrollView>
        <Animatable.View animation="fadeInDown" iterationCount={1}>
         

         
          <View>
            <ImageBackground
              source={require('../../Assets/Images/ellipse2.png')}
              style={global.ellipsebg1}>
              <Text style={global.titleblack}>
                <Text style={{fontFamily: 'Poppins-Bold', color: '#000'}}>
                  Pickup{' '}
                </Text>
                <Text>Details</Text>
              </Text>
            </ImageBackground>
          </View>

          <View
            style={{
              padding: 30,
              justifyContent: 'center',
              width: '100%',
              alignItems: 'center',
            }}>
            <View style={global.odbox1}>
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Poppins-Bold',
                  marginBottom: 5,
                }}>
                ID:{orders_id}
              </Text>

              <Text
                style={{
                  fontSize: 20,
                  fontFamily: 'Poppins-Medium',
                  textTransform: 'capitalize',
                  marginBottom: 10,
                }}>
                {products_name.map((pr) => {
                  return <Text key={pr.id}>{pr.products_name}</Text>;
                })}
              </Text>

              <Text
                style={{
                  fontSize: 16,
                  fontFamily: 'Poppins-Regular',textTransform:"capitalize",
                  marginTop: -5,
                }}>
                {customers_street_address}
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  bottom: -50,
                }}>
                <Image source={require('../../Assets/Images/msg-icon.png')} />
                <Image source={require('../../Assets/Images/phone-icon.png')} />
                <Image source={require('../../Assets/Images/map-icon.png')} />
              </View>
            </View>
          </View>

          <View style={global.deliverydtsec}>
            <Text style={global.globalTile}>
              <Text style={{fontFamily: 'Poppins-Bold' ,color:"#000"}}> Delivery </Text> <Text>Details</Text>
            </Text>

            <View style={global.detailBox}>
              <View style={global.detailFlex}>
                <Text style={global.dtTiltle}>Created at:</Text>
                <Text style={global.dtValue}>{products_name.map((pr) =>{
return (
  <Text> {pr.date} {pr.time}  </Text>
)

                })}</Text>
              </View>

              <View style={global.detailFlex}>
                <Text style={global.dtTiltle}>Status:  </Text>
                <Text style={global.dtpickup}>{customer_comments}</Text>
              </View>

              <View style={global.detailFlex}>
                <Text style={global.dtTiltle}>Client:</Text>
                <View style={{flexDirection: 'column', width: '100%'}}>
                  <Text style={global.dtValue}>{customers_name}</Text>
                  <Text style={global.dtValue}>{customers_street_address}</Text>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'absolute',
                  bottom: -50,
                  left: 0,
                  right: 0,
                }}>
                <Image source={require('../../Assets/Images/msg-icon.png')} />
                <Image source={require('../../Assets/Images/phone-icon.png')} />
                <Image source={require('../../Assets/Images/map-icon.png')} />
              </View>
            </View>

            
          </View>

          


    
</Animatable.View>


        
      </ScrollView>


    </View>
  );
}
