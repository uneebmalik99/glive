import React, { useState } from 'react'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    ImageBackground,
    FlatList,
    StatusBar,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import AppConstance, {
    deviceHeight,
    deviceWidth,
} from '../constance/AppConstance.js';
import { TabView, SceneMap } from 'react-native-tab-view';
import { Rating, AirbnbRating } from 'react-native-ratings';
import ScrollableTabView, { DefaultTabBar, ScrollableTabBar } from 'react-native-scrollable-tab-view-forked';
import {

    Avatar,
   
} from 'react-native-paper';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';

import BottomTabs from './BottomTabs.js';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Iconn from 'react-native-vector-icons/dist/Ionicons';
import Icon from 'react-native-vector-icons/dist/Feather'
import { Appbar, Portal, Provider } from 'react-native-paper';
import Appcolors from '../AppColors/Appcolors.js';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import { TextInput } from 'react-native-gesture-handler';
import { SliderBox } from "react-native-image-slider-box";


const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key:'workout', color: 'green'};

const  images1= [
  "https://source.unsplash.com/1024x768/?nature",
  "https://source.unsplash.com/1024x768/?water",
  "https://source.unsplash.com/1024x768/?girl",
  "https://source.unsplash.com/1024x768/?tree",
]

function Discover({ item, navigation }) {
    const[value , setvalue] = useState(0)
    const { colors } = useTheme();

    const theme = useTheme();
    const [data, setdata] = useState([
        {
            day: "Wednesday",
            date: "Aprl 04 2020"
        }

    ])
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

    const [Channel , setChannel] = useState([
      {
        id:1,
        ChannelName:'Channel-1',
        CategoryDescription: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum  orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lo psum lorem ipsum lorem ipsum lorem ipsum lorem ips'
       
      },
      {
        id:2,
        ChannelName:'Channel-2',
        CategoryDescription: 'lorem ipsum lorem ipsum lorem ipsum lorem ipsum  orem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lo psum lorem ipsum lorem ipsum lorem ipsum lorem ips'

       
      },
    ])
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      { key: 'first', title: 'Active' },
      { key: 'second', title: 'UpComing' },
    ]);
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
            title:'Cashewbruch 1 kg',
            description:'MORE ACTIVITY; MORE FUN: The Toe Time infant car seat toy comes with toes that twinkle and gentle music that plays with every kick from your cutie pie, 3 hanging soft toys that crinkle or jingle once tugged, and a baby-safe mirror surrounded by eye-catching stars; your kiddo will love it! THOUGHTFULNESS IN DESIGN: Unlike other rear facing car seat toys that your baby can’t reach or block the view of your backseat mirror, our travel activity toy comes with velcro straps for adjusting both its height and angle. This means your baby gets to reach every toy and you get to see them.GREAT LEARNING TOOL: Through all the giggle-sparking kicking, tugging, and playing, your little one will develop their fine motor skills, have their visual and aural senses stimulated, and get a head start on color recognition thanks to the vibrant design of the baby toys for car seat.UNIQUE GIFT IDEA: Shopping around for the best baby shower gift to surprise that mom or dad? This car seat travel toy will be a guaranteed hit! It works for both baby boys and girls, attaches to most headrests in a matter of seconds, and even comes with batteries already included.BUY RISK FREE: We’ve got your back with a 100% satisfaction guarantee. Not happy with your car seat activity toy? Just reach out to us and we’ll do all we can to make it right. Click ‘Add to Cart’ now to make that car ride a total treat for your little munchkin completely risk-free!',            
            img: require('../images/2.1.png'),
            ProductUrl:'https://www.korodrogerie.de/cashewbruch-1-kg',
            Products:[{
              title:'Cashewbruch 1 kg',
              price:'11.50€',
            images :[

            
            {uri: 'https://koro2.imgix.net/media/image/e1/db/65/CASHEW_003_01y8HReclKKKL73.jpg',
          },
          {uri:  'https://koro2.imgix.net/media/image/35/5c/fc/CASHEW_003_02AyoBmRjrYbLrW.jpg',
        },
        {uri:   'https://koro2.imgix.net/media/image/b7/35/c4/HIM_005_LABEL_1.jpg',
      },
      {uri:   'https://koro2.imgix.net/media/image/7a/9a/ef/CASHEW_003_03ZuxjdGG32oW1U.jpg',
    },
    {uri:     'https://koro2.imgix.net/media/image/f3/d6/a2/CASHEW_003_01-2pewo8iFYBmLg0.jpg',
           }
                 ]
            },
            {
              title:'Cashewbruch 1 kg',
              price:'11.50€',
            images :[

            
            {uri: 'https://koro2.imgix.net/media/image/e1/db/65/CASHEW_003_01y8HReclKKKL73.jpg',
          },
          {uri:    'https://koro2.imgix.net/media/image/35/5c/fc/CASHEW_003_02AyoBmRjrYbLrW.jpg',
        },
        {uri: 'https://koro2.imgix.net/media/image/b7/35/c4/HIM_005_LABEL_1.jpg',
      },
      {uri:   'https://koro2.imgix.net/media/image/7a/9a/ef/CASHEW_003_03ZuxjdGG32oW1U.jpg',
    },
    {uri:     'https://koro2.imgix.net/media/image/f3/d6/a2/CASHEW_003_01-2pewo8iFYBmLg0.jpg',
           }
                 ]
            }
          ]
          },


          {
            title:'ASUS Laptop L210 Ultra Thin Laptop, 11.6” HD Display, Intel Celeron N4020 Processor, 4GB RAM, 64GB Storage, NumberPad, Windows 10 Home in S Mode',
            description:'Efficient Intel Celeron N4020 Processor (4M Cache, up to 2.8 GHz) 11.6” HD (1366 x 768) Slim Display 64GB eMMC Flash Storage and 4GB DDR4 RAM Windows 10 in S Mode with One Year of Microsoft 365 Personal Slim and Portable: 0.7” thin and weighs only 2.2 lbs (battery included)',
            img: require('../images/photo-1505740420928-5e560c06d30e.jpeg'),

          },
          {
            title:'ASUS Laptop L210 Ultra Thin Laptop, 11.6” HD Display, Intel Celeron N4020 Processor, 4GB RAM, 64GB Storage, NumberPad, Windows 10 Home in S Mode',
            description:'Efficient Intel Celeron N4020 Processor (4M Cache, up to 2.8 GHz 11.6” HD (1366 x 768) Slim Display 64GB eMMC Flash Storage and 4GB DDR4 RAM Windows 10 in S Mode with One Year of Microsoft 365 Personal Slim and Portable: 0.7” thin and weighs only 2.2 lbs (battery included)            ',            
            img: require('../images/photo-1505740420928-5e560c06d30e.jpeg'),

          },
          {
            title:'Graco DuoGlider Double Stroller | Lightweight Double Stroller with Tandem Seating, Glacier',
            description:'Accepts two Graco Snug Ride Click Connect infant car seats; tandem stroller Holds 2 children up to 40 pounds each One hand, standing fold closes easily with no bending necessary, leaving one hand Free for baby; Easy access, drop down storage basket lets you reach in without disturbing Your reclined child',
            img: require('../images/photo-1505740420928-5e560c06d30e.jpeg'),

          },
          {
            title:'Taf Toys Toe Time Infant Car Seat Toy | Kick and Play Activity Center with Music, Lights, Mirror, and Jingling Toys | Fun Travel Baby Toy for Rear Car Seat | Easier Drive with Newborns, Babies',
            description:'MORE ACTIVITY; MORE FUN: The Toe Time infant car seat toy comes with toes that twinkle and gentle music that plays with every kick from your cutie pie, 3 hanging soft toys that crinkle or jingle once tugged, and a baby-safe mirror surrounded by eye-catching stars; your kiddo will love it! THOUGHTFULNESS IN DESIGN: Unlike other rear facing car seat toys that your baby can’t reach or block the view of your backseat mirror, our travel activity toy comes with velcro straps for adjusting both its height and angle. This means your baby gets to reach every toy and you get to see them.GREAT LEARNING TOOL: Through all the giggle-sparking kicking, tugging, and playing, your little one will develop their fine motor skills, have their visual and aural senses stimulated, and get a head start on color recognition thanks to the vibrant design of the baby toys for car seat.UNIQUE GIFT IDEA: Shopping around for the best baby shower gift to surprise that mom or dad? This car seat travel toy will be a guaranteed hit! It works for both baby boys and girls, attaches to most headrests in a matter of seconds, and even comes with batteries already included.BUY RISK FREE: We’ve got your back with a 100% satisfaction guarantee. Not happy with your car seat activity toy? Just reach out to us and we’ll do all we can to make it right. Click ‘Add to Cart’ now to make that car ride a total treat for your little munchkin completely risk-free!',            
            img: require('../images/photo-1505740420928-5e560c06d30e.jpeg'),

          },
        ])

        const [Activelist , setActivelist] = useState([
          {
            img : require('../images/homepage-laptop-floating-mockup.png'),
              expireTime:'End in 4 days',
               title:'Save on Philps TV and more',
               description:'Accepts two Graco Snug Ride Click Connect infant car seats; tandem stroller Holds 2 children up to 40 pounds each One hand, standing fold closes easily with no bending necessary, leaving one hand Free for baby; Easy access, drop down storage basket lets you reach in without disturbing Your reclined child',
             },
             {
              img : require('../images/homepage-laptop-floating-mockup.png'),
              expireTime:'End in 5 days',

              title:'Save on Samsung and more',
              description:'MORE ACTIVITY; MORE FUN: The Toe Time infant car seat toy comes with toes that twinkle and gentle music that plays with every kick from your cutie pie, 3 hanging soft toys that crinkle or jingle once tugged, and a baby-safe mirror surrounded by eye-catching stars; your kiddo will love it! THOUGHTFULNESS IN DESIGN: Unlike other rear facing car seat toys that your baby can’t reach or block the view of your backseat mirror, our travel activity toy comes with velcro straps for adjusting both its height and angle. This means your baby gets to reach every toy and you get to see them.GREAT LEARNING TOOL: Through all the giggle-sparking kicking, tugging, and playing, your little one will develop their fine motor skills, have their visual and aural senses stimulated, and get a head start on color recognition thanks to the vibrant design of the baby toys for car seat.UNIQUE GIFT IDEA: Shopping around for the best baby shower gift to surprise that mom or dad? This car seat travel toy will be a guaranteed hit! It works for both baby boys and girls, attaches to most headrests in a matter of seconds, and even comes with batteries already included.BUY RISK FREE: We’ve got your back with a 100% satisfaction guarantee. Not happy with your car seat activity toy? Just reach out to us and we’ll do all we can to make it right. Click ‘Add to Cart’ now to make that car ride a total treat for your little munchkin completely risk-free!',            
             },
   
   
             {
              img : require('../images/homepage-laptop-floating-mockup.png'),
              expireTime:'End in 9 days',

              title:'Save on Samsung and more',
               description:'Efficient Intel Celeron N4020 Processor (4M Cache, up to 2.8 GHz) 11.6” HD (1366 x 768) Slim Display 64GB eMMC Flash Storage and 4GB DDR4 RAM Windows 10 in S Mode with One Year of Microsoft 365 Personal Slim and Portable: 0.7” thin and weighs only 2.2 lbs (battery included)',
             },
             {
              img : require('../images/homepage-laptop-floating-mockup.png'),
              expireTime:'End in 7 days',

              title:'Save on Samsung and more',
               description:'Efficient Intel Celeron N4020 Processor (4M Cache, up to 2.8 GHz 11.6” HD (1366 x 768) Slim Display 64GB eMMC Flash Storage and 4GB DDR4 RAM Windows 10 in S Mode with One Year of Microsoft 365 Personal Slim and Portable: 0.7” thin and weighs only 2.2 lbs (battery included)            ',            
             },
             {
              img : require('../images/homepage-laptop-floating-mockup.png'),
              expireTime:'End in 4 days',

              title:'Save on Samsung and more',
               description:'Accepts two Graco Snug Ride Click Connect infant car seats; tandem stroller Holds 2 children up to 40 pounds each One hand, standing fold closes easily with no bending necessary, leaving one hand Free for baby; Easy access, drop down storage basket lets you reach in without disturbing Your reclined child',
             },
             {
              img : require('../images/homepage-laptop-floating-mockup.png'),
              expireTime:'End in 6 days',

              title:'Save on Samsung and more',
               description:'MORE ACTIVITY; MORE FUN: The Toe Time infant car seat toy comes with toes that twinkle and gentle music that plays with every kick from your cutie pie, 3 hanging soft toys that crinkle or jingle once tugged, and a baby-safe mirror surrounded by eye-catching stars; your kiddo will love it! THOUGHTFULNESS IN DESIGN: Unlike other rear facing car seat toys that your baby can’t reach or block the view of your backseat mirror, our travel activity toy comes with velcro straps for adjusting both its height and angle. This means your baby gets to reach every toy and you get to see them.GREAT LEARNING TOOL: Through all the giggle-sparking kicking, tugging, and playing, your little one will develop their fine motor skills, have their visual and aural senses stimulated, and get a head start on color recognition thanks to the vibrant design of the baby toys for car seat.UNIQUE GIFT IDEA: Shopping around for the best baby shower gift to surprise that mom or dad? This car seat travel toy will be a guaranteed hit! It works for both baby boys and girls, attaches to most headrests in a matter of seconds, and even comes with batteries already included.BUY RISK FREE: We’ve got your back with a 100% satisfaction guarantee. Not happy with your car seat activity toy? Just reach out to us and we’ll do all we can to make it right. Click ‘Add to Cart’ now to make that car ride a total treat for your little munchkin completely risk-free!',            
             },
           ])

  
        const FirstRoute = () => (
          <View style={[styles.scene, { marginTop:5,paddingVertical:5,  }]} >
        
        <FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={Activelist}
                horizontal={true}
                contentContainerStyle={{backgroundColor:'white', paddingHorizontal:2,  paddingBottom: 70}}
                renderItem={renderlist5}
                keyExtractor={(item,id) => id.toString()}
                 /> 

            </View>
        );
        
        const SecondRoute = () => (
          <View style={[styles.scene, { marginTop:5,paddingVertical:5,  }]} >
        
          <FlatList
                  contentInsetAdjustmentBehavior="automatic"
                  data={Activelist}
                  horizontal={true}
                  contentContainerStyle={{backgroundColor:'white', paddingHorizontal:2,  paddingBottom: 70}}
                  renderItem={renderlist6}
                  keyExtractor={(item,id) => id.toString()}
                   /> 
  
              </View>
                      );
        
        const initialLayout = { width: Dimensions.get('window').width };
        
        const renderScene = SceneMap({
          first: FirstRoute,
          second: SecondRoute,
        });
        

     const Categorypressed=(item , id)=>{
         let updateitem = [...category];
       let index1 = category.findIndex(obj => obj.id == id)
      //  alert(index1)
       if(!!index1) {
         if(updateitem[index1].active == 1){
          updateitem[index1].active = 0;
          setcategory(updateitem)
         }else{
          updateitem[index1].active = 1;
          setcategory(updateitem)

         }
         
       }

     }   

    const renderlist4 = ({ item, index }) => {

      let title = item.title;
      if(title.length <= 85 ){
        title=item.title
      }else{
       title= title.substring(0,85)+'...'
      }

    
       
            return(
                <TouchableOpacity 
                onPress={()=>{
                    navigation.navigate('LivePresentation',{'item':item})
                }}
                style={{flex:0.5,borderColor:'grey',marginTop:5, marginHorizontal:3, borderWidth:0.3, borderRadius:8 }}>
    
    <ImageBackground 
                source={item.img} 
    
    
    // source={{ uri: 'https://images.unsplash.com/photo-1612728463082-ccb6a0d08bb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=395&q=80' }}
                                imageStyle={{ borderRadius: 8,  }} style={{ height: 210, width: "100%", }} resizeMethod='resize'resizeMode='cover'
                            >
    <View>
      <TouchableOpacity style={{backgroundColor:'purple' , marginRight:10,paddingHorizontal:8,paddingVertical:3,borderBottomRightRadius:8,borderBottomLeftRadius:8, alignSelf:'flex-end'}}>
        <Text style={{color:'white'}}>
          Live
        </Text>
      </TouchableOpacity>
    </View>
    {/* <View style={{flexDirection:'row',backgroundColor:'white', width:'100%'}}>
    <Text>ukg</Text>
    </View> */}
           
    <Text style={{color:'white', flex: 1,
             justifyContent:'center',
              
              bottom: 0,}}>
        
    </Text>
   
    <LinearGradient
                          colors={['#D0D3D4', 'white' ]}
                          
                          locations={[0.1 ,0.9 ]}
                          style={{alignItems: 'center',
                          justifyContent: 'flex-start',
                          opacity:0.95,
                          borderBottomLeftRadius:8,
                          borderBottomRightRadius:8,
                          borderTopLeftRadius:8,
                          borderTopRightRadius:8,
                          width: '100%',}}
                        >
                            <View style={{flexDirection:'row',alignItems:'center', width:'88%',paddingTop:6,justifyContent:'space-between' }}>
                                
                                <View style={{flexDirection:'column',height:90, justifyContent:'space-between'}}>
                                <Text style={{fontSize:14, fontWeight:'400' , textAlign:'left', color:'black'}} >{title}
                           
                                </Text>
                                
                                
                                </View>
                              
                            </View> 

                
                          {/* <Text style={{paddingHorizontal:15, alignSelf:'flex-start'}}>Vertical Gradient</Text> */}
                        </LinearGradient>
       
    
                                </ImageBackground>
    
    
                </TouchableOpacity>
    
            );
      
      
       
    }


    const renderlist5 = ({ item, index }) => {

     
            return(
                <TouchableOpacity 
                onPress={()=>{
                    // navigation.navigate('LivePresentation')
                }}
                style={{width:deviceWidth*0.4,marginRight:10, borderColor:'grey',marginTop:5, marginHorizontal:3, borderWidth:0.1, borderRadius:8 }}>
    
   <Image source={item.img} style={{height:deviceHeight*0.12, width:'90%'}} resizeMode='stretch' resizeMethod='resize' />
    
    <View style={{width:'100%', marginTop:20,}}>
      <Text style={{fontSize:10, backgroundColor:'#c35500',padding:2 , color:'white',fontWeight:'bold', alignSelf:'flex-start', fontWeight:'400'}}>TOP DEAL</Text>
                <Text style={{color:'orange',marginTop:5, fontSize:16, fontWeight:'bold'}}>$ 21 - $ 100</Text>

                <Text style={{color:'grey', fontSize:13, marginTop:5,}}>{item.expireTime} </Text>
                <Text>{item.title}</Text>
                <View style={{flexDirection:'row',marginTop:5}}>
                <Rating
          style={{alignSelf:'center'}}
             imageSize={12}
              />
              <Text style={{fontSize:10, marginTop:-2}}>232</Text>
                </View>
               
    </View>

    <TouchableOpacity style={styles.basketbtn}>
      <Text style={{padding:5, alignSelf:'center'}}>Add to basket</Text>
    </TouchableOpacity>
                </TouchableOpacity>
    
            );
      
      
       
    }

    const renderlist6 = ({ item, index }) => {

     
      return(
          <TouchableOpacity 
          onPress={()=>{
              // navigation.navigate('LivePresentation')
          }}
          style={{width:deviceWidth*0.4,marginRight:10, borderColor:'grey',marginTop:5, marginHorizontal:3, borderWidth:0.1, borderRadius:8 }}>

<Image source={item.img} style={{height:deviceHeight*0.12, width:'90%'}} resizeMode='stretch' resizeMethod='resize' />

<View style={{width:'100%', marginTop:20,}}>
<Text style={{fontSize:10, backgroundColor:'#c35500',padding:2 , color:'white',fontWeight:'bold', alignSelf:'flex-start', fontWeight:'400'}}>TOP DEAL</Text>
          <Text style={{color:'orange',marginTop:5, fontSize:16, fontWeight:'bold'}}>$ 21 - $ 100</Text>

          <Text style={{color:'grey', fontSize:13, marginTop:5,}}>{item.expireTime} </Text>
          <Text>{item.title}</Text>
          <View style={{flexDirection:'row',marginTop:5}}>
          <Rating
    style={{alignSelf:'center'}}
       imageSize={12}
        />
        <Text style={{fontSize:10, marginTop:-2}}>232</Text>
          </View>
         
</View>


          </TouchableOpacity>

      );


 
}


