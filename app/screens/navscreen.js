

import React from 'react';
import { ImageBackground,StyleSheet,View,Button,Image,Text} from 'react-native';

import { NavigationContainer } from '../../node_modules/@react-navigation/native';
import { createNativeStackNavigator } from '../../node_modules/@react-navigation/native-stack';

function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
  
const Stack = createNativeStackNavigator();
  
function NaviScreen() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
  
  export default NaviScreen;