
import React from "react";

import { View, Text, SafeAreaView, TouchableOpacity, Image, ScrollView } from "react-native";
import styles from "./styles";

import { AntDesign, FontAwesome, MaterialIcons } from "@expo/vector-icons"

export default function HomeComponent(){
    return(
        <SafeAreaView style={styles.safe}>
            <View style={styles.boxCarta}>
                <View style={styles.box_img_map}>
                    {/* <Image source={require("../../imgs/bg-carta.jpeg")} style={styles.img_map} /> */}
                   {/*  <Image source={require("../../imgs/location.png")} style={styles.img_map2} /> */}
                </View>
                <View style={styles.data_carta}>
                    <Text style={styles.text_carta}>CARTA DE CONDUÇÃO</Text>
                    <Text style={styles.status}><Text style={styles.value_data_carta}>Status: </Text>{/* Status: */} <Text>Suspensa</Text></Text>
                    <View style={styles.data}>
                        <View style={styles.dataLeft}>
                            <Text style={styles.text_dataLeft}>{/* Nome:  */}
                                <Text style={styles.value_data_carta}>Nome: </Text>
                                Morgado Andrade de Melo
                            </Text>
                            <Text style={styles.text_dataLeft}>{/* Nº do B.I: */} 
                                <Text style={styles.value_data_carta}>Nº do B.I: </Text>
                                00838225228LA046
                            </Text>
                            <Text style={styles.text_dataLeft}>{/* Validade: */}
                                <Text style={styles.value_data_carta}>Validade:</Text>
                                17/12/2027
                            </Text>
                        </View>
                        <View style={styles.right}>
                           {/*  <Text>ANGOLA</Text> */}
                            <View style={styles.box_image_cidadao}>
                                <Image style={styles.image_cidadao} source={require("../../imgs/g.jpeg")} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>

            <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollView}>
                <View style={styles.cards}>
                    <TouchableOpacity style={styles.boxCard}>
                        <MaterialIcons name="security" size={35} style={styles.icons} />
                        <Text style={styles.text}>Infrações</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxCard}>
                        <AntDesign name="profile" size={35} style={styles.icons} />
                        <Text style={styles.text}>Multas</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxCard}>
                        <MaterialIcons name="payment" size={35} style={styles.icons} />
                        <Text style={styles.text}>Documentos</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.boxCard}>
                        <FontAwesome name="bell" size={35} style={styles.icons} />
                        <Text style={styles.text}>Alertas</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}