const renderlist1 = ({ item, index }) => {

  return(
      <TouchableOpacity 
      onPress={()=>{
        Categorypressed(item, item.id)
      }}
      style={[styles.category_main,{backgroundColor:item.active == 1 ?Appcolors.purple:'white'}]}>
        
        <Text style={{alignSelf:'center',fontSize:12, color:item.active == 1 ? 'white': Appcolors.drakgrey}}>{item.CategoryName}</Text>

      </TouchableOpacity>

  );



}

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


const renderStreamlist = ({ item, index }) => {  
  return(
      <TouchableOpacity 
      onPress={()=>{
        navigation.navigate('StreamWatching',{item : item})
      }}
      style={styles.StreamList_main}>
        
      <View style={{flexDirection:'row',paddingHorizontal:20, alignItems:'center', width:'100%', height:60,}}>
       <View style={{width:'15%',}}>

        <Image style={{width:50, height:50 , borderRadius:500/2}} source={require('../images/1.5.png')} />
        
        </View>


        <View style={{width:'3%', backgroundColor:'grey'}}>

        </View>


        <View style={{width:'40%',}}>

        <Text style={{color:'black', fontSize:18}}>Channel Name</Text>

        <Text style={{fontSize:12, color:Appcolors.drakgrey}}>12 Min Ago Started</Text>
        </View>


        <View style={{width:'15%',}}>
      
       </View>




        <TouchableOpacity style={{width:'25%',height:'60%',alignItems:'center',justifyContent:'center', borderWidth:0.7, borderRadius:5, }}>

        <Text style={{color:'black', fontSize:14}}>Follow</Text>

        </TouchableOpacity>

      </View>

     

      <View style={{backgroundColor:'#C4C4C4', height:200, width:'100%'}}>
      <TouchableOpacity style={{backgroundColor:'white', justifyContent:'center',alignItems:'center',margin:15,right:10, borderRadius:500/2, position:'absolute', width:35,height:35}}>
<Image  style={{alignSelf:'center', }} source={require('../images/Vector4.png')}/>
</TouchableOpacity>
      </View>
      <View style={{paddingHorizontal:20, marginTop:5}}>
      <Text style={{fontSize:16,color:Appcolors.drakgrey}}>Live Streamning titl very long long very long</Text>
      </View>
      </TouchableOpacity>

  );



}


