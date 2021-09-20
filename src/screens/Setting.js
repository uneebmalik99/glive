import React,{useState , useEffect} from 'react';
import {
    SafeAreaw,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Image,
    Button,
    SafeAreaView
} from 'react-native';
import AppConstance, {
    deviceHeight,
    deviceWidth,
  } from '../constance/AppConstance.js';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import BottomTabs from './BottomTabs';
import Feather from 'react-native-vector-icons/dist/Feather';
import { Appbar, Card } from 'react-native-paper';





const Setting = ({route ,navigation }) => {


  const [Logincheck , setLogincheck] = useState(AppConstance.LOGIN)
  const [Rolecheck , setRolecheck] = useState(AppConstance.ROLE)

  const [filteredDataSource, setFilteredDataSource] = useState([
    
        {
            id: 1,
            category : 'Cosmetics'
          },
          {
              id: 2,
              category : 'Coffee'
      
             
          },
          {
              id: 3,
              category : 'Cool Stuff'
          }
           
    
    ]);
    const [search ,setSearch]=useState('')


const [Products, setProducts] = useState([
    {
      id: 1,
      category : 'Cosmetics'
    },
    {
        id: 2,
        category : 'Coffee'

       
    },
    {
        id: 3,
        category : 'Cool Stuff'
    }
      
  ]
)

useEffect(() => {

  const unsubscribe = navigation.addListener('focus', () => {
    setLogincheck(AppConstance.LOGIN)
    setRolecheck(AppConstance.ROLE)
    // The screen is focused
    // Call any action
  });

  setLogincheck(AppConstance.LOGIN)
  setRolecheck(AppConstance.ROLE)

  

  return () => {
    
  }
}, [])


    return (
        <SafeAreaView style={{backgroundColor:"white", flex: 1 ,width:deviceWidth,height:deviceHeight}}>

<View style={{  width:'100%',height:deviceHeight*0.08,backgroundColor:'white', paddingHorizontal:13, flexDirection:'column'}}>
  
  <View style={{ width:'100%',height:deviceHeight*0.07,marginTop:5, flexDirection:'row'}}>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>
  
          <TouchableOpacity
                            style={{ alignSelf: 'flex-start', }}
                            onPress={() => {
            navigation.goBack();
        }}

                        >
                            <Ionicons name='chevron-back-outline' size={21}  />
                            {/* <Image style={{ width: 21, height: 21, alignSelf: 'flex-start', resizeMode: 'contain' }} source={require('../images/Buttons_SideMenu.png')} /> */}
                        </TouchableOpacity> 
  
  </View>
  <View style={{justifyContent:'center',width:'60%',height:'100%',}}>
  <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 18, fontWeight: 'bold' }}>Settings</Text>
  </View>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>
  <TouchableOpacity

  
  style={{ alignSelf: 'flex-end', marginLeft: 40 }}

