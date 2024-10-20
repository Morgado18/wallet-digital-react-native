
import React from "react";

import { View, Text } from "react-native";
import PerfilComponent from "../src/components/perfil";

export default function Perfil(){
    return(
        <View style={{ flex:1,alignItems: "center", justifyContent: "center", }}>
            <PerfilComponent/>
        </View>
    )
}