const renderChannellist = ({ item, index }) => {  
  return(
      <TouchableOpacity 
      onPress={()=>{
        navigation.navigate('ChannelDetails',{item : item})
      }}
      style={styles.StreamList_main}>
        
      <View style={{flexDirection:'row',paddingHorizontal:20, alignItems:'center', width:'100%', height:60,}}>
       <View style={{width:'15%',}}>

        <Image style={{width:50, height:50 , borderRadius:500/2}} source={require('../images/1.5.png')} />
        
        </View>


        <View style={{width:'3%', backgroundColor:'grey'}}>

        </View>


        <View style={{width:'40%',}}>

        <Text style={{color:'black', fontSize:18}}>Channel Name</Text>

        <Text style={{fontSize:12, color:Appcolors.drakgrey}}>12 Min Ago Started</Text>
        </View>


        <View style={{width:'15%',}}>
      
       </View>




        <TouchableOpacity style={{width:'25%',height:'60%',alignItems:'center',justifyContent:'center', borderWidth:0.7, borderRadius:5, }}>

        <Text style={{color:'black', fontSize:14}}>Follow</Text>

        </TouchableOpacity>

      </View>

     

      <View style={{backgroundColor:'#C4C4C4', height:200, width:'100%'}}>
      <TouchableOpacity style={{backgroundColor:'white', justifyContent:'center',alignItems:'center',margin:15,right:10, borderRadius:500/2, position:'absolute', width:35,height:35}}>
<Image  style={{alignSelf:'center', }} source={require('../images/Vector4.png')}/>
</TouchableOpacity>
      </View>
      <View style={{paddingHorizontal:20, marginTop:5}}>
      <Text style={{fontSize:16,color:Appcolors.drakgrey}}>Live Streamning titl very long long very long</Text>
      </View>
      </TouchableOpacity>

  );



}

  const Streams = () => {
    return(
      <View>
        <View style={{height:deviceHeight*0.06,marginTop:15, paddingVertical:5,}}>


        <FlatList
              contentInsetAdjustmentBehavior="automatic"
              data={category}
              horizontal={true}
              contentContainerStyle={{height:'80%',alignSelf:'center', paddingHorizontal:15,  }}
              renderItem={renderlist1}
              keyExtractor={(item,id) => id.toString()}
              /> 

        </View>

        <View style={{marginTop:15, paddingVertical:5,}}>


        <FlatList
              contentInsetAdjustmentBehavior="automatic"
              data={Channel}
              contentContainerStyle={{width:'100%',paddingBottom:150, alignSelf:'center',   }}
              renderItem={renderStreamlist}
              keyExtractor={(item,id) => id.toString()}
              /> 


        </View>
       

      </View>
    )
  }

  const Products = () => {
    return(
      <View>
         <View style={{height:deviceHeight*0.06,marginTop:15, paddingVertical:5,}}>


        <FlatList
              contentInsetAdjustmentBehavior="automatic"
              data={category}
              horizontal={true}
              contentContainerStyle={{height:'80%',alignSelf:'center', paddingHorizontal:15,  }}
              renderItem={renderlist1}
              keyExtractor={(item,id) => id.toString()}
              /> 

        </View>

        <View style={{marginTop:15, paddingVertical:5,}}>


          <FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={list}
                numColumns={2}
                contentContainerStyle={{width:'100%',paddingBottom:150, paddingHorizontal:15, alignSelf:'center',   }}
                renderItem={renderProdductlist}
                keyExtractor={(item,id) => id.toString()}
                /> 


          </View>

      </View>
    )
  }

  const Channels = () => {
    return(
      <View>
      <View style={{height:deviceHeight*0.06,marginTop:15, paddingVertical:5,}}>


      <FlatList
            contentInsetAdjustmentBehavior="automatic"
            data={category}
            horizontal={true}
            contentContainerStyle={{height:'80%',alignSelf:'center', paddingHorizontal:15,  }}
            renderItem={renderlist1}
            keyExtractor={(item,id) => id.toString()}
            /> 

      </View>

      <View style={{marginTop:15, paddingVertical:5,}}>


      <FlatList
            contentInsetAdjustmentBehavior="automatic"
            data={Channel}
            contentContainerStyle={{width:'100%',paddingBottom:150, alignSelf:'center',   }}
            renderItem={renderChannellist}
            keyExtractor={(item,id) => id.toString()}
            /> 


      </View>
     

    </View>
    )
  }


