import React,{useState , useRef} from 'react';
import {
    SafeAreaw,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableWithoutFeedback,
    FlatList,
    ImageBackground,
    TouchableOpacity,
    TextInput,
    Image,
    Keyboard,
    Modal,
    Button,
    SafeAreaView
} from 'react-native';
import AppConstance, {
    deviceHeight,
    deviceWidth,
  } from '../constance/AppConstance.js';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

import SvgUri from 'react-native-svg-uri'; // SVG Package
import * as ImagePicker from "react-native-image-picker"

import Dateicon from '../images/gLive_Icons/Schedule/date_icon.svg'
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import BottomTabs from './BottomTabs';
import { Appbar, Card } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { SliderBox } from "react-native-image-slider-box";
import Appcolors from '../AppColors/Appcolors.js';
import App from '../../App.js';
import CheckboxList from 'rn-checkbox-list';
import { validationCondition } from 'jest-validate/build/condition';
import ImageCropPicker from 'react-native-image-crop-picker';
// import BottomSheet from "react-native-bottomsheet-reanimated";
import RNPickerSelect from 'react-native-picker-select';
import DropDownPicker from 'react-native-dropdown-picker';
import ModalDropdown from 'react-native-modal-dropdown';
import DateRangePicker from "rnv-date-range-picker";
import SwipeablePanel from 'react-native-sheets-bottom';
import BottomSheet from "react-native-swipeable-bottom-sheet"
import RBSheet from "react-native-raw-bottom-sheet";

const  images1= [
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?girl",
  "https://source.unsplash.com/1024x768/?tree",
]


const Golive = ({route, navigation }) => {


  const [editmodal,seteditmodal] = useState(false)
  const [timemodal,settimemodal] = useState(false)

  const refRBSheet = useRef();

  const [savemodal,setsavemodal] = useState(false)

  const [bottomproducts, setbottomproducts] =useState(true)
  const [img, setimg]= useState(null)
  const [data , setdata] = useState([
    { id: 1, name: 'Post it' }
  ])
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Select language');
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);
  const [category , setcategory] = useState([
    {
      id:1,
      Productname:'Nike shoes',
      date : 'Feb. 15 at 3:30 '

    },
    {
      id:2,
      Productname:'Products on sale',
      date : 'Feb. 15 at 3:30 '
    },
    {
      id:3,
      Productname:'Latest products stream',
      date : 'Feb. 15 at 3:30 '
    },
   
    
  ])




  const validation = ()=>{
    setsavemodal(true)
  }

  const chooseFile = async() => {

    ImageCropPicker.openPicker({
          multiple: false,
          compressImageQuality:0.7
        }).then(images1 => {
          // if(images[0] == require('../Images/noimage3.jpeg')){
          //   images.pop();
          //   setclose(true)
          // }
          setimg(images1.path)
  
  
        });
  
  };

  const TakePhoto = async (type) => {
    let options = {
      
      quality: 0.8,
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: false,
    };
    // let isCameraPermitted = await requestCameraPermission();
    // let isStoragePermitted = await requestExternalWritePermission();
    // if (isCameraPermitted && isStoragePermitted) {
      ImagePicker.launchCamera(options, (response) => {
        console.log('Response = ', response);
  
        if (response.didCancel) {
          // alert('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }else{
         
       
        }
  
      });
    
  };

  const renderProductslist = ({ item, index }) => {  
    return(
      <TouchableOpacity 
      onPress={()=> {navigation.navigate('LiveStream')}}
      style={{marginTop:10, borderColor:'#E3E3EB', height:deviceHeight*0.08, flexDirection:'row', width:'100%', borderWidth:1, borderRadius:5,}}>
          <View style={{justifyContent:'space-evenly',paddingHorizontal:'5%', height:'100%', width:'85%'}}>
            <Text style={{fontSize:16,fontWeight:'500', color:'#162741'}}>{item.Productname}</Text>
            <Text style={{fontSize:14, color:'#616B7B'}}>{item.date}</Text>
          </View>

          <View style={{height:'100%',justifyContent:'center', width:'15%'}}>

          <TouchableOpacity
          onPress={()=> {seteditmodal(true); }}
          style={{alignSelf:'center',width:'60%',height:'50%',justifyContent:'center', }}>
          <SvgUri
                          style={{alignSelf:'center',}}
                          source={require('../images/gLive_Icons/GoLive&Stream/edit_stream_icon.svg')}
                        />
            </TouchableOpacity>
        
          </View>
      </TouchableOpacity>
  
    );
  
  
  
  }
  


    return (
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

      <SafeAreaView style={{height:deviceHeight, width:deviceWidth}}> 
      <StatusBar barStyle='default' />
     

      <Modal

transparent={true}
animationType={'fade'}
visible={editmodal}
style={{backgroundColor:'red'}}
onRequestClose={() => {

  console.log('close modal');
}}>
<TouchableOpacity
onPress={()=> {seteditmodal(false)}}
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
      width: '85%',
      flexDirection: 'column',
      backgroundColor:'white',
      borderRadius:5,
    }}>







      <TouchableOpacity 
      onPress={()=> {seteditmodal(false); navigation.navigate('LiveStream')}}
      style={{width:'100%',paddingVertical:15, flexDirection:'row',paddingHorizontal:15, borderBottomWidth:1,borderColor:'#D0D0DE99', alignSelf:'center'}}>
      <SvgUri
                          style={{alignSelf:'center',marginLeft:10,}}
                          source={require('../images/gLive_Icons/Login/go_live_icon.svg')}
                        />
        <Text style={{fontSize:15,color:'#162741',marginLeft:20, fontWeight:'400'}}>Go Live</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        onPress={()=> {seteditmodal(false); navigation.navigate('schedulealivestreamgolive')}}
        style={{width:'90%', flexDirection:'row', alignSelf:'center'}}>
      <SvgUri
                          style={{alignSelf:'center',marginLeft:10,}}
                          source={require('../images/gLive_Icons/GoLive&Stream/edit_icon.svg')}
                        />
        <Text style={{fontSize:15,color:'#162741',paddingVertical:15,marginLeft:20, fontWeight:'400'}}>Edit</Text>
        </TouchableOpacity>

  


   
 
  </View>

