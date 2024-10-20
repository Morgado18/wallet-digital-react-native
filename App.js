
import { Platform, StyleSheet, Text, View, StatusBar, SafeAreaView, TouchableOpacity } from 'react-native';

import { Carteira, Home, Perfil, Portfolio, Prices, Settings, Transaction } from "./screens/";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { FontAwesome, Entypo, MaterialIcons } from "@expo/vector-icons"
import { Fragment } from 'react';
import Header from './src/components/header';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
    background: "#fff",
    paddingBottom: 5,
  }
}

function StackSettings(){
  
  return(
    <Stack.Navigator>
      <Stack.Screen name="Definicoes" component={Settings} options={{
          headerShown: true, 
          headerTitle: "Definições",
          headerTintColor: '#16247DD6',
        }} />
    </Stack.Navigator>
  )
}

function StackCarteira(){
  
  return(
    <Stack.Navigator>
      <Stack.Screen name="Cart" component={Carteira} options={{
          headerShown: true, 
          headerTitle: "Carteira",
          headerTintColor: '#16247DD6',
        }} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <Fragment>
      <StatusBar backgroundColor="#16247DD6" barStyle="ligtht-content"></StatusBar>

      <SafeAreaView>
        <Header/>
      </SafeAreaView>

      <NavigationContainer>
        <Tab.Navigator screenOptions={screenOptions}>
          <Tab.Screen name="Home" component={Home} options={{ 
            tabBarIcon: ({focused}) => {
              return(
                <View style={{ alignItems:"center",justifyContent:"center" }}>
                  <FontAwesome name="home" size={21} color={focused ? "#16247DD6" : "gray"} />
                  <Text style={{ fontSize:12,color:"#16247DD6" }}>Home</Text>
                </View>
              )
            }
          }}/>
          <Tab.Screen name="Carteira" component={StackCarteira} options={{ 
            tabBarIcon: ({focused}) => {
              return(
                <View style={{ alignItems:"center",justifyContent:"center" }}>
                  <Entypo name="wallet" size={21} color={focused ? "#16247DD6" : "gray"} />
                  <Text style={{ fontSize:12,color:"#16247DD6" }}>Carteira</Text>
                </View>
              )
            }
          }}/>
          <Tab.Screen name="Transaction" component={Transaction} options={{ 
            tabBarIcon: ({focused}) => {
              return(
                <View style={{ 
                  alignItems:"center", justifyContent:"center", 
                  backgroundColor: "#16247DD6",
                  width: Platform.OS == "ios" ? 50 : 60, 
                  height: Platform.OS == "ios" ? 50 : 60, 
                  top: Platform.OS == "ios" ? -10 : -20, 
                  borderRadius: Platform.OS == "ios" ? 25 : 30, 
                  color: "#fff"
                }}>
                  <FontAwesome name="exchange" size={21} color="#fff" />
                </View>
              )
            }
          }}/>
          <Tab.Screen name="Perfil" component={Perfil} options={{ 
            tabBarIcon: ({focused}) => {
              return(
                <View style={{ alignItems:"center",justifyContent:"center" }}>
                  <FontAwesome name="user" size={21} color={focused ? "#16247DD6" : "gray"} />
                  <Text style={{ fontSize:12,color:"#16247DD6" }}>Perfil</Text>
                </View>
              )
            }
          }}/>
          <Tab.Screen name="Settings" component={StackSettings} options={/* ({route}) => */ ({ 
           /*  tabBarStyle: getTabBarVisibility(route), */
            tabBarIcon: ({focused}) => {
              return(
                <View style={{ alignItems:"center",justifyContent:"center" }}>
                  <FontAwesome name="gear" size={21} color={focused ? "#16247DD6" : "gray"} />
                  <Text style={{ fontSize:12,color:"#16247DD6" }}>Definições</Text>
                </View>
              )
            }
          })}/>
        </Tab.Navigator>
      </NavigationContainer>
    </Fragment>
  );
}

/* function getTabBarVisibility(route) {
  const routeName = route.name;
  if (routeName === 'Settings') {
    return { display: 'none' };
  }
  return {};
} */

const styles = StyleSheet.create({
 /*  frag: {
    flexDirection: "column"
  } */
});
