
import React from "react";

import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";

import { AntDesign, FontAwesome } from "@expo/vector-icons";

export default function CarteiraComponent(){
    return(
        <SafeAreaView style={styles.safe}>
           
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View >
                   {/*  <View style={styles.boxCarta}>
                        <View style={styles.box_img_map}>
                        </View>
                        <View style={styles.data_carta}>
                            <Text style={styles.text_carta}>CARTA DE CONDUÇÃO (VERSO)</Text>
                            <Text style={styles.status}><Text style={styles.value_data_carta}>Status: </Text> <Text>Suspensa</Text></Text>
                            <View style={styles.data}>
                                <View style={styles.dataLeft}>
                                    <Text style={styles.text_dataLeft}>
                                        <Text style={styles.value_data_carta}>Província: </Text>
                                        Luanda
                                    </Text>
                                    <Text style={styles.text_dataLeft}>
                                        <Text style={styles.value_data_carta}>Veículos autorizados: </Text>
                                        Longo, Motocicletas
                                    </Text>
                                    <Text style={styles.text_dataLeft}>
                                        <Text style={styles.value_data_carta}>Assinatura:</Text>
                                        <Text>{"\n"} morgado andrade de melo</Text>
                                    </Text>
                                </View>
                                <View style={styles.right}>
                                    <View style={styles.box_image_code}>
                                        <Image style={styles.image_code} source={require("../../imgs/qr-code.png")} />
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
 */}
                    <View style={styles.boxAddDoc}>
                        <TouchableOpacity style={styles.btn_newDoc}>
                            {/* <Image source={require("../../imgs/new-document.png")} style={styles.img_newDoc}/> */}
                            <AntDesign name="addfile" size={54} color="gray" />
                        </TouchableOpacity>
                        <Text style={{ color:"gray" }}>Adicionar um documento</Text>
                    </View>
                    
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

/* page_wallet */