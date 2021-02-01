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
    ProgressBarAndroid,
    AsyncStorage
} from "react-native"
import {
    Text,
    Button,
    Block,
    Post
} from "../components"
import { theme, mocks, actionType } from "../constants"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { uploadEnd } from "../actions/postAction"
import { getUserAvatar } from "../services/GetInfoService"
import API from "../constants/api"
import { getPostList } from '../services/PostService'
import {
    Placeholder,
    PlaceholderLine,
    PlaceholderMedia,
    Fade
} from "rn-placeholder";
import SockJS from 'sockjs-client'
import Stomp from 'stompjs';

const { width, height } = Dimensions.get("window");
const axios = require("axios");

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
]

export default function Home({ navigation, route }) {
    const [state, setState] = useState({
        active: "Products",
        categories: []
    })
    const [uploadingProcess, setUploadingProcess] = useState(1);
    const dispatch = useDispatch();
    const uploading = useSelector(state => state.postState.postUploading);
    const userAvatar = useSelector(state => state.userInformation.userAvatar);
    const [posts, setPosts] = React.useState();
    const [error, setError] = React.useState(false);
    const [loading, setLoading] = React.useState(true);
    
    const ws = new SockJS("https://21e26cad96ee.ngrok.io/ws");
    const stompClient = Stomp.over(ws);

    React.useEffect(() => {
        stompClient.connect('', '', () => {
            stompClient.subscribe(
                '/topic/public', function (message) {
                    console.log("recive message")
                    console.log(message.body)
                    setPosts([...posts, message.body])
                    console.log(posts)
                }
            );
        });
    }, [])

    useEffect(() => {
        if (uploading) {
            const { postdata } = route.params
            postToNewsFeed(postdata);
        }

    }, [uploading]);

    React.useEffect(() => {
        fetchUserAvatar();
        fetchPostList();
    }, [])

    const fetchUserAvatar = async () => {
        const userId = await AsyncStorage.getItem("userId");
        let userAvatar = await getUserAvatar(userId);
        dispatch({
            type: actionType.SET_USER_AVATAR,
            payload: API.root + userAvatar
        })
    }

    const fetchPostList = async () => {
        const userId = await AsyncStorage.getItem("userId");
        let posts = await getPostList(userId);
        if (posts != null) {
            setPosts(posts)
            setLoading(false);
        }
        else {
            setError(true);
            setLoading(false);
        }
    }

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


    const renderPost = ({ item }) => {
        return (
            <Post avatar={API.root + "/" + item.userAvatar}
                name={item.userName}
                status={item.content}
                image={API.root + "/" + item.image}
                likeCount={item.likes == null ? 0 : item.likes.length}
                comment={item.comment}
                liked={item.liked}
                navigation={navigation}
                me={item.me}
            />
        )
    }

    const renderLoadingEffect = ({ item }) => {
        return (
            <Placeholder
                Animation={Fade}
            >
                <Block flex={false} color="white" style={{
                    marginBottom: 7
                }} >
                    <Block row style={{
                        flexDirection: "row",
                        alignItems: 'center',
                        paddingLeft: 10,
                        paddingTop: 10
                    }}>
                        <PlaceholderMedia
                            style={{
                                height: width / 10,
                                width: width / 10,
                                borderRadius: width / 20
                            }} />
                        <PlaceholderLine
                            style={{
                                width: 70,
                                fontWeight: "bold",
                                alignContent: "center",
                                marginLeft: 10,
                            }}
                        />
                    </Block>
                    <Block style={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 10
                    }}>
                        <PlaceholderLine
                            style={{
                                width: 300,
                                fontWeight: "bold",
                                alignContent: "center",
                                marginLeft: 10,
                            }}
                        />
                        <PlaceholderLine
                            style={{
                                width: 200,
                                fontWeight: "bold",
                                alignContent: "center",
                                marginLeft: 10,
                            }}
                        />
                    </Block>
                    <Block flex={false} style={{
                        width: width,
                        alignItems: "center"
                    }} >
                        <PlaceholderMedia
                            style={{
                                flex: 1,
                                width: width,
                                height: 200
                            }} />
                    </Block>
                </Block>
            </Placeholder>
        )
    }
    
    function postToNewsFeed(data) {
        let options = {
            "Method": "POST",
            headers: {
                "Content-Type": "multipart/form-data",
                "Authorization": "Bearer " + token
            },
            onUploadProgress: (progressEvent) => {
                const { loaded, total } = progressEvent;
                let percent = parseFloat(loaded / total);
                setUploadingProcess(percent);
                if (percent == 1) dispatch(uploadEnd());
            }
        }

        let path = API.root + API.posts.post;
        let response = axios.post(path, data, options)
            .then(function (response) {
                if (response.data.statusCode === "200") {
                }
            })
            .catch(function (error) {
                console.log(error)
            });
        return response;
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
                        <Image source={{ uri: userAvatar }} style={styles.avatar} />
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
                            <Image source={{ uri: userAvatar }} style={styles.postAvatar} />
                            <Block style={styles.postStatusButton}>
                                <TouchableOpacity onPress={() => navigation.navigate("Upload")}>
                                    <Text style={{
                                        alignItems: "center",
                                        paddingLeft: 20,
                                    }}>post something. . .</Text>
                                </TouchableOpacity>
                            </Block>
                        </Block>
                        {
                            uploading && uploadingProcess != 1 &&
                            <Block>
                                <ProgressBarAndroid
                                    styleAttr="Horizontal"
                                    indeterminate={false}
                                    progress={uploadingProcess}
                                    color={theme.colors.green}
                                />
                            </Block>
                        }

                    </ScrollView>
                    {
                        loading ? (
                            <FlatList
                                onScroll={Animated.event(
                                    [{ nativeEvent: { contentOffset: { y: scrollY } } }]
                                )}
                                showsVerticalScrollIndicator={false}
                                data={[1, 2, 3, 4]}
                                renderItem={renderLoadingEffect}
                                style={{ marginTop: 10 }}
                            ></FlatList>
                        ) : (
                                <FlatList
                                    onScroll={Animated.event(
                                        [{ nativeEvent: { contentOffset: { y: scrollY } } }]
                                    )}
                                    showsVerticalScrollIndicator={false}
                                    data={posts}
                                    renderItem={renderPost}
                                    style={{ marginTop: 10 }}
                                >
                                </FlatList>
                            )
                    }

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
