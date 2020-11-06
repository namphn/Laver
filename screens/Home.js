import React, { useState, useEffect } from "react"
import {
    View,
    SafeAreaView,
    Dimensions,
    Image,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    ScrollView,
    Animated,
    ProgressBarAndroid
} from "react-native"
import {
    Text,
    Button,
    Block,
    Post
} from "../components"
import { theme, mocks } from "../constants"
import { useSelector } from "react-redux"

const { width, height } = Dimensions.get("window");

export default function Home({ navigation }) {
    const [state, setState] = useState({
        active: "Products",
        categories: []
    })

    const uploading = useSelector(state => state.postUploading)

    const scrollY = new Animated.Value(0);

    const diffClampScrollY = Animated.diffClamp(scrollY, 0, 50)

    const headerHeight = scrollY.interpolate({
        inputRange: [0, 100],
        outputRange: [60, 0],
        extrapolate: "clamp",
        useNativeDriver: true
    })


    const headerOpacity = scrollY.interpolate({
        inputRange: [0, 30],
        outputRange: [1, 0],
        extrapolate: "clamp",
        useNativeDriver: true
    })

    const data = [
        {
            name: "Phạm Hoàng Nam",
            avatar: mocks.profile.avatar,
            status: "Đây là lí do người ta gọi anh là Lươn, Cao Bằng thế này thì không lươn mới lạ",
            image: mocks.images.image1,
            likeCount: 99,
            comment: 15,
            liked: true,
            me: true,
        },
        {
            name: "Nguyễn Hữu Thanh",
            avatar: mocks.images.image1,
            status: "Đường tình anh thua, đường đua anh chấp!",
            image: mocks.images.image2,
            likeCount: 53,
            comment: 15,
            liked: false,
            me: false,
        },
        {
            name: "Phạm Hoàng Nam",
            avatar: mocks.profile.avatar,
            status: "Thành cổ Oosaka, Nhật Bản let's Go.... 日本へ行きましょう！！",
            image: mocks.images.image3,
            likeCount: 87,
            comment: 15,
            liked: false,
            me: true,
        },
        {
            name: "Phạm Hoàng Nam",
            avatar: mocks.profile.avatar,
            status: "Xinh vchuong huhu T.T",
            image: mocks.images.image4,
            likeCount: 78,
            comment: 15,
            liked: false,
            me: true,
        },
        {
            name: "Phạm Hoàng Nam",
            avatar: mocks.profile.avatar,
            status: "Tiên sư chúng m",
            image: mocks.images.image5,
            likeCount: 45,
            comment: 15,
            liked: true,
            me: true,
        },
        {
            name: "Phạm Hoàng Nam",
            avatar: mocks.profile.avatar,
            status: "Ohhhh!",
            image: mocks.images.image6,
            likeCount: 58,
            comment: 15,
            liked: false,
            me: true,
        }
    ]

    const renderPost = ({ item }) => {
        return (
            <Post avatar={item.avatar}
                name={item.name}
                status={item.status}
                image={item.image}
                likeCount={item.likeCount}
                comment={item.comment}
                liked={item.liked}
                navigation={navigation}
                me={item.me}
            />
        )
    }

    return (
        <SafeAreaView style={{ paddingBottom: 170 }}>
            <Animated.View
                style={[
                    styles.header,
                    {
                        height: headerHeight,
                        opacity: headerOpacity
                    }
                ]}>
                <Block flex={false} row center space="between">
                    <Text h1 bold>
                        Laver
                </Text>
                    <Button onPress={() => navigation.navigate("Profile")}>
                        <Image source={{ uri: mocks.profile.avatar }} style={styles.avatar} />
                    </Button>
                </Block>
            </Animated.View>
            <Block flex={false}>
                <Block flex={false} style={styles.home}>
                    <ScrollView>
                        <Block style={{
                            backgroundColor: "white",
                            flexDirection: "row",
                            alignItems: "center",
                            paddingLeft: 10
                        }}>
                            <Image source={{ uri: mocks.profile.avatar }} style={styles.postAvatar} />
                            <Block style={styles.postStatusButton}>
                                <TouchableOpacity onPress={() => navigation.navigate("Upload")}>
                                    <Text style={{
                                        alignItems: "center",
                                        paddingLeft: 20,
                                    }}>post something. . .</Text>
                                </TouchableOpacity>
                            </Block>
                        </Block>
                        <Block>
                            <ProgressBarAndroid
                                styleAttr="Horizontal"
                                indeterminate={false}
                                progress={0.5}
                                color={theme.colors.green}
                            />
                        </Block>
                    </ScrollView>
                    <FlatList
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: scrollY } } }]
                        )}
                        showsVerticalScrollIndicator={false}
                        data={data}
                        renderItem={renderPost}
                        style={{ marginTop: 10 }}
                    >
                    </FlatList>
                </Block>
            </Block>
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    header: {
        paddingHorizontal: theme.sizes.base * 2,
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
        backgroundColor: "white"
    },
    avatar: {
        height: theme.sizes.base * 2.2,
        width: theme.sizes.base * 2.2,
        borderRadius: 30,
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
        paddingLeft: 20,
        borderRadius: width / 20
    }
});
