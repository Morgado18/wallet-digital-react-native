
import React from "react";

import { View, Text } from "react-native";
import HomeComponent from "../src/components/home";

export default function Home(){
    return(
        <View style={{ flex:1,alignItems: "center", justifyContent: "center", }}>
           <HomeComponent/>
        </View>
    )
}