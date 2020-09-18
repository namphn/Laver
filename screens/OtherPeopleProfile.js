import React from "react"
import {
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions,
    TouchableOpacity,
    FlatList
} from "react-native"
import {
    Block,
    Text,
    Button
} from "../components"
import { theme, mocks } from "../constants"
import Icon from "react-native-vector-icons/MaterialIcons"
import { ScrollView } from "react-native-gesture-handler"

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
            source={item.avatar}
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
    return (
        <Block row flex={false} space="between" style={{ paddingBottom: 3 }}>
            <Image source={item.image1} style={styles.imagePost} resizeMode="contain" />
            <Image source={item.image2} style={styles.imagePost} resizeMode="contain" />
            <Image source={item.image3} style={styles.imagePost} resizeMode="contain" />
        </Block>
    )
}


export default function OtherPeopleProfile({ navigation }) {

    const goToMessage = () => {
        navigation.navigate("Message");
    }

    const goBack = () => {
        navigation.goBack();
    }

    const goToFollowers = () => {
        navigation.navigate("Followers", {
            followers: followers
        });
    }

    return (
        <SafeAreaView>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Block flex={false} row center style={styles.header}>
                    <TouchableOpacity onPress={goBack}>
                        <Icon name="arrow-back" size={24} style={styles.backButton} />
                    </TouchableOpacity>
                </Block>
                <Block flex={false} color="white" style={{ paddingBottom: 20, marginBottom: 5 }}>
                    <Block flex={false} color="white">
                        <Block flex={false}>
                            <Image
                                source={mocks.profile.avatar}
                                style={styles.cover}
                                resizeMode="cover"
                                blurRadius={1}
                            />
                        </Block>
                        <Block flex={false} style={styles.avatarContainer}>
                            <Image source={mocks.profile.avatar} style={styles.avatar} />
                        </Block>
                    </Block>
                    <Block flex={false} style={{ paddingTop: width / 8 + 20 }} center >
                        <Text h2 bold>Phạm Hoàng Nam</Text>
                    </Block>
                    <Block row middle padding={10} style={{ paddingTop: 5 }} flex={false}>
                        <Block flex={false} row style={{ paddingRight: 10 }}>
                            <Icon name="location-on" size={17} color="#0dd686" style={{ paddingRight: 4 }} />
                            <Text bold color={theme.colors.brow}>Hà Nội</Text>
                        </Block>
                        <Block flex={false} row>
                            <Icon name="location-city" size={17} color="#0dd686" style={{ paddingRight: 4 }} />
                            <Text bold color={theme.colors.brow}>Việt Nam</Text>
                        </Block>
                    </Block>
                    <Block flex={false} style={{ paddingRight: 40, paddingLeft: 40, paddingTop: 10 }} middle>
                        <Text style={{ textAlign: 'center' }}>I'm a positive person. I love to travel and eat. Alway available for chat</Text>
                    </Block>
                    <Block row center middle style={{ paddingTop: 10 }}>
                        <Block flex={false}>
                            <Button gradient
                                style={{
                                    width: width / 3,
                                    borderRadius: 30,
                                    ...styles.middleStyle
                                }}>
                                <Text h4 color={theme.colors.white}>FOLLOWING</Text>
                            </Button>
                        </Block>
                        <Block flex={false} style={{ paddingLeft: 20 }}>
                            <Button
                                onPress={goToMessage}
                                style={{
                                    width: width / 3,
                                    borderRadius: 30,
                                    borderWidth: 2,
                                    height: 46,
                                    borderColor: theme.colors.green,
                                    ...styles.middleStyle
                                }}
                            >
                                <Text h4 color={theme.colors.green}>MESSAGE</Text>
                            </Button>
                        </Block>

                    </Block>
                    <Block flex={false} row space="between" style={{ paddingTop: 20 }}>
                        <Block center style={styles.partition}>
                            <Text bold h2>807</Text>
                            <Text>Following</Text>
                        </Block>
                        <Block center style={styles.partition}>
                            <Text bold h2>86</Text>
                            <Text>Folowers</Text>
                        </Block>
                        <Block center>
                            <Text bold h2>890</Text>
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
                        data={followers}
                        renderItem={renderFollowers}
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
                        showsVerticalScrollIndicator={false}
                        data={post}
                        renderItem={renderPosts}
                        style={{
                            paddingBottom: 10,
                            marginBottom: 5,
                            backgroundColor: "white"
                        }}
                    />
                </Block>
            </ScrollView>
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
        width: width / 3 - 3,
        height: width / 3 - 3,
        resizeMode: "contain"
    },
    middleStyle: {
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        position: "absolute",
        paddingTop: theme.sizes.base,
        height: height / 12,
        zIndex: 1,
        width: width,
    },
    backButton: {
        paddingLeft: 20
    },
})
