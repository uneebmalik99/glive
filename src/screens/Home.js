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

import {

    Avatar,
   
} from 'react-native-paper';
import { Container, Header, Tab, Tabs, ScrollableTab } from 'native-base';

import BottomTabs from './BottomTabs.js';
import { Appbar, Card } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';
import { useTheme } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Iconn from 'react-native-vector-icons/dist/Ionicons';
import Icon from 'react-native-vector-icons/dist/Feather'


const vacation = {key:'vacation', color: 'red', selectedDotColor: 'blue'};
const massage = {key:'massage', color: 'blue', selectedDotColor: 'blue'};
const workout = {key:'workout', color: 'green'};

function Home({ item, navigation }) {
    const[value , setvalue] = useState(0)
    const { colors } = useTheme();

    const theme = useTheme();
    const [data, setdata] = useState([
        {
            day: "Wednesday",
            date: "Aprl 04 2020"
        }

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


    return (
        <SafeAreaView style={{ flex: 1,backgroundColor:'white' }}>
              <View style={{  width:'100%',height:deviceHeight*0.08,backgroundColor:'white', paddingHorizontal:13, flexDirection:'column'}}>
  
  <View style={{ width:'100%',height:deviceHeight*0.07,marginTop:5, flexDirection:'row'}}>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>
  
          <TouchableOpacity
                            style={{ alignSelf: 'flex-start', }}
                            onPress={() => {
        }}

                        >
                        </TouchableOpacity> 
  
  </View>
  <View style={{justifyContent:'center',width:'60%',height:'100%',}}>
  <Text style={{ alignSelf: 'center', textAlignVertical: 'center', fontSize: 18, fontWeight: 'bold' }}>glive</Text>
  </View>
  
  <View style={{justifyContent:'center',width:'20%', height:'100%',}}>
  <TouchableOpacity

  
  style={{ alignSelf: 'flex-end', marginLeft: 40 }}

   onPress={()=>
       {}}
    
                            >
                      </TouchableOpacity>
  
  </View>
  
  
  
  </View>
  


           </View>



<ScrollView style={{ marginBottom:20,}}>


<FlatList
                contentInsetAdjustmentBehavior="automatic"
                data={list}
                numColumns={2}
                contentContainerStyle={{backgroundColor:'white', paddingHorizontal:12,  paddingBottom: 40}}
                renderItem={renderlist4}
                keyExtractor={(item,id) => id.toString()}
                 /> 
<View style={{paddingHorizontal:15,}}>

         <Text style={styles.dealtxt}>Today's Deal</Text>
         <Text style={[styles.dealtxt,{fontWeight:null,fontSize:13, marginTop:10,}]}>New Deal , Every day Shop our Deal of the day, Lightning deal, Coupons, and more daily deals and limited sales.</Text>        
 
          <Text style={[styles.dealtxt,{fontWeight:'400', marginTop:10,marginBottom:5,}]}>Top Deals & Lightning Deals</Text>
 <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      />


</View>


</ScrollView>

        </SafeAreaView>
   
   
   )
}

export default Home;
const styles = StyleSheet.create({
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'blue',
    },
    scene: {
      flex: 1,
    },
    basketbtn:{
      alignSelf:'center',
      width:'90%',
      marginTop:25,
      borderColor:'grey',
      borderWidth:0.4,
      justifyContent:'center',
      backgroundColor:'#f2cc69',
      borderRadius:5,

    },
  dealtxt:{
      fontSize:20,
      fontWeight:'600'
    },
    button: {
      width: 60,
      height: 60,
      alignItems: 'center',
      justifyContent: 'center',
      shadowColor: 'grey',
      shadowOpacity: 0.1,
      shadowOffset: {x: 2, y: 0},
      shadowRadius: 2,
      borderRadius: 30,
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 5,
      shadowOpacity: 5.0,
    },
    actionBtn: {
      textShadowOffset: {width: 5, height: 5},
      textShadowRadius: 10,
  
    },
  });
  