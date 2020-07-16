import React, { Children } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Entypo from "react-native-vector-icons/Entypo"
import IonIcon from 'react-native-vector-icons/FontAwesome'
import { View } from 'react-native'

import Welcome from '../screens/Welcome';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp.js';
import Forgot from '../screens/Forgot';
import Explore from '../screens/Explore';
import Home from '../screens/Home';
import Post from '../screens/Post';
import Setting from '../screens/Setting';
import Profile from '../screens/Profile';

import { theme } from '../constants';

const AppStack = createStackNavigator();

const TabNav = createBottomTabNavigator();

const tabBarOptions = {
    showLabel: false,
    style: {
        backgroundColor: "#343434",
        borderTopColor: "#343434",
        paddingBottom: 12
    },
}

const TabBarIconContainer = (props) => {
    return (
        <View style={{
            backgroundColor: props.foucused ? '#819ee5' : '#343434',
            padding: 1,
            borderRadius: 23,
        }}>
            <Entypo name={props.name} size={24} color="#ffffff" />
        </View >
    )
}

const TabNavScreen = () => {
    return (
        <TabNav.Navigator
            tabBarOptions={tabBarOptions}
            screenOptions={({ route }) => (
                {
                    tabBarIcon: ({ focused }) => {
                        let iconName;

                        switch (route.name) {

                            case "Home":
                                iconName = "home"
                                break;

                            case "Explore":
                                iconName = "magnifying-glass"
                                break;

                            case "Profile":
                                iconName = "user"
                                break;

                            case "Setting":
                                iconName = "menu"
                                break;

                            default:
                                break;
                        }

                        return (
                            <TabBarIconContainer foucused={focused} name={iconName} />
                        )
                    }
                }
            )}>

            <TabNav.Screen name="Home" component={Home} />
            <TabNav.Screen name="Explore" component={Explore} />
            <TabNav.Screen name="Profile" component={Profile} />
            <TabNav.Screen name="Setting" component={Setting} />
        </TabNav.Navigator>
    )
}

export default Navigation = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator mode="modal" headerMode="none">
                <AppStack.Screen name="App" component={TabNavScreen} />
                <AppStack.Screen name="Post" component={Post} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}
