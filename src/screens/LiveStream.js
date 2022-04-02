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


const LiveStream = ({route, navigation }) => {


  const [datemodal,setdatemodal] = useState(false)
  const [timemodal,settimemodal] = useState(false)

  const refRBSheet = useRef();

  const [savemodal,setsavemodal] = useState(false)

  const [bottomproducts, setbottomproducts] =useState(true)
  const [img, setimg]= useState(require('../images/1.1.png'))
  const [data , setdata] = useState([
    { id: 1, name: 'Post it' }
  ])
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('Select language');
  const [items, setItems] = useState([
    {label: 'Apple', value: 'apple'},
    {label: 'Banana', value: 'banana'}
  ]);

  const [cameradropdown,setcameradropdown] = useState(false)
  const [cameradropdownvalue,setcameradropdownvalue] = useState([
    {label: 'Front', value: 'Front'},
    {label: 'Back', value: 'Back'},
  ])
  const [cameravalue, setcameravalue] = useState();


  const [Microphonedropdown,setMicrophonedropdown] = useState(false)
  const [Microphonedropdownvalue,setMicrophonedropdownvalue] = useState([
    {label: 'Clothing', value: 'Clothing'},
    {label: 'Electronics', value: 'Electronics'}
  ])
  const [Microphonevalue, setMicrophonevalue] = useState();



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

  const renderLivenow = ({ item, index }) => {  
    return(
      <TouchableOpacity 
      onPress={()=> {navigation.navigate('Login')}}
      style={{height:deviceHeight*0.33, width:'100%', flexDirection:'column', marginTop:20,}}>

      <View style={{paddingVertical:7,width:'20%', flexDirection:'row'}}>
      <ImageBackground  
      style={{width: 30, height: 30, borderRadius: 400/ 2, justifyContent:'flex-end'}} 

      imageStyle={{borderRadius:50,}} source={require('../images/1.5.png')}>
      <View style={{backgroundColor:'red', alignSelf:'flex-end', width:'20%',justifyContent:'center', borderRadius:5,color:'white', padding:5}}>

      </View>
      </ImageBackground>
      <Text style={{marginLeft:10,color:'#616B7B',alignSelf:'center', fontWeight:'500', fontSize:16}}>Nike</Text>
      {/* <Image  style={{height:'100%'}} source={require('../images/1.1.png')}/> */}

      </View>

      <View style={{height:'60%', flexDirection:'row'}}>
      <ImageBackground  style={{height:'100%', width:'100%'}} imageStyle={{borderRadius:5,}} source={require('../images/1.5.png')}>
      <View style={{backgroundColor:'red',alignSelf:'flex-end', width:'19%',justifyContent:'center', fontWeight:'400', margin:15, borderRadius:5,color:'white', padding:5}}>

      <Text style={{fontWeight:'400',fontSize:12, alignSelf:'center', color:'white', }}>Live Now</Text>
      </View>
      </ImageBackground>

      </View>

      <View style={{paddingVertical:5, flexDirection:'row'}}>
      <Text style={{fontWeight:'500', }}>Nike Flyknit spot with Kobe Bryant, Richard Sherman, Allyson Eaton & Mo F...</Text>


      </View>

      <View style={{paddingVertical:5, justifyContent:'space-between', flexDirection:'row'}}>
      <Text style={{color:'#616B7B'}}>English (U.S)</Text>
      <Text style={{color:'#616B7B'}}>3.1K watching</Text>
      

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
          visible={datemodal}
          style={{backgroundColor:'red'}}
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
                width: '75%',
                flexDirection: 'column',
                backgroundColor:'white',
                borderRadius:5,
              }}>
    

           <View style={{borderBottomWidth:0.3,paddingHorizontal:15, justifyContent:'space-between', flexDirection:'row', paddingVertical:7, borderColor:'#D0D3D4'}}>
         
            <TouchableOpacity style={{alignSelf:'center'}} onPress={()=> {setdatemodal(false)}}>

           <MaterialIcons  style={{alignSelf:'center'}} name='arrow-back'  size={25} color='#162741'/>
          </TouchableOpacity>
              <View>
             <Text style={{alignSelf:'center',fontSize:15, fontWeight:'500', paddingVertical:10,}}>Select date</Text>
              </View>

              <View>
             <Text style={{alignSelf:'center',fontSize:15, fontWeight:'500', paddingVertical:10,}}></Text>
              </View>
           </View>

           


           <View style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
             <Text style={{fontSize:15, fontWeight:'400'}}>Today</Text>

             </View>

             <View style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
             <Text style={{fontSize:15, fontWeight:'400'}}>Tomorrow</Text>

             </View>
             <View style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
             <Text style={{fontSize:15, fontWeight:'400'}}>In 2 days</Text>

             </View>
             <View style={{width:'100%', borderBottomWidth:1,borderColor:'#D0D0DE99',paddingVertical:12, paddingHorizontal:20,}}>
             <Text style={{fontSize:15, fontWeight:'400'}}>In 3 days</Text>

             </View>

             <View style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
             <Text style={{fontSize:15, fontWeight:'400'}}>Next week</Text>

             </View>
             <View style={{width:'100%', borderBottomWidth:1,borderColor:'#D0D0DE99',paddingVertical:12, paddingHorizontal:20,}}>
             <Text style={{fontSize:15, fontWeight:'400'}}>Next month</Text>

             </View>
   
             <View style={{width:'100%',borderBottomRightRadius:5,borderBottomLeftRadius:5, backgroundColor:'#EDEDF6',paddingVertical:15, paddingHorizontal:20,}}>
             <Text style={{fontSize:15, fontWeight:'400'}}>Custom</Text>

             </View>


             
           
            </View>
         
          </View>
        </Modal>

        <Modal

transparent={true}
animationType={'fade'}
visible={false}
style={{backgroundColor:'red'}}
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
      width: '75%',
      flexDirection: 'column',
      backgroundColor:'white',
      borderRadius:5,
    }}>


