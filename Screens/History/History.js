import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Image,
} from 'react-native';
import {global} from '../../Styles/global';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

const base = 'http://qrweb.co/ecommerce/public/api/driver_orderhistory';

export default function History({navigation}) {
  const refNumb = useSelector((state) => state.loginDetails);
  const {loginData} = refNumb;
  const getDriverId = loginData.map((er) => er.refno);
  let getString = getDriverId.toString();
  const [load, setLoad] = useState(true);
  const [historyData, sethistoryData] = useState([]);

  useEffect(() => {
    var FormData = require('form-data');
    var form = new FormData();
    form.append('driver_id', getString);
    fetch(base, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'multipart/form-data',
      }),
      body: form,
    })
      .then((response) => response.json())
      .then((data) => {
        let responseData = data;
        let arrayData = responseData.data;
        sethistoryData(arrayData);
        setLoad(false);
      
      })
      .catch((error) => {
        console.error('Errors' + error);
      });
  }, [historyData]);





  return (
    <View style={global.container}>
      <View style={global.tabnavigators}>
        <View><Text >{historyData.length ===0? <View><Text style={global.notFound}>No Records Found</Text></View>:<View style={global.concatText}>
          <Text
            style={{
              fontSize: 27,
              fontFamily: 'Poppins-Bold',
              color: '#EE7444',
            }}>
            {' '}
            History
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
        </View>  }</Text></View>
       

        

        <View>
          <View style={global.loadIndicator}>
            <Text>
              {load ? <ActivityIndicator size="large" color="#EE7444" /> : ''}
            </Text>
          </View>
          <ScrollView contentContainerStyle={{padding: 5}}>
            <Animatable.View animation="slideInRight" iterationCount={1}>
              {historyData.map((er) => {
                return (
                  <View style={global.Historybox}>
                    <View style={global.summaryboxflex1}>
                      <Text style={global.historyId}>ID:{er.orders_id} </Text>

                      <View style={global.summarydt}>
                        <MaterialIcons
                          name="person"
                          color="#828282"
                          size={16}
                          style={{marginRight: 3}}
                        />
                        <Text style={global.summarydtText}>
                          {er.customers_name}
                        </Text>
                      </View>

                      <View style={global.summarydt}>
                        <Foundation
                          name="mail"
                          color="#828282"
                          size={16}
                          style={{marginRight: 3}}
                        />
                        <Text style={global.summarydtText}>
                          {er.customers_street_address}
                        </Text>
                      </View>
                    </View>

                    <View style={global.summaryboxflex2}>
                      <View style={global.summarydt}>
                        <MaterialCommunityIcons
                          name="calendar-range"
                          color="#828282"
                          size={16}
                          style={{marginRight: 3}}
                        />
                        <Text style={global.summarydtText}>
                          {er.data.map((data) => data.date)}
                        </Text>
                      </View>

                      <View style={global.summarydt}>
                        <MaterialCommunityIcons
                          name="clock-time-five-outline"
                          color="#828282"
                          size={16}
                          style={{marginRight: 3}}
                        />
                        <Text style={global.summarydtText}>
                          {er.data.map((data) => data.time)}
                        </Text>
                      </View>
                    </View>

                    <View style={global.summaryboxflex3}>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('HistorySummary', {
                            orders_id: er.orders_id,
                            customers_name: er.customers_name,
                            customers_street_address:
                              er.customers_street_address,
                              customer_comments: er.customer_comments,
                            products_name: er.data,
                          })
                        }>
                        <Text style={global.Historybtn}>View Summary</Text>
                      </TouchableOpacity>

                      <View style={{position: 'absolute', bottom: 0, right: 7}}>
                        {er.orders_status === 'Completed' ? (
                          <View
                            style={{
                              flexDirection: 'row',
                              alignItems: 'center',
                            }}>
                            <Image style={global.iconWidth}
                              source={require('../../Assets/Images/check.png')}
                            />
                            <Text
                              style={{
                                color: '#828282',marginLeft:4,
                                fontFamily: 'Poppins-Medium',
                              }}>
                              Delivered
                            </Text>
                          </View>
                        ) : (
                          ' Cancelled'
                        )}
                      </View>
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
