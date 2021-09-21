import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/Route/AppNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent } from './src/Route/Drawer'


const Drawer = createDrawerNavigator();
const App = () => {
    
 return (
     <NavigationContainer>


         <AppNavigator />
         {/* <Drawer.Navigator drawerContent={props => <DrawerContent { ...props}/>}>
             
             
             <Drawer.Screen name='AppNavigator' component={AppNavigator} />
             
              </Drawer.Navigator>  */}

         
         
     </NavigationContainer>

 );
}

export default App;





