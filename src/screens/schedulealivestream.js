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
    SafeAreaView,
    Platform
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
import ModalDropdown from 'react-native-modal-dropdown';
import DateRangePicker from "rnv-date-range-picker";
import SwipeablePanel from 'react-native-sheets-bottom';
import BottomSheet from "react-native-swipeable-bottom-sheet"
import RBSheet from "react-native-raw-bottom-sheet";
import {Picker} from '@react-native-picker/picker';
// import DatePicker from 'react-native-date-picker'
import DatePicker from 'react-native-neat-date-picker'
import NumericInput from 'react-native-numeric-input'
import RadioButtonRN from 'radio-buttons-react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { set } from 'react-native-reanimated';

const  images1= [
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?girl",
  "https://source.unsplash.com/1024x768/?tree",
]

const colorOptions = {
  headerColor:'white',
  backgroundColor:'white',
  headerTextColor:"#162741",
  changeYearModalColor:'#737D8DB2',
  weekDaysColor:'#737D8DB2',
  selectedDateBackgroundColor:'#1C54DB',

}
const schedulealivestream = ({route, navigation }) => {

  const [showDatePicker, setShowDatePicker] = useState(false)

  const openDatePicker = () => {
    setShowDatePicker(true)
  }

  const onCancel = () => {
    // You should close the modal in here
    setShowDatePicker(false)
    
  }

  const onConfirm = ( date ) => {
    // You should close the modal in here
    setShowDatePicker(false)
    
    // alert('ji')
    // The parameter 'date' is a Date object so that you can use any Date prototype method.
    console.log(date.dateString)
    setDate(date.dateString)
  }

  const [linkedProduct,setlinkedProduct ]= useState(false)
  const [post, setpost]= useState(false)
  const [decided, setdecided] = useState(false)
  const [datemodal,setdatemodal] = useState(false)
  const [timemodal,settimemodal] = useState(false)
  const [timemodal2 , settimemodal2]= useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [date, setDate] = useState('yyyy/mm/dd')
  // const [open, setOpen] = useState(false)
  const [timeAmPM, settimeAmPM]=useState(false)
  const refRBSheet = useRef();
  const [checked ,setchecked] = useState('First')
  const [savemodal,setsavemodal] = useState(false)
  const [hours, sethours] = useState('hh')
  const [minutes, setminutes] = useState('mm')
  const [bottomproducts, setbottomproducts] =useState(true)
  const [img, setimg]= useState(null)
  const [data , setdata] = useState([
    { id: 1,active:'1', name: 'Post it' },
    { id: 1, active:'1',name: 'Post it' },
    { id: 1, active:'0',name: 'Post it' },
    { id: 1, active:'0',name: 'Post it' },
    { id: 1, active:'1',name: 'Post it' },

  ])
  const [open, setOpen] = useState(false);
  
  const [langdropdown,setlangdropdown] = useState(false)
  const [langdropdownvalue,setlangdropdownvalue] = useState([
    {label: 'English', value: 'English'},
    {label: 'German', value: 'German'},
    {label: 'German', value: 'German'}
  ])
  const [langvalue, setlangvalue] = useState('Select language');


  const [catdropdown,setcatdropdown] = useState(false)
  const [catdropdownvalue,setcatdropdownvalue] = useState([
    {label: 'Clothing', value: 'Clothing'},
    {label: 'Electronics', value: 'Electronics'}
  ])
  const [catvalue, setcatvalue] = useState('Select language');


  const [value, setValue] = useState('Select language');
  const [items, setItems] = useState([
    {label: 'item1', value: 'item1'},
    {label: 'item2', value: 'item2'}
  ]);
  const [category , setcategory] = useState([
    {
      id:1,
      CategoryName:'Art & Crafts',
      active : 0

    },
    {
      id:2,

      CategoryName:'Automotive',
      active : 0


    },
    {
      id:3,
      CategoryName:'Art & Crafts',
      active : 0


    },
    {
      id:4,

      CategoryName:'Automotive',
      active : 0


    },
    {
      id:5,

      CategoryName:'Art & Crafts',
      active : 0


    },
    {
      id:6,

      CategoryName:'Automotive',
      active : 0


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
          setimg(response.assets[0].uri)

       
        }
  
      });
    
  };

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
  


    return (
      // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

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

           


           <TouchableOpacity 
           onPress={()=> {new Date().toDateString(); }}
           style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
             <Text style={{fontSize:15, fontWeight:'400'}}>Today</Text>

             </TouchableOpacity>

             <TouchableOpacity style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
             <Text style={{fontSize:15, fontWeight:'400'}}>Tomorrow</Text>

             </TouchableOpacity>
             <TouchableOpacity style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
             <Text style={{fontSize:15, fontWeight:'400'}}>In 2 days</Text>

             </TouchableOpacity>
             <TouchableOpacity style={{width:'100%', borderBottomWidth:1,borderColor:'#D0D0DE99',paddingVertical:12, paddingHorizontal:20,}}>
             <Text style={{fontSize:15, fontWeight:'400'}}>In 3 days</Text>

             </TouchableOpacity>

             <TouchableOpacity style={{width:'100%',borderBottomWidth:1,borderColor:'#D0D0DE99', paddingVertical:12, paddingHorizontal:20,}}>
             <Text style={{fontSize:15, fontWeight:'400'}}>Next week</Text>

             </TouchableOpacity>
             <TouchableOpacity style={{width:'100%', borderBottomWidth:1,borderColor:'#D0D0DE99',paddingVertical:12, paddingHorizontal:20,}}>
             <Text style={{fontSize:15, fontWeight:'400'}}>Next month</Text>

             </TouchableOpacity>
   
             <TouchableOpacity onPress={()=> {setdatemodal(false); openDatePicker()}} style={{width:'100%',borderBottomRightRadius:5,borderBottomLeftRadius:5, backgroundColor:'#EDEDF6',paddingVertical:15, paddingHorizontal:20,}}>
             <Text style={{fontSize:15, fontWeight:'400'}}>Custom</Text>

             </TouchableOpacity>


             
           
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


   <TouchableOpacity 
   onPress={()=> {settimemodal2(true);settimemodal(false)}}
   style={{width:'100%',borderBottomRightRadius:5,borderBottomLeftRadius:5, backgroundColor:'#EDEDF6',paddingVertical:15, paddingHorizontal:20,}}>
   <Text style={{fontSize:15, fontWeight:'400'}}>Custom</Text>

   </TouchableOpacity>


   
 
  </View>

</View>
      </Modal>



      <Modal
transparent={true}
animationType={'fade'}
visible={timemodal2}
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
      width: '80%',
      flexDirection: 'column',
      backgroundColor:'white',
      borderRadius:5,
    }}>


 <View style={{borderBottomWidth:0.3,paddingHorizontal:15, justifyContent:'space-between', flexDirection:'row', paddingVertical:7, borderColor:'#D0D3D4'}}>

  <TouchableOpacity style={{alignSelf:'center'}} onPress={()=> {settimemodal2(false); settimemodal(true)}}>

 <MaterialIcons  style={{alignSelf:'center'}} name='arrow-back'  size={25} color='#162741'/>
