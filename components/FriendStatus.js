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

export default function FriendStatus(props) {

    const { navigation } = props;

    return (
        <TouchableOpacity style={styles.ListImage} style={styles.container}>
            <Image source={{uri: props.avatar}} style={styles.friendAvatar} />
            {
                props.online ?  <IonIcon name="primitive-dot" color={theme.colors.green} size={20} style={styles.onlineDot}/> : null
            }
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginRight: 30,
        paddingTop: 20
    },
    onlineDot: {
        position: "absolute",
        paddingLeft: width / 10,
        paddingTop: width / 20
    },
    friendAvatar: {
        width: width / 8,
        height: width / 8,
        borderRadius: 30
    }
})
