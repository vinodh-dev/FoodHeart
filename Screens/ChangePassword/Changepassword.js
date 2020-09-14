import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  TextInput, Alert,
  TouchableOpacity,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';
import * as Animatable from 'react-native-animatable';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {global} from '../../Styles/global';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {CHANGE_PASSWORD } from '../Api/Api'


//const baseUrl = 'http://qrweb.co/ecommerce/public/api/driverchangepassword';

const SignupSchema = yup.object({
  driver_id: yup.string().required('Required'),
  oldpassword: yup
    .string()
    .required('Required')
    .min(3, 'It must be 8 Characters'),
  newpassword: yup
    .string()
    .required('Required')
    .min(3, 'It must be 8 Characters'),
});

export default function ChangePassword(props) {
//const [messageFailure, setmessageFailure] = useState(false);
const [sendData, setSendData] = useState(false);


 const wrongData=()=>{
  Alert.alert(
    "Invalid Driver_Id or Password",
    "",
    [
      {
        text: "Cancel",
        onPress: () => props.navigation.navigate('Login'),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );
 }

const successAlert=()=>{

  Alert.alert(
    "Password has Updated Successfully",
    "",
    [ 
     
      { text: "OK", onPress:() => props.navigation.navigate('Login')  }
    ],
    { cancelable: false }
  );


}






  return (
    <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
      <View style={global.loginContainer}>
    
          <Animatable.View animation="fadeInDown" iterationCount={1}>
            <TouchableWithoutFeedback
              onPress={() => {
                Keyboard.dismiss();
              }}>
              <View>
                <View style={global.logoSec}>
                  <Animatable.View animation="zoomIn" iterationCount={2}>
                    <TouchableOpacity
                      onPress={() => props.navigation.navigate('Login')}>
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
                      oldpassword: '',
                      newpassword: '',
                    }}
                    validationSchema={SignupSchema}
                    onSubmit={(values) => {
                 ///   setmessageFailure
                 setSendData(true);
                 setTimeout(() => {
                   setSendData(false);
                 }, 3000);

                      var form = new FormData();
                      form.append('driver_id', values.driver_id);
                      form.append('oldpassword', values.oldpassword);
                      form.append('newpassword', values.newpassword);
                      fetch(CHANGE_PASSWORD, {
                        method: 'POST',
                        headers: new Headers({
                          'Content-Type': 'multipart/form-data',
                        }),
                        body: form,
                      })
                        .then((response) => response.json())
                        .then((data) => {


                          let successMesage = data.message;
                          console.log(successMesage)
                         if(successMesage ==='Password has been Updated successfully') {

                          successAlert()
                          
                        //  props.navigation.nav('Homepage') 
                                                 
                         }
                       else if(successMesage !=="Password has been Updated successfully" ){

                        //console.log("dwdwdwdwd")

                        wrongData()

                       }
                       
                        })
                                              
                        .catch((er) => {
                          console.log(er);
                        });
                    }}>
                    {(props) => (
                      <View style={global.Loginsec}>
                        <View style={global.fieldsec}>
                          <View style={global.fieldlayers}>
                            <Text style={global.iconwrap}>
                              <MaterialIcons
                                name="person"
                                color="#C7C7C7"
                                size={30}
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

                          <Text style={{color: 'red'}}>
                            {props.touched.driver_id && props.errors.driver_id}
                          </Text>
                        </View>

                        <View style={global.fieldsec}>
                          <View style={global.fieldlayers}>
                            <Text style={global.iconwrap}>
                              <FontAwesome
                                name="lock"
                                color="#C7C7C7"
                                size={30}
                              />
                            </Text>

                            <TextInput
                              onChangeText={props.handleChange('oldpassword')}
                              placeholder="Enter your Old Password"
                              placeholderTextColor="#C7C7C7"
                              style={global.fieldstyle}
                              value={props.values.oldpassword}
                            />
                          </View>

                          <Text style={{color: 'red'}}>
                            {props.touched.oldpassword &&
                              props.errors.oldpassword}
                          </Text>
                        </View>

                        <View style={global.fieldsec}>
                          <View style={global.fieldlayers}>
                            <Text style={global.iconwrap}>
                              <FontAwesome
                                name="lock"
                                color="#C7C7C7"
                                size={30}
                              />
                            </Text>

                            <TextInput
                              onChangeText={props.handleChange('newpassword')}
                              placeholder="Enter your NewPassword"
                              placeholderTextColor="#C7C7C7"
                              style={global.fieldstyle}
                              value={props.values.newpassword}
                            />
                          </View>

                          <Text style={{color: 'red'}}>
                            {props.touched.newpassword &&
                              props.errors.newpassword}
                          </Text>
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
                               top:-30,
                                left: -80,
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
                                   {sendData ? 'Loading....' : 'Submit'}

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
       
      </View>
    </View>
  );
}
