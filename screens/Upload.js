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
    TextInput,
    Keyboard,
    Animated,
    AsyncStorage
} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { theme, mocks } from "../constants"
import * as ImagePicker from 'expo-image-picker';
import { TapGestureHandler, State } from "react-native-gesture-handler"
import { postToNewsFeed } from "../services/PostService"

const { width, height } = Dimensions.get("window");

export default function Upload({ navigation }) {
    const [image, setImage] = useState(null);
    const [postEnable, setPostEnable] = useState(false);
    const [status, setStatus] = useState("");
    const [keyBoardIsShowing, setKeyBoardIsShowing] = useState(false);
    const [optionOpacity, setOptionOpacity] = useState(new Animated.Value(1));
    const [rowOptionOpacity, setrowOptionOpacity] = useState(new Animated.Value(1));

    Keyboard.addListener("keyboardDidShow", () => {
        Animated.timing(optionOpacity, {
            toValue: 0,
            duration: 600,
        }).start();
        Animated.timing(rowOptionOpacity, {
            toValue: 1,
            duration: 600,
        }).start();
        setKeyBoardIsShowing(true)
    });
    Keyboard.addListener("keyboardDidHide", (e) => {
        Animated.timing(optionOpacity, {
            toValue: 1,
            duration: 600,
        }).start();
        Animated.timing(rowOptionOpacity, {
            toValue: 0,
            duration: 600,
        }).start();
        setKeyBoardIsShowing(false)
    });

    const onStatusChange = (text) => {
        setStatus(text);
        if (text) setPostEnable(true);
        else setPostEnable(false)
    }

    const goBack = () => {
        navigation.goBack();
    }

    const postSubmit = async    () => {
        var data = new FormData();
        let userId = await AsyncStorage.getItem("userId");
        if(image) data.append("image" ,{
            uri: image.uri,
            name: "image",
            type: image.type
        });
        data.append("userId", userId);
        data.append("content", status);
        postToNewsFeed(data);
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result);
            console.log(result)
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
                <Block flex={false} style={{ paddingRight: 20 }}>
                    <TouchableOpacity disabled={!postEnable} onPress={postSubmit}>
                        <Text h3 color={!postEnable && theme.colors.gray}>Post</Text>
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
                    onChangeText={onStatusChange}
                />
            </Block>
            <Block flex={false}>
                {image && <Image style={{ position: "absolute", top: 0 }}
                    source={{ uri: image.uri }}
                    style={{ width: width, height: "100%", resizeMode: "contain" }} />}
            </Block>

            {!image && <Block style={[styles.option]} >
                <Animated.View style={{
                    opacity: optionOpacity
                }}>
                    <TouchableOpacity onPress={pickImage} disabled={keyBoardIsShowing}>
                        <Block flex={false} row center style={[styles.item]}>
                            <Image style={{ height: 35, width: 35 }} source={mocks.icons.image_video} />
                            <Text paddingLeft h4>Photo/Video</Text>
                        </Block>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={keyBoardIsShowing}>
                        <Block flex={false} row center style={styles.item}>
                            <Image style={{ height: 35, width: 35 }} source={mocks.icons.tag} />
                            <Text paddingLeft h4>Tag Friends</Text>
                        </Block>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={keyBoardIsShowing}>
                        <Block flex={false} row center style={styles.item}>
                            <Image style={{ height: 35, width: 35 }} source={mocks.icons.checkin} />
                            <Text paddingLeft h4>Check in</Text>
                        </Block>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={keyBoardIsShowing}>
                        <Block flex={false} row center style={styles.item}>
                            <Image style={{ height: 35, width: 35 }} source={mocks.icons.gif} />
                            <Text paddingLeft h4>Gif</Text>
                        </Block>
                    </TouchableOpacity>
                    <TouchableOpacity disabled={keyBoardIsShowing}>
                        <Block flex={false} row center style={styles.item}>
                            <Image style={{ height: 35, width: 35 }} source={mocks.icons.question} />
                            <Text paddingLeft h4>Question</Text>
                        </Block>
                    </TouchableOpacity>
                </Animated.View>
            </Block>}
            {
                keyBoardIsShowing && !image &&
                <Block style={[styles.option]} row space="between">
                    <Block>
                        <TouchableOpacity onPress={pickImage} disabled={!keyBoardIsShowing}>
                            <Block flex={false} row center style={[styles.item, { width: null }]}>
                                <Image style={{ height: 35, width: 35 }} source={mocks.icons.image_video} />
                            </Block>
                        </TouchableOpacity>
                    </Block>
                    <Block>
                        <TouchableOpacity disabled={!keyBoardIsShowing}>
                            <Block flex={false} row center style={[styles.item, { width: null }]}>
                                <Image style={{ height: 35, width: 35 }} source={mocks.icons.tag} />
                            </Block>
                        </TouchableOpacity>
                    </Block>
                    <Block>
                        <TouchableOpacity disabled={!keyBoardIsShowing}>
                            <Block flex={false} row center style={[styles.item, { width: null }]}>
                                <Image style={{ height: 35, width: 35 }} source={mocks.icons.checkin} />
                            </Block>
                        </TouchableOpacity>
                    </Block>
                    <Block>
                        <TouchableOpacity disabled={!keyBoardIsShowing}>
                            <Block flex={false} row center style={[styles.item, { width: null }]}>
                                <Image style={{ height: 35, width: 35 }} source={mocks.icons.gif} />
                            </Block>
                        </TouchableOpacity>
                    </Block>
                    <Block>
                        <TouchableOpacity disabled={!keyBoardIsShowing}>
                            <Block flex={false} row center style={[styles.item, { width: null }]}>
                                <Image style={{ height: 35, width: 35 }} source={mocks.icons.question} />
                            </Block>
                        </TouchableOpacity>
                    </Block>
                </Block>
            }
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
        paddingBottom: height / 14,
    },
    item: {
        borderTopColor: "gray",
        borderTopWidth: 0.5,
        height: height / 14,
        width: width
    },
    option: {
        position: "absolute",
        bottom: 0,
    }
})
