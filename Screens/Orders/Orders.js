import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,SafeAreaView, ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {global} from '../../Styles/global';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
//import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';


const baseUrl = 'http://qrweb.co/ecommerce/public/api/assignedorder';

export default function Orders({navigation}) {
  const refNumber = useSelector((state) => state.loginDetails);

  const {loginData} = refNumber;
  const getDriverId = loginData.map((er) => er.refno);
  
  let getString = getDriverId.toString();
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState([]);


  useEffect(() => {
    var FormData = require('form-data');
    var form = new FormData();
    form.append('driver_id', getString);
    fetch(baseUrl, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'multipart/form-data',
      }),
      body: form,
    })
      
    
      
      .then((response) => response.json())
      .then((data) => {
        let responseData = data;
        setOrders(responseData.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Errors' + error);
      });

return ()=>{
//

}
  }, [  orders  ]);

  return (
    
    <View style={global.container}>
      <View style={global.tabnavigators}>

        <View style={global.concatText}>
          <Text
            style={{
              fontSize: 27,
              fontFamily: 'Poppins-Bold',
              color: '#EE7444',
            }}>
            Order
          </Text>
          <Text
            style={{
              fontFamily: 'Poppins-Regular',
              color: '#EE7444',
              fontSize: 27,
              marginLeft: 10,
            }}>
            Details
          </Text>
        </View>

        <View>
          <View style={global.loadIndicator}>
            <Text>
              {loading ? (
                <ActivityIndicator size="large" color="#EE7444" />
              ) : (
                ''
              )}{' '}
            </Text>
          </View>
          <ScrollView  contentContainerStyle={{padding:5}}>
           <Animatable.View animation="slideInLeft" iterationCount={1}>
            {orders.map((item) => {
              return (
                <View style={global.summarybox} key={item.id}>
                  <View style={global.summaryboxflex1}>
                    <Text style={global.orderidsec}>
                      ID:{item.orders_id}{' '}
                    </Text>

                    <View style={global.summarydt}>
                      <MaterialIcons
                        name="person"
                        color="#000"
                        size={16}
                        style={{marginRight: 3}}
                      />
                      <Text style={global.summarywraptext}>
                        {item.customers_name}
                      </Text>
                    </View>

                    <View style={global.summarydt}>
                      <Foundation
                        name="mail"
                        color="#000"
                        size={16}
                        style={{marginRight: 3}}
                      />
                      <Text style={global.summarywraptext}>
                        {item.customers_street_address}
                      </Text>
                    </View>
                  </View>

                  <View style={global.summaryboxflex2}>
                    <View style={global.summarydt}>
                      <MaterialCommunityIcons
                        name="calendar-range"
                        color="#000"
                        size={16}
                        style={{marginRight: 2}}
                      />
                      <Text style={global.summarywraptext}> {item.data.map(er=>er.date)}   </Text>
                    </View>

                    <View style={global.summarydt}>
                      <MaterialCommunityIcons
                        name="clock-time-five-outline"
                        color="#000"
                        size={16}
                        style={{marginRight: 2}}
                      />
                      <Text style={global.summarywraptext}>{item.data.map(er=>er.time)} </Text>
                    </View>
                  </View>

                  <View style={global.summaryboxflex3}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('OrderSummary', {
                          orders_id: item.orders_id,
                          customers_name: item.customers_name,
                          customers_street_address:
                            item.customers_street_address,
                          orders_status: item.orders_status,
                          products_name: item.data,
                          order_status:item.order_status,
                          customer_comments:item.customer_comments
                        })
                      }>
                      <Text style={global.summarybtn}>View Summary</Text>
                    </TouchableOpacity>

                    {item.customer_comments === 'On the Way' ? (
                      <Text
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          right: 7,
                          color: '#828282',
                          fontFamily: 'Roboto-Medium',
                        }}>
                        <Image style={global.iconWidth}
                          source={require('../../Assets/Images/spoon.png')}
                        />{' '}
                        In Progress
                      </Text>
                    ) : (
                      <Text
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          right: 7,
                          color: '#67D628',
                          fontFamily: 'Roboto-Medium',
                        }}>
                        <Image  style={{width:13 ,height:13}}  
                          source={require('../../Assets/Images/check.png')}
                        />{' '}
                        completed
                      </Text>
                    )}
                  </View>
                </View>
              );
            })}
          </Animatable.View>
          
          </ScrollView>
        </View>
      </View>
          </View>
  );
}


