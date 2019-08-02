/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import {Image, StyleSheet, View, TouchableWithoutFeedback} from 'react-native';

import React from 'react';
import Home from './Page/Home';
import Sec from './Page/Sec';
import Thr from './Page/Thr';
import {createAppContainer, createStackNavigator, createBottomTabNavigator} from 'react-navigation';
import Fout from './Page/Fout';
import Fout2 from './Page/Fout2';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

const HomeP = createStackNavigator({
    Home: {screen: Home},
    Thr: {screen: Thr},
    Fout: {screen: Fout},
    Fout2: {screen: Fout2},
});

const SecP = createStackNavigator({
    Sec: {screen: Sec},
});
const Tabbar = createBottomTabNavigator({
    Home: {
        screen: HomeP,
        navigationOptions: {
            tabBarLabel: '首页',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={!focused ? require('./assets/tab_BusinessCenter_Normal.png') : require('./assets/tab_BusinessCenter_Select.png')}/>
            ),
        },
    },
    Sec: {
        screen: SecP,
        navigationOptions: {
            tabBarLabel: 'SEC',
            tabBarIcon: ({tintColor, focused}) => (
                <Image
                    source={!focused ? require('./assets/tab_Center_Normal.png') : require('./assets/tab_Center_Selected.png')}/>
            ),
        },
    },

}, {
            initialRouteName:"Sec",
            tabBarOptions:{
                inactiveTintColor: "#8F8F8F",
                activeTintColor: "red",
                labelStyle:{
                    fontSize:11,
                }
            }

});
const App = createAppContainer(Tabbar);
export default App;
