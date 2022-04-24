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
import Fontisto from 'react-native-vector-icons/Fontisto';
import Icon from 'react-native-vector-icons/Ionicons';
import Ionicons from 'react-native-vector-icons/Ionicons';

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
import Guest from '../screens/Guest';
import schedulealivestream from '../screens/schedulealivestream';
import Golive from '../screens/Golive';
import Uploadavideo from '../screens/Uploadavideo';
import BuyerPreview from '../screens/BuyerPreview';
import AccountSettings from '../screens/AccountSettings';
import BecomeaBusiness from '../screens/BecomeaBusiness';
import Language from '../screens/Language';
import BecomeaBusinessnostore from '../screens/BecomeaBusinessnostore';
import Createastore from '../screens/Createastore';
import schedulealivestreamgolive from '../screens/schedulealivestreamgolive';
import LiveStream from '../screens/LiveStream';
import AddProduct from '../screens/AddProduct';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import BuyerProfile from '../screens/BuyerProfile';
import GuestProfile from '../screens/GuestProfile';
import ProfileStore from '../screens/ProfileStore';
import Livestreams from '../screens/Livestreams';
import EditProfileStore from '../screens/EditProfileStore';
import ProfileCatalogue from '../screens/ProfileCatalogue';
import AddProducts from '../screens/AddProducts';
import Editschedulealivestream from '../screens/Editschedulealivestream';


const Stack = createStackNavigator();
 const Tab = createBottomTabNavigator();


 const GuestTab =()=>{
  return(
  <Tab.Navigator 
   options={{  
   headerShown:false, headerTitleAlign:"center", headerLeft: null ,tabBarShowLabel:false    }} 
    tabBarOptions={{
      tabBarActiveTintColor:'#E91327',
      inactiveTintColor: "#616B7B",
      keyboardHidesTabBar: true,
      showLabel: false ,
   
    }}
  //    tabBarOptions={{
  //   activeTintColor: 'black',
  //   keyboardHidesTabBar: true,
  //   style: {
  //     height:55,
  //     position: 'absolute',
  //   },
  // }}
  // tabBarOptions={{ showLabel: false }}
  >
  <Tab.Screen name='Guest' component={Guest}
   options={{
 headerShown:false,


//           tabBarLabel: '',
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
                name='compass'                
                size={size ? size : 20}
                color={focused ? color : "#E91327"}
                focused={focused}
                color={focused ? "#E91327" : "#616B7B"}
            />
//             // <Image
//             // source={require('../Assets/icons/sedancarfront0.png')}

//             // />
//         )
)
        }}  />
  <Tab.Screen name='Accounts' component={Accounts} 
   options={{
    headerShown:false,
          tabBarLabel: 'Category',
          tabBarOptions: {
  labelStyle: {
    fontWeight:'bold'
  },
},
tabBarIcon: ({ focused, color, size }) => (
  
  <Ionicons
      name="mic-outline"
      size={size ? size : 20}
      color={focused ? color : "#222222"}
      focused={focused}
      color={focused ? "#E91327" : "#616B7B"}
      />

)
}}  />

  {/* <Tab.Screen name='Profile' component={Profile}
  
  options={{
    
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, color, size }) => (
  
  <Icon
      name="settings-outline"
      size={size ? size : 20}
      color={focused ? color : "#222222"}
      focused={focused}
      color={focused ? "#E91327" : "#616B7B"}
      />

)
}}  /> */}


<Tab.Screen name='Login' component={Login}
  
  options={{
    
          tabBarLabel: 'BuyerProfile',
          tabBarIcon: ({ focused, color, size }) => (
  
            <Ionicons
            name="ios-person-outline"
      size={size ? size : 20}
      color={focused ? color : "#222222"}
      focused={focused}
      color={focused ? "#E91327" : "#616B7B"}
      />

)
}}  />



 </Tab.Navigator>
  );
}


 const TabScreen =()=>{
  return(
  <Tab.Navigator 
   options={{  
   headerShown:false, headerTitleAlign:"center", headerLeft: null ,tabBarShowLabel:false    }} 
    tabBarOptions={{
      tabBarActiveTintColor:'#E91327',
      inactiveTintColor: "#616B7B",
      keyboardHidesTabBar: true,
      showLabel: false ,
   
    }}
  //    tabBarOptions={{
  //   activeTintColor: 'black',
  //   keyboardHidesTabBar: true,
  //   style: {
  //     height:55,
  //     position: 'absolute',
  //   },
  // }}
  // tabBarOptions={{ showLabel: false }}
  >
  <Tab.Screen name='Discover' component={Discover}
   options={{
 headerShown:false,


//           tabBarLabel: '',
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
                name='compass'                
                size={size ? size : 20}
                color={focused ? color : "#E91327"}
                focused={focused}
                color={focused ? "#E91327" : "#616B7B"}
            />
//             // <Image
//             // source={require('../Assets/icons/sedancarfront0.png')}

//             // />
//         )
)
        }}  />
  <Tab.Screen name='Accounts' component={Accounts} 
   options={{
    headerShown:false,
          tabBarLabel: 'Category',
          tabBarOptions: {
  labelStyle: {
    fontWeight:'bold'
  },
},
tabBarIcon: ({ focused, color, size }) => (
  
  <Ionicons
      name="mic-outline"
      size={size ? size : 20}
      color={focused ? color : "#222222"}
      focused={focused}
      color={focused ? "#E91327" : "#616B7B"}
      />

)
}}  />

  {/* <Tab.Screen name='Profile' component={Profile}
  
  options={{
    
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, color, size }) => (
  
  <Icon
      name="settings-outline"
      size={size ? size : 20}
      color={focused ? color : "#222222"}
      focused={focused}
      color={focused ? "#E91327" : "#616B7B"}
      />

) 
}}  /> */}


<Tab.Screen name='Profile' component={Profile}
  
  options={{
    
          tabBarLabel: 'BuyerProfile',
          tabBarIcon: ({ focused, color, size }) => (
  
  <Fontisto
      name="shopping-store"
      size={size ? size : 20}
      color={focused ? color : "#222222"}
      focused={focused}
      color={focused ? "#E91327" : "#616B7B"}
      />

)
}}  />



 </Tab.Navigator>
  );
}


