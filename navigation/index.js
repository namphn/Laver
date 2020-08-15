import React, { Children } from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Entypo from "react-native-vector-icons/Entypo"
import IonIcon from "react-native-vector-icons/FontAwesome"
import { View } from "react-native"

import Welcome from "../screens/Welcome"
import Login from "../screens/Login"
import SignUp from "../screens/SignUp.js"
import Forgot from "../screens/Forgot"
import Explore from "../screens/Explore"
import Home from "../screens/Home"
import FullPost from "../screens/FullPost"
import Setting from "../screens/Setting"
import Profile from "../screens/Profile"
import Notification from "../screens/Notification"
import Chat from "../screens/Chat"
import HomeIcon from "../icons/HomeIcon"
import NotificationIcon from "../icons/NotificationIcon"
import SearchIcon from "../icons/SearchIcon"
import UserIcon from "../icons/UserIcon"
import ChatIcon from "../icons/ChatIcon"
import { theme } from "../constants";
import Upload from "../screens/Upload"

const AppStack = createStackNavigator();

const TabNav = createBottomTabNavigator();

const tabBarOptions = {
    showLabel: false,
    style: {
        backgroundColor: theme.colors.white,
        borderTopColor: "#343434",
        paddingBottom: 12
    },
}

const TabBarIconContainer = (props) => {
    switch (props.name) {
        case "home":
            return (
                <View style={{
                    padding: 1,
                    borderRadius: 23,
                }}>
                    <HomeIcon active={props.focused} />
                    {props.focused}
                </View >
            )

        case "notification":
            return (
                <View style={{
                    padding: 1,
                    borderRadius: 23,
                }}>
                    <NotificationIcon active={props.focused} />
                    {props.focused}
                </View >
            )

        case "search":
            return (
                <View style={{
                    padding: 1,
                    borderRadius: 23,
                }}>
                    <SearchIcon active={props.focused} />
                    {props.focused}
                </View >
            )

        case "user":
            return (
                <View style={{
                    padding: 1,
                    borderRadius: 23,
                }}>
                    <UserIcon active={props.focused} />
                    {props.focused}
                </View >
            )

        case "chat":
            return (
                <View style={{
                    padding: 1,
                    borderRadius: 23,
                }}>
                    <ChatIcon active={props.focused} />
                    {props.focused}
                </View >
            )

        default: return (
            <View style={{
                padding: 1,
                borderRadius: 23,
            }}>
                <HomeIcon active={props.focused} />
                {props.focused}
            </View >
        )
    }
    return

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
                                iconName = "search"
                                break;

                            case "Chat":
                                iconName = "chat"
                                break;

                            case "Notification":
                                iconName = "notification"
                                break;

                            case "Profile":
                                iconName = "user"
                                break;

                            default:
                                break;
                        }

                        return (
                            <TabBarIconContainer focused={focused} name={iconName} />
                        )
                    }


                }
            )
            }>

            <TabNav.Screen name="Home" component={Home} />
            <TabNav.Screen name="Explore" component={Explore} />
            <TabNav.Screen name="Chat" component={Chat} />
            <TabNav.Screen name="Notification" component={Notification} />
            <TabNav.Screen name="Profile" component={Profile} />
        </TabNav.Navigator >
    )
}

export default Navigation = () => {
    return (
        <NavigationContainer>
            <AppStack.Navigator mode="modal" headerMode="none">
                <AppStack.Screen name="App" component={TabNavScreen} />
                <AppStack.Screen name="Post" component={FullPost} />
                <AppStack.Screen name="Upload" component={Upload} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}


