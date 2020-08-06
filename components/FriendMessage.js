import React from "react"
import {
    SafeAreaView,
    StyleSheet,
    Image,
    Dimensions,
    View,
    TouchableOpacity
} from "react-native"
import {
    Text,
    Block,
    Button,
    Input
} from "../components"
import GlobalStyles from "../GlobalStyles"
import { theme, mocks } from "../constants"
import IonIcon from "react-native-vector-icons/Octicons"

const { width, height } = Dimensions.get("window");

export default function FriendMessage(props) {

    const { navigation } = props;

    return (
        <TouchableOpacity style={styles.ListImage} style={styles.container}>
            <Image source={mocks.profile.avatar} style={styles.friendAvatar} />
            <IonIcon name="primitive-dot" color={theme.colors.green} size={20} style={styles.onlineDot}/>
            <Block flex={false}>
                <Text style={styles.friendName}>Phạm Hoàng Nam</Text>
                <Text style={styles.message}>Hey Bro! What's up?</Text>
            </Block>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginRight: 30,
        paddingTop: 30
    },
    onlineDot: {
        position: "absolute",
        paddingLeft: width / 9,
        paddingTop: width / 13
    },
    friendAvatar: {
        width: width / 7,
        height: width / 7,
    },
    friendName: {
        paddingTop: width / 60,
        paddingLeft: 20,
        fontWeight: "bold",
        fontSize: 16
    },
    message: {
        paddingLeft: 20,
    }
})
