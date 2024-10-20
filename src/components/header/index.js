
import React from "react";

import { View, Text, Image } from "react-native";
import styles from "./styles";

export default function Header(){
    return(
        <View style={styles.header}>
            <View style={styles.boxLogo}>
                <Image source={require("../../imgs/smartphone.png")} style={styles.logo}/>
                <Text style={styles.text_color}>digiPass</Text>
            </View>
        </View>
        
    )
}