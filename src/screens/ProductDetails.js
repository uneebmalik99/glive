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
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';



import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import BottomTabs from './BottomTabs';
import { Appbar, Card } from 'react-native-paper';
import { Rating, AirbnbRating } from 'react-native-ratings';
import { SliderBox } from "react-native-image-slider-box";
import Appcolors from '../AppColors/Appcolors.js';
import App from '../../App.js';



const  images1= [
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?girl",
  "https://source.unsplash.com/1024x768/?tree",
]

const ProductDetails = ({route, navigation }) => {

  const { item } = route.params;
  const [ images , setimages] =useState([


    
    "https://source.unsplash.com/1024x768/?nature",
    "https://source.unsplash.com/1024x768/?water",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
    "https://source.unsplash.com/1024x768/?girl",
    "https://source.unsplash.com/1024x768/?tree",
  
  
    ])
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
    const [visit, setvisit] = useState([
    
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


const [data, setdata] = useState([
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

const renderVisitlist = ({ item, index }) => {
  
  return(
     <TouchableOpacity style={{flexDirection:'row',borderBottomWidth:0.4,borderColor:'grey', paddingBottom:5,marginTop:5, }}>
<Image source={require('../images/photo-1523275335684-37898b6baf30.jpeg')} style={{height:110,alignSelf:'center',borderRadius:10, width:100}}/>
<View style={{flexDirection:'row',justifyContent:'center', paddingVertical:5}}>
<View style={{marginLeft:10}}>
  <Text>EPAuto 12V DC Portable Air Compressor Pump, Digital Tire Inflator</Text>
 
  <Text 
        style={{fontSize:14,color:'grey', fontWeight:'400', }}>$ 615</Text>

<Text 
        style={{fontSize:20, fontWeight:'500', }}>$ 215 <Text style={{fontSize:12, color:'green'}}>58% OFF</Text></Text>
        <View style={{flexDirection:'row'}}>
    <AntDesign name='sharealt' size={18} style={{alignSelf:'center'}} />
<Text style={{color:'#000000', fontWeight:'500'}}>Full</Text>
   </View>
   
   <View style={{flexDirection:'row'}}>
    <AntDesign name='shoppingcart' size={18} style={{alignSelf:'center'}} />
<Text style={{color:'#000000', fontWeight:'500'}}>Add to Cart</Text>
   </View>
</View>
    </View>
     </TouchableOpacity>
  );



}


    return (
      <SafeAreaView style={{height:deviceHeight,backgroundColor:'white', width:deviceWidth}}> 
      <StatusBar barStyle="light-content"  backgroundColor='red' />
  
        <Appbar style={styles.appbar}>
  
        <View 
            style={{alignContent:"center",flexDirection:'row', alignItems:"center"}}   >

              <TouchableOpacity
              onPress={()=> {
                navigation.goBack()
              }}
              >
               
            <Ionicons   name='chevron-back' size={30} color={Appcolors.drakgrey} />
              
              </TouchableOpacity>
              <Text style={styles.Header_txt}> {item.title.length > 20 ? item.title.substring(0,20) +'...' : item.title}
              </Text>
              
            </View>
  
  
        <View style={{alignSelf:'center', }}>
            
        <Image     style={{height:25 , width:25}} 
                        source={require('../images/Vectoraccount.png')} 
                        />
        </View>
  
        </Appbar>
  

        <ScrollView style={styles.body}>
       

        <SliderBox
  // ImageComponent={FastImage}
  images={images1}
  sliderBoxHeight={235}
  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  dotColor={Appcolors.purple}
  inactiveDotColor='rgba(113,93,255,0.5)'
  autoplay
  circleLoop
  resizeMethod={'resize'}
  resizeMode={'cover'}
  paginationBoxStyle={{
   
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
  
  }}
  dotStyle={{
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 0,
    padding: 0,
    margin:0,
    backgroundColor: "rgba(128, 128, 128, 0.92)"
  }}
  ImageComponentStyle={{borderRadius: 1, width: '100%', marginTop: 0}}
  imageLoadingColor="#2196F3"
/>
<View style={{marginRight:3,marginTop:-225,alignSelf:'flex-end', height:230,}}>
<TouchableOpacity style={{backgroundColor:'white', justifyContent:'center',alignItems:'center', margin:15,right:10, borderRadius:500/2, position:'absolute', width:35,height:35}}>
<Image  style={{alignSelf:'center',  }} resizeMethod='resize' resizeMode='cover' source={require('../images/Vector4.png')}/>
</TouchableOpacity>
</View>


<View style={{ paddingHorizontal:20,}}>
<Text numberOfLines={2} style={{fontSize:18, marginTop:10,}} >{item.title}</Text>
<Text style={{fontSize:18,fontWeight:'700',marginTop:10, color:Appcolors.purple}} >$27,000</Text>

</View>


<View style={{flexDirection:'row',paddingHorizontal:20,marginTop:20, alignItems:'center', width:'100%', height:60,}}>
       <View style={{width:'15%',}}>

        <Image style={{width:50, height:50 , borderRadius:500/2}} source={require('../images/1.5.png')} />
        
        </View>


        <View style={{width:'3%', backgroundColor:'grey'}}>

        </View>


        <View style={{width:'40%',}}>

        <Text style={{color:'black', fontSize:18}}>Channel Name</Text>

        </View>


        <View style={{width:'13%',}}>
      
       </View>       

      </View>



      <View style={{paddingHorizontal:20,marginTop:20,}}>

        <Text style={{fontWeight:'700',color:Appcolors.drakgrey, fontSize:18}}>Product Details</Text>

        <Text style={{ fontSize:14 ,marginTop:5, color:Appcolors.lightgrey }}>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum</Text>

      
      </View>

          </ScrollView>
  
  
        </SafeAreaView>
    );
}

export default ProductDetails;


const styles = StyleSheet.create({

  appbar:{
    width:deviceWidth,
    justifyContent:'space-between',
    backgroundColor:'white',
    paddingHorizontal:15
    ,
    height:deviceHeight*0.08
 },

 body:{
  width:'100%',
  backgroundColor:'white',
  paddingHorizontal:0,
  flex:1,
 },


 Header_txt:{
   alignSelf:'center',
    fontSize:16,
   fontWeight:'500',
  color:Appcolors.drakgrey
 },

  });