</TouchableOpacity>
    <View>
   <Text style={{alignSelf:'center',fontSize:15, fontWeight:'500', paddingVertical:10,}}>Set time</Text>
    </View>

    <View>
   <Text style={{alignSelf:'center',fontSize:15, fontWeight:'500', paddingVertical:10,}}></Text>
    </View>
 </View>

 


 <View style={{width:'100%',borderBottomWidth:1,justifyContent:'space-evenly', borderColor:'#D0D0DE99',flexDirection:'row', paddingVertical:20, paddingHorizontal:20,}}>
 <NumericInput type='up-down'
 minValue={0}
 maxValue={24}
 textColor='#162741'
 rounded
 totalWidth={deviceWidth*0.18}
 totalHeight={deviceHeight*0.065}
 onChange={value => sethours(value)} />
<Text style={{alignSelf:'center', fontSize:20}}>:</Text>
<NumericInput type='up-down'
 minValue={0}
 
 maxValue={60}
 textColor='#162741'
 rounded
 totalWidth={deviceWidth*0.18}
 totalHeight={deviceHeight*0.065}
 
 onChange={value2 => setminutes(value2)} />


   </View>

   <View style={{width:'100%',borderBottomRightRadius:5,borderBottomLeftRadius:5, backgroundColor:'#EDEDF6',paddingVertical:15, paddingHorizontal:20,}}>
    <TouchableOpacity  
    onPress={()=> {settimemodal2(false)}}
    style={{backgroundColor:'#162741',justifyContent:'center', height:40,borderRadius:5, width:'35%', alignSelf:'flex-end'}}>
      <Text style={{fontSize:15,alignSelf:'center', fontWeight:'500', color:'white'}}>Apply</Text>


    </TouchableOpacity>

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



      <Modal

