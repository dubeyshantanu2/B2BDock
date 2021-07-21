import React, { useEffect } from 'react';
import { View, StyleSheet, TouchableWithoutFeedback, ImagePickerIOS, Alert } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import * as ImagePicker from 'expo-image-picker';

import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

function ImageInput({ imageUri, onChangeImage }) {

    useEffect(() => {
        requestPermission();
    }, []);

    const requestPermission = async () => {
        const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (!granted) alert("You need to enable permission to access the library.");
    };

    const handlePress = () => {
        if (!imageUri) selectImage();
        else
            Alert.alert("Delete", "Are you sure you want to delete this image?", [
                { text: "Yes", onPress: () => onChangeImage(null) },
                { text: "No" },
            ]);
    };

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                quality: 0.5,
            });
            if (!result.cancelled) onChangeImage(result.uri);
        } catch (error) {
            console.log("Error reading an image", error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (
                    <Icon name="camera" size={40} color={"#ccc"} />
                )}
                {imageUri && <Image source={{ uri: imageUri }} style={{ width: "100%", height: "100%" }} />}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 16,
        height: 100,
        width: 100,
        justifyContent: "center",
        overflow: "hidden",
    }
})

export default ImageInput;