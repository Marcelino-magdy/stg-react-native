import { KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native'
import React,{useState} from 'react'
import { TouchableOpacity } from 'react-native'
import {authentication} from '../../firebase'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { getFirestore, collection, getDocs, addDoc, setDoc,doc} from 'firebase/firestore/lite';
import { db } from '../../firebase';

function RegisterScreen({route, navigation }) {

    const {uEmail, uPassword,uId} = route.params;

    const [userName, setUserName] = useState("Ex: Anthony");
    const [phone,setPhone] = useState("+02-xxx-xxx-xxx");
    const [age,setAge] = useState("15");
    const [year,setYear] = useState("3");


    
    const [address,setAddress] = useState("215st. maadi");

    
    const usersRef = collection(db,"Users");

    const createUser = async () =>{
          await setDoc(doc(db,"Users",uId), {Name : userName, Number : phone, Age : age, Year : year, Address : address, Email : uEmail,score :Number(1) });
          navigation.navigate('Home', {uid : uId});
            //addDoc(usersRef,
    };

    return (
        <KeyboardAvoidingView 
        style={styles.container}
        behavior="padding">
        <Text style={styles.welcText}>Welcome :)</Text>
        <View style={styles.inputCont}>
        <Text style={styles.inputText}>UserName :</Text>    
        <TextInput
            placeholder='User Name'
            value={userName}
            onChangeText={ text => setUserName(text)}
            style={styles.input}
            />
<Text style={styles.inputText}>Email :</Text>
            <TextInput
            placeholder={uEmail }
            value={uEmail }
            style={styles.input}
            />
            
            <Text style={styles.inputText}>Academic Year :</Text>
            <TextInput
            placeholder='Academic Year'
            value={year}
            onChangeText={ text => setYear(text)}
            style={styles.input}
            />

<Text style={styles.inputText}>Address :</Text>

            <TextInput
            placeholder='Address'
            value={address}
            onChangeText={ text => setAddress(text)}
            style={styles.input}
            />
<Text style={styles.inputText}>Age :</Text>
            <TextInput
            placeholder='Age'
            value={age}
            onChangeText={ text => setAge(text)}
            style={styles.input}
            />
<Text style={styles.inputText}>Phone Number :</Text>
            <TextInput
            placeholder='Phone Number'
            value={phone}
            onChangeText={ text => setPhone(text)}
            style={styles.input}
            />

            

            
        </View>
        <View style={styles.btncontainer}>

            <TouchableOpacity  style={styles.logbtnc} onPress={createUser}>
                <Text style={styles.logbtn}>Create Account</Text>
            </TouchableOpacity>
            

            

        </View>
        
    </KeyboardAvoidingView>
    )
}

export default RegisterScreen




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
        fontSize:12,
        marginLeft:10,
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
        margin: 5,
        borderWidth:1,
        borderColor:"#3b82c9",
        

    },
    btncontainer:{
        width:'50%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20,
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