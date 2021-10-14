import * as React from 'react';
import {  Button, } from 'react-native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import { View, Text, BlurView,TouchableOpacity, TextInput, StyleSheet, Platform, BackHandler, Image, ScrollView,ImageBackground } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContentScrollView,DrawerItemList,DrawerItem,} from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';


import Home from '../screens/Home'
import BottomTabs from '../screens/BottomTabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

import Category from '../screens/Category';
import SpecificCategory from '../screens/SpecificCategory';
import LivePresentation from '../screens/LivePresentation';
import Seller from '../screens/Seller';
import Product from '../screens/Product';
import Setting from '../screens/Setting';
import Feather from 'react-native-vector-icons/dist/Feather';
import Register from '../screens/Register';
import Login from '../screens/Login';
import BecomeSeller from '../screens/BecomeSeller';
import UpcomingJoined from '../screens/UpcomingJoined';
import Events from '../screens/Events';
import YourPurchases from '../screens/YourPurchases';
import YourPurchasesDetails from '../screens/YourPurchasesDetails';
import LoginandSecurity from '../screens/LoginandSecurity'
import Accounts from '../screens/Accounts';
import YourAddresses from '../screens/YourAddresses';
import PaymentMethods from '../screens/PaymentMethods';
import PaymentsTransactions from '../screens/PaymentsTransactions';
import Messagecenter from '../screens/Messagecenter';
import SavedProducts from '../screens/SavedProducts';
import Discover from '../screens/Discover';
import ProductDetails from '../screens/ProductDetails'
import StreamWatching from '../screens/StreamWatching';
import ChannelDetails from '../screens/ChannelDetails';
import GuestProfileVS from '../screens/GuestProfileVS';
import Forgetpassword from '../screens/Forgetpassword';
import Emailsent from '../screens/Emailsent';
import Resetpassword from '../screens/Resetpassword';


const Stack = createStackNavigator();
 const Tab = createBottomTabNavigator();


 const TabScreen =()=>{
  return(
  <Tab.Navigator
  
   options={{  headerShown:false, headerTitleAlign:"center", headerLeft: null ,    }} 
    tabBarOptions={{
      activeTintColor: "#2F7C6E",
      inactiveTintColor: "#222222",
      keyboardHidesTabBar: true,

    style: {
      position: 'absolute',
      backgroundColor:'#ECF0F1',
   alignSelf:'center',
   marginTop:-20
     // height:80,


      
    },
    }}
    //  tabBarOptions={{
     

  //   activeTintColor: 'black',
    

  //   keyboardHidesTabBar: true,
  //   style: {
  //     height:55,
  //     position: 'absolute',
  //   },
  // }}
  >
  <Tab.Screen name='Home' component={Homecontainer}
   options={{
 headerShown:false,
  
//           tabBarLabel: 'Auctions',
//           tabBarOptions: {
//   labelStyle: {
//     fontWeight:'bold'
//   },
// },
          // tabBarIcon: ({ color }) => (
          //   <Image
          //   source={require('../Assets/icons/sedan-car-front.png')}

          //   />
          // ),
tabBarIcon: ({ focused, color, size }) => (
  
            <Feather
                name='tv'                
                size={size ? size : 20}
                color={focused ? color : "#222222"}
                focused={focused}
                color={color}
            />
//             // <Image
//             // source={require('../Assets/icons/sedancarfront0.png')}

//             // />
//         )
)
        }}  />
  <Tab.Screen name='Categorycontainer' component={Categorycontainer} 
   options={{
    headerShown:false,
          tabBarLabel: 'Category',
          tabBarOptions: {
  labelStyle: {
    fontWeight:'bold'
  },
},
tabBarIcon: ({ focused, color, size }) => (
  
  <Entypo
      name="magnifying-glass"
      size={size ? size : 20}
      color={focused ? color : "#222222"}
      focused={focused}
      color={color}
  />

)
}}  />

  <Tab.Screen name='Settingcontainer' component={Settingcontainer}
  
  options={{
    
          tabBarLabel: 'Setting',
          tabBarIcon: ({ focused, color, size }) => (
  
  <Icon
      name="settings-outline"
      size={size ? size : 20}
      color={focused ? color : "#222222"}
      focused={focused}
      color={color}
  />

)
}}  />
 </Tab.Navigator>
  );
}


