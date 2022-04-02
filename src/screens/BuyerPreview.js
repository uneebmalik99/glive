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
import Video from 'react-native-video';
import VideoPlayer from 'react-native-video-player';

const  images1= [
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?girl",
  "https://source.unsplash.com/1024x768/?tree",
]


const BuyerPreview = ({route, navigation }) => {


  const [datemodal,setdatemodal] = useState(false)
  const [timemodal,settimemodal] = useState(false)

  const refRBSheet = useRef();


  const [Productsvisible, setProductsvisible] = useState(false)
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

 
  const renderLivenow = ({ item, index }) => {  
    return(
     <TouchableOpacity style={{borderColor:'#E3E3EB',borderRadius:5, borderWidth:1,marginLeft:20, width:deviceWidth*0.45, padding:5,}}>

        <Image style={{width:'100%',height:deviceHeight*0.18 }} resizeMode='cover' resizeMethod='resize' source={require('../images/nikeshoe.png')}/>

        <View>
          <Text style={{marginTop:7,fontSize:12, color:'#162741'}}>Nike ZoomX Vaporfly NEXT% 2...</Text>
          <Text style={{marginTop:5,color:'#616B7B'}}>Men’s Road Racing Shoes</Text>

          <Text style={{color:'#162741',marginTop:5,fontWeight:'500', fontSize:12}}>£234.95</Text>
        </View>

     </TouchableOpacity>
  
    );
  
  
  
  }
  


    return (

      <SafeAreaView style={{height:deviceHeight, width:deviceWidth}}> 
      <StatusBar barStyle='default' />
  


  
        <Appbar style={styles.appbar}>

      <MaterialIcons  onPress={()=> {navigation.goBack()}} name='arrow-back'  size={25} color='#616B7B'/>
  
      <Text style={{fontWeight:'500', fontSize:18}}>Buyer Preview</Text>

<View>

  <Text></Text>
</View>
        </Appbar>



      


        {/* <View style={styles.body}> */}

          <ScrollView style={{marginBottom:50}}>

          <VideoPlayer
    video={{ uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' }}
    videoWidth={1600}
    videoHeight={900}
    thumbnail={require('../images/Rectangle486.png')}
    
>

  </VideoPlayer>

{/* <Video source={{uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"}}   // Can be a URL or a local file.
         style={{width:400, height:200}} 
                                         // Store reference
  >


    </Video> */}

        

      <View style={{paddingHorizontal:20,marginTop:15}}>

        <Text style={{fontSize:18, fontWeight:'500'}}>Nike Flyknit spot with Kobe Bryant, Richard Sherman, Allyson Eaton & Mo F...</Text>

        <View style={{flexDirection:'row',marginTop:20, }}>

      <View style={{height:10,marginLeft:1, width:10,alignSelf:'center', backgroundColor:'red', borderRadius:400/2 }}>
        </View>
        <Text style={{ fontSize:12,marginLeft:10, color:'#616B7B'}}>3.1K watching</Text>
      </View>

      </View>


      <View style={{height:2, width:'100%',marginTop:20, backgroundColor:'#E3E3EB'}}>
        </View>

      <View style={{paddingHorizontal:20,marginTop:15, flexDirection:'row'}}>
        <Image style={{height:30, width:30}} source={require('../images/nikelogo.png')}/>
        <View style={{flexDirection:'column', marginLeft:10,}}>
          <Text style={{color:'#616B7B'}}>Nike</Text>
          <Text style={{color:'#616B7B',fontSize:12}}>310K followers</Text>
          </View>
        </View>


        <View style={{height:2, width:'100%',marginTop:20, backgroundColor:'#E3E3EB'}}>
        </View>



        <View style={{paddingHorizontal:20,marginTop:15, flexDirection:'row', justifyContent:'space-between'}}>
          
          <View style={{flexDirection:'row', marginBottom:5}}>
          <Image style={{height:30, width:30}} source={require('../images/nikelogo.png')}/>
              <Text style={{marginLeft:10,alignSelf:'center', fontSize:16, fontWeight:'500'}}>Products</Text>
            </View>

            {Productsvisible == false ?
            
          <View>
                      <Ionicons  onPress={()=> setProductsvisible(true)}  name='chevron-down-sharp' color='#162741' size={25}/>


            </View>
          :
          <Ionicons  onPress={()=> setProductsvisible(false)} name='chevron-up-sharp' color='#162741' size={25}/>
        }

        </View>


        {Productsvisible == true ?
         <FlatList
         contentInsetAdjustmentBehavior="automatic"
         data={category}
         horizontal={true}
         contentContainerStyle={{height:'100%' ,marginTop:0, alignSelf:'center', paddingHorizontal:2,  }}
         renderItem={renderLivenow}
         keyExtractor={(item,id) => id.toString()}
         /> 
         :
         null
            
          }



<View style={{height:2, width:'100%',marginTop:20, backgroundColor:'#E3E3EB'}}>
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


      


  
  
        </SafeAreaView>
    );
}

export default BuyerPreview;


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
  paddingHorizontal:0,
  flex: 1,

 
 },


 Header_txt:{
   alignSelf:'center',
    fontSize:16,
   fontWeight:'500',
  color:Appcolors.drakgrey
 },

  });