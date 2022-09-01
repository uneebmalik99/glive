import React,{useState , useEffect} from 'react';
import {
    SafeAreaw,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Modal,
    FlatList,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Image,
    Button,
    SafeAreaView,
    Platform
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
import Appcolors from '../AppColors/Appcolors.js';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import SvgUri from 'react-native-svg-uri'; // SVG Package




const BecomeaBusiness = ({route ,navigation }) => {


  const [Logincheck , setLogincheck] = useState(AppConstance.LOGIN)
  const [Rolecheck , setRolecheck] = useState(AppConstance.ROLE)
  const [member , setmember] = useState(false)
  const [Addmember , setAddmember] = useState(false)
  const [Editmember,setEditmember] = useState(false)
  const [data  , setdata] = useState([
    {
      name:'Account Settings',
      icon:require('../images/gLive_Icons/Settings/account_settings_icon.svg'),
      page:'AccountSettings'
    },
    {
      name:'Become a Business',
      icon:require('../images/gLive_Icons/Settings/businesssettingsicon.svg'),
      page:'BecomeaBusiness'

    },
    {
      name:'Language',
      icon:require('../images/gLive_Icons/Settings/language_icon.svg'),
      page:'Language'

    },
    {
      name:'Invite a Friend',
      icon:require('../images/gLive_Icons/Settings/invite_friend_icon.svg'),
      page:'Setting'

    },
    {
      name:'FAQ',
      icon:require('../images/gLive_Icons/Settings/faq_icon.svg'),
      page:'Setting'

    },
    {
      name:'Give Feedback',
      icon:require('../images/gLive_Icons/Settings/feedback_icon.svg'),
      page:'Setting'

    },
    
  ])

useEffect(() => {

  return () => {
    
  }
}, [])

const renderLivenow = ({ item, index }) => {  
  return(
   <TouchableOpacity 
   onPress={()=> {navigation.navigate(item.page)}}
   style={{borderColor:'#E3E3EB',flexDirection:'row',justifyContent:'space-between', borderRadius:5,borderBottomWidth:1,height:60,paddingHorizontal:15, width:'100%'}}>

    <View style={{ width:'50%', flexDirection:'row', }}>
    <View style={{width:'20%',justifyContent:'center', }}>
    {Platform.OS == 'ios'?
    <SvgUri
      style={{alignSelf:'center'}}
      source={item.icon}
    />
     :
       <Image
                                    style={{alignSelf:'center',}}

                                    source={item.icon}

          />
        }
    </View>
      <View style={{marginLeft:15, justifyContent:'center'}}>
      <Text style={{alignSelf:'center',textAlign:'left', fontSize:16, fontWeight:'500', marginLeft:0,}}>{item.name}</Text>
    </View>
    </View>


    <View style={{justifyContent:'center'}}>
      <MaterialIcons name='navigate-next' color='#616B7B' style={{alignSelf:'center'}} size={25}/>
    </View>
   

   </TouchableOpacity>

  );



}


    return (
        <SafeAreaView style={{backgroundColor:"white", flex: 1 ,width:deviceWidth,height:deviceHeight}}>


<Modal
transparent={true}
animationType={'fade'}
visible={Addmember}
onRequestClose={() => {

  console.log('close modal');
}}>
<View
  style={{
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
    height:deviceHeight,
    backgroundColor:'#0009',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
  <View
    style={{
      width: '90%',
      flexDirection: 'column',
      backgroundColor:'white',
      borderRadius:5,
      padding:20,
    }}>




 


   <Text style={{fontSize:16,color:'#162741', fontWeight:'700'}}>Add Members</Text>


   <Text style={{fontSize:16,marginTop:10, color:'#162741', fontWeight:'400'}}>Member will have owner’s permissions.</Text>


   <Text style={{fontSize:16,marginTop:20, color:'#162741', fontWeight:'400'}}>Email</Text>


   <TextInput
      placeholder='User’s email'
      mode='outlined'
      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}
     
      />

<Text style={{fontSize:16,marginTop:20, color:'#162741', fontWeight:'400'}}>Role</Text>


<TextInput
      placeholder='User’s email'
      mode='outlined'
      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}
     
      />




        <View style={{paddingVertical:2,flexDirection:'row', paddingHorizontal:0,marginTop:10, justifyContent:'space-between',width:'100%'}}>

        <TouchableOpacity onPress={()=> { setAddmember(false)}} style={{marginTop:10, borderColor:'#E3E3EB',borderWidth:1,borderRadius:5, justifyContent:'center',paddingVertical:10,   width:'35%'}}>
          <Text style={{color:'#162741',fontSize:16,fontWeight:'500', alignSelf:'center'}}>Cancel</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=> {setAddmember(false); setEditmember(true)}} style={{marginTop:10, backgroundColor:'#162741',borderRadius:5, justifyContent:'center',paddingVertical:10, width:'45%'}}>
          <Text style={{color:'white',fontSize:16,fontWeight:'500', alignSelf:'center'}}>Add Member</Text>
        </TouchableOpacity>

        </View>




   
 
  </View>

</View>
      </Modal>


      <Modal
transparent={true}
animationType={'fade'}
visible={Editmember}
onRequestClose={() => {

  console.log('close modal');
}}>
<View
  style={{
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 10,
    height:deviceHeight,
    backgroundColor:'#0009',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
  <View
    style={{
      width: '90%',
      flexDirection: 'column',
      backgroundColor:'white',
      borderRadius:5,
      padding:20,
    }}>




 


   <Text style={{fontSize:16,color:'#162741', fontWeight:'700'}}>Edit</Text>


   <Text style={{fontSize:16,marginTop:10, color:'#162741', fontWeight:'400'}}>Edit member</Text>


   <Text style={{fontSize:16,marginTop:20, color:'#162741', fontWeight:'400'}}>Username</Text>
   

   <TextInput
      placeholder='John Smith'
      mode='outlined'
      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}
     
      />


   <Text style={{fontSize:16,marginTop:20, color:'#162741', fontWeight:'400'}}>Email</Text>
  

   <TextInput
      placeholder='User’s email'
      mode='outlined'
      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}
     
      />

<Text style={{fontSize:16,marginTop:20, color:'#162741', fontWeight:'400'}}>Role</Text>


<TextInput
      placeholder='Select role'
      mode='outlined'
      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}
     
      />


<TouchableOpacity style={{padding:20,marginTop:20, flexDirection:'row',width:'50%',borderWidth:1,borderRadius:5,borderColor:'#E3E3EB', justifyContent:'space-between'}}>
          

        {Platform.OS == 'ios'?
          <SvgUri
        style={{alignSelf:'center'}}
        source={require('../images/gLive_Icons/Settings/delete_user_icon.svg')}
            />
              :
       <Image
                                    style={{alignSelf:'center',}}

                                    source={require('../images/gLive_Icons/Settings/delete_user_icon.png')}

          />
        }

            <Text StatusBar={{fontSize:16, fontWeight:'500'}}>Delete Account</Text>
          </TouchableOpacity>

        <View style={{paddingVertical:2,flexDirection:'row', paddingHorizontal:0,marginTop:20, justifyContent:'space-between',width:'100%'}}>

        <TouchableOpacity onPress={()=> { setEditmember(false)}} style={{marginTop:10, borderColor:'#E3E3EB',borderWidth:1,borderRadius:5, justifyContent:'center',paddingVertical:10,   width:'35%'}}>
          <Text style={{color:'#162741',fontSize:16,fontWeight:'500', alignSelf:'center'}}>Cancel</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=> { setEditmember(false)}} style={{marginTop:10, backgroundColor:'#162741',borderRadius:5, justifyContent:'center',paddingVertical:10, width:'45%'}}>
          <Text style={{color:'white',fontSize:16,fontWeight:'500', alignSelf:'center'}}>Save</Text>
        </TouchableOpacity>

        </View>




   
 
  </View>

