import React,{useState, useEffect} from 'react';
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
  Modal,
    SafeAreaView
} from 'react-native';
import AppConstance, {
    deviceHeight,
    deviceWidth,
  } from '../constance/AppConstance.js';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';

import ModalDropdown from 'react-native-modal-dropdown';

 import { Button, Menu, Divider, Provider } from 'react-native-paper';
 import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';
 
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import BottomTabs from './BottomTabs';
import { Appbar, Card } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { SliderBox } from "react-native-image-slider-box";
import Appcolors from '../AppColors/Appcolors.js';
import App from '../../App.js';
import Icon from 'react-native-vector-icons'
import SvgUri from 'react-native-svg-uri'; // SVG Package

import RNPopover from 'react-native-popover-menu';

const copy = <Icon family={'FontAwesome'} name={'copy'} color={'#000000'} size={30} />
const paste = <Icon family={'FontAwesome'} name={'paste'} color={'#000000'} size={30} />
const share = <Icon family={'FontAwesome'} name={'share'} color={'#000000'} size={30} />

const  images1= [
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?girl",
  "https://source.unsplash.com/1024x768/?tree",
]

const ProfileCatalogue = ({route, navigation }) => {

  const [Productsvisible,setProductsvisible] = useState(false)
  const [login , setlogin] =useState(true)
  const [role, setrole] = useState(0)
const [plus, setPlus] = useState(false);
const [search , setsearch]= useState(true)
const openMenu = () => setPlus(true);

const closeMenu = () => setPlus(false);
const [data , setdata] = useState([
  { id: 1,active:'1', name: 'Post it' },
  { id: 1, active:'1',name: 'Post it' },
  { id: 1, active:'0',name: 'Post it' },
 

])
const [PreviousLivestreams, setPreviousLivestreams]= useState(false);
const [ScheduledLivestreams, setScheduledLivestreams]= useState(false);
const [Livestreamsnoposted, setLivestreamsnoposted]= useState(false);

const [sh, setsh]=useState(true)
  const items = [
    { id: 'edit', label: 'Edit' },
    { id: 'delete', label: 'Delete' },
  ];



  const [category , setcategory] = useState([
    {
      id:1,
      CategoryName:'Made for the Sports Quiz at Sardar Pate...',
      active : 0,
      streamdate:'Streamed 2 days ago',
      img:require('../images/image6.png'),



    },
    {
      id:2,

      CategoryName:'Laugh Now Cry Later’ featuring Lil Durk, t...',
      active : 0,
      streamdate:'Streamed Jan, 30, 2021',
      img:require('../images/image8.png'),



    },
    {
      id:3,
      CategoryName:'Off White founder Virgil Abloh and Ni...',
      active : 0,
      streamdate:'Streamed Jan, 30, 2021',
      img:require('../images/image7.png'),




    },
   
  ])

  const renderLivenow = ({ item, index }) => {  

    

    return(
      <TouchableOpacity 
      onPress={()=> {
        if(item.active == '1'){
          let markers = [ ...data];
          markers[index] = {...markers[index], active: '0'};
          setdata(markers)
          // this.setState({ markers });
          
            console.log(JSON.stringify(markers))



        //   let temp_state = [...data];
        //     alert(temp_state)
        // objIndex = temp_state.findIndex((obj => obj.active == '0'));
        // // alert(objIndex)
        // console.log("Before update: ", temp_state[objIndex])

        // //Update object's name property.
        // temp_state[objIndex].active = "0"
        
        // //Log object to console again.
        // console.log("After update: ", temp_state[objIndex])
        // setdata(temp_state)

      } else{
        let markers = [ ...data];
        markers[index] = {...markers[index], active: '1'};
        setdata(markers)
        
      }

      }}
      style={{height:deviceHeight*0.11,borderRadius:5,borderWidth:1,borderColor:'#E3E3EB',  backgroundColor:item.active==1?'#EDEDF6':'white', width:'100%', flexDirection:'row', marginTop:10,}}>

        <View style={{width:'30%', padding:8,}}>

        <Image style={{width:'100%', height:'100%'}}  source={require('../images/nikeshoe.png')}/> 
        </View>

        <View style={{paddingHorizontal:10, width:'67%', justifyContent:'space-evenly'}}>
          <Text  style={{color:'#162741',  fontWeight:'500'}}>Nike ZoomX Vaporfly NEXT% 2...</Text>
          <Text style={{color:'#616B7B', fontSize:12, fontWeight:'400'}}>Men’s Road Racing Shoes</Text>
         <View style={{flexDirection:'row',justifyContent:'space-between'}}>

          <Text style={{color:'#162741', fontSize:12, fontWeight:'500'}}>£234.95</Text>
         {item.active==1?
          <Ionicons name='checkmark' size={20} color='#162741'/>
          :
         null
          }
          </View>

        </View>




      </TouchableOpacity>
  
    );
  
  
  
  }
  
  const renderProducts = ({ item, index }) => {  
    return(
     <TouchableOpacity style={{borderColor:'#E3E3EB',borderRadius:5,marginLeft:0, width:deviceWidth*0.41, margin:5,}}>

        <Image style={{width:'100%',height:deviceHeight*0.13, borderRadius:10, }}  resizeMode='cover' resizeMethod='resize'imageStyle={{borderRadius:10,}} source={item.img}/>

        <View>
          <Text style={{marginTop:7,fontSize:12,fontWeight:'500', color:'#162741'}}>{item.CategoryName}</Text>
          <Text style={{marginTop:5,color:'#616B7B'}}>{item.streamdate}</Text>

        </View>

     </TouchableOpacity>
  
    );
  
  
  
  }
  
  // useEffect(() => {

    
  //  if(AppConstance.LOGIN == 1){
  //    setlogin(true)
  //    if(AppConstance.ROLE == 1){
  //     setrole(1)

  //    }
  //    else if (AppConstance.ROLE == 0 ){
  //      setrole(0)
  //    }else{
  //      setrole(3)
  //    }

  //  }else{
  //    setlogin(0)
  //    setrole(3)
  //  }
   
    
  //   }, [])


    return (
    <Provider>

      <SafeAreaView style={{height:deviceHeight,backgroundColor:'white', width:deviceWidth}}> 
      <StatusBar barStyle='default'   />
  

   

      <Modal
transparent={true}
animationType={'fade'}
visible={false}
onRequestClose={() => {

  console.log('close modal');
}}>
<View
  style={{
  
    justifyContent: 'center',
    paddingVertical: 10,
    height:deviceHeight,
    backgroundColor:'white',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
  <View
    style={{
      width: '100%',
      height:'100%',
      flexDirection: 'column',
      backgroundColor:'white',
      borderRadius:5,
      paddingVertical:30,
    }}>


<Appbar style={styles.appbar}>

<MaterialIcons  onPress={()=> {navigation.goBack()}} name='arrow-back'  size={25} color='#616B7B'/>

    <View style={{borderColor:'#E3E3EB',borderRadius:30,width:'80%',paddingHorizontal:20, justifyContent:'center', height:'65%', borderWidth:1,}}>

<Text style={{fontWeight:'400', fontSize:16}}>Enter keyword</Text>

</View>

<View>

<Text></Text>
</View>
  </Appbar>
 <View style={{borderBottomWidth:0.3,paddingHorizontal:15, justifyContent:'space-between', flexDirection:'row', paddingVertical:7, borderColor:'#D0D3D4'}}>

  <TouchableOpacity style={{alignSelf:'center'}} onPress={()=> {setsearch(false)}}>

 <MaterialIcons  style={{alignSelf:'center'}} name='arrow-back'  size={25} color='#162741'/>
</TouchableOpacity>
    <View>
   <Text style={{alignSelf:'center',fontSize:15, fontWeight:'500', paddingVertical:10,}}>Select time</Text>
    </View>

    <View>
   <Text style={{alignSelf:'center',fontSize:15, fontWeight:'500', paddingVertical:10,}}></Text>
    </View>
 </View>

 


 <View style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>In 30 minutes</Text>

   </View>

   <View style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>In 1 hour</Text>

   </View>
   <View style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>In 2 hours</Text>

   </View>
   <View style={{width:'100%', borderBottomWidth:1,borderColor:'#D0D0DE99',paddingVertical:12, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>In 4 hours</Text>

   </View>

   <View style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>In 8 hours</Text>

   </View>


   <TouchableOpacity 
   onPress={()=> {settimemodal2(true);settimemodal(false)}}
   style={{width:'100%',borderBottomRightRadius:5,borderBottomLeftRadius:5, backgroundColor:'#EDEDF6',paddingVertical:15, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>Custom</Text>

   </TouchableOpacity>


   
 
  </View>

</View>
      </Modal>

     
      <Appbar style={styles.appbar}>

<MaterialIcons  onPress={()=> {navigation.goBack()}} name='arrow-back'  size={25} color='#616B7B'/>

<Text style={{fontWeight:'500', fontSize:18}}>Catalogue</Text>

<View>

<Text></Text>
</View>
  </Appbar>

        <ScrollView style={styles.body}>
       
       

       <View style={{flexDirection:'row', paddingHorizontal:20,marginTop:10,justifyContent:'space-between'}}>
       <Text style={{alignSelf:'center',textAlign:'left', fontSize:16, fontWeight:'500', marginLeft:0,}}>Products</Text>

       <Text style={{alignSelf:'center',color:'#1C54DB', textAlign:'left', fontSize:18, fontWeight:'500', marginLeft:0,}}>+ Add</Text>

         </View>

            



        <View style={{padding:5,marginTop:30, paddingHorizontal:20}}>
          <Text style={{fontWeight:'500',fontSize:16, color:'#162741'}}>Shoes</Text>

 <View style={{width:'100%', paddingVertical:12, paddingHorizontal:20,}}>
<FlatList
         contentInsetAdjustmentBehavior="automatic"
         data={data}
         contentContainerStyle={{width:'100%', marginTop:0, alignSelf:'center', paddingHorizontal:2,  }}
         renderItem={renderLivenow}
         keyExtractor={(item,id) => id.toString()}
         extraData={this.state}
         />  
         
   </View>
  </View>

  <View style={{padding:5,marginTop:10, paddingHorizontal:20}}>
          <Text style={{fontWeight:'500',fontSize:16, color:'#162741'}}>Clothing</Text>

 <View style={{width:'100%', paddingVertical:12, paddingHorizontal:20,}}>
<FlatList
         contentInsetAdjustmentBehavior="automatic"
         data={data}
         contentContainerStyle={{width:'100%', marginTop:0, alignSelf:'center', paddingHorizontal:2,  }}
         renderItem={renderLivenow}
         keyExtractor={(item,id) => id.toString()}
         extraData={this.state}
         />  
         
   </View>
  </View>

 
 
</ScrollView>

         
  
  
        </SafeAreaView>
        </Provider>
    );
}

export default ProfileCatalogue;


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
  height:'91%',
  flex:1,
  paddingVertical:0,
  paddingHorizontal:0,
 
 },


 Header_txt:{
   alignSelf:'center',
    fontSize:16,
   fontWeight:'500',
  color:Appcolors.drakgrey
 },

  });