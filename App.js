import { StatusBar } from 'expo-status-bar';
import { 
  StyleSheet,
  Text,
  View, 
  SafeAreaView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Button,
  Alert,
  Platform
   } from 'react-native';
import WelcomeScreen from './app/screens/welcomeScreen';
import NaviScreen from './app/screens/navscreen';
import LoginScreen from './app/screens/loginScreen';
import RegisterScreen from './app/screens/registerScreen';
import HomeScreen from './app/screens/homeScreen';
import { NavigationContainer } from './node_modules/@react-navigation/native/src';
import { createNativeStackNavigator } from './node_modules/@react-navigation/native-stack';

// export default function App() {
//   let x =1;
//   return (
//     <>
//     <WelcomeScreen />
//     <NaviScreen/>
//    </>
    // <SafeAreaView style={styles.container}>
    //   <Text style={styles.textm}>Hello!</Text>
    //   <TouchableNativeFeedback >
    //     <View>
    //       <Image source={{
    //         width: 200,
    //         height:300,
    //         uri: "https://picsum.photos/200/300"
    //       }}/>
    //     </View>
    //   </TouchableNativeFeedback>
    //   {/* <Button title="click Me" onPress={() => Alert.alert("Warnning", "You're going to delete this User",[
    //     {text:"Cancel"},{text:"DELETE"}
    //   ])}/> */}
    //   <StatusBar style="auto" />
    // </SafeAreaView>
//  );
//}



const Stack = createNativeStackNavigator();


function App() {

  function LogoTitle() {
    return (
      <Text style={{color:'#fff'}}>Sign in/out</Text>
    );
  }
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
          headerStyle: {
            backgroundColor: '#1f2933',
          },
          headerTintColor: '#9aa5b1',
          // headerTitleStyle: {
          //   fontWeight: 200,
          // },
        }}
        initialRouteName='Login'>
        
        <Stack.Screen options={{headerShown:false}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown:false}} name="SignUp" component={RegisterScreen} />
        <Stack.Screen  name="Home" options={{
          headerTitle: '',
          headerShown:false
          }} component={HomeScreen} />
        <Stack.Screen options={{headerShown:true}} name="Welcome" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202124',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS === "android"? StatusBar.height :0,
  },
  textm : {
    color : '#fff',
    fontSize : 20,
    fontWeight: 'bold'
  }
});