const TabScreen2 =()=>{
  return(
  <Tab.Navigator 
   options={{  
   headerShown:false, headerTitleAlign:"center", headerLeft: null ,tabBarShowLabel:false    }} 
    tabBarOptions={{
      tabBarActiveTintColor:'#E91327',
      inactiveTintColor: "#616B7B",
      keyboardHidesTabBar: true,
      showLabel: false ,
   
    }}
  //    tabBarOptions={{
  //   activeTintColor: 'black',
  //   keyboardHidesTabBar: true,
  //   style: {
  //     height:55,
  //     position: 'absolute',
  //   },
  // }}
  // tabBarOptions={{ showLabel: false }}
  >
  <Tab.Screen name='Discover' component={Discover}
   options={{
 headerShown:false,


//           tabBarLabel: '',
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
                name='compass'                
                size={size ? size : 20}
                color={focused ? color : "#E91327"}
                focused={focused}
                color={focused ? "#E91327" : "#616B7B"}
            />
//             // <Image
//             // source={require('../Assets/icons/sedancarfront0.png')}

//             // />
//         )
)
        }}  />
  <Tab.Screen name='Accounts' component={Accounts} 
   options={{
    headerShown:false,
          tabBarLabel: 'Category',
          tabBarOptions: {
  labelStyle: {
    fontWeight:'bold'
  },
},
tabBarIcon: ({ focused, color, size }) => (
  
  <Ionicons
      name="mic-outline"
      size={size ? size : 20}
      color={focused ? color : "#222222"}
      focused={focused}
      color={focused ? "#E91327" : "#616B7B"}
      />

)
}}  />

  {/* <Tab.Screen name='Profile' component={Profile}
  
  options={{
    
          tabBarLabel: 'Profile',
          tabBarIcon: ({ focused, color, size }) => (
  
  <Icon
      name="settings-outline"
      size={size ? size : 20}
      color={focused ? color : "#222222"}
      focused={focused}
      color={focused ? "#E91327" : "#616B7B"}
      />

)
}}  /> */}


<Tab.Screen name='BuyerProfile' component={BuyerProfile}
  
  options={{
    
          tabBarLabel: 'BuyerProfile',
          tabBarIcon: ({ focused, color, size }) => (
  
  <Ionicons
      name="ios-person-outline"
      size={size ? size : 20}
      color={focused ? color : "#222222"}
      focused={focused}
      color={focused ? "#E91327" : "#616B7B"}
      />

)
}}  />



 </Tab.Navigator>
  );
}