</View>
      </Modal>


<Appbar style={styles.appbar}>

<MaterialIcons  onPress={()=> {navigation.goBack()}} name='arrow-back'  size={25} color='#616B7B'/>

<Text style={{fontWeight:'500', fontSize:18}}>Become a Business</Text>

<View>

<Text></Text>
</View>
  </Appbar>

         <ScrollView>


         <TouchableOpacity 
  //  onPress={()=> {navigation.navigate(item.page)}}
   style={{borderColor:'#E3E3EB',flexDirection:'row',justifyContent:'space-between', borderRadius:5,borderBottomWidth:1,height:60,paddingHorizontal:15, width:'100%'}}>

    <View style={{ width:'50%', flexDirection:'row', }}>
    <View style={{width:'20%',justifyContent:'center', }}>
    {Platform.OS == 'ios'?
    <SvgUri
      style={{alignSelf:'center'}}
      source={require('../images/gLive_Icons/Settings/account_settings_icon.svg')}
    />
       :
       <Image
                                    style={{alignSelf:'center',}}

                                    source={require('../images/gLive_Icons/Settings/account_settings_icon.png')}

          />
        }
    </View>
      <View style={{marginLeft:15, justifyContent:'center'}}>
      <Text style={{alignSelf:'center',textAlign:'left', fontSize:16, fontWeight:'500', marginLeft:0,}}>Business Information</Text>
    </View>
    </View>


    <View style={{justifyContent:'center'}}>
    <Ionicons onPress={()=> {setmember(true)}} name='chevron-up' size={20} color='#616B7B'/>
    </View>
   

   </TouchableOpacity>


   <TouchableOpacity 
  //  onPress={()=> {navigation.navigate(item.page)}}
   style={{borderColor:'#E3E3EB',flexDirection:'row',justifyContent:'space-between', borderRadius:5,borderBottomWidth:1,height:60,paddingHorizontal:15, width:'100%'}}>

    <View style={{ width:'50%', flexDirection:'row', }}>
    <View style={{width:'20%',justifyContent:'center', }}>
    {Platform.OS == 'ios'?
    <SvgUri
      style={{alignSelf:'center'}}
      source={require('../images/gLive_Icons/Settings/store_profile_icon.svg')}
    />
       :
       <Image
                                    style={{alignSelf:'center',}}

                                    source={require('../images/gLive_Icons/Settings/store_profile_icon.png')}

          />
        }
    </View>
      <View style={{marginLeft:15, justifyContent:'center'}}>
      <Text style={{alignSelf:'center',textAlign:'left', fontSize:16, fontWeight:'500', marginLeft:0,}}>Store Profile</Text>
    </View>
    </View>


    <View style={{justifyContent:'center'}}>
    <Ionicons onPress={()=> {setmember(true)}} name='chevron-up' size={20} color='#616B7B'/>
    </View>

   

   </TouchableOpacity>
   


   <TouchableOpacity 
   style={{borderColor:'#E3E3EB',flexDirection:'row',justifyContent:'space-between', borderRadius:5,height:60,paddingHorizontal:15, width:'100%'}}>

    <View style={{ width:'50%', flexDirection:'row', }}>
    <View style={{width:'20%',justifyContent:'center', }}>
   {Platform.OS == 'ios'?
    <SvgUri
      style={{alignSelf:'center'}}
      source={require('../images/gLive_Icons/Settings/members_icon.svg')}
    />
     :
       <Image
                                    style={{alignSelf:'center',}}

                                    source={require('../images/gLive_Icons/Settings/members_icon.png')}

          />
        }
    </View>
      <View style={{marginLeft:15, justifyContent:'center'}}>
      <Text style={{alignSelf:'center',textAlign:'left', fontSize:16, fontWeight:'500', marginLeft:0,}}>Members</Text>
    </View>
    </View>


    <View style={{justifyContent:'center'}}>

        
      {member == true ?
      <Ionicons onPress={()=> {setmember(false)}} name='chevron-down-sharp' size={20} color='#616B7B'/>
      :
      <Ionicons onPress={()=> {setmember(true)}} name='chevron-up' size={20} color='#616B7B'/>

      }
      
    </View>


      
    
   

   </TouchableOpacity>


   {member == true ?
  <ScrollView style={{paddingHorizontal:25,marginTop:5,}}>
    <Text style={{fontWeight:'500', fontSize:16, color:'#7D8696'}}>OWNER</Text>
    <TextInput
      placeholder='John Smith'
      mode='outlined'
      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}
     
      />
      <TextInput
      placeholder='lisa_johnson@gmail.com'
      mode='outlined'
      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}
     
      />
          <Text style={{fontWeight:'500',marginTop:20, fontSize:16, color:'#7D8696'}}>ADMIN</Text>
          <TextInput
      placeholder='Clare Peterson'
      mode='outlined'
      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}
     
      />
    <Text style={{fontWeight:'500',marginTop:20, fontSize:16, color:'#7D8696'}}>EDITOR</Text>
    <TextInput
      placeholder='David West'
      mode='outlined'
      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}
     
      />
      <TouchableOpacity 
      onPress={()=> setAddmember(true)}
      style={{marginTop:30, justifyContent:'flex-end'}}>
        <Text style={{fontSize:16, fontWeight:'500',alignSelf:'flex-end', color:'#1C54DB'}}>+  Add</Text>
      
      </TouchableOpacity>

      <View style={{height:100}}>

      </View>
    </ScrollView>

    

      :
      null
      }
      

      {member == false ?

   <View style={{height:2, width:'100%',marginTop:0, backgroundColor:'#E3E3EB'}}>
        </View>
        :
        null}

         </ScrollView>

 
                    <View style={{height:2,
                      
                      shadowColor: "#D5D5EC",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 1,
                      alignSelf:'center', width:deviceWidth, backgroundColor:'#E3E3EB'}}>
        </View>

        <View style={{paddingVertical:2,alignItems:'flex-end',paddingHorizontal:20, justifyContent:'flex-end',width:'100%'}}>

        <TouchableOpacity onPress={()=> {validation()}} style={{marginTop:10, backgroundColor:'#162741',borderRadius:5, justifyContent:'center', height:deviceHeight*0.05, width:deviceWidth*0.2,}}>
          <Text style={{color:'white',fontSize:16,fontWeight:'500', alignSelf:'center'}}>Save</Text>
        </TouchableOpacity>

        </View>

        <View style={{height:15}}>

        </View>


          
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({

  appbar:{
    width:deviceWidth,
    justifyContent:'space-between',
    backgroundColor:'white',
    borderBottomWidth:0.5,
    borderColor:'#D5D5EC',
    paddingHorizontal:20,
    height:deviceHeight*0.08
 },
 StreamList_main:{
  
  width:'100%',
  
 },
 Productslist_main:{
  width:'45%',
  backgroundColor:'white',
  margin:10,
  borderRadius:8,
  padding:6,
  shadowColor: "grey",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 2.84,
  elevation: 2,
 },
 txt:{
  alignSelf:'center', 
  fontSize:22,
   paddingVertical:10,
   color:Appcolors.drakgrey,
 },
 body:{
  width:'100%',
  backgroundColor:'white',
  paddingHorizontal:0,
  height:'95%',
  paddingVertical:10,
  paddingHorizontal:20,
  flex: 1,

 
 },


 Header_txt:{
   alignSelf:'center',
    fontSize:16,
   fontWeight:'500',
  color:Appcolors.drakgrey
 },

  });



export default BecomeaBusiness;;