</TouchableOpacity>
</Modal>

     
        <Appbar style={styles.appbar}>

      <MaterialIcons  onPress={()=> {navigation.goBack()}} name='arrow-back'  size={25} color=''/>
  
      <Text style={{fontWeight:'500', fontSize:18}}>Go Live</Text>

<View>

  <Text></Text>
</View>
        </Appbar>




        <View style={styles.body}>

          <ScrollView style={{width:'95%', alignSelf:'center',}}>





        <TouchableOpacity 
        onPress={()=> {navigation.navigate('LiveStream')}}
        style={{borderRadius:5,height:50,marginTop:15, flexDirection:'row', justifyContent:'center', backgroundColor:'#E91327'}}>


        <View style={{width:'30%',alignSelf:'center', height:'100%',flexDirection:'row', justifyContent:'space-between',}}>

        <SvgUri
                          style={{alignSelf:'center',}}
                          source={require('../images/gLive_Icons/Login/go_live_icon.svg')}
                        />
          <Text style={{fontSize:18,color:'white', alignSelf:'center', fontWeight:'500'}}>Go Live</Text>

        </View>
          </TouchableOpacity>

        <Text style={{marginTop:25, fontSize:18, fontWeight:'500'}}>Scheduled Streams</Text>
      




        <FlatList
              contentInsetAdjustmentBehavior="automatic"
              data={category}
              contentContainerStyle={{height:'80%',marginTop:20, alignSelf:'center',width:'100%', paddingHorizontal:2,  }}
              renderItem={renderProductslist}
              keyExtractor={(item,id) => id.toString()}
              /> 


      </ScrollView>



  </View>


  
  
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
}

export default Golive;


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
  justifyContent:'center',
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