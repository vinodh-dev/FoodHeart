import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {global} from '../../Styles/global';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Foundation from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import {useSelector} from 'react-redux';

export default function MyProfile() {
  const loginStatec = useSelector((state) => state.loginDetails);
  const {loginData} = loginStatec;

  const imageUrl = loginData.map((rt) => rt.avatar); 
  const imageData = imageUrl.toString();
  const profileImage = `http://qrweb.co/ecommerce/${imageData}`;

  return (
    <View style={global.container}>
      <Animatable.View animation="fadeInDown" iterationCount={1}>
        {loginData.map((profile_dt) => {
          return (
            <View>   
              <View style={global.profilecol1}>
                <View>
                  <ImageBackground
                    source={require('../../Assets/Images/Path.png')}
                    style={global.ellipsebg}></ImageBackground>
                </View>

                <View style={global.profilewrap}>
                  <View style={{alignItems: 'center'}}>
                    {profileImage === '' ? (
                      <Image
                        source={require('../../Assets/Images/dummyImage.jpg')}
                        style={{width: 190, height: 190}}
                      />
                    ) : (
                      <Image
                        source={{uri: profileImage}}
                        style={{width: 190, height: 190}}
                        resizeMode="cover"
                      />
                    )}
                  </View>

                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: 30,
                    }}>
                    <View>
                      <Text style={global.profileName}>
                        <Text style={{fontFamily: 'Poppins-Bold'}}>Name</Text>
                        <Text style={{textTransform: 'capitalize'}}>
                          {' '}
                          {profile_dt.first_name}
                        </Text>
                      </Text>
                      <View style={{flexDirection: 'row', marginTop: 10}}>
                        <FontAwesome
                          name="star"
                          color="#EE7444"
                          size={20}
                          style={{marginRight: 3}}
                        />
                        <FontAwesome
                          name="star"
                          color="#EE7444"
                          size={20}
                          style={{marginRight: 3}}
                        />
                        <FontAwesome
                          name="star"
                          color="#EE7444"
                          size={20}
                          style={{marginRight: 3}}
                        />
                        <FontAwesome
                          name="star-o"
                          color="#EE7444"
                          size={20}
                          style={{marginRight: 3}}
                        />
                      </View>
                    </View>

                    {/* <TouchableOpacity>
              <Image source={require('../../Assets/Images/editicon.png')} />
            </TouchableOpacity> */}
                  </View>
                </View>
              </View>

              <View style={global.profilecol2}>
                <View style={global.profilelists}>
                  <Text>
                    <MaterialIcons
                      name="call"
                      color="#828282"
                      size={20}
                      style={{marginRight: 3}}
                    />
                  </Text>
                  <Text style={global.profilelttext}>{profile_dt.phone}</Text>
                </View>
                <View style={global.profilelists}>
                  <Foundation
                    name="mail"
                    color="#828282"
                    size={20}
                    style={{marginRight: 3}}
                  />
                  <Text style={global.profilelttext}>{profile_dt.email}</Text>
                </View>
                <View style={global.profilelists}>
                  <FontAwesome5
                    name="award"
                    color="#828282"
                    size={20}
                    style={{marginRight: 3}}
                  />
                  <Text style={global.profilelttext}>
                    Started: {profile_dt.created_at}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </Animatable.View>
    </View>
  );
}
