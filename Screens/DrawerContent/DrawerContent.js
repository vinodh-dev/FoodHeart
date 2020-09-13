import React from 'react';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';
import {Drawer} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
////import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
///import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

export function DrawerContent(props) {
  const loginStatec = useSelector((state) => state.loginDetails);
  const {loginData} = loginStatec;
  const imageUrl = loginData.map((rt) => rt.avatar);
  const imageData = imageUrl.toString();
  const profileImage = `http://qrweb.co/ecommerce/${imageData}`;

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <DrawerContentScrollView {...props}>
        <View style={styles.drawerContent}>
          <View style={styles.userInfoSection}>
            <ImageBackground
              source={require('../../Assets/Images/Path.png')}
              style={styles.Drawerbg}></ImageBackground>
          </View>

          <View style={{alignItems: 'center', marginTop: 100}}>
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

          <Drawer.Section style={styles.drawerSection}>
            <DrawerItem
              icon={({color, size}) => (
                <MaterialIcons
                  name="person"
                  color="#EE7444"
                  size={size}
                  style={{fontSize: 28, position: 'relative', right: -20}}
                />
              )}
              labelStyle={{
                fontSize: 19,
                color: '#000',
                fontFamily: 'Poppins-Regular',
                marginLeft: -6,
                position: 'relative',
                top: 4,
              }}
              label="My Profile"
              onPress={() => {
                props.navigation.navigate('MyProfile');
              }}
            />
          </Drawer.Section>
        </View>
      </DrawerContentScrollView>
      <Drawer.Section style={styles.bottomDrawerSection}>
        <DrawerItem
          labelStyle={{
            fontSize: 17,
          }}
          icon={({color, size}) => (
            <MaterialIcons
              name="call"
              color="#EE7444"
              size={size}
              style={{
                fontSize: 20,
                paddingRight: 0,
                position: 'relative',
                right: -28,
              }}
            />
          )}
          label="Support"
          onPress={() => console.log('pressed')}
        />
      </Drawer.Section>
    </View>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    flexDirection: 'column',
  },

  Drawerbg: {
    width: '100%',
    resizeMode: 'cover',
    height: 184,
    position: 'absolute',
    top: -4,
  },

  drawerSection: {
    marginTop: 40,
  },
  bottomDrawerSection: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
