import React from 'react';
import { ImageBackground,StyleSheet,View,Button,Image,Text} from 'react-native';
import LoginScreen from './loginScreen';


function WelcomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Welcome Screen</Text>
        <Button
          title="Go to Login page"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    )
  }
// function WelcomeScreen(props) {
//     return (
//         <View style={{flex:1}}>

//         <Image resizeMode='contain'
//         style={styles.background}
//         source={require("../assets/background.jpg")}>
            
//         </Image>
//         <View style={styles.loginButton}>
//             <Button styles={styles.loginBtn} title="click Me" onPress={() => Alert.alert("Warnning", "You're going to delete this User",[
//                 {text:"Cancel"},{text:"DELETE"}
//             ])}/>
//         </View>
//         <View style={styles.registerButton}>
//             <Button styles={styles.registerBtn} title="click Me" onPress={() => Alert.alert("Warnning", "You're going to delete this User",[
//                 {text:"Cancel"},{text:"DELETE"}
//             ])}/>
//         </View>
//         </View>
//     );
// }

const styles = StyleSheet.create({
    background:{
        flex: 1,
        width:"100%",
        height:"50%"
    },
    loginButton:{
        flex:2,
        width: "100%",
        height: 100,
        backgroundColor: "#0B1838"
    },
    loginBtn:{
        flex:6,
        width: "100%",
        height: 100,
        backgroundColor: "#0B1838"
    },
    registerButton:{
        flex:1,
        width: "100%",
        height: 100,
        backgroundColor: "#244DB5"
    },
    registerBtn:{
        flex:1,
        width: "100%",
        height: 100,
        backgroundColor: "#244DB5"
    }
})
export default WelcomeScreen;