const Homecontainer =() =>{
  return(
  <Stack.Navigator>
<Stack.Screen name='Home' component={Home}
options={{
  headerShown:false,
  
}} 
 />
<Stack.Screen name='LivePresentation' component={LivePresentation} options={{
  title: 'Offer Details',
  headerShown:false,

}}/>
<Stack.Screen name='Seller' component={Seller} options={{
  title: 'Offer Details',
  headerShown:false,

}}/>
<Stack.Screen name='Product' component={Product} options={{
  title: 'Offer Details',
  headerShown:false,

}}/>

<Stack.Screen name='Events' component={Events} options={{
  title: 'Offer Details',
  headerShown:false,

}}/>


  </Stack.Navigator>
  );
}

const Categorycontainer =() =>{
  return(
  <Stack.Navigator>
<Stack.Screen name='Category' component={Category}
options={{
  headerShown:false,
  
}} 
 />
<Stack.Screen name='SpecificCategory' component={SpecificCategory} options={{
  headerShown:false,

}}/>
<Stack.Screen name='Product' component={Product} options={{
  headerShown:false,

}}/>



  </Stack.Navigator>
  );
}

const Settingcontainer =() =>{
  return(
  <Stack.Navigator>
<Stack.Screen name='Setting' component={Setting}
options={{
  headerShown:false,
  
}} 
 />
<Stack.Screen name='Register' component={Register} options={{
  headerShown:false,

}}/>
<Stack.Screen name='Login' component={Login} options={{
  headerShown:false,

}}/>
<Stack.Screen name='BecomeSeller' component={BecomeSeller} options={{
  headerShown:false,

}}/>


<Stack.Screen name='UpcomingJoined' component={UpcomingJoined} options={{
  headerShown:false,

}}/>

<Stack.Screen name='Events' component={Events} options={{
  headerShown:false,

}}/>

<Stack.Screen name='YourPurchases' component={YourPurchases} options={{
  headerShown:false,

}}/>



<Stack.Screen name='YourPurchasesDetails' component={YourPurchasesDetails} options={{
  headerShown:false,

}}/>



<Stack.Screen name='Accounts' component={Accounts} options={{
  headerShown:false,

}}/>

<Stack.Screen name='LoginandSecurity' component={LoginandSecurity} options={{
  headerShown:false,

}}/>


<Stack.Screen name='YourAddresses' component={YourAddresses} options={{
  headerShown:false,

}}/>
<Stack.Screen name='PaymentMethods' component={PaymentMethods} options={{
  headerShown:false,

}}/>
<Stack.Screen name='PaymentsTransactions' component={PaymentsTransactions} options={{
  headerShown:false,

}}/>
<Stack.Screen name='Messagecenter' component={Messagecenter} options={{
  headerShown:false,

}}/>
<Stack.Screen name='SavedProducts' component={SavedProducts} options={{
  headerShown:false,

}}/>







  </Stack.Navigator>
  );
}
// const TopTab = createMaterialTopTabNavigator();
// const Discovertab = ()=> {
//   return (
 
//     <TopTab.Navigator  tabBarOptions={{
//       labelStyle: { fontSize: 13, fontWeight:'bold' },
//       // tabStyle: { width: 130,height:60,paddingLeft:10 , paddingVertical:5 },
//       inactiveTintColor:"#A6A8BA",
//       style: {
//         borderTopWidth: 0,
//         elevation: 0
//       },
//       activeTintColor:"#f14057",
//       pressColor:"white",
//       indicatorStyle:{ backgroundColor: 'white' },
//     }}
//     swipeEnabled={false}
//     >
//       <TopTab.Screen  name="Discover"   component={Discover1}  />
//       <TopTab.Screen name="Categories" component={Categories} />
//       <TopTab.Screen name='MyServices' component={MyServices} />
//     </TopTab.Navigator>
//   );
// }
// const Discover1 = () =>{
//   return(
//   <Stack.Navigator 
//    initialRouteName="Discover" 
   
//            screenOptions={{
//              headerShown: false,
//            }}>
//          <Stack.Screen name="Discover" component={Discover}  />
//          <Stack.Screen name="NewServices" component={NewServices} />
//    </Stack.Navigator>
//   );
// }

// const NewService = ()=> {
//   return (
 
//     <TopTab.Navigator  tabBarOptions={{
//       labelStyle: { fontSize: 13, fontWeight:'bold' },
//       // tabStyle: { width: 130,height:60,paddingLeft:10 , paddingVertical:5 },
//       inactiveTintColor:"#A6A8BA",
//       style: {
//         borderTopWidth: 0,
//         elevation: 0
//       },
//       activeTintColor:"#f14057",
//       pressColor:"white",
//       indicatorStyle:{ backgroundColor: 'white' },
//     }}
//     swipeEnabled={false}
//     >
//       <TopTab.Screen  name="NewServices"   component={NewServices}  />
//       <TopTab.Screen name="Categories" component={Categories} />
//       <TopTab.Screen name='MyServices' component={MyServices} />
//     </TopTab.Navigator>

