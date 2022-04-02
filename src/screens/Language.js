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
import Appcolors from '../AppColors/Appcolors.js';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
import SvgUri from 'react-native-svg-uri'; // SVG Package




const Language = ({route ,navigation }) => {


  const [Logincheck , setLogincheck] = useState(AppConstance.LOGIN)
  const [Rolecheck , setRolecheck] = useState(AppConstance.ROLE)

  const [data  , setdata] = useState([
    {
      name:'English (US)',
      icon:require('../images/Languages/English.png'),
      check:true,
    },
    {
      name:'German (Deutsch)',
      icon:require('../images/Languages/German.png'),
      check:false,
    },
    {
      name:'Arabic (عربي)',
      icon:require('../images/Languages/Arabic.png'),
      check:false,
    },
    {
      name:'Turkish (Türkçe)',
      icon:require('../images/Languages/Turkish.png'),
      check:false,
    },
    {
      name:'Russian (русский)',
      icon:require('../images/Languages/Russian.png'),
      check:false,
    },
    {
      name:'Spanish (Español, MX)',
      icon:require('../images/Languages/Spanish.png'),
      check:false,
    },

    {
      name:'Italian (Italiano)',
      icon:require('../images/Languages/Italian.png'),
      check:false,
    },
    {
      name:'Portuguese (português, BR)',
      icon:require('../images/Languages/PortugueseBR.png'),
      check:false,
    },
    {
      name:'Portuguese (português, PT)',
      icon:require('../images/Languages/PortuguesePT.png'),
      check:false,
    },
    {
      name:'Bulgarian (български)',
      icon:require('../images/Languages/Bulgarian.png'),
      check:false,
    },
    
  ])

useEffect(() => {

  return () => {
    
  }
}, [])

const renderLivenow = ({ item, index }) => {  
  return(
   <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between', borderRadius:5,height:60,paddingHorizontal:15, width:'100%'}}>

    <View style={{ width:'70%', flexDirection:'row', }}>
    <View style={{width:'20%',justifyContent:'center', }}>
    {/* <SvgUri
      style={{alignSelf:'center'}}
      source={item.icon}
    /> */}
    <Image style={{width:30, height:30}} source={item.icon}/>
    </View>
      <View style={{marginLeft:15, justifyContent:'center'}}>
      <Text style={{alignSelf:'center',textAlign:'left', fontSize:16, fontWeight:'500', marginLeft:0,}}>{item.name}</Text>
    </View>
    </View>


    <View style={{justifyContent:'center'}}>
      {item.check == true?

      
      <Ionicons name='checkmark-circle-sharp' color='#1C54DB' style={{alignSelf:'center'}} size={25}/>

      :
      <Ionicons name='radio-button-off-sharp' color='#7D8696BF' style={{alignSelf:'center'}} size={25}/>


      

    }
    </View>
   

   </TouchableOpacity>

  );



}


    return (
        <SafeAreaView style={{backgroundColor:"white", flex: 1 ,width:deviceWidth,height:deviceHeight}}>

         <ScrollView style={{paddingHorizontal:25, paddingVertical:20,}}>



           <View style={{justifyContent:'center',paddingVertical:10}}>

             <Image style={{alignSelf:'center', }} source={require('../images/image10.png')}/>

            <Text style={{fontSize:16,marginTop:5, alignSelf:'center', fontWeight:'400', color:'#162741'}}>Lisa Johnson</Text>

            <Text style={{fontSize:16,alignSelf:'center', marginTop:5, fontWeight:'400', color:'#162741'}}>lisa_johnson@gmail.com</Text>

           </View>


           <View style={{height:2,marginTop:20,alignSelf:'center', width:deviceWidth, backgroundColor:'#E3E3EB'}}>
        </View>

        <Text style={{fontSize:16, marginTop:15, fontWeight:'700', color:'#162741'}}>Language</Text>


        <FlatList
         contentInsetAdjustmentBehavior="automatic"
         data={data}
  
         contentContainerStyle={{height:'100%' ,width:'100%', marginTop:0, alignSelf:'center',marginTop:15, paddingHorizontal:2,  }}
         renderItem={renderLivenow}
         keyExtractor={(item,id) => id.toString()}
         />  

   



         </ScrollView>

         <View style={{height:2,
                      
                      shadowColor: "#D5D5EC",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
                      alignSelf:'center', width:deviceWidth, backgroundColor:'#E3E3EB'}}>
        </View>



         <View style={{paddingVertical:2,width:'20%', paddingHorizontal:20,}}>

<TouchableOpacity onPress={()=> {navigation.goBack()}} style={{marginTop:10,borderRadius:5, justifyContent:'flex-start', }}>
<MaterialIcons  onPress={()=> {navigation.goBack()}} name='arrow-back'  size={25} color='#616B7B'/>
</TouchableOpacity>

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

export default Language;