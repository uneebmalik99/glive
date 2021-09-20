import React,{useState} from 'react';
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
import Entypo from 'react-native-vector-icons/dist/Entypo';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import BottomTabs from './BottomTabs';
import { Appbar, Card } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import DocumentPicker from 'react-native-document-picker';
import LinearGradient from 'react-native-linear-gradient';
import Snackbar from 'react-native-snackbar';
import Appcolors from '../AppColors/Appcolors';
import { CheckBox } from 'react-native-elements'
import color from 'color';

const img = require('../images/nutfinal.png');



const YourPurchasesDetails = ({route, navigation }) => {


  const { item } = route.params;
console.log(item);
const[height , setheight] = useState(50)
const [filteredDataSource, setFilteredDataSource] = useState([
    
  {
      id: 1,
      title : 'EXIT: Theft on the Mississippi   Board ...',
      img : require('../images/homepage-laptop-floating-mockup.png'),

    },
    {
        id: 2,
        title : 'EXIT: The Stormy Fligght | Escape Room ...',
        img : require('../images/photo-1505740420928-5e560c06d30e.jpeg'),


       
    },
    {
        id: 3,
        title : 'Thames & Kosmos Exit: The Abandoned ...',
        img : require('../images/homepage-laptop-floating-mockup.png'),

      }
     

]);
    const [search ,setSearch]=useState('')
const [upcoming , setupcoming] = useState([
  {
    id:1,
    date:'11-10-2021',
    time:'12:00',
    img : require('../images/homepage-laptop-floating-mockup.png'),

  },
  {
    id:2,
    date:'03-04-2022',
    time:'05:00',
    img : require('../images/homepage-laptop-floating-mockup.png'),

  },
  {
    id:3,
    date:'11-03-2020',
    time:'02:00',
    img : require('../images/homepage-laptop-floating-mockup.png'),

  }
])

const [Products, setProducts] = useState([
    {
      id: 1,
      category : 'Cosmetics',
      title:'EPAuto 12V DC Portable Air Compressor Pump, Digital Tire Inflator',
    },
    {
        id: 2,
        category : 'Coffee',
        title:'iOttie Easy One Touch 4 Dash & Windshield Car Mount Phone Holder Desk Stand Pad & Mat for iPhone, Samsung, Moto, Huawei, Nokia, LG, Smartphones'


       
    },
    {
        id: 3,
        title:'ASUS Laptop L210 Ultra Thin Laptop, 11.6” HD Display, Intel Celeron N4020 Processor, 4GB RAM, 64GB Storage, NumberPad, Windows 10 Home in S Mode',
        category : 'Cool Stuff'
    }
      
  ]
)



const selectFile = async () => {
  // Opening Document Picker to select one file
  try {
    const res = await DocumentPicker.pick({
      // Provide which type of file you want user to pick
      type: [DocumentPicker.types.images],
      // There can me more options as well
      // DocumentPicker.types.allFiles
      // DocumentPicker.types.images
      // DocumentPicker.types.plainText
      // DocumentPicker.types.audio
      // DocumentPicker.types.pdf
    });
    // Printing the log realted to the file
    console.log('res : ' + JSON.stringify(res));
    // Setting the state to show single file attributes
    // setSingleFile(res);
  } catch (err) {
    // setSingleFile(null);
    // Handling any exception (If any)
    if (DocumentPicker.isCancel(err)) {
      // If user canceled the document selection
      alert('Canceled');
    } else {
      // For Unknown Error
      alert('Unknown Error: ' + JSON.stringify(err));
      throw err;
    }
  }
}



const renderlist2 = ({ item, index }) => {
        
       
  return(
  
<TouchableOpacity style={{width:deviceWidth*0.35,justifyContent:'center',paddingHorizontal:5, marginRight:10,paddingVertical:10,}}>
 <Image source={item.img} style={{height:deviceHeight*0.15,alignSelf:'center', width:'90%'}} resizeMethod='resize' resizeMode='stretch' />

 <View style={{alignSelf:'center',marginTop:5,}}>

<Text style={{alignSelf:'center', fontSize:12}}>{item.title}</Text>
<Rating
          style={{alignSelf:'flex-start' }}
              imageSize={16}
              />
              <Text style={{alignSelf:'flex-start', fontSize:12, color:"grey"}}> 765 reviews</Text>
              <Text style={{color:'red'}}>$500</Text>
              </View>

</TouchableOpacity>

  );



}


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
  <Text style={{alignSelf: 'center', textAlignVertical: 'center', fontSize:18, fontWeight:'600'}}>Purchase Details</Text>

  </View>

  
  
  </View>

  
  
           </View>

   <View style={{height:height, width:deviceWidth, backgroundColor:'red'}}>
     <Text>rddg</Text>
     </View> 
        

    
<ScrollView 
style={{backgroundColor:'grey', marginTop:height-25}}
onScroll={event =>{
console.log(event.nativeEvent.contentOffset.x +'-----'+event.nativeEvent.contentOffset.y);
setheight(event.nativeEvent.contentOffset.y)}
  } >

      <View style={{paddingHorizontal:20 , width:'100%'}} 
      >


            <View style={{marginTop:10,flexDirection:'row',justifyContent:'center',  borderRadius:10, borderWidth:0, paddingVertical:5, borderColor:'grey'}}>

            <Image source={item.img} style={{height:deviceHeight*0.1,alignSelf:'center', width:'30%'}} resizeMethod='resize' resizeMode='stretch' />
          <View style={{width:'55%'}}>
            <Text>{item.title}</Text>
            <View style={{flexDirection:'row', marginTop:5}}>
            <Ionicons name='ios-share-outline' color='blue' style={{alignSelf:'center'}} size={22} ></Ionicons>
          <Text style={{fontSize:12, alignSelf:'center'}}>Share This article</Text>
            </View>
          </View>

            </View>

            <View>

<TouchableOpacity style={{borderWidth:0.3,borderColor:'grey', flexDirection:'row',marginTop:30, justifyContent:'space-between',paddingHorizontal:10, paddingVertical:10}}>
<Text style={{alignSelf:'center'}}>Buy again</Text>
<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>


</TouchableOpacity>
            </View>



      </View>




      <View style={{height:5,marginHorizontal:10, backgroundColor:'#D0D3D4',borderRadius:10, marginTop:15}}></View>



      <View style={{ width:'100%'}} 
      >
        <TouchableOpacity style={{borderColor:'grey', flexDirection:'row',marginTop:5, paddingHorizontal:10, paddingVertical:10}}>

        <CheckBox
  center
  title='Delivered on April 27th'
  checked={true}

/>
      {/* <Text style={{marginLeft:10,alignSelf:'center'}} >Buy again</Text> */}


    </TouchableOpacity>

        </View>
        <View style={{height:5,marginHorizontal:10, backgroundColor:'#D0D3D4',borderRadius:10, marginTop:5}}></View>

        <View style={{paddingHorizontal:20, marginTop:10,}}>
          <Text style={{fontWeight:'700', fontSize:14}}>Do you need help with this article?</Text>

<TouchableOpacity style={{borderWidth:0.3,borderColor:'grey', flexDirection:'row',marginTop:30, justifyContent:'space-between',paddingHorizontal:10, paddingVertical:10}}>
<View>
<Text style={{}}>Returns Products</Text>

<Text style={{alignSelf:'center'}}>Possible until May 28th 2021</Text>
</View>

<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>


</TouchableOpacity>
        </View>

        <View style={{height:5,marginHorizontal:10, backgroundColor:'#D0D3D4',borderRadius:10, marginTop:15}}></View>
        <View style={{paddingHorizontal:20, marginTop:10,}}>
          <Text style={{fontWeight:'700', fontSize:14}}>Do you like  your Products?</Text>

<TouchableOpacity style={{borderWidth:0.3,borderColor:'grey', flexDirection:'row',marginTop:30, justifyContent:'space-between',paddingHorizontal:10, paddingVertical:10}}>
<View>
<Text style={{alignSelf:'center'}}>Write a review</Text>

</View>

<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>


</TouchableOpacity>
        </View>


        <View style={{height:5,marginHorizontal:10, backgroundColor:'#D0D3D4',borderRadius:10, marginTop:15}}></View>
        <View style={{paddingHorizontal:20, marginTop:10,}}>
          <Text style={{fontWeight:'700', fontSize:14}}>Order Informations</Text>

<TouchableOpacity style={{borderWidth:0.3,borderColor:'grey', flexDirection:'row',marginTop:30, justifyContent:'space-between',paddingHorizontal:10, paddingVertical:10}}>
<View>
<Text style={{alignSelf:'center'}}>See Order Details</Text>

</View>

<Ionicons name='chevron-forward' color='blue' style={{alignSelf:'center'}} size={20} ></Ionicons>


</TouchableOpacity>
        </View>


        <View style={{height:5,marginHorizontal:10, backgroundColor:'#D0D3D4',borderRadius:10, marginTop:15}}></View>

    

        <View style={{paddingHorizontal:20 ,marginTop:10, width:'100%'}}  >
        <Text style={{fontWeight:'700', }}>Similar & Recommanded Products</Text>
        <FlatList
                        contentContainerStyle={{paddingBottom: 75, paddingHorizontal:0,}}
                        contentInsetAdjustmentBehavior="automatic"
                     data={filteredDataSource}
                     horizontal={true}
                    renderItem={renderlist2}
                    keyExtractor={(item,index) => index.toString()}
                   

                    

                 />

        </View>

      </ScrollView>






          
        </SafeAreaView>
    );
}

export default YourPurchasesDetails;