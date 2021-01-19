import * as React from "react"
import {
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    FlatList,
    AsyncStorage
} from "react-native"
import {
    Block,
    Text
} from "../components"
import { theme, mocks } from "../constants"
import Icon from "react-native-vector-icons/MaterialIcons"
import { ScrollView } from "react-native-gesture-handler"
import { getUserProfile } from "../services/GetInfoService";

import {
    Placeholder,
    PlaceholderLine,
    PlaceholderMedia,
    Fade
} from "rn-placeholder";
import API from "../constants/api"

const { width, height } = Dimensions.get("window");

const followers = [
    {
        id: "1",
        avatar: mocks.images.image1,
        name: "Phạm Hoàng Nam",
    },
    {
        id: "2",
        avatar: mocks.images.image2,
        name: "Phạm Hoàng Nam",
    },
    {
        id: "3",
        avatar: mocks.images.image3,
        name: "Phạm Hoàng Nam",
    },
    {
        id: "4",
        avatar: mocks.images.image4,
        name: "Phạm Hoàng Nam",
    },
    {
        id: "5",
        avatar: mocks.images.image5,
        name: "Phạm Hoàng Nam",
    },
    {
        id: "6",
        avatar: mocks.images.image6,
        name: "Phạm Hoàng Nam",
    },
    {
        id: "1",
        avatar: mocks.images.image1,
        name: "Phạm Hoàng Nam",
    },
    {
        id: "2",
        avatar: mocks.images.image2,
        name: "Phạm Hoàng Nam",
    },
    {
        id: "3",
        avatar: mocks.images.image3,
        name: "Phạm Hoàng Nam",
    },
    {
        id: "4",
        avatar: mocks.images.image4,
        name: "Phạm Hoàng Nam",
    },
    {
        id: "5",
        avatar: mocks.images.image5,
        name: "Phạm Hoàng Nam",
    },
    {
        id: "6",
        avatar: mocks.images.image6,
        name: "Phạm Hoàng Nam",
    },
]

const post = [
    {
        image1: mocks.images.image1,
        image2: mocks.images.image2,
        image3: mocks.images.image3,
    },
    {
        image1: mocks.images.image4,
        image2: mocks.images.image5,
        image3: mocks.images.image6,
    },
    {
        image1: mocks.images.image1,
        image2: mocks.images.image2,
        image3: mocks.images.image3,
    },
    {
        image1: mocks.images.image4,
        image2: mocks.images.image5,
        image3: mocks.images.image6,
    },
    {
        image1: mocks.images.image1,
        image2: mocks.images.image2,
        image3: mocks.images.image3,
    },
    {
        image1: mocks.images.image4,
        image2: mocks.images.image5,
        image3: mocks.images.image6,
    },
    {
        image1: mocks.images.image1,
        image2: mocks.images.image1,
        image3: mocks.images.image1,
    },

]

const renderFollowers = ({ item }) => {
    return (
        <Image
            source={{ uri: API.root + item }}
            style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginLeft: 10
            }}
        />
    )
}

const renderFollowing = ({ item }) => {
    return (
        <Image
            source={{ uri: item }}
            style={{
                width: 50,
                height: 50,
                borderRadius: 50,
                marginLeft: 10
            }}
        />
    )
}

const renderPosts = ({ item }) => {
    console.log("item: " , item.image)
    let imageUrl = API.root + "/images/" + item.image;
    console.log(imageUrl);
    return (
        // <Block row flex={false} space="between" style={{ paddingBottom: 5 }}>
        <Block flex={1}
            style={
                [{
                    paddingBottom: 5,
                    paddingLeft: 2,
                    paddingRight: 2
                },
                ]}>
            <Image source={{ uri: imageUrl }} style={styles.imagePost} resizeMode="stretch" />
        </Block>

    )
}