//    onPress={()=>
//    navigation.navigate('EditGig')}
    
                            >
                                {/* <Entypo name='dots-three-vertical'  size={20}  color='black'/> */}
            {/* <MaterialCommunityIcons name='bell-outline' size={20} color='#292F58' style={{marginRight:3}}/> */}
                      </TouchableOpacity>
  
  </View>
  
  
  
  </View>

  
  
           </View>
    {Logincheck == '1' ?


        <ScrollView style={{paddingHorizontal:20.}}>
          { Rolecheck == '1' ?
          <View >
        
        
                <View style={{paddingVertical:20,justifyContent:'center', paddingHorizontal:20}}>



<TouchableOpacity 
onPress={()=> {navigation.navigate('UpcomingJoined')}}
        style={{height:40,marginTop:15, borderRadius:12, borderWidth:0.4,justifyContent:'center', paddingHorizontal:10 ,borderColor:'grey',  backgroundColor:'#D0D3D4'}}

        >
          <Text style={{color:'grey', alignSelf:'flex-start'}}>Subscribed & Upcoming</Text>
        </TouchableOpacity>
        </View>

     

     <View style={{flex:1 ,paddingHorizontal:20 , marginTop:0,}}>
     <TouchableOpacity 
     onPress={()=> navigation.navigate('YourPurchases')}
        style={{height:40,marginTop:0, borderRadius:12, borderWidth:0.4,justifyContent:'center', paddingHorizontal:10 ,borderColor:'grey',  backgroundColor:'#D0D3D4'}}

        >
          <Text style={{color:'grey', alignSelf:'flex-start'}}>Your Purchases</Text>
        </TouchableOpacity>      
        
        <TouchableOpacity 
        onPress={()=> navigation.navigate('Accounts')}
        style={{height:40,marginTop:15, borderRadius:12, borderWidth:0.4,justifyContent:'center', paddingHorizontal:10 ,borderColor:'grey',  backgroundColor:'#D0D3D4'}}

        >
          <Text style={{color:'grey', alignSelf:'flex-start'}}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=> setLogincheck('0')}
        style={{height:40,marginTop:15, borderRadius:12, borderWidth:0.4,justifyContent:'center', paddingHorizontal:10 ,borderColor:'grey',  backgroundColor:'#D0D3D4'}}

        >
          <Text style={{color:'grey', alignSelf:'flex-start'}}>Logout</Text>
        </TouchableOpacity>
           </View>      

      

          </View>

          :

          <View >
               <View style={{paddingVertical:20,justifyContent:'center', paddingHorizontal:20}}>



<TouchableOpacity 
onPress={()=> {AppConstance.LOGIN = '1' , setLogincheck('1'),  navigation.navigate('Setting')} }
        style={{height:40,marginTop:15, borderRadius:12, borderWidth:0.4,justifyContent:'center', paddingHorizontal:10 ,borderColor:'grey',  backgroundColor:'#D0D3D4'}}

        >
          <Text style={{color:'grey', alignSelf:'flex-start'}}>Inquries</Text>
        </TouchableOpacity>
        </View>

     

     <View style={{flex:1 ,paddingHorizontal:20 , marginTop:0,}}>
     <TouchableOpacity 
     onPress={()=> navigation.navigate('Register')}
        style={{height:40,marginTop:0, borderRadius:12, borderWidth:0.4,justifyContent:'center', paddingHorizontal:10 ,borderColor:'grey',  backgroundColor:'#D0D3D4'}}

        >
          <Text style={{color:'grey', alignSelf:'flex-start'}}>Your Sales</Text>
        </TouchableOpacity>
        
        
        <TouchableOpacity 
     onPress={()=> navigation.navigate('Register')}
        style={{height:40,marginTop:15, borderRadius:12, borderWidth:0.4,justifyContent:'center', paddingHorizontal:10 ,borderColor:'grey',  backgroundColor:'#D0D3D4'}}

        >
          <Text style={{color:'grey', alignSelf:'flex-start'}}>Your Products</Text>
        </TouchableOpacity>    
        
        <TouchableOpacity 
        onPress={()=> navigation.navigate('BecomeSeller')}
        style={{height:40,marginTop:15, borderRadius:12, borderWidth:0.4,justifyContent:'center', paddingHorizontal:10 ,borderColor:'grey',  backgroundColor:'#D0D3D4'}}

        >
          <Text style={{color:'grey', alignSelf:'flex-start'}}>Account</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={()=> setLogincheck('0')}
        style={{height:40,marginTop:15, borderRadius:12, borderWidth:0.4,justifyContent:'center', paddingHorizontal:10 ,borderColor:'grey',  backgroundColor:'#D0D3D4'}}

        >
          <Text style={{color:'grey', alignSelf:'flex-start'}}>Logout</Text>
        </TouchableOpacity>
           </View>      


          
      

          </View>
}
        </ScrollView>

:
 <ScrollView style={{paddingHorizontal:20.}}>
         <View style={{paddingVertical:20,justifyContent:'center', paddingHorizontal:20}}>
{/* <TextInput 
style={{height:40, borderRadius:12, borderWidth:0.4, paddingHorizontal:10 ,borderColor:'grey',  backgroundColor:'#D0D3D4'}}
placeholder='Email'
/>
<TextInput 
style={{height:40,marginTop:10, borderRadius:12, borderWidth:0.4, paddingHorizontal:10 ,borderColor:'grey',  backgroundColor:'#D0D3D4'}}

placeholder='Password'

/> */}


{/* <TouchableOpacity 
onPress={()=> {AppConstance.LOGIN = '1' , setLogincheck('1'),setRolecheck('1'),  navigation.navigate('Setting')} }
        style={{height:40,marginTop:15, borderRadius:12, borderWidth:0.4,justifyContent:'center', paddingHorizontal:10 ,borderColor:'grey',  backgroundColor:'#D0D3D4'}}

        >
          <Text style={{color:'grey', alignSelf:'center'}}>Login as user</Text>
        </TouchableOpacity> */}
        <TouchableOpacity 
onPress={()=> { navigation.navigate('Login')} }
        style={{height:40,marginTop:15, borderRadius:12, borderWidth:0.4,justifyContent:'center', paddingHorizontal:10 ,borderColor:'grey',  backgroundColor:'#D0D3D4'}}

        >
          <Text style={{color:'grey', alignSelf:'center'}}>Login</Text>
        </TouchableOpacity>
        </View>

     

     <View style={{flex:1 ,paddingHorizontal:20 , marginTop:20,}}>
     <TouchableOpacity 
     onPress={()=> navigation.navigate('Register')}
        style={{height:40,marginTop:15, borderRadius:12, borderWidth:0.4,justifyContent:'center', paddingHorizontal:10 ,borderColor:'grey',  backgroundColor:'#D0D3D4'}}

        >
          <Text style={{color:'grey', alignSelf:'center'}}>Register</Text>
        </TouchableOpacity>      
        
        <TouchableOpacity 
        onPress={()=> navigation.navigate('BecomeSeller')}
        style={{height:40,marginTop:15, borderRadius:12, borderWidth:0.4,justifyContent:'center', paddingHorizontal:10 ,borderColor:'grey',  backgroundColor:'#D0D3D4'}}

        >
          <Text style={{color:'grey', alignSelf:'center'}}>Become a Seller</Text>
        </TouchableOpacity>
           </View>      


        </ScrollView>

} 





          
        </SafeAreaView>
    );
}

export default Setting;