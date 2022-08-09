import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import { TouchableOpacity } from 'react-native'
import {authentication} from '../../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, collection, getDocs} from 'firebase/firestore/lite';

function LoginScreen({ navigation }) {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [signedIn, setSignedIn] = useState(false)

    const handleSignIn = () =>{
        signInWithEmailAndPassword(authentication, email,password)
            .then(userCredentials =>{
                const user = userCredentials.user;
                console.log(user.email);
                setSignedIn(true);
                
                navigation.navigate('Home', { uid: authentication.currentUser.uid});
            })
            .catch(error => alert(error.message))
    }

    const handleSignUp = () =>{
        createUserWithEmailAndPassword(authentication, email,password)
            .then(userCredentials =>{
                const user = userCredentials.user;
                console.log(user.email);
                setSignedIn(true);
                const userU = authentication.currentUser;
                navigation.navigate('SignUp', {uEmail : user.email, uPassword: user.password , uId : userU.uid});
            })
            .catch(error => alert(error.message))
    }

    

  return (
    <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding">
        <Text style={styles.welcText}>Hello!</Text>
        <View style={styles.inputCont}>
        <Text style={styles.inputText}>UserName / Email :</Text>
            <TextInput
            placeholder='Email'
            value={email }
            onChangeText={ text => setEmail(text)}
            style={styles.input}
            >

            </TextInput>
            
            <Text style={styles.inputText}>Password :</Text>
            <TextInput
                placeholder='password'
                value={password }
                onChangeText={ text => setPassword(text)}
                secureTextEntry
                style={styles.input}
                >
                
            </TextInput>
        </View>
        <View style={styles.btncontainer}>

            <TouchableOpacity onPress={handleSignIn} style={styles.logbtnc}>
                <Text style={styles.logbtn}>Login</Text>
            </TouchableOpacity>
            

            <TouchableOpacity onPress={handleSignUp} 
            style={[styles.logbtnc, styles.regbtnc]}>
                <Text style={styles.regbtn}>Register</Text>
            </TouchableOpacity>

        </View>
        
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: "black",
        width:'100%'
    },
    inputcont:{
        width:'80%',
    },
    inputText:{
        color: "white",
        fontSize:16,
        marginLeft:20,
    },welcText:{
        color: "white",
        fontSize:36,
        fontWeight:'bold',
        letterSpacing:1.5,
        position: 'absolute',
        top: 100,
    },
    input:{
        
        color: "white",
        backgroundColor: "#202125",
        padding: 15,
        paddingHorizontal:100,
        borderRadius:15,
        margin: 10,
        borderWidth:2,
        borderColor:"#3b82c9",
        

    },
    btncontainer:{
        width:'50%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:40,
        maxWidth:150
    },
    logbtnc:{
        backgroundColor:'#3b82f6',
        borderRadius:100,
        padding:15,
        width:'100%',
        alignItems:'center'
    },
    logbtn:{
        color:'white',
        //fontWeight:700,
        fontSize:16
    },
    regbtnc:{
        marginTop:10,
        borderColor:'#3b82f6',
        borderWidth:2,
        backgroundColor:'#222222'
    },
    regbtn:{
        color:'white',
        //fontWeight:700,
        fontSize:16
    }

    
})