export default function Profile({ navigation }) {
    const [userName] = React.useState("");
    const [loading, setLoading] = React.useState(true);
    const [userInfo, setUserInfo] = React.useState();
    const [images, setImages] = React.useState([]);

    React.useEffect(() => {
        getUserInfo();
        console.log(images)
    }, [])

    React.useEffect(() => {
        let userPostConvert = [];
        if (userInfo) {
            userInfo.posts.forEach((element) => {
                    if(element != "") {
                        userPostConvert.push(element);
                    }
                }
            )
            setImages(userPostConvert);
        }
    }, [userInfo])

    React.useEffect(() => {
        console.log(images)
    })

    const getUserInfo = async () => {
        let userId = await AsyncStorage.getItem("userId");
        let response = await getUserProfile(userId);
        setUserInfo(response);
        setLoading(false);
    }


    const goToFollowers = () => {
        navigation.navigate("Followers", {
            followers: followers
        });
    }

    return (
        <SafeAreaView>
            {
                loading ? (
                    <Placeholder
                        Animation={Fade}
                    >
                        <Block flex={false} color="white" style={{ paddingBottom: 20, marginBottom: 5 }}>
                            <Block flex={false} color="white">
                                <PlaceholderMedia
                                    color="black"
                                    style={[styles.cover, { height: height / 7 }]}
                                />
                                <Block flex={false} style={styles.avatarContainer}>
                                    <PlaceholderMedia style={styles.avatar} />
                                </Block>
                            </Block>
                            <Block flex={false} style={{ paddingTop: width / 8 + 20 }} center >
                                <PlaceholderLine width={30} />
                            </Block>
                            <Block row middle padding={10}
                                style={{
                                    paddingTop: 5,
                                    paddingLeft: 60
                                }}
                                flex={false}>
                                <Block flex={false} row style={{ paddingRight: 10 }}>
                                    <Icon name="location-on" size={17} color="#0dd686" style={{ paddingRight: 4 }} />
                                    <PlaceholderLine width={20} />
                                </Block>
                                <Block flex={false} style={{ paddingLeft: 5 }} row>
                                    <Icon name="location-city" size={17} color="#0dd686" style={{ paddingRight: 4 }} />
                                    <PlaceholderLine width={20} />
                                </Block>
                            </Block>
                            <Block flex={false}
                                style={{
                                    paddingRight: 40,
                                    paddingLeft: 40,
                                    paddingTop: 10
                                }}
                                middle>
                                <PlaceholderLine width={100} />
                                <PlaceholderLine width={100} />
                            </Block>
                            <Block flex={false} row space="between" style={{ paddingTop: 20 }}>
                                <Block center style={styles.partition}>
                                    <PlaceholderLine width={50} />
                                    <Text>Following</Text>
                                </Block>
                                <Block center style={styles.partition}>
                                    <PlaceholderLine width={50} />
                                    <Text>Folowers</Text>
                                </Block>
                                <Block center>
                                    <PlaceholderLine width={50} />
                                    <Text>Posts</Text>
                                </Block>
                            </Block>
                        </Block>
                        <Block flex={false}
                            style={{
                                marginBottom: 5
                            }}
                            color="white">
                            <Block flex={false} row space="between"
                                style={{
                                    paddingTop: 5,
                                    paddingLeft: 20,
                                    paddingRight: 20
                                }}>
                                <Text bold>Followers</Text>
                                <TouchableOpacity onPress={goToFollowers}>
                                    <Text bold color={theme.colors.blue}>View All</Text>
                                </TouchableOpacity>

                            </Block>
                            <Block row flex={false}>
                                <PlaceholderMedia
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50,
                                        marginLeft: 10,
                                        marginTop: 5,
                                        marginBottom: 5,
                                    }}
                                />
                                <PlaceholderMedia
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50,
                                        marginLeft: 10,
                                        marginTop: 5,
                                        marginBottom: 5,
                                    }}
                                />
                                <PlaceholderMedia
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50,
                                        marginLeft: 10,
                                        marginTop: 5,
                                        marginBottom: 5,
                                    }}
                                />
                                <PlaceholderMedia
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50,
                                        marginLeft: 10,
                                        marginTop: 5,
                                        marginBottom: 5,
                                    }}
                                />
                                <PlaceholderMedia
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50,
                                        marginLeft: 10,
                                        marginTop: 5,
                                        marginBottom: 5,
                                    }}
                                />
                                <PlaceholderMedia
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50,
                                        marginLeft: 10,
                                        marginTop: 5,
                                        marginBottom: 5,
                                    }}
                                />
                                <PlaceholderMedia
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50,
                                        marginLeft: 10,
                                        marginTop: 5,
                                        marginBottom: 5,
                                    }}
                                />
                            </Block>
                        </Block>
                        <Block flex={false}
                            style={{
                                marginBottom: 5
                            }}
                            color="white">
                            <Block flex={false} row space="between"
                                style={{
                                    paddingTop: 5,
                                    paddingLeft: 20,
                                    paddingRight: 20
                                }}>
                                <Text bold>Following</Text>
                                <TouchableOpacity onPress={goToFollowers}>
                                    <Text bold color={theme.colors.blue}>View All</Text>
                                </TouchableOpacity>

                            </Block>
                            <Block row flex={false}>
                                <PlaceholderMedia
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50,
                                        marginLeft: 10,
                                        marginTop: 5,
                                        marginBottom: 5,
                                    }}
                                />
                                <PlaceholderMedia
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50,
                                        marginLeft: 10,
                                        marginTop: 5,
                                        marginBottom: 5,
                                    }}
                                />
                                <PlaceholderMedia
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50,
                                        marginLeft: 10,
                                        marginTop: 5,
                                        marginBottom: 5,
                                    }}
                                />
                                <PlaceholderMedia
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50,
                                        marginLeft: 10,
                                        marginTop: 5,
                                        marginBottom: 5,
                                    }}
                                />
                                <PlaceholderMedia
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50,
                                        marginLeft: 10,
                                        marginTop: 5,
                                        marginBottom: 5,
                                    }}
                                />
                                <PlaceholderMedia
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50,
                                        marginLeft: 10,
                                        marginTop: 5,
                                        marginBottom: 5,
                                    }}
                                />
                                <PlaceholderMedia
                                    style={{
                                        width: 50,
                                        height: 50,
                                        borderRadius: 50,
                                        marginLeft: 10,
                                        marginTop: 5,
                                        marginBottom: 5,
                                    }}
                                />
                            </Block>
                        </Block>
                        <Block flex={false} color="white">
                            <Block flex={false} style={{
                                paddingLeft: 20,
                                paddingBottom: 20
                            }}>
                                <Text bold>Posts</Text>
                            </Block>
                            <Block row flex={false} space="between" style={{ paddingBottom: 5 }}>
                                <PlaceholderMedia style={styles.imagePost} />
                                <PlaceholderMedia style={styles.imagePost} />
                                <PlaceholderMedia style={styles.imagePost} />
                            </Block>
                            <Block row flex={false} space="between" style={{ paddingBottom: 5 }}>
                                <PlaceholderMedia style={styles.imagePost} />
                                <PlaceholderMedia style={styles.imagePost} />
                                <PlaceholderMedia style={styles.imagePost} />
                            </Block>
                        </Block>
                    </Placeholder>
                ) : (
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Block flex={false} color="white" style={{ paddingBottom: 20, marginBottom: 5 }}>
                                <Block flex={false} color="white">
                                    <Block flex={false}>
                                        <Image
                                            source={{ uri: API.root + "/" + userInfo?.avatar }}
                                            style={styles.cover}
                                            resizeMode="cover"
                                            blurRadius={2}
                                        />
                                    </Block>
                                    <Block flex={false} style={styles.avatarContainer}>
                                        <Image source={{ uri: API.root + "/" + userInfo?.avatar }} style={styles.avatar} />
                                    </Block>
                                </Block>
                                <Block flex={false} style={{ paddingTop: width / 8 + 20 }} center >
                                    <Text h2 bold>{userInfo?.userName}</Text>
                                </Block>
                                <Block row middle padding={10} style={{ paddingTop: 5 }} flex={false}>
                                    <Block flex={false} row style={{ paddingRight: 10 }}>
                                        <Icon name="location-on" size={17} color="#0dd686" style={{ paddingRight: 4 }} />
                                        <Text bold color={theme.colors.brow}>{userInfo.city ? userInfo.city : "undefine"}</Text>
                                    </Block>
                                    <Block flex={false} row>
                                        <Icon name="location-city" size={17} color="#0dd686" style={{ paddingRight: 4 }} />
                                        <Text bold color={theme.colors.brow}>{userInfo.country ? userInfo.country : "undefine"}</Text>
                                    </Block>
                                </Block>
                                <Block flex={false} style={{ paddingRight: 40, paddingLeft: 40, paddingTop: 10 }} middle>
                                    <Text style={{ textAlign: 'center' }}>{userInfo?.description}</Text>
                                </Block>
                                <Block flex={false} row space="between" style={{ paddingTop: 20 }}>
                                    <Block center style={styles.partition}>
                                        <Text bold h2>{userInfo?.following.length}</Text>
                                        <Text>Following</Text>
                                    </Block>
                                    <Block center style={styles.partition}>
                                        <Text bold h2>{userInfo?.followers.length}</Text>
                                        <Text>Folowers</Text>
                                    </Block>
                                    <Block center>
                                        <Text bold h2>{userInfo?.posts.length}</Text>
                                        <Text>Posts</Text>
                                    </Block>
                                </Block>
                            </Block>
                            <Block flex={false}
                                style={{
                                    marginBottom: 5
                                }}
                                color="white">
                                <Block flex={false} row space="between"
                                    style={{
                                        paddingTop: 5,
                                        paddingLeft: 20,
                                        paddingRight: 20
                                    }}>
                                    <Text bold>Followers</Text>
                                    <TouchableOpacity onPress={goToFollowers}>
                                        <Text bold color={theme.colors.blue}>View All</Text>
                                    </TouchableOpacity>

                                </Block>
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    data={userInfo.followers}
                                    renderItem={renderFollowers}
                                    horizontal={true}
                                    style={{
                                        marginTop: 10,
                                        paddingBottom: 10,
                                        marginBottom: 5
                                    }}
                                ></FlatList>
                            </Block>
                            <Block flex={false}
                                style={{
                                    marginBottom: 5
                                }}
                                color="white">
                                <Block flex={false} row space="between"
                                    style={{
                                        paddingTop: 5,
                                        paddingLeft: 20,
                                        paddingRight: 20
                                    }}>
                                    <Text bold>Following</Text>
                                    <TouchableOpacity onPress={goToFollowers}>
                                        <Text bold color={theme.colors.blue}>View All</Text>
                                    </TouchableOpacity>

                                </Block>
                                <FlatList
                                    showsHorizontalScrollIndicator={false}
                                    data={userInfo.following}
                                    renderItem={renderFollowing}
                                    horizontal={true}
                                    style={{
                                        marginTop: 10,
                                        paddingBottom: 10,
                                        marginBottom: 5
                                    }}
                                ></FlatList>
                            </Block>
                            <Block flex={false} color="white">
                                <Block flex={false} style={{
                                    paddingLeft: 20,
                                    paddingBottom: 20
                                }}>
                                    <Text bold>Pots</Text>
                                </Block>
                                <FlatList
                                    numColumns={3}
                                    showsVerticalScrollIndicator={false}
                                    data={images}
                                    renderItem={renderPosts}
                                    style={{
                                        paddingBottom: 10,
                                        marginBottom: 5,
                                        backgroundColor: "white"
                                    }}
                                />
                            </Block>
                        </ScrollView>
                    )
            }

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    cover: {
        height: height / 7,
        width: width,
    },
    avatar: {
        width: width / 4,
        height: width / 4,
        borderRadius: width / 8,
    },
    avatarContainer: {
        position: "absolute",
        top: height / 12,
        left: width / 2 - width / 8
    },
    partition: {
        borderRightWidth: 0.5,
        borderRightColor: theme.colors.gray
    },
    imagePost: {
        width: width / 3 - 5,
        resizeMode: "stretch",
        aspectRatio: 1.5,
    },
    middleItemPost: {
        paddingRight: 5,
        paddingLeft: 5,
    }
})