transparent={true}
animationType={'fade'}
visible={linkedProduct}
onRequestClose={() => {

  console.log('close modal');
}}>
<View
  style={{
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 60,
    height:deviceHeight,
    backgroundColor:'white',
    flexDirection: 'column',
    alignItems: 'center',
  }}>
  <View
    style={{
      width: '100%',
      flexDirection: 'column',
      backgroundColor:'white',
      borderRadius:5,
      height:'100%'
    }}>


<Appbar style={{ width:deviceWidth,
    justifyContent:'space-between',
    backgroundColor:'white',
    borderBottomWidth:0.5,
    borderColor:'#D5D5EC',
    paddingHorizontal:20,
    marginTop:20,
    height:deviceHeight*0.08}}>

<MaterialIcons  onPress={()=> {setlinkedProduct(false)}} name='arrow-back'  size={25} color='#616B7B'/>

<Text style={{fontWeight:'500',color:'#162741', fontSize:18}}>Link products</Text>

<View>

<Text></Text>
</View>
  </Appbar>


<View style={{paddingHorizontal:20,paddingVertical:15,}}>
<Text style={{fontSize:16, fontWeight:'400',color:'#162741'}}>Select products for your stream </Text>
</View>
 


 <View style={{width:'100%', paddingVertical:12, paddingHorizontal:20,}}>
<FlatList
         contentInsetAdjustmentBehavior="automatic"
         data={data}
         contentContainerStyle={{height:'100%' ,width:'100%', marginTop:0, alignSelf:'center', paddingHorizontal:2,  }}
         renderItem={renderLivenow}
         keyExtractor={(item,id) => id.toString()}
         extraData={data}
         />  
         
   </View>





   
 
  </View>

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

        <View style={{paddingVertical:2, paddingHorizontal:20,flexDirection:'row',  justifyContent:'space-between',width:'100%'}}>
        <TouchableOpacity onPress={()=> {setlinkedProduct(false); navigation.navigate('AddProduct')}} style={{marginTop:10,borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, justifyContent:'center', height:deviceHeight*0.05, width:deviceWidth*0.4,}}>
          <Text style={{color:'#162741',fontSize:16,fontWeight:'500', alignSelf:'center'}}>Add new products</Text>
        </TouchableOpacity>


        <TouchableOpacity onPress={()=> {validation()}} style={{marginTop:10, backgroundColor:'#162741',borderRadius:5, justifyContent:'center', height:deviceHeight*0.05, width:deviceWidth*0.2,}}>
          <Text style={{color:'white',fontSize:16,fontWeight:'500', alignSelf:'center'}}>Done</Text>
        </TouchableOpacity>

        </View>

</View>


</Modal>


      


        <Appbar style={styles.appbar}>

      <MaterialIcons  onPress={()=> {navigation.goBack()}} name='arrow-back'  size={25} color='#616B7B'/>
  
      <Text style={{fontWeight:'500', fontSize:18}}>Schedule a livestream</Text>

<View>

  <Text></Text>
</View>
        </Appbar>



      


        <View style={styles.body}>

          <ScrollView>


          {/* <Button title={'open'} onPress={openDatePicker}/> */}
     

          {/* <Button title="Open" onPress={() => setOpen(true)} />
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
        }}
        onCancel={() => {
          setOpen(false)
        }}
      /> */}


