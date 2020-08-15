import React, { useState, useEffect } from "react"
import {
    View,
    SafeAreaView,
    Dimensions,
    Image,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ScrollView
} from "react-native"
import {
    Text,
    Button,
    Block,
    Post
} from "../components"
import { theme, mocks } from "../constants"

const { width, height } = Dimensions.get("window");

export default function Home({navigation}) {
    const [state, setState] = useState({
        active: "Products",
        categories: []
    })

    const data = [
        {
            name: "Phạm Hoàng Nam",
            avatar: mocks.profile.avatar,
            status: "Hello! this is my app",
            image: mocks.images.image1,
            like: 99,
            comment: 15
        },
        {
            name: "Phạm Hoàng Nam",
            avatar: mocks.profile.avatar,
            status: "Hello! this is my app",
            image: mocks.images.image2,
            like: 99,
            comment: 15
        },
        {
            name: "Phạm Hoàng Nam",
            avatar: mocks.profile.avatar,
            status: "Hello! this is my app",
            image: mocks.images.image3,
            like: 99,
            comment: 15
        },
        {
            name: "Phạm Hoàng Nam",
            avatar: mocks.profile.avatar,
            status: "Hello! this is my app",
            image: mocks.images.image4,
            like: 99,
            comment: 15
        },
        {
            name: "Phạm Hoàng Nam",
            avatar: mocks.profile.avatar,
            status: "Hello! this is my app",
            image: mocks.images.image5,
            like: 99,
            comment: 15
        },
        {
            name: "Phạm Hoàng Nam",
            avatar: mocks.profile.avatar,
            status: "Hello! this is my app",
            image: mocks.images.image6,
            like: 99,
            comment: 15
        }
    ]

    const renderPost = ({ item }) => {
        return (
            <Post avatar={item.avatar}
                name={item.name}
                status={item.status}
                image={item.image}
                like={item.like}
                comment={item.comment}
            />
        )
    }


    return (
        <SafeAreaView>
            <Block flex={false} row center space="between" style={styles.header} color="white">
                <Text h1 bold>
                    Laver
                </Text>
                <Button onPress={() => navigation.navigate("Profile")}>
                    <Image source={mocks.profile.avatar} style={styles.avatar} />
                </Button>
            </Block>
            <Block flex={false}>
                <Block flex={false} style={styles.home} color={theme.colors.gray2}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Block  style={{ 
                            backgroundColor: "white", 
                            flexDirection: "row", 
                            alignItems: "center",
                            paddingLeft: 10
                            }}>
                            <Image source={mocks.profile.avatar} style={styles.postAvatar}/>
                            <Block style={styles.postStatusButton}>
                                <TouchableOpacity  onPress={() => navigation.navigate("Upload")}>
                                    <Text style={{ 
                                        alignItems: "center",
                                        paddingLeft: 20,
                                }}>post something. . .</Text>
                                </TouchableOpacity>
                            </Block>
                        </Block>
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            data={data}
                            renderItem={renderPost}
                            style={{ marginBottom: 130, marginTop: 10 }}
                        />
                    </ScrollView>
                </Block>
            </Block>
        </SafeAreaView>
    );
}

const postStatusButton = () => {
    return (
        <TouchableOpacity>
            <View style={styles.postStatusButton}>
                <Text>post something</Text>
            </View>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base * 2,
        color: "white",
        borderBottomColor: "gray",
        borderBottomWidth: 0.5
    },
    avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2,
        alignContent: "center"
    },
    tabs: {
        borderBottomColor: theme.colors.gray2,
        borderBottomWidth: StyleSheet.hairlineWidth,
        marginVertical: theme.sizes.base,
        marginHorizontal: theme.sizes.base * 2
    },
    tab: {
        marginRight: theme.sizes.base * 2,
        paddingBottom: theme.sizes.base
    },
    active: {
        borderBottomColor: theme.colors.secondary,
        borderBottomWidth: 3
    },
    categories: {
        flexWrap: "wrap",
        paddingHorizontal: theme.sizes.base * 2,
        marginBottom: theme.sizes.base * 3.5
    },
    category: {
        // this should be dynamic based on screen width
        minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
        maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2,
        maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 2
    },
    image: {
        minHeight: 100,
        maxHeight: 130,
        maxWidth: width - theme.sizes.padding,
        marginBottom: theme.sizes.base,
        borderRadius: 10
    },
    mainImage: {
        minWidth: width - theme.sizes.padding,
        minHeight: width - theme.sizes.padding,
    },
    postStatusButton: {
        borderWidth: 0.5,
        borderColor: "gray",
        height: 40,
        borderRadius: 24,
        backgroundColor: "white",
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
        paddingTop: 7
    },
    postButtonContainer: {
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor: "white",
    },
    postAvatar: {
        height: width / 10,
        width: width / 10,
        paddingLeft: 20
    }
});