const _onRefresh = (callback) => {
  networkRequest().then(response => callback(response))    
} 
    return (
<SafeAreaView style={{height:deviceHeight,backgroundColor:'white', width:deviceWidth}}> 
    <StatusBar barStyle="light-content"  backgroundColor='red' />

      <Appbar style={styles.appbar}>

      <TouchableOpacity 
              style={{alignContent:"center", alignItems:"center"}}

      >
          <Ionicons  name='chevron-back' size={30} color={Appcolors.drakgrey} />

            
          </TouchableOpacity>

      <Text style={styles.Header_txt}>Discover</Text>

      <TouchableOpacity 
      onPress={()=> {navigation.navigate('GuestProfileVS')}}
      style={{alignSelf:'center', }}>
          
      <Image     style={{height:25 , width:25}} 
                      source={require('../images/Vectoraccount.png')} 
                      />
      </TouchableOpacity>

      </Appbar>

      <View style={styles.body}>


        <View style={styles.search}>
          <View style={{width:'8%'}}>

        <Ionicons  name='md-search-sharp' size={22} style={{alignSelf:'center', paddingVertical:8,}} color={Appcolors.lightgrey} />
        
        </View>
          <TextInput 
          placeholder='Search'
          placeholderTextColor={Appcolors.lightgrey}
          style={{width:'90%', paddingLeft:5,height:'100%' , color:Appcolors.drakgrey}} />
          
          </View>

      
          <ScrollableTabView
      style={{marginTop:10,}}
      renderTabBar={() => (
        <ScrollableTabBar
          style={styles.scrollStyle}
          tabStyle={styles.tabStyle}
        />
      )}
      tabBarTextStyle={styles.tabBarTextStyle}
      tabBarInactiveTextColor={'grey'}
      tabBarActiveTextColor={'black'}
      tabBarUnderlineStyle={styles.underlineStyle}
      initialPage={0}
      >

      <Streams key={'1'} tabLabel={'Streams'} style={{flex:1,backgroundColor:'red'}}/>
      <Products key={'2'} tabLabel={'Products'} style={{flex:1,backgroundColor:'blue'}}/>
      <Channels key={'3'} tabLabel={'Channels'} style={{flex:1,backgroundColor:'yellow'}}/>
      </ScrollableTabView>





          </View>

      </SafeAreaView>
   )
}

export default Discover;

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
  paddingVertical:10,
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
 category_main:{
  justifyContent:'center',
  paddingHorizontal:20, 
  alignItems:'center',
   marginHorizontal:5,
   borderRadius:500/2,
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
 search:{
  marginHorizontal:20,
  flexDirection:'row',
  marginTop:5,
  paddingLeft:10,
  borderRadius:5,
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

 Header_txt:{
   alignSelf:'center',
    fontSize:20,
   fontWeight:'500',
  color:Appcolors.drakgrey
 },
    tabStyle: {},
  scrollStyle: {
    backgroundColor: 'white',
    elevation:0,
  },
  tabBarTextStyle: {
    fontSize: 14,
    fontWeight: 'normal',
  },
  underlineStyle: {
    height: 4,
    backgroundColor: '#715DFF',
    borderTopLeftRadius:4,
    borderTopRightRadius:4,
  
  },
  });
  