//   );
// }





// const Tab = createBottomTabNavigator();
// const Tab = AnimatedTabBarNavigator();
// const StackAuctions = createStackNavigator();
// const StackInvoice =createStackNavigator();
// const StackBids =createStackNavigator();

// const TopTab = createMaterialTopTabNavigator();


// const StackBid =({navigation}) =>{
//   return(
//   <StackBids.Navigator >
// <StackBids.Screen name='My Bids' component={TabStack} options={{

// headerStyle: {
//             backgroundColor: '#268ef5',
     
//           },
//           headerTitleAlign:"center",
//           headerTitleStyle: {
//             color:'white' ,
//           },
//       headerLeft: () => (
//     <TouchableOpacity style={{position: 'absolute',paddingHorizontal:9,
//   alignContent:'flex-start',alignSelf:'flex-start', }}
 
//  onPress={() => navigation.openDrawer()}
//  >
//       <Image source={ require('../Assets/icons/list1.png')} 
//  style={{ width: 24, height:24,marginRight:10, alignSelf: 'center' }} resizeMode='contain'
// />
//   </TouchableOpacity>
//             )}} />
// <StackBids.Screen name='ongoingDetails' component={ongoingDetails} />
// <StackBids.Screen name='WonbidsDetails' component={WonbidsDetails} />

//   </StackBids.Navigator>
//   );
// }


// const Stackinvoice =({navigation}) =>{
//   return(
//   <StackBids.Navigator >
// <StackBids.Screen name='invoice1' component={invoice1} 
// options={{

//   title:'My Invoice',

// headerStyle: {
//             backgroundColor: '#268ef5',
     
//           },
//           headerTitleAlign:"center",
//           headerTitleStyle: {
//             color:'white' ,
//           },
//       headerLeft: () => (
//     <TouchableOpacity style={{position: 'absolute',paddingHorizontal:9,
//   alignContent:'flex-start',alignSelf:'flex-start', }}
 
//  onPress={() => navigation.openDrawer()}
//  >
//       <Image source={ require('../Assets/icons/list1.png')} 
//  style={{ width: 24, height:24,marginRight:10, alignSelf: 'center' }} resizeMode='contain'
// />
//   </TouchableOpacity>
//             )}} 

//             />

//  <StackBids.Screen name='invoice2' component={invoice2} options={{

// title:'My Invoice',

// headerStyle: {
//           backgroundColor: '#268ef5',
   
//         },
//         headerTitleAlign:"center",
//         headerTitleStyle: {
//           color:'white' ,
//         },
        
//  }}/>

// {/* <Stackinvoice.Screen name='ongoingDetails' component={ongoingDetails} />
// <Stackinvoice.Screen name='WonbidsDetails' component={WonbidsDetails} /> */}

//   </StackBids.Navigator>
//   );
// }



const AppNavigator = (props) => {
 return (
   <Stack.Navigator 
   initialRouteName="Discover" 
   
           screenOptions={{
             headerShown: false,
           }}
           >

          <Stack.Screen name="Discover" component={Discover} />
          <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="StreamWatching" component={StreamWatching} />
          <Stack.Screen name='ChannelDetails' component={ChannelDetails} />
          <Stack.Screen name='GuestProfileVS' component={GuestProfileVS} />







         <Stack.Screen name="Homes" component={TabScreen} />

         <Stack.Screen name="BottomTabs" component={BottomTabs} />
  
         <Stack.Screen name="Home" component={Home} />
         {/* <Stack.Screen name="Category" component={Category} /> */}
         <Stack.Screen name="SpecificCategory" component={SpecificCategory} />
         {/* <Stack.Screen name="Seller" component={Seller} /> */}
         <Stack.Screen name='UpcomingJoined' component={UpcomingJoined} />
         {/* <Stack.Screen name='Events' component={Events}/> */}
         <Stack.Screen name="Register" component={Register} />
         <Stack.Screen name="Login" component={Login} />
         <Stack.Screen name="Forgetpassword" component={Forgetpassword} />
         <Stack.Screen name="Emailsent" component={Emailsent} />

         <Stack.Screen name="Resetpassword" component={Resetpassword} />
         
         
         
         <Stack.Screen name="BecomeSeller" component={BecomeSeller} />



         {/* <Stack.Screen name="Product" component={Product} /> */}


      


  

   </Stack.Navigator>
 
 );
}

export default AppNavigator;
