import { StyleSheet, Text, View,Button,Image ,TouchableOpacity} from 'react-native'
import React, { useState,useEffect } from 'react'
import WelcomeScreen from './welcomeScreen';
import { getFirestore, collection, getDocs} from 'firebase/firestore/lite';
import { db } from '../../firebase';
import { SafeAreaView } from 'react-native-safe-area-context';

function AwardScreen({ navigation }) {

  

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'#121212'}}>
        <Image
          style={{width: '100%', height: '100%'}}
          source={{uri: 'https://media.giphy.com/media/s9kqO10sLE9smNFM8V/giphy.gif'}} />
        <Image
          style={{width: '100%', height:400,position:'absolute',bottom:40}}
          source={{uri: 'https://media.giphy.com/media/6NG1WV8bEChNJH3Z9R/giphy.gif'}} />
      </View>
  )
}

export default AwardScreen;

const styles = StyleSheet.create({
  
})
