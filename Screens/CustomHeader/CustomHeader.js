import * as React from 'react';
import {Text, View, TouchableOpacity, Settings} from 'react-native';

export default function CustomHeader({titl, ishome, navigation}) {
    return (
        <View style={{flexDirection: 'row', height: 50}}>
          {ishome ? (
            <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => navigation.openDrawer()}>
                <Text>toggle</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flex: 1}}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text>back</Text>
              </TouchableOpacity>
            </View>
          )}
    
          <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <Text>fefef</Text>
          </View>
    
          <View style={{flex: 1}}></View>
        </View>
      );
}
