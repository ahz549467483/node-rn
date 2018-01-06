/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import Icomoon from 'react-native-vector-icons/Icomoon';
import { TabNavigator } from 'react-navigation';
import Toilet from './src/pages/Toilet';
import Read from './src/pages/Read';
import SetPage from './src/pages/Set';
import Weather from './src/pages/Weather';

const Tab = TabNavigator(
	{
		toilet: {
            screen:Toilet,
            navigationOptionsy:{
				headerTitle:'卫生间',
            },
            navigationOptions: {
				tabBarLabel:'卫生间',
                tabBarIcon:({tintColor, focused}) => (
                    <Icomoon name="home" size={25} style={{ color: tintColor }}/>
                )
            } 
		},
		read: {
            screen:Read,
            navigationOptionsy:{
				headerTitle:'阅读',
            },
            navigationOptions: {
				tabBarLabel:'阅读',
                tabBarIcon:({tintColor, focused}) => (
                    <Icomoon name="home" size={25} style={{ color: tintColor }}/>
                )
            } 
		},
		weather: {
            screen:Weather,
            navigationOptionsy:{
				headerTitle:'天气',
            },
            navigationOptions: {
				tabBarLabel:'天气',
                tabBarIcon:({tintColor, focused}) => (
                    <Icomoon name="home" size={25} style={{ color: tintColor }}/>
                )
            } 
		},
		set: {
            screen:SetPage,
            navigationOptionsy:{
				headerTitle:'设置',
            },
            navigationOptions: {
				tabBarLabel:'设置',
                tabBarIcon:({tintColor, focused}) => (
                    <Icomoon name="home" size={25} style={{ color: tintColor }}/>
                )
            } 
		},
	},
	{
        tabBarPosition: 'bottom',
        swipeEnabled:false,
        animationEnabled:false,
        // initialRouteName:'read',
        tabBarOptions: {
            activeTintColor: Platform.OS === 'ios' ? '#e91e63' : '#fff',
            style: {
                height:49
            },
            activeBackgroundColor:'white',
            inactiveBackgroundColor:'white',
            inactiveTintColor:'#000'
        }  
    }
)

export default Tab;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
