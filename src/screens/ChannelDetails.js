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

const ChannelDetails = ({route, navigation }) => {

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
  const [seemore , setseemore] = useState(true)

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

      const [list , setlist] = useState([
        {
            title:'Krups 3 Mix 5500 GN5021 Handmixer mit Turbostufe | 500W | 5 Geschwindigkeiten',
            description:'Accepts two Graco Snug Ride Click Connect infant car seats; tandem stroller Holds 2 children up to 40 pounds each One hand, standing fold closes easily with no bending necessary, leaving one hand Free for baby; Easy access, drop down storage basket lets you reach in without disturbing Your reclined child',
            img: require('../images/1.1.png'),
            ProductUrl:'https://www.amazon.de/Krups-GN5021-Turbostufe-Tubo-Quirle-Spriral-Kneter/dp/B01CU30YJQ',
            Products:[{
              title:'Krups 3 Mix 5500 GN5021 Handmixer mit Turbostufe | 500W | 5 Geschwindigkeiten',
              price:'49,90 €',
            images :[

              {uri: 'https://images-na.ssl-images-amazon.com/images/I/61Wgq1KbwgL._AC_SL1500_.jpg',
            },
            {uri:'https://images-na.ssl-images-amazon.com/images/I/71y1q8UPI-L._AC_SL1500_.jpg',
            },
            {uri: 'https://images-na.ssl-images-amazon.com/images/I/71vvTTcrYgL._AC_SL1500_.jpg',
            },
            {uri: 'https://images-na.ssl-images-amazon.com/images/I/71I8bggAGDL._AC_SL1500_.jpg',
          }, 
          {uri: 'https://images-na.ssl-images-amazon.com/images/I/91aJhG5oqqL._AC_SL1500_.jpg',
            } ]
            },
            {
              title:'Krups 3 Mix 5500 GN5021 Handmixer mit Turbostufe | 500W | 5 Geschwindigkeiten',
              price:'49,90 €',
            images :[
              {uri: 'https://images-na.ssl-images-amazon.com/images/I/61Wgq1KbwgL._AC_SL1500_.jpg',
            },
              {uri: 'https://images-na.ssl-images-amazon.com/images/I/71y1q8UPI-L._AC_SL1500_.jpg',
            },
              {uri:'https://images-na.ssl-images-amazon.com/images/I/71vvTTcrYgL._AC_SL1500_.jpg',
            },
              {uri: 'https://images-na.ssl-images-amazon.com/images/I/71I8bggAGDL._AC_SL1500_.jpg',
            },
              {uri:'https://images-na.ssl-images-amazon.com/images/I/91aJhG5oqqL._AC_SL1500_.jpg',
            }
                ]
            },
            {
              title:'Krups 3 Mix 5500 GN5021 Handmixer mit Turbostufe | 500W | 5 Geschwindigkeiten',
              price:'49,90 €',
            images :[

              {uri: 'https://images-na.ssl-images-amazon.com/images/I/61Wgq1KbwgL._AC_SL1500_.jpg',
            },
            {uri:'https://images-na.ssl-images-amazon.com/images/I/71y1q8UPI-L._AC_SL1500_.jpg',
          },
          {uri: 'https://images-na.ssl-images-amazon.com/images/I/71vvTTcrYgL._AC_SL1500_.jpg',
        },
        {uri:  'https://images-na.ssl-images-amazon.com/images/I/71I8bggAGDL._AC_SL1500_.jpg',
      },
      {uri: 'https://images-na.ssl-images-amazon.com/images/I/91aJhG5oqqL._AC_SL1500_.jpg',
            }     ]
            }
          ]
          },
         
          {
            title:'Krups 3 Mix 5500 GN5021 Handmixer mit Turbostufe | 500W | 5 Geschwindigkeiten',
            description:'Accepts two Graco Snug Ride Click Connect infant car seats; tandem stroller Holds 2 children up to 40 pounds each One hand, standing fold closes easily with no bending necessary, leaving one hand Free for baby; Easy access, drop down storage basket lets you reach in without disturbing Your reclined child',
            img: require('../images/1.1.png'),
            ProductUrl:'https://www.amazon.de/Krups-GN5021-Turbostufe-Tubo-Quirle-Spriral-Kneter/dp/B01CU30YJQ',
            Products:[{
              title:'Krups 3 Mix 5500 GN5021 Handmixer mit Turbostufe | 500W | 5 Geschwindigkeiten',
              price:'49,90 €',
            images :[

              {uri: 'https://images-na.ssl-images-amazon.com/images/I/61Wgq1KbwgL._AC_SL1500_.jpg',
            },
            {uri:'https://images-na.ssl-images-amazon.com/images/I/71y1q8UPI-L._AC_SL1500_.jpg',
            },
            {uri: 'https://images-na.ssl-images-amazon.com/images/I/71vvTTcrYgL._AC_SL1500_.jpg',
            },
            {uri: 'https://images-na.ssl-images-amazon.com/images/I/71I8bggAGDL._AC_SL1500_.jpg',
          }, 
          {uri: 'https://images-na.ssl-images-amazon.com/images/I/91aJhG5oqqL._AC_SL1500_.jpg',
            } ]
            },
            {
              title:'Krups 3 Mix 5500 GN5021 Handmixer mit Turbostufe | 500W | 5 Geschwindigkeiten',
              price:'49,90 €',
            images :[
              {uri: 'https://images-na.ssl-images-amazon.com/images/I/61Wgq1KbwgL._AC_SL1500_.jpg',
            },
              {uri: 'https://images-na.ssl-images-amazon.com/images/I/71y1q8UPI-L._AC_SL1500_.jpg',
            },
              {uri:'https://images-na.ssl-images-amazon.com/images/I/71vvTTcrYgL._AC_SL1500_.jpg',
            },
              {uri: 'https://images-na.ssl-images-amazon.com/images/I/71I8bggAGDL._AC_SL1500_.jpg',
            },
              {uri:'https://images-na.ssl-images-amazon.com/images/I/91aJhG5oqqL._AC_SL1500_.jpg',
            }
                ]
            },
            {
              title:'Krups 3 Mix 5500 GN5021 Handmixer mit Turbostufe | 500W | 5 Geschwindigkeiten',
              price:'49,90 €',
            images :[

              {uri: 'https://images-na.ssl-images-amazon.com/images/I/61Wgq1KbwgL._AC_SL1500_.jpg',
            },
            {uri:'https://images-na.ssl-images-amazon.com/images/I/71y1q8UPI-L._AC_SL1500_.jpg',
          },
          {uri: 'https://images-na.ssl-images-amazon.com/images/I/71vvTTcrYgL._AC_SL1500_.jpg',
        },
        {uri:  'https://images-na.ssl-images-amazon.com/images/I/71I8bggAGDL._AC_SL1500_.jpg',
      },
      {uri: 'https://images-na.ssl-images-amazon.com/images/I/91aJhG5oqqL._AC_SL1500_.jpg',
            }     ]
            }
          ]
          },
         
          {
            title:'Krups 3 Mix 5500 GN5021 Handmixer mit Turbostufe | 500W | 5 Geschwindigkeiten',
            description:'Accepts two Graco Snug Ride Click Connect infant car seats; tandem stroller Holds 2 children up to 40 pounds each One hand, standing fold closes easily with no bending necessary, leaving one hand Free for baby; Easy access, drop down storage basket lets you reach in without disturbing Your reclined child',
            img: require('../images/1.1.png'),
            ProductUrl:'https://www.amazon.de/Krups-GN5021-Turbostufe-Tubo-Quirle-Spriral-Kneter/dp/B01CU30YJQ',
            Products:[{
              title:'Krups 3 Mix 5500 GN5021 Handmixer mit Turbostufe | 500W | 5 Geschwindigkeiten',
              price:'49,90 €',
            images :[

              {uri: 'https://images-na.ssl-images-amazon.com/images/I/61Wgq1KbwgL._AC_SL1500_.jpg',
            },
            {uri:'https://images-na.ssl-images-amazon.com/images/I/71y1q8UPI-L._AC_SL1500_.jpg',
            },
            {uri: 'https://images-na.ssl-images-amazon.com/images/I/71vvTTcrYgL._AC_SL1500_.jpg',
            },
            {uri: 'https://images-na.ssl-images-amazon.com/images/I/71I8bggAGDL._AC_SL1500_.jpg',
          }, 
          {uri: 'https://images-na.ssl-images-amazon.com/images/I/91aJhG5oqqL._AC_SL1500_.jpg',
            } ]
            },
            {
              title:'Krups 3 Mix 5500 GN5021 Handmixer mit Turbostufe | 500W | 5 Geschwindigkeiten',
              price:'49,90 €',
            images :[
              {uri: 'https://images-na.ssl-images-amazon.com/images/I/61Wgq1KbwgL._AC_SL1500_.jpg',
            },
              {uri: 'https://images-na.ssl-images-amazon.com/images/I/71y1q8UPI-L._AC_SL1500_.jpg',
            },
              {uri:'https://images-na.ssl-images-amazon.com/images/I/71vvTTcrYgL._AC_SL1500_.jpg',
            },
              {uri: 'https://images-na.ssl-images-amazon.com/images/I/71I8bggAGDL._AC_SL1500_.jpg',
            },
              {uri:'https://images-na.ssl-images-amazon.com/images/I/91aJhG5oqqL._AC_SL1500_.jpg',
            }
                ]
            },
            {
              title:'Krups 3 Mix 5500 GN5021 Handmixer mit Turbostufe | 500W | 5 Geschwindigkeiten',
              price:'49,90 €',
            images :[

              {uri: 'https://images-na.ssl-images-amazon.com/images/I/61Wgq1KbwgL._AC_SL1500_.jpg',
            },
            {uri:'https://images-na.ssl-images-amazon.com/images/I/71y1q8UPI-L._AC_SL1500_.jpg',
          },
          {uri: 'https://images-na.ssl-images-amazon.com/images/I/71vvTTcrYgL._AC_SL1500_.jpg',
        },
        {uri:  'https://images-na.ssl-images-amazon.com/images/I/71I8bggAGDL._AC_SL1500_.jpg',
      },
      {uri: 'https://images-na.ssl-images-amazon.com/images/I/91aJhG5oqqL._AC_SL1500_.jpg',
            }     ]
            }
          ]
          },
         

        
        ])

const renderProdductlist = ({ item, index }) => {

     
  return(
      <TouchableOpacity 
      onPress={()=>{
        navigation.navigate('ProductDetails',{item: item})
      }}
      style={styles.Productslist_main}>
        

        <SliderBox
                images={images1}
                sliderBoxHeight={170}
                dotColor={Appcolors.purple}
                inactiveDotColor='rgba(113,93,255,0.5)'
                autoplay
                circleLoop
                resizeMethod={'resize'}
                resizeMode={'cover'}
                ImageComponentStyle={{borderRadius: 8, width: '97%', marginTop: 5}}
                imageLoadingColor="#715DFF"
                onCurrentImagePressed={index =>
                    console.warn(`image ${index} pressed`)
                }
                parentWidth={deviceWidth/2.60}
            />

        <View style={{paddingHorizontal:5,}}>

        <Text numberOfLines={2} style={{alignSelf:'flex-start',paddingTop:5,height:40, fontSize:14,  color:Appcolors.drakgrey}}>{item.title}</Text>

        <Text style={{color:Appcolors.purple,fontWeight:'700', paddingTop:5,}}>$27,000</Text>
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
              <Text style={styles.Header_txt}> {item.ChannelName.length > 20 ? item.ChannelName.substring(0,20) +'...' : item.ChannelName}
              </Text>
              
            </View>
  
  
        <View style={{alignSelf:'center', }}>
            
        {/* <Image     style={{height:25 , width:25}} 
                        source={require('../images/Vectoraccount.png')} 
                        /> */}

      <TouchableOpacity style={{backgroundColor:'white',shadowColor: "grey",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 2,  justifyContent:'center',alignItems:'center', borderRadius:500/2, width:30,height:30}}>
      <Image  style={{alignSelf:'center', }} source={require('../images/Vector4.png')}/>
      </TouchableOpacity>


        </View>
  
        </Appbar>
  

        <ScrollView style={styles.body}>
       
        <View 
      onPress={()=>{
      }}
      style={styles.StreamList_main}>
        
      <View style={{flexDirection:'row',paddingHorizontal:20, alignItems:'center', width:'100%', height:deviceHeight*0.1,}}>
       <View style={{width:'20%',}}>

        <Image style={{width:'100%', height:'80%' , borderRadius:500/2}} source={require('../images/1.5.png')} />
        
        </View>


        <View style={{width:'5%', backgroundColor:'grey'}}>

        </View>


        <View style={{width:'40%',}}>

        <Text style={{color:'black', fontSize:18}}>Channel Name</Text>

        <Text style={{fontSize:12, color:Appcolors.drakgrey}}>207 Followers</Text>

        <Text style={{fontSize:16,fontWeight:'500', color:Appcolors.purple}}>FOLLOW</Text>
        </View>


        <View style={{width:'13%',}}>
      
       </View>




   

      </View>


      <View style={{paddingHorizontal:20, marginTop:10}}>
    
    {seemore == false ?

    
      <Text  style={{color:Appcolors.drakgrey}}>{item.CategoryDescription}<Text style={{color:'grey'}} onPress={()=>{ setseemore(true)}}>  less</Text> </Text> 
      :
      <Text  style={{color:Appcolors.drakgrey}}>{item.CategoryDescription.length > 120 ? item.CategoryDescription.substring(0,120) +'...' : item.CategoryDescription}<Text style={{color:'grey'}} onPress={()=> {setseemore(false)}}> See more</Text> </Text> 
      
    }
      </View>
     

      <View style={{backgroundColor:'#C4C4C4', height:230,marginTop:20, width:'100%'}}>
      <TouchableOpacity style={{backgroundColor:'white', justifyContent:'center',alignItems:'center',margin:15,right:10, borderRadius:500/2, position:'absolute', width:35,height:35}}>
<Image  style={{alignSelf:'center', }} source={require('../images/Vector4.png')}/>
</TouchableOpacity>

<TouchableOpacity style={{backgroundColor:Appcolors.purple ,bottom:0, justifyContent:'center',alignItems:'center',margin:15,right:10,borderRadius:5, position:'absolute', width:'30%',height:35}}>
<Text style={{color:'white',fontSize:16,alignSelf:'center', fontWeight:'500'}}>LIVE</Text>
</TouchableOpacity>



      </View>
      <View style={{paddingHorizontal:20, marginTop:5}}>
      <Text style={{fontSize:20,fontWeight:'400', color:Appcolors.drakgrey}}>Live Streamning titl very long long very long</Text>
      </View>
      </View>

  

      <View style={{paddingHorizontal:20, marginTop:20}}>

      <Text style={{color:'black',fontWeight:'600',fontSize:18 }}>Products</Text> 


      </View>
      <View style={styles.search}>
          <View style={{width:'8%'}}>

        <Ionicons  name='md-search-sharp' size={22} style={{alignSelf:'center', paddingVertical:8,}} color={Appcolors.lightgrey} />
        
        </View>
          <TextInput 
          placeholder='Search'
          placeholderTextColor={Appcolors.lightgrey}
          style={{width:'90%', paddingLeft:5,height:'100%' , color:Appcolors.drakgrey}} />
          
          </View>

      


      <View style={{marginTop:5,width:'100%', paddingVertical:5,}}>


        <FlatList
              contentInsetAdjustmentBehavior="automatic"
              data={list}
              numColumns={2}
              contentContainerStyle={{width:'100%',paddingBottom:10, paddingHorizontal:15, alignSelf:'center',   }}
              renderItem={renderProdductlist}
              keyExtractor={(item,id) => id.toString()}
              /> 


        </View>

      


          </ScrollView>
  
  
        </SafeAreaView>
    );
}

export default ChannelDetails;


const styles = StyleSheet.create({

  appbar:{
    width:deviceWidth,
    justifyContent:'space-between',
    backgroundColor:'white',
    paddingHorizontal:15
    ,
    height:deviceHeight*0.08
 },
 StreamList_main:{
  
  width:'100%',
  
 },
 search:{
  marginHorizontal:20,
  flexDirection:'row',
  marginTop:20,
  paddingLeft:10,
  borderRadius:2,
  backgroundColor:'white',
  shadowColor: "grey",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.04,

elevation: 3,
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