<DatePicker
        isVisible={showDatePicker}
        mode={'single'}
        onCancel={onCancel}
        onConfirm={onConfirm}
        colorOptions={colorOptions}

      />




        <Text style={{fontSize:18, fontWeight:'500'}}>Stream details</Text>

        <Text style={{marginTop:20,fontSize:16,color:'#162741', fontWeight:'400'}}>Stream name</Text>
      


   
       

        <TextInput
      placeholder='ex. Product showcase'
      mode='outlined'
      style={{height:50,paddingHorizontal:10,marginTop:20, borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}
     
      />
       <Text style={{marginTop:20, fontSize:16,color:'#162741', fontWeight:'400'}}>Description</Text>



      <View style={{borderWidth:1,height:100, marginTop:20,justifyContent:'flex-start', borderColor:'#E3E3EB', borderRadius:5, }}>

              <TextInput
      placeholder='Livestream description'
      mode='outlined'
      multiline={true}
      style={{paddingHorizontal:10,height:'100%', borderWidth:1,borderColor:'#E3E3EB', borderRadius:5, }}
     
      />

      </View>

      <Text style={{marginTop:15, fontSize:16,fontWeight:'400', color:'#162741'}}>Stream language</Text>

      <DropDownPicker
      open={langdropdown}
      value={langvalue}
      items={langdropdownvalue}
      
      placeholder="Select language"
      setOpen={setlangdropdown}
      setValue={setlangdropdownvalue}
      textStyle={{
        fontSize: 15,
        color:'#162741'

      }}
      style={{
        borderColor:'#E3E3EB',
        marginTop:20,
        marginBottom:langdropdown == true ? '30%': '0%',
        
      }}
      dropDownContainerStyle={{
       
        marginBottom:langdropdown == true ? '30%': '0%',
        marginTop:langdropdown == true ? 15: 0,
        borderWidth:1,
       borderColor: '#E3E3EB',
      }}
      containerStyle={{
        
        borderColor:'#E3E3EB'
      }}
      
      // setItems={setItems}
    />


{/* <ModalDropdown 
dropdownStyle={{alignSelf:'center',marginTop:10,paddingVertical:1, width:'90%'}}
defaultValue='     Select language'
textStyle={{fontSize:14,fontWeight:'400'}}

style={{borderWidth:1,justifyContent:'center', marginTop:20,borderColor:'#E3E3EB', paddingHorizontal:0, borderRadius:5,height:40}}
options={['option 1', 'option 2']}>

  </ModalDropdown> */}


{/* <DropDownPicker
open={open}
value={value}
setOpen={setOpen}
setValue={setValue}
setItems={setItems}

    items={[
        {label: 'Item 1', value: 'item1'},
        {label: 'Item 2', value: 'item2'},
    ]}
    defaultIndex={1}
    placeholder="Select an "
  
    dropDownStyle={{backgroundColor: '#fafafa', paddingVertical:50,}}
    activeLabelStyle={{color: 'red'}}


    containerStyle={{height: 60}}
    onChangeItem={item => console.log(item.label, item.value)}
/> */}


            <Text style={{marginTop:20,color:'#162741', fontSize:16,fontWeight:'400'}}>Stream category</Text>


            <DropDownPicker
      open={catdropdown}
      value={catvalue}
      items={catdropdownvalue}
      placeholder="Select category"
      setOpen={setcatdropdown}
      setValue={setcatdropdownvalue}
      defaultValue='sd'
      textStyle={{
        fontSize: 15,
        color:'#162741'

      }}
      style={{
        borderColor:'#E3E3EB',
        marginTop:20,
        marginBottom:catdropdown == true ? '30%': '0%',

        
      }}
      dropDownContainerStyle={{
       
        marginBottom:catdropdown == true ? '30%': '0%',
        marginTop:catdropdown == true ? 15: 0,
        borderWidth:1,
       borderColor: '#E3E3EB',
      }}
      containerStyle={{
        borderColor:'#E3E3EB'
      }}
      
      setItems={setItems}
    />

            {/* <ModalDropdown 
dropdownStyle={{alignSelf:'center',marginTop:10,paddingVertical:1, width:'90%'}}
defaultValue='     Select category'
textStyle={{fontSize:14,fontWeight:'400'}}

style={{borderWidth:1,justifyContent:'center', marginTop:20,borderColor:'#E3E3EB', paddingHorizontal:0, borderRadius:5,height:40}}
options={['option 1', 'option 2']}>

  </ModalDropdown> */}
            {/* <DropDownPicker
      open={open}
      value={value}
      items={items}
      setOpen={setOpen}
      setValue={setValue}
      setItems={setItems}
      style={{borderWidth:1,marginTop:20, borderColor:'#E3E3EB', borderRadius:5, }}
     
    /> */}
                  <Text style={{marginTop:20}}>Image</Text>

{img == null ?
                  <View style={{borderColor:'#E3E3EB',borderWidth:1, borderRadius:5, padding:30, height:Platform.OS=='ios'? deviceHeight*0.2:deviceHeight*0.25,width:"100%", flexDirection:'row',justifyContent:'space-between', marginTop:20, backgroundColor:'#ebebeb',}}>


                    <TouchableOpacity onPress={()=> {chooseFile()}} style={{height:'100%',justifyContent:'center', borderWidth:1,borderColor:'#E3E3EB', alignSelf:'center',  backgroundColor:'white', width:'45%'}}>

                      <View style={{height:'80%',width:'80%',paddingVertical:15, alignSelf:'center',justifyContent:'space-between', }}>
                    {Platform.OS == 'ios'?
                      <SvgUri
                          style={{alignSelf:'center',}}
                          source={require('../images/gLive_Icons/Schedule/browse_photo_icon.svg')}
                        />
  :
    <Image
                                    style={{alignSelf:'center',}}

                                    source={require('../images/gLive_Icons/Schedule/browse_photo_icon.png')}

          />
        }
                    <Text style={{alignSelf:'center',fontWeight:'400'}}>Browse photo</Text>
                      </View>


                    </TouchableOpacity>

                    <TouchableOpacity  
                    onPress={()=>{TakePhoto()}}
                    style={{height:'100%',justifyContent:'center', borderWidth:1,borderColor:'#E3E3EB', alignSelf:'center',  backgroundColor:'white', width:'45%'}}>
                    
                    <View style={{height:'80%',width:'80%',paddingVertical:15, alignSelf:'center',justifyContent:'space-between', }}>
                    {Platform.OS == 'ios'?
                    <SvgUri
                          style={{alignSelf:'center',}}
                          source={require('../images/gLive_Icons/Schedule/take_photo_icon.svg')}
                        />
                          :
    <Image
                                    style={{alignSelf:'center',}}

                                    source={require('../images/gLive_Icons/Schedule/take_photo_icon.png')}

          />
        }
                    <Text style={{alignSelf:'center',fontWeight:'400'}}>Take photo</Text>
                      </View>

                      
                    </TouchableOpacity>


                    </View>

                    :

                    
                    <ImageBackground imageStyle={{borderRadius:5}} source={{uri:img}} style={{borderColor:'#E3E3EB', height:Platform.OS=='ios'? deviceHeight*0.2:deviceHeight*0.25,width:"100%", flexDirection:'row', justifyContent:'flex-end', marginTop:20, }}>

                      <TouchableOpacity onPress={()=>{setimg(null)}} style={{alignSelf:'flex-start',margin:10,}}>
                 {Platform.OS == 'ios'?

                 <SvgUri
                          style={{alignSelf:'flex-start',}}
                          source={require('../images/gLive_Icons/Schedule/remove_image_icon.svg')}
                        />
  :
    <Image
                                    style={{alignSelf:'center',}}

                                    source={require('../images/gLive_Icons/Schedule/remove_image_icon.png')}

          />
        }
                        </TouchableOpacity>
                      </ImageBackground>



                    }


                    <Text style={{marginTop:20, fontSize:16,}}>Date & Time</Text>

                    
      <View style={{flexDirection:'row', justifyContent:'space-between'}} >

      <TouchableOpacity onPress={()=> {setdatemodal(true)}} style={{borderWidth:1, width:'45%',borderRadius:5,marginTop:20, borderColor:'#E3E3EB', height:50,paddingHorizontal:10, flexDirection:'row', justifyContent:'space-evenly'}}>



  {/* <Im age  href={require('../images/gLive_Icons/Schedule/date_icon.svg')} style={{alignSelf:'center'}} size={22} color='black' /> */}
 {Platform.OS == 'ios'?
  <SvgUri
        style={{alignSelf:'center'}}
        source={require('../images/gLive_Icons/Schedule/date_icon.svg')}
      />
        :
    <Image
                                    style={{alignSelf:'center',}}

                                    source={require('../images/gLive_Icons/Schedule/date_icon.png')}

          />
        }
      <Text style={{alignSelf:'center', fontSize:16, fontWeight:'400', color:'#7D8696'}}>{date}</Text>


</TouchableOpacity>


<TouchableOpacity onPress={()=> {settimemodal(true)}} style={{borderWidth:1, width:'45%',borderRadius:5,marginTop:20, borderColor:'#E3E3EB', height:50,paddingHorizontal:10, flexDirection:'row', justifyContent:'space-evenly'}}>



{/* <Im age  href={require('../images/gLive_Icons/Schedule/date_icon.svg')} style={{alignSelf:'center'}} size={22} color='black' /> */}
{Platform.OS == 'ios'?
<SvgUri
      style={{alignSelf:'center'}}
      source={require('../images/gLive_Icons/Schedule/time_icon.svg')}
    />
      :
    <Image
                                    style={{alignSelf:'center',}}

                                    source={require('../images/gLive_Icons/Schedule/time_icon.png')}

          />
        }

    <Text style={{alignSelf:'center', fontSize:16, fontWeight:'400', color:'#7D8696'}}>{hours}:{minutes}</Text>


</TouchableOpacity>
    

        </View>

            <View style={{flexDirection:'row',marginTop:30,justifyContent:'flex-start'}}>
              
              {decided == false ?
               <TouchableOpacity  onPress={()=>{setdecided(true)}} style={{borderColor:'#162741',marginLeft:5, alignSelf:'center',borderRadius:3, borderWidth:1.5, height:18,width:18}}>

                </TouchableOpacity>
                :
                // <TouchableOpacity  onPress={()=>{}} style={{borderColor:'#162741',marginLeft:5, alignSelf:'center',borderRadius:3, borderWidth:1.5, height:18,width:18}}>
                    <Ionicons onPress={()=>{setdecided(false)}}  name='ios-checkbox-sharp' size={19.5} color='#162741' style={{marginLeft:5, borderRadius:3, alignSelf:'center',}}/>
                // </TouchableOpacity> 
              }

        <Text style={{alignSelf:'center',marginLeft:10,color:'#162741', fontSize:16, fontWeight:'400'}}>To be decided later</Text>

          </View>
      <View style={{height:2, width:'100%',marginTop:30, backgroundColor:'#E3E3EB'}}>
        </View>




        <Text style={{marginTop:20, fontWeight:'500',fontSize:18}}>Linked products</Text>

        <Text style={{marginTop:20, fontSize:16,fontWeight:'400'}}>Add products to your stream</Text>


      
      <View style={{borderWidth:1,borderRadius:5,marginTop:20, borderColor:'#E3E3EB', height:50,paddingHorizontal:10, flexDirection:'row', justifyContent:'space-between'}}>


        <Text style={{alignSelf:'center', fontSize:16, fontWeight:'400', color:'#7D8696'}}>Add products</Text>

        <TouchableOpacity 
        // onPress={()=> {setlinkedProduct(true)}}
        onPress={()=>{navigation.navigate('AddProducts')}}
        style={{height:40,alignSelf:'center',justifyContent:'center', width:40,borderRadius:400/2, backgroundColor:'#EDEDF6'}}>
          <AntDesign  style={{alignSelf:'center'}} name='plus' size={22} color='black' />
          </TouchableOpacity>

        </View>

          <View style={{height:2,marginTop:30, width:'100%', backgroundColor:'#E3E3EB'}}>
        </View>


        <View style={{flexDirection:'row',marginTop:30,justifyContent:'flex-start'}}>
              
              {post == false ?
               <TouchableOpacity  onPress={()=>{setpost(true)}} style={{borderColor:'#162741',marginLeft:5, alignSelf:'center',borderRadius:3, borderWidth:1.5, height:18,width:18}}>

                </TouchableOpacity>
                :
                // <TouchableOpacity  onPress={()=>{}} style={{borderColor:'#162741',marginLeft:5, alignSelf:'center',borderRadius:3, borderWidth:1.5, height:18,width:18}}>
                    <Ionicons onPress={()=>{setpost(false)}}  name='ios-checkbox-sharp' size={19.5} color='#162741' style={{marginLeft:5, borderRadius:3, alignSelf:'center',}}/>
                // </TouchableOpacity> 
              }

        <Text style={{alignSelf:'center',marginLeft:10,color:'#162741', fontSize:16, fontWeight:'400'}}>Post it</Text>

          </View>


        <View >

     
          </View>


        <View style={{marginTop:30,}}>

        </View>


       
        {/* <View style={{height:2,
                      
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

        <View style={{paddingVertical:2,flexDirection:'row', paddingHorizontal:2, justifyContent:'space-between',width:'100%'}}>

        <TouchableOpacity onPress={()=> {navigation.navigate('BuyerPreview')}} style={{marginTop:10, borderWidth:1, borderColor:'#E3E3EB',borderRadius:5, justifyContent:'center', height:deviceHeight*0.05, width:deviceWidth*0.23,}}>
          <Text style={{color:'#162741',fontSize:16,fontWeight:'500', alignSelf:'center'}}>Preview</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> {validation()}} style={{marginTop:10, backgroundColor:'#162741',borderRadius:5, justifyContent:'center', height:deviceHeight*0.05, width:deviceWidth*0.2,}}>
          <Text style={{color:'white',fontSize:16,fontWeight:'500', alignSelf:'center'}}>Save</Text>
        </TouchableOpacity>

        </View>
  </View>


  
  
        </SafeAreaView>
      // </TouchableWithoutFeedback>
    );
}

export default schedulealivestream;


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