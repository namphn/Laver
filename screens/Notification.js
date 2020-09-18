import React, { useState } from "react"
import { Animated, ScrollView, View } from "react-native"
import { SafeAreaView } from "react-navigation"
import GlobalStyles from "../GlobalStyles"
import { Button, Input, Block, Text, Notifi } from "../components"
import { theme, mocks } from "../constants";
import { StyleSheet, Dimensions, FlatList } from "react-native"
import IonIcon from "react-native-vector-icons/FontAwesome"

const { width, height } = Dimensions.get("window");

export default function Notification({navigation}) {

    const [state, setState] = useState({
        searchFocus: new Animated.Value(0.6),
        searchString: null
    })

    const DATA = [
        {
            name: "Phạm Hoàng Nam",
            image: "",
            content: "",
            time: "",
            visiable: false
        },
        {
            name: "Nguyễn Hữu Thanh",
            image: "",
            content: "",
            time: "",
            visiable: true
        },
        {
            name: "Vũ Ngọc Sáng",
            image: "",
            content: "",
            time: "",
            visiable: false
        },
        {
            name: "Nguyễn Ngọc Khôi",
            image: "",
            content: "",
            time: "",
            visiable: true
        },
        {
            name: "Phạm Hoàng Nam",
            image: "",
            content: "",
            time: "",
            visiable: false
        },
        {
            name: "Nguyễn Hữu Thanh",
            image: "",
            content: "",
            time: "",
            visiable: true
        },
        {
            name: "Vũ Ngọc Sáng",
            image: "",
            content: "",
            time: "",
            visiable: false
        },
        {
            name: "Nguyễn Ngọc Khôi",
            image: "",
            content: "",
            time: "",
            visiable: true
        },
        {
            name: "Phạm Hoàng Nam",
            image: "",
            content: "",
            time: "",
            visiable: false
        },
        {
            name: "Nguyễn Hữu Thanh",
            image: "",
            content: "",
            time: "",
            visiable: true
        },
        {
            name: "Vũ Ngọc Sáng",
            image: "",
            content: "",
            time: "",
            visiable: false
        },
        {
            name: "Nguyễn Ngọc Khôi",
            image: "",
            content: "",
            time: "",
            visiable: true
        },
        {
            name: "Phạm Hoàng Nam",
            image: "",
            content: "",
            time: "",
            visiable: false
        },
        {
            name: "Nguyễn Hữu Thanh",
            image: "",
            content: "",
            time: "",
            visiable: true
        },
        {
            name: "Vũ Ngọc Sáng",
            image: "",
            content: "",
            time: "",
            visiable: false
        },
        {
            name: "Nguyễn Ngọc Khôi",
            image: "",
            content: "",
            time: "",
            visiable: true
        },
    ];

    const render = ({ item }) => (
        <Notifi 
        name={item.name} 
        content={item.content} 
        time={item.time} 
        visiable={item.visiable} 
        navigation={navigation}
        />
    );

    const handleSearchFocus = (status) => {
        Animated.timing(state.searchFocus, {
            toValue: status ? 0.8 : 0.6,
            duration: 150
        }).start();
    }

    const renderSearch = () => {
        const { searchString, searchFocus } = state;
        const isEditing = searchFocus && searchString;

        return (
            <Block animated middle style={[styles.search, styles.header]} flex={searchFocus}>
                <Input
                    placeholder="Search"
                    placeholderTextColor={theme.colors.gray2}
                    style={styles.searchInput}
                    onFocus={() => handleSearchFocus(true)}
                    onBlur={() => handleSearchFocus(false)}
                    onChangeText={text => setState({ searchString: text })}
                    value={searchString}
                    onRightPress={() =>
                        isEditing ? setState({ searchString: null }) : null
                    }
                    rightStyle={styles.searchRight}
                    rightLabel={
                        <IonIcon
                            name={isEditing ? "close" : "search"}
                            size={theme.sizes.base}
                            color={theme.colors.gray2}
                            style={styles.searchIcon}
                        />
                    }

                />
            </Block>
        );
    }

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea} >
            <Block>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h2 bold >
                        Notifications
                    </Text>
                    {renderSearch()}
                </Block>
                <FlatList
                    data={DATA}
                    renderItem={render}
                    keyExtractor={(item, index) => index}
                    showsVerticalScrollIndicator={false}
                />

            </Block>
        </SafeAreaView>
    )
}

Notification.defaultProps = {
    images: mocks.explore
};

const styles = StyleSheet.create({
    header: {
        paddingBottom: theme.sizes.base * 2,
        paddingTop: theme.sizes.base,
        paddingLeft: width / 20,
        paddingRight: width / 20,
        paddingHorizontal: theme.sizes.base
    },
    search: {
        height: theme.sizes.base * 2,
        width: width - theme.sizes.base * 2
    },
    searchInput: {
        fontSize: theme.sizes.caption,
        height: theme.sizes.base * 2.5,
        backgroundColor: "rgba(142, 142, 147, 0.06)",
        borderColor: "rgba(142, 142, 147, 0.06)",
        paddingLeft: theme.sizes.base / 1.333,
        paddingRight: theme.sizes.base * 1.5,
        borderRadius: 25,
    },
    searchRight: {
        top: 0,
        marginVertical: 0,
        backgroundColor: "transparent"
    },
    searchIcon: {
        position: "absolute",
        right: theme.sizes.base / 1.333,
        top: theme.sizes.base / 1.3
    },
    explore: {
        marginHorizontal: theme.sizes.padding * 1.25
    },
    image: {
        minHeight: 100,
        maxHeight: 130,
        maxWidth: width - theme.sizes.padding * 2.5,
        marginBottom: theme.sizes.base,
        borderRadius: 4
    },
    mainImage: {
        minWidth: width - theme.sizes.padding * 2.5,
        minHeight: width - theme.sizes.padding * 2.5
    },
    footer: {
        position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        overflow: "visible",
        alignItems: "center",
        justifyContent: "center",
        height: height * 0.1,
        width,
        paddingBottom: theme.sizes.base * 4
    },
    title: {
        paddingBottom: 2
    },
});