const ProfileStorestack =()=>{
  return(
  <Tab.Navigator 
   options={{  
   headerShown:false, headerTitleAlign:"center", headerLeft: null ,tabBarShowLabel:false    }} 
    tabBarOptions={{
      tabBarActiveTintColor:'#E91327',
      inactiveTintColor: "#616B7B",
      keyboardHidesTabBar: true,
      showLabel: false ,
   
    }}

  >
  <Tab.Screen name='Discover' component={Discover}
   options={{
 headerShown:false,

tabBarIcon: ({ focused, color, size }) => (
  
            <Feather
                name='compass'                
                size={size ? size : 20}
                color={focused ? color : "#E91327"}
                focused={focused}
                color={focused ? "#E91327" : "#616B7B"}
            />

)
        }}  />
  <Tab.Screen name='Accounts' component={Accounts} 
   options={{
    headerShown:false,
          tabBarLabel: 'Category',
          tabBarOptions: {
  labelStyle: {
    fontWeight:'bold'
  },
},
tabBarIcon: ({ focused, color, size }) => (
  
  <Ionicons
      name="mic-outline"
      size={size ? size : 20}
      color={focused ? color : "#222222"}
      focused={focused}
      color={focused ? "#E91327" : "#616B7B"}
      />

)
}}  />



<Tab.Screen name='ProfileStore' component={ProfileStore}
  
  options={{
    
          tabBarLabel: 'ProfileStore',
          tabBarIcon: ({ focused, color, size }) => (
  
<Fontisto
      name="shopping-store"
      size={size ? size : 20}
      color={focused ? color : "#222222"}
      focused={focused}
      color={focused ? "#E91327" : "#616B7B"}
      />

)
}}  />



 </Tab.Navigator>
  );
}



const SettingStack =() =>{
  return(
  <Stack.Navigator>
<Stack.Screen name='Setting' component={Setting}
options={{
  headerShown:false,
  
}} 
 />



  </Stack.Navigator>
  );
}


const AppNavigator = (props) => {
 return (
   <Stack.Navigator 
   initialRouteName="Guest" 
   
           screenOptions={{
             headerShown: false,
           }}
           >

          {/* <Stack.Screen name="Discover" component={Discover} /> */}
          {/* <Stack.Screen name="ProductDetails" component={ProductDetails} />
          <Stack.Screen name="StreamWatching" component={StreamWatching} />
          <Stack.Screen name='ChannelDetails' component={ChannelDetails} /> */}
          <Stack.Screen name='GuestProfileVS' component={GuestProfileVS} />

          {/* <Stack.Screen name='TabScreen' component={TabScreen} /> */}

          <Stack.Screen name='schedulealivestream' component={schedulealivestream} />
          <Stack.Screen name='Editschedulealivestream' component={Editschedulealivestream} />


          <Stack.Screen name='Golive' component={Golive} />
          <Stack.Screen name='schedulealivestreamgolive' component={schedulealivestreamgolive} />
          <Stack.Screen name='LiveStream' component={LiveStream} />

          <Stack.Screen name='Setting' component={Setting} />
          <Stack.Screen name='EditProfile' component={EditProfile} />
          <Stack.Screen name='EditProfileStore' component={EditProfileStore} />
          <Stack.Screen name='ProfileCatalogue' component={ProfileCatalogue} />


          <Stack.Screen name='Livestreams' component={Livestreams} />
          

          <Stack.Screen name='AddProduct' component={AddProduct} />
          <Stack.Screen name='AddProducts' component={AddProducts} />

          
          <Stack.Screen name='Uploadavideo' component={Uploadavideo} />
          <Stack.Screen name='BuyerPreview' component={BuyerPreview} />
          
          <Stack.Screen name='Createastore' component={Createastore} />


          
          <Stack.Screen name='AccountSettings' component={AccountSettings} />
<Stack.Screen name='BecomeaBusiness' component={BecomeaBusiness} />
<Stack.Screen name='BecomeaBusinessnostore' component={BecomeaBusinessnostore} />

<Stack.Screen name='Language' component={Language} />

          <Stack.Screen name='Guest' component={GuestTab}/>
         <Stack.Screen name="Discover" component={TabScreen} />
         <Stack.Screen name="buyer" component={TabScreen2} />
         <Stack.Screen name="ProfileStore2" component={ProfileStorestack} />

         

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
