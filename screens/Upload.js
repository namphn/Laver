import React, { useState } from "react"
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
import * as ImagePicker from 'expo-image-picker';

const { width, height } = Dimensions.get("window");

export default function Upload({ navigation }) {
    const [image, setImage] = useState(null);

    const goBack = () => {
        navigation.goBack();
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Block flex={false} style={styles.header} row space="between">
                <Block flex={false} row >
                    <TouchableOpacity onPress={goBack}>
                        <Icon name="arrow-back" size={24} style={styles.backButton} />
                    </TouchableOpacity>
                    <Text h3 paddingLeft>Create Posts</Text>
                </Block>
                <Block flex={false} style={{paddingRight: 20}}>
                    <TouchableOpacity>
                        <Text h3>Post</Text>
                    </TouchableOpacity>
                </Block>
            </Block>
            <Block flex={false} row center style={styles.userInfor}>
                <Image source={{ uri: mocks.profile.avatar }} style={styles.avatar} />
                <Text paddingLeft h4 bold>Phạm Hoàng Nam</Text>
            </Block>
            <Block flex={false} style={styles.textInputContainer}>
                <TextInput
                    onSubmitEditing={() => Keyboard.dismiss()}
                    multiline
                    placeholder="Post something . . ."
                    style={[
                        styles.textInput,
                        { height: image ? null : height / 2 }
                    ]}
                    textAlignVertical="top"
                />
            </Block>
            <Block flex={false}>
                {image && <Image style={{ position: "absolute", top: 0 }} source={{ uri: image }} style={{ width: width, height: "100%", resizeMode: "contain" }} />}
            </Block>

            {!image && <Block style={styles.option}>
                <TouchableOpacity onPress={pickImage}>
                    <Block flex={false} row center style={styles.item}>
                        <Image style={{ height: 35, width: 35 }} source={mocks.icons.image_video} />
                        <Text paddingLeft h4>Photo/Video</Text>
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
            </Block>}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    header: {
        paddingTop: theme.sizes.base,
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
        height: height / 16
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
        height: height / 10
    },
    textInputContainer: {
        padding: 10,
        paddingBottom: 0,
    },
    textInput: {
        fontSize: 17,
    },
    item: {
        borderTopColor: "gray",
        width: width,
        borderTopWidth: 0.5,
        height: height / 14
    },
    option: {
        position: "absolute",
        bottom: 0,
    }
})
