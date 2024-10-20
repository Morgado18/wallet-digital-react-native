
import React from "react";

import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function PerfilComponent(){
    return(
        <View style={styles.page_profile}>
            <View style={styles.top}>
                <View style={styles.img_user}>
                    <Image source={require("../../imgs/profile_photo.webp")}  style={styles.img}/>
                </View>
                <View style={styles.data_user}>
                    <Text  style={styles.text_data_user}>Morgado</Text>
                </View>
            </View>
        </View>
    )
}