{/* <DateRangePicker
         
          responseFormat="YYYY-MM-DD"
       
        />  */}


 


 <View style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>Today</Text>

   </View>

   <View style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>Tomorrow</Text>

   </View>
   <View style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>In 2 days</Text>

   </View>
   <View style={{width:'100%', borderBottomWidth:1,borderColor:'#D0D0DE99',paddingVertical:12, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>In 3 days</Text>

   </View>

   <View style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>Next week</Text>

   </View>
   <View style={{width:'100%', borderBottomWidth:1,borderColor:'#D0D0DE99',paddingVertical:12, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>Next month</Text>

   </View>

   <View style={{width:'100%',borderBottomRightRadius:5,borderBottomLeftRadius:5, backgroundColor:'#EDEDF6',paddingVertical:15, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>Custom</Text>

   </View>


   
 
  </View>

</View>
      </Modal>

        <Modal
transparent={true}
animationType={'fade'}
visible={timemodal}
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
      width: '75%',
      flexDirection: 'column',
      backgroundColor:'white',
      borderRadius:5,
    }}>


 <View style={{borderBottomWidth:0.3,paddingHorizontal:15, justifyContent:'space-between', flexDirection:'row', paddingVertical:7, borderColor:'#D0D3D4'}}>

  <TouchableOpacity style={{alignSelf:'center'}} onPress={()=> {settimemodal(false)}}>

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


   <View style={{width:'100%',borderBottomRightRadius:5,borderBottomLeftRadius:5, backgroundColor:'#EDEDF6',paddingVertical:15, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>Custom</Text>

   </View>


   
 
  </View>

</View>
      </Modal>


<Modal
transparent={true}
animationType={'fade'}
visible={savemodal}
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
      width: '75%',
      paddingVertical:10,
      flexDirection: 'column',
      backgroundColor:'white',
      borderRadius:5,
    }}>


 <View style={{paddingHorizontal:25,justifyContent:'flex-start', flexDirection:'row', paddingVertical:7, }}>

  
    <View>
   <Text style={{alignSelf:'center',fontSize:15, fontWeight:'700', paddingVertical:7,}}>Post stream</Text>
    </View>

    
 </View>

 


 <View style={{width:'100%', paddingVertical:7, paddingHorizontal:25,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>Would you like to post the stream?</Text>

   </View>

   <View style={{width:'100%',paddingVertical:15,flexDirection:'row', paddingHorizontal:25,justifyContent:'space-between'}}>
   <TouchableOpacity onPress={()=> {setsavemodal(false)}} style={{marginTop:10, borderRadius:5, justifyContent:'center',borderWidth:1,borderColor:'E3E3EB' ,height:deviceHeight*0.05, width:deviceWidth*0.2,}}>
          <Text style={{color:'black',fontSize:16,fontWeight:'500', alignSelf:'center'}}>No</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {setsavemodal(false)}} style={{marginTop:10, backgroundColor:'#162741',borderRadius:5, justifyContent:'center', height:deviceHeight*0.05, width:deviceWidth*0.2,}}>
          <Text style={{color:'white',fontSize:16,fontWeight:'500', alignSelf:'center'}}>Yes</Text>
        </TouchableOpacity>
   </View>
  


   
 
  </View>

</View>
</Modal>



      


        <Appbar style={styles.appbar}>

      <MaterialIcons  onPress={()=> {navigation.goBack()}} name='arrow-back'  size={25} color='#616B7B'/>
  
      <Text style={{fontWeight:'500', fontSize:18}}>Live Stream</Text>

<View>

  <Text></Text>
</View>
        </Appbar>



      


        <View style={styles.body}>

          <ScrollView style={{paddingVertical:0}}>


    <ImageBackground style={{height:deviceHeight*0.27, width:deviceWidth}} source={require('../images/Rectangle486.png')}>  
      </ImageBackground>

<View style={{paddingHorizontal:20, marginTop:25}}>

        <Text style={{fontSize:18,color:'#162741', fontWeight:'500'}}>Settings</Text>

        <Text style={{marginTop:20, fontWeight:'400', fontSize:16}}>Camera</Text>

       
        <DropDownPicker
      open={cameradropdown}
      value={cameravalue}
      items={cameradropdownvalue}
      placeholder="Select Camera"
      setOpen={setcameradropdown}
      setValue={setcameradropdownvalue}
      defaultValue='sd'
      textStyle={{
        fontSize: 15,
        color:'#162741'

      }}
      style={{
        borderColor:'#E3E3EB',
        marginTop:20,
        marginBottom:cameradropdown == true ? '30%': '0%',
        
      }}
      dropDownContainerStyle={{
       
        marginBottom:cameradropdown == true ? '30%': '0%',
        marginTop:cameradropdown == true ? 15: 0,
        borderWidth:1,
       borderColor: '#E3E3EB',
      }}
      containerStyle={{
        
        borderColor:'#E3E3EB'
      }}
      setItems={setItems}
    />


       <Text style={{marginTop:20, fontWeight:'400',color:'#162741', fontSize:16}}>Microphone</Text>

       
       <DropDownPicker
      open={Microphonedropdown}
      value={Microphonevalue}
      items={Microphonedropdownvalue}
      placeholder="Select Microphone"
      setOpen={setMicrophonedropdown}
      setValue={setMicrophonedropdownvalue}
      textStyle={{
        fontSize: 15,
        color:'#162741'

      }}
      style={{
        borderColor:'#E3E3EB',
        marginTop:20,
        marginBottom:Microphonedropdown == true ? '30%': '0%',
        
      }}
      dropDownContainerStyle={{
       
        marginBottom:Microphonedropdown == true ? '30%': '0%',
        marginTop:Microphonedropdown == true ? 15: 0,
        borderWidth:1,
       borderColor: '#E3E3EB',
      }}
      containerStyle={{
        
        borderColor:'#E3E3EB'
      }}
      setItems={setItems}
    />



</View>



        <View style={{marginTop:30,}}>

        </View>
{/* 
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

        <View style={{paddingVertical:2,alignItems:'flex-end',paddingHorizontal:2, justifyContent:'flex-end',width:'100%'}}>

        <TouchableOpacity onPress={()=> {validation()}} style={{marginTop:10, backgroundColor:'#162741',borderRadius:5, justifyContent:'center', height:deviceHeight*0.05, width:deviceWidth*0.2,}}>
          <Text style={{color:'white',fontSize:16,fontWeight:'500', alignSelf:'center'}}>Save</Text>
        </TouchableOpacity>

        </View> */}

         


        
        
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

        <View style={{paddingVertical:5,alignItems:'flex-end',paddingHorizontal:20, justifyContent:'flex-end',width:'100%'}}>

        <TouchableOpacity onPress={()=> {}} style={{marginTop:10, backgroundColor:'#EFEFEF',borderRadius:5, justifyContent:'center', height:deviceHeight*0.05, width:deviceWidth*0.2,}}>
          <Text style={{color:'#959595',fontSize:16,fontWeight:'500', alignSelf:'center'}}>Start</Text>
        </TouchableOpacity>

        </View>
  </View>


  
  
        </SafeAreaView>
      </TouchableWithoutFeedback>
    );
}

export default LiveStream;


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


  flex: 1,

 
 },


 Header_txt:{
   alignSelf:'center',
    fontSize:16,
   fontWeight:'500',
  color:Appcolors.drakgrey
 },

  });