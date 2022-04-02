import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/Route/AppNavigator';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {DrawerContent } from './src/Route/Drawer'
import { Popover } from 'native-base';
import {
    Button,
    Box
} from 'react-native';
const Drawer = createDrawerNavigator();
const App = () => {
    
 return (
     <NavigationContainer>


         <AppNavigator />
   
         
         
     </NavigationContainer>

 );
}


export default App;







// import * as React from 'react';
// import { View } from 'react-native';
// import { Button, Menu, Divider, Provider } from 'react-native-paper';

// const App = () => {
//   const [visible, setVisible] = React.useState(false);

//   const openMenu = () => setVisible(true);

//   const closeMenu = () => setVisible(false);

//   return (
//     <Provider>
//       <View
//         style={{
//           paddingTop: 50,
//           flexDirection: 'row',
//           justifyContent: 'center',
//         }}>

// <Button style={{marginBottom:4,}} onPress={openMenu}>Show menu</Button> 
//         <Menu
//           visible={visible}
//           onDismiss={closeMenu}
//           style={{marginTop:30}}
//           anchor={<Button onPress={openMenu}>Show menu</Button>}
          
//           >
//           <Menu.Item style={{marginTop:10,}} onPress={() => {}} title="Item 1" />
//           <Menu.Item onPress={() => {}} title="Item 2" />
//           <Divider />
//           <Menu.Item onPress={() => {}} title="Item 3" />
//         </Menu>
//       </View>
//     </Provider>
//   );
// };

// export default App;