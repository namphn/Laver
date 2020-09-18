import React, { useState } from "react"
import { Animated, ScrollView } from "react-native"
import { SafeAreaView } from "react-navigation"
import GlobalStyles from "../GlobalStyles"
import {
    Button,
    Input,
    Block,
    Text,
    PeopleSearch
} from "../components"
import { theme, mocks } from "../constants";
import { StyleSheet, Dimensions } from "react-native"
import IonIcon from "react-native-vector-icons/FontAwesome"
import { FlatList } from "react-native-gesture-handler"


const { width, height } = Dimensions.get("window");

export default function Explore({navigation}) {

    const data = [
        {
            avatar: mocks.profile.avatar,
            name: "Phạm Hoàng Nam",
            city: "Thái Nguyên",
            country: "Việt Nam",
            images: [
                {
                    url: mocks.images.image1
                },
                {
                    url: mocks.images.image2
                },
                {
                    url: mocks.images.image3
                },
                {
                    url: mocks.images.image4
                },
                {
                    url: mocks.images.image5
                },
                {
                    url: mocks.images.image6
                }
            ]
        },
        {
            avatar: mocks.images.image1,
            name: "Nam Phạm Hoàng",
            city: "Thái Nguyên",
            country: "Việt Nam",
            images: [
                {
                    url: mocks.images.image6
                },
                {
                    url: mocks.images.image5
                },
                {
                    url: mocks.images.image4
                },
                {
                    url: mocks.images.image3
                },
                {
                    url: mocks.images.image2
                },
                {
                    url: mocks.images.image1
                }
            ]
        },
        {
            avatar: mocks.images.image6,
            name: "Phạm Nam",
            city: "Thái Nguyên",
            country: "Việt Nam",
            images: [
                {
                    url: mocks.images.image1
                },
                {
                    url: mocks.images.image3
                },
                {
                    url: mocks.images.image2
                },
                {
                    url: mocks.images.image4
                },
                {
                    url: mocks.images.image5
                },
                {
                    url: mocks.images.image6
                }
            ]
        },
        {
            avatar: mocks.images.image6,
            name: "Phạm Nam",
            city: "Thái Nguyên",
            country: "Việt Nam",
            images: [
                {
                    url: mocks.images.image1
                },
                {
                    url: mocks.images.image3
                },
                {
                    url: mocks.images.image2
                },
                {
                    url: mocks.images.image4
                },
                {
                    url: mocks.images.image5
                },
                {
                    url: mocks.images.image6
                }
            ]
        },
    ];

    const renderResult = ({ item }) => {
        return (
            <PeopleSearch
                avatar={item.avatar}
                name={item.name}
                city={item.city}
                country={item.country}
                images={item.images}
                navigation={navigation}
            />
        )
    }

    const [state, setState] = useState({
        searchFocus: new Animated.Value(1, 6),
        searchString: null
    })

    const handleSearchFocus = (status) => {
        Animated.timing(state.searchFocus, {
            toValue: status ? 1 : 0,
            duration: 150
        }).start();
    }

    const renderSearch = () => {
        const { searchString, searchFocus } = state;
        const isEditing = searchFocus && searchString;

        return (
            <Block animated middle style={[styles.search, styles.header]} flex={searchFocus}>
            </Block>
        );
    }

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <Block style={styles.mainContainer}>
                <Block flex={false} row center space="between" style={styles.header}>
                    <Text h2 bold>
                        Search
                    </Text>
                    {renderSearch()}
                </Block>
                <Block flex={false}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Block middle style={styles.inputContainer} flex={false}>
                            <Input
                                placeholder="Search"
                                placeholderTextColor={theme.colors.gray2}
                                style={styles.searchInput}
                                rightStyle={styles.searchRight}
                                rightLabel={
                                    <IonIcon
                                        name="search"
                                        size={theme.sizes.base}
                                        color={theme.colors.gray2}
                                        style={styles.searchIcon}
                                    />
                                }

                            />
                        </Block>
                        <Block flex={false} style={styles.mainContainer}>
                            <Block flex={false} style={styles.recentResult}>
                                <Text bold>Result</Text>
                            </Block>
                            <Block flex={false} >
                                <FlatList
                                    data={data}
                                    renderItem={renderResult}
                                    removeClippedSubviews={true}
                                />
                            </Block>
                        </Block>
                    </ScrollView>
                </Block>
            </Block>
        </SafeAreaView>
    )
}

Explore.defaultProps = {
    images: mocks.explore
};

const styles = StyleSheet.create({
    mainContainer: {
        marginBottom: 40
    },
    header: {
        paddingBottom: theme.sizes.base,
        paddingTop: theme.sizes.base,
        paddingLeft: width / 20
    },
    searchInput: {
        fontSize: theme.sizes.caption,
        height: theme.sizes.base * 2.8,
        borderRadius: 25,
        backgroundColor: "rgba(142, 142, 147, 0.06)",
        borderColor: "rgba(142, 142, 147, 0.06)",
        paddingLeft: theme.sizes.base / 1.333,
        paddingRight: theme.sizes.base * 1.5
    },
    searchRight: {
        top: 0,
        marginVertical: 0,
        backgroundColor: "transparent"
    },
    searchIcon: {
        position: "absolute",
        right: theme.sizes.base / 1.333,
        top: theme.sizes.base / 1.6
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
    container: {
        paddingTop: 10
    },
    recentResult: {
        paddingTop: 15,
        paddingLeft: width / 20
    },
    inputContainer: {
        paddingLeft: width / 20,
        paddingRight: width / 20,
    }
});