import { StyleSheet, Text, View,Button,Image ,TouchableOpacity} from 'react-native'
import React, { useState,useEffect } from 'react'
import WelcomeScreen from './welcomeScreen';
import { getFirestore, collection, getDocs, updateDoc, doc,get,data, getDoc} from 'firebase/firestore/lite';
import { db } from '../../firebase';
import { SafeAreaView } from 'react-native-safe-area-context';
import AwardScreen from './awardScreen';
import { NavigationContainer } from '../../node_modules/@react-navigation/native/src';
import { createNativeStackNavigator } from '../../node_modules/@react-navigation/native-stack';

import { createBottomTabNavigator } from '../../node_modules/@react-navigation/bottom-tabs';
//import { FontAwesomeIcon } from '../../node_modules/@fortawesome/react-native-fontawesome'
//import { faMugSaucer } from '../../node_modules/@fortawesome/free-solid-svg-icons/faMugSaucer'


function HomeScreen({route, navigation }) {


  const Tab = createBottomTabNavigator();

  const {uid} = route.params;
  const [users, setUsers] = useState([]);
  const usersRef = collection(db,"Users");
  const [rewarded,setRewarded] = useState(false);
  const [uscore, setUscore] = useState(1);
  const [userName, setUserName] = useState("");


  const docRef = doc(db, "Users", uid);
  getDoc(docRef).then( (doc) => {
    setUscore(Number(doc.data().score));
    setUserName(doc.data().Name);
  })

  const rewardUser = async (id, score) =>{
    if(rewarded !== true){
    const userDoc = doc(db,"Users", id);
    let newScore = Number(Number(score) * 2);
    const newfields = {score : newScore};
    await updateDoc(userDoc,newfields);
    setUscore(newScore);
    setRewarded(true)
  }else{
    alert("You already attended today !")
  }
  }

  // useEffect( () => {
  //   const getUsers = async () =>{
  //     const data = await getDocs(usersRef);
  //     setUsers(data.docs.map( (doc) => ({...doc.data(), id: doc.id })  ));
  //   };
  //   getUsers();
  // }, []);

  

  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <Button  
  //       onPress={() => navigation.navigate('Login')}
  //       title="Sign In/Out" />
  //     ),
  //     headerLeft: () => (
  //       <Button
  //         onPress={() => alert('This is a button!')}
  //         title="Coins"
  //       />
  //     ),
  //   });
  // }, [navigation]);

  return (

    <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'black'}}>
      <TouchableOpacity style={styles.coinTagC}>
      <Text style={styles.coinTag}>Coins: {uscore}</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.coinTagl}>
      <Text style={styles.coinTag} onPress={() => navigation.navigate('Login')} >{userName}</Text>
      </TouchableOpacity>
       {/* {users.map( (user) => {
        return(
          <>
          <Text>name : {user.firstName} </Text>
          <Text>class : {user.class} </Text>
          </>
        );
      })}
      <Button
        title="Go to Welcome page"
        onPress={() => navigation.navigate('Welcome')}
      /> */}

      <View style={styles.coinCont}>
        <Text style={styles.rewardT}>Attending Odas</Text>
        <Image
          style={{width: '60%', height: '60%'}}
          source={{uri: 'https://media.giphy.com/media/UrnxRwhcNwlIL2c0Pd/giphy.gif'}} />
        <Text style={styles.rewardT}>2x Coins Award</Text>
      </View>
      <TouchableOpacity  style={styles.colC} onPress={() => {rewardUser(uid,Number(uscore))}}>
                <Text style={styles.colBtn} //onPress={navigation.navigate('Award')} 
                >Collect</Text>
            </TouchableOpacity>
    <View style={styles.homebtn}>
    <View style={styles.homebtncir}>
    {/* <FontAwesomeIcon icon="fa-solid fa-house-user" />  */}
      </View>
    </View>


    
    
    </SafeAreaView>
    
    
  )
}

export default HomeScreen;

const styles = StyleSheet.create({
  homebtn:{
    position:'absolute',
    backgroundColor:'#202125',
    borderRadius:20,
    left: 20,
    right:20,
    height:70,
    padding:0,
    bottom:30,
    alignSelf:'center',
    shadowColor:"#232527",
    shadowOffset:{
      width: -10,
      height: 10
    },
    shadowOpacity:0.25,
    shadowRadius:5,
    elevation:5


  },homebtncir:{
    position:'absolute',
    backgroundColor:'#3b82f6',
    borderRadius:100,
    width:60,
    height:60,
    top:-25,
    padding:0,
    bottom:30,
    alignSelf:'center',
  },
  coinTagC:{
    position:'absolute',top:60,left:20,padding:10,backgroundColor:'#202125',color:'white',borderRadius:100,
    borderColor:"#3b82f6",
    borderWidth:0.5
  },
  coinTag:{
    color:'white'
  },
  coinTagl:{
    position:'absolute',top:60,padding:10,backgroundColor:'#202125',color:'white',borderRadius:100,
    borderColor:"#3b82f6",
    borderWidth:0.5,
    right: 20
  },
  coinCont:{
    width:'70%',
    height:'50%',
    backgroundColor:"#202125",
    borderRadius:20,
    top:-50,
    justifyContent:'space-around',
    alignItems:'center',
    borderWidth:0.8,
    shadowColor:"#3b82f6",
    shadowOffset:{
      width: -4,
      height: 6
    },
    shadowOpacity:0.25,
    shadowRadius:14,
    elevation:5
  },
  rewardT:{
    color:'white',
    fontSize:18,
    fontWeight:'bold',

  },
  colC:{
    backgroundColor:'#3b82f6',
    borderRadius:100,
    padding:15,
    width:'50%',
    alignItems:'center',
    borderColor:"white",
    borderWidth:1
  },
  colBtn:{
    fontWeight:'bold',
    color:'white',
    fontSize:18,
    
  }
})
