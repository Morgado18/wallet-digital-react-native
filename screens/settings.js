
import React from "react";

import { View, Text } from "react-native";
import SettingsComponent from "../src/components/settings";

export default function Settings(){
    return(
        <View style={{ flex:1,alignItems: "center", justifyContent: "center", }}>
           <SettingsComponent></SettingsComponent>
        </View>
    )
}