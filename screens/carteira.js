
import React from "react";

import { View, Text } from "react-native";
import CarteiraComponent from "../src/components/carteira";

export default function Carteira(){
    return(
        <View style={{ flex:1,alignItems: "center", justifyContent: "center", }}>
            <CarteiraComponent />
        </View>
    )
}