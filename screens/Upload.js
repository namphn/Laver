import React from "react"
import {
    Text,
    Block,
} from "../components"
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
    TextInput
} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { theme, mocks } from "../constants"
import { ScrollView } from "react-native-gesture-handler"

const { width, height } = Dimensions.get("window");

export default function Upload({ navigation }) {

    const goBack = () => {
        navigation.goBack();
    }

    return (
        <SafeAreaView>
            <Block flex={false} row style={styles.header}>
                <TouchableOpacity onPress={goBack}>
                    <Icon name="arrow-back" size={24} style={styles.backButton} />
                </TouchableOpacity>
                <Text h3 paddingLeft>Create Posts</Text>
            </Block>
            <Block flex={false} row center style={styles.userInfor}>
                <Image source={{uri: mocks.profile.avatar}} style={styles.avatar} />
                <Text paddingLeft h4 bold>Phạm Hoàng Nam</Text>
            </Block>
            <Block flex={false} style={styles.textInputContainer}>
                <TextInput
                    placeholder="Post something . . ."
                    style={styles.textInput}
                    textAlignVertical="top"
                />
            </Block>
            <Block flex={false} >
                <ScrollView>
                    <TouchableOpacity>
                        <Block flex={false} row center style={styles.item}>
                            <Image style={{ height: 35, width: 35 }} source={mocks.icons.image_video} />
                            <Text paddingLeft h4 >Photo/Video</Text>
                        </Block>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Block flex={false} row center style={styles.item}>
                            <Image style={{ height: 35, width: 35 }} source={mocks.icons.tag} />
                            <Text paddingLeft h4>Tag Friends</Text>
                        </Block> 
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Block flex={false} row center style={styles.item}>
                            <Image style={{ height: 35, width: 35 }} source={mocks.icons.checkin} />
                            <Text paddingLeft h4>Check in</Text>
                        </Block>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Block flex={false} row center style={styles.item}>
                            <Image style={{ height: 35, width: 35 }} source={mocks.icons.gif} />
                            <Text paddingLeft h4>Gif</Text>
                        </Block>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Block flex={false} row center style={styles.item}>
                            <Image style={{ height: 35, width: 35 }} source={mocks.icons.question} />
                            <Text paddingLeft h4>Question</Text>
                        </Block>
                    </TouchableOpacity>
                </ScrollView>
            </Block>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: theme.sizes.base,
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
        height: height/16
    },
    backButton: {
        paddingLeft: 20
    },
    avatar: {
        height: height / 15,
        width: height / 15,
        borderRadius: height / 30
    },
    userInfor: {
        paddingLeft: 10,
        paddingTop: 10,
        height: height /10
    },
    textInputContainer: {
        padding: 10
    },
    textInput: {
        height: height / 2,
        fontSize: 17
    },
    item: {
        borderTopColor: "gray",
        borderTopWidth: 0.5,
        height: (height*(1-1/16-1/15-1/2)-10) / 5
    }
})
