///loginf

import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  ActivityIndicator,
  Keyboard,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {global} from '../../Styles/global';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {loginAction} from '../../actions/loginActions';
///import Loading from 'react-native-whc-loading'

const SignupSchema = yup.object({
  driver_id: yup.string().required('Required'),
  password: yup.string().required('Required').min(3, 'It must be 8 Characters'),
});
export default function Login({navigation}) {
  const errorMessgae = useSelector((state) => state.loginDetails);
  const {errorb} = errorMessgae;
  const [loaded, isLoaded] = useState(true);
  const [sendData, setSendData] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      isLoaded(false);
    }, 1000);

    return () => {
      clearInterval(() => {
        isLoaded(true);
        setSendData(false)
      });
    };
  }, [   ]);


  return (
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
      {loaded ? (
        <ActivityIndicator color="#EC3F70" size={50} />
      ) : (
        <View style={global.loginContainer}>
          <ScrollView>
            <Animatable.View animation="fadeInDown" iterationCount={1}>
              <TouchableWithoutFeedback
                onPress={() => {
                  Keyboard.dismiss();
                }}>
                <View>
                  <View style={global.logoSec}>
                    <Animatable.View animation="zoomIn" iterationCount={2}>
                      <TouchableOpacity>
                        <Image
                          resizeMode="cover"
                          source={require('../../Assets/Images/Logo.png')}
                        />
                      </TouchableOpacity>
                    </Animatable.View>
                  </View>

                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 42,
                      fontFamily: 'Poppins-Bold',
                    }}>
                    Hello Rider!
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 16,
                      fontFamily: 'Poppins-Regular',
                      color: '#000',
                    }}>
                    I am your delivery companion
                  </Text>

                  <View style={global.fieldBox}>
                    <Formik
                      initialValues={{
                        driver_id: '',
                        password: '',
                      }}
                      validationSchema={SignupSchema}
                      onSubmit={(values) => {
                        setSendData(true);
                        setTimeout(() => {
                          setSendData(false);
                        }, 3000);

                        dispatch(loginAction(values));
                          

                      }}>
                      {(props) => (
                        <View>
                          <View
                            style={{
                              flex: 1,
                              justifyContent: 'center',
                              alignItems: 'center',
                            }}>
                            <Text>
                              {errorb === 'Invalid driver_id or password.' ? (
                                <View
                                  style={{
                                    padding: 10,
                                    backgroundColor: 'red',
                                    borderRadius: 7,
                                  }}>
                                  <Text
                                    style={{
                                      color: '#fff',
                                      fontFamily: 'Poppins-SemiBold',
                                    }}>
                                    {errorb}
                                  </Text>
                                </View>
                              ) : (
                                ''
                              )}
                            </Text>
                          </View>

                          <View style={global.Loginsec}>
                            <View style={global.fieldsec}>
                              <View style={global.fieldlayers}>
                                <Text style={global.iconwrap}>
                                  <MaterialIcons
                                    name="person"
                                    color="#C7C7C7"
                                    size={25}
                                  />
                                </Text>

                                <TextInput
                                  placeholder="Enter your Driver Id"
                                  onChangeText={props.handleChange('driver_id')}
                                  placeholderTextColor="#C7C7C7"
                                  style={global.fieldstyle}
                                  value={props.values.driver_id}
                                />
                              </View>

                              <Text
                                style={{
                                  color: 'red',
                                  position: 'relative',
                                  top: -5,
                                }}>
                                {props.touched.driver_id &&
                                  props.errors.driver_id}
                              </Text>
                            </View>

                            <View style={global.fieldsec}>
                              <View style={global.fieldlayers}>
                                <Text style={global.iconwrap}>
                                  <FontAwesome
                                    name="lock"
                                    color="#C7C7C7"
                                    size={25}
                                  />
                                </Text>

                                <TextInput
                                  onChangeText={props.handleChange('password')}
                                  placeholder="Enter your Password"
                                  placeholderTextColor="#C7C7C7"
                                  style={global.fieldstyle}
                                  value={props.values.password}
                                />
                              </View>

                              <Text
                                style={{
                                  color: 'red',
                                  position: 'relative',
                                  top: -2,
                                }}>
                                {props.touched.password &&
                                  props.errors.password}
                              </Text>
                            </View>

                            <View>
                              <TouchableOpacity
                                onPress={() =>
                                  navigation.navigate('ChangePassword')
                                }>
                                <Text
                                  style={{
                                    textAlign: 'right',
                                    fontSize: 11,
                                    color: '#C7C7C7',
                                  }}>
                                  <Text>Change your Password?</Text>
                                </Text>
                              </TouchableOpacity>
                            </View>
                          </View>

                          <View
                            style={{
                              flexDirection: 'row',
                              justifyContent: 'space-between',
                              paddingRight: 55,
                              width: '100%',
                            }}>
                            <View
                              style={{
                                flex: 3,
                                position: 'relative',
                                top: -20,
                                left: -40,
                                justifyContent: 'flex-start',
                              }}>
                              <Image
                                source={require('../../Assets/Images/Heart.png')}
                              />
                            </View>

                            <View style={{flex: 1}}>
                              <TouchableOpacity onPress={props.handleSubmit}>
                                <View>
                                  <LinearGradient
                                    colors={['#EC3F70', '#EF8536']}
                                    style={global.linearGradient}>
                                    <Text
                                      style={{
                                        textAlign: 'center',
                                        color: '#fff',
                                        fontFamily: 'Poppins-Medium',
                                      }}>
                                      {sendData ? 'Loading....' : 'Log In'}
                                    </Text>
                                  </LinearGradient>
                                </View>
                              </TouchableOpacity>
                            </View>
                          </View>
                        </View>
                      )}
                    </Formik>
                  </View>
                
                </View>
              </TouchableWithoutFeedback>
            </Animatable.View>
          </ScrollView>
        </View>
      )}
    </View>
  );
}
