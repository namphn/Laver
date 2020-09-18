import React from "react"
import {
    Text,
    Block,
    Input
} from "../components"
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    FlatList,
} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import FeatherIcon from "react-native-vector-icons/Feather"
import { theme, mocks } from "../constants"
import GlobalStyles from "../GlobalStyles"

const { width, height } = Dimensions.get("window");

export default function Message({ navigation }) {

    const goBack = () => {
        navigation.goBack();
    }

    const converstation = [
        {
            me: true,
            content: "Học an ninh mạng đến mấy giờ nhỉ"
        },
        {
            me: false,
            content: "4h"
        },
        {
            me: true,
            content: "Dm thế về luôn chứ làm đ gì nữa"
        },
        {
            me: true,
            content: "Tưởng 3h còn lên cty"
        },
        {
            me: false,
            content: "chịu đấy"
        },
        {
            me: true,
            content: "Tí trốn mẹ ra đi ăn k"
        },
        {
            me: true,
            content: "tầm 5p nữa t về r đi"
        },
        {
            me: true,
            content: "ăn k dm"
        },
        {
            me: false,
            content: "Về đi"
        },
        {
            me: false,
            content: "Đ trốn được"
        },
        {
            me: false,
            content: "Học xong thì ăn"
        },
        {
            me: false,
            content: "Về đi"
        },
        {
            me: false,
            content: "Học xong r"
        },
        {
            me: true,
            content: "Đang đâu đấy"
        },
        {
            me: false,
            content: "Vào kí túc ngoại ngữ đi"
        },
        {
            me: false,
            content: "Đang trong đấy"
        },
        {
            me: false,
            content: "Ăn mì"
        },

    ]

    const renderMessage = ({ item }) => {
        if (item.me == true) {
            return (
                <Block flex={false}
                    style={{
                        marginBottom: 10,
                        alignSelf: "flex-end",
                        borderRadius: 30
                    }}
                    right
                    color={theme.colors.green}
                >
                    <Block flex={false} style={styles.me}>
                        <Text right h4 color={theme.colors.white}>{item.content}</Text>
                    </Block>

                </Block>
            )
        } else {
            return (
                <Block flex={false}
                    style={{
                        marginBottom: 10,
                        alignSelf: "flex-start",
                        borderRadius: 30
                    }}
                    right
                    color={theme.colors.gray3}
                >
                    <Block flex={false} style={styles.me}>
                        <Text right h4 color="black">{item.content}</Text>
                    </Block>

                </Block>
            )
        }

    }

    return (
        <SafeAreaView style={GlobalStyles.droidSafeArea}>
            <Block flex={false} row center style={styles.header} color={theme.colors.white}>
                <TouchableOpacity onPress={goBack}>
                    <Icon name="arrow-back" size={24} style={styles.backButton} />
                </TouchableOpacity>
                <Block flex={false} row center
                    style={{
                        paddingLeft: 10
                    }}>
                    <Image source={mocks.profile.avatar} style={styles.avatar} />
                    <Text paddingLeft h4 bold>Phạm Hoàng Nam</Text>
                </Block>
            </Block>
            <Block flex={false}>

                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={converstation}
                        renderItem={renderMessage}
                        style={{ marginTop: 10 }}
                    ></FlatList>
            </Block>
            <Block color="white" style={styles.commentInput} row space="between" center>
                <TouchableOpacity>
                    <Block flex={false} row center style={{ paddingLeft: 10 }}>
                        <Image style={{ height: 35, width: 35 }} source={mocks.icons.camera} />
                    </Block>
                </TouchableOpacity>
                <Input
                    placeholder="Type something..."
                    style={styles.textInput}
                />
                <TouchableOpacity>
                    <Block flex={false} center middle
                        style={{
                            marginRight: 10,
                            height: 50,
                            width: 50,
                            marginBottom: 5,
                            borderRadius: 25
                        }}
                        color={theme.colors.green}>
                        <FeatherIcon
                            name="send"
                            size={29}
                            color={theme.colors.gray2}
                        />
                    </Block>
                </TouchableOpacity>
            </Block>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        position: "absolute",
        paddingTop: theme.sizes.base,
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
        height: height / 12,
        zIndex: 1,
        width: width,
    },
    backButton: {
        paddingLeft: 20
    },
    avatar: {
        height: height / 17,
        width: height / 17,
    },
    textInput: {
        height: 45,
        backgroundColor: theme.colors.white,
        fontSize: 15,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: theme.colors.green,
        width: width - 130,
        marginRight: 10,
        marginLeft: 10,
        alignItems: "center",
        paddingHorizontal: 20,
    },
    commentInput: {
        height: 50,
        width: width,
        position: "absolute",
        bottom: 0,
    },
    you: {

    },
    me: {
        padding: 10,
        borderRadius: 25,
        justifyContent: "flex-end",
    }
})
