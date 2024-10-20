

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safe: {
        width: "100%",
        height: "100%",
    },
    boxCarta: {
        width: "95%",
        minHeight: 205,
       /*  padding: "5%", */
        backgroundColor: "#747474",
        borderRadius: 15,
        marginLeft: "2%",
        marginRight: "2%",
        marginTop: "15%",
        overflow: "hidden"
    },
    text_carta: {
        fontWeight: "900",
        color: "#fff", 
        fontSize: 18,
        letterSpacing: 1
    },
    value_data_carta: {
        fontWeight: "600",
    },
    scrollView: {
        marginLeft: "5%",
        marginRight: "5%",
        marginTop: "5%",
        marginBottom: "26%",
        width: "90%",
    },
    cards: {
/*         marginLeft: "5%",
        marginRight: "5%",
        marginTop: "10%",
        marginBottom: "23%",
        width: "90%", */
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    },
    boxCard: {
        width: "39%",
        height: "auto",
        padding: "5%",
        borderRadius: 10,
        borderColor: "gray",
        borderWidth: 2,
        margin: "2%",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },
    icons: {
        color: "#16247DD6"
    },
    text: {
        color: "gray"
    },
    status: {
        backgroundColor: "red",
        width: "50%",
        color: "#fff",
        paddingLeft: "2%",
        marginTop: 4
    },
    img_map: {
        width: "100%",
        height: "100%",
        position: "relative",
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        opacity: 0.8
    },
    data_carta: {
        position: "absolute",
        left: "5%",
        right: "5%",
        top: "5%",
        bottom: "5%",
        flexDirection: "column"
    },
    data: {
        flexDirection: 'row',
        marginTop: "4%"
    },
    dataLeft: {
        flex: 1,
        padding: 1
    },
    dataRight: {
        flex: 1,
    },
    box_image_cidadao: {
        width: "100%",
        height: "90%",
        backgroundColor: "red",
        overflow: "hidden",
        right: 0,
        top: "-20%",
        borderRadius: 5,
    },
    image_cidadao: {
        width: 100,
        height: "100%",
    },
    text_dataLeft: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "200",
        letterSpacing: 1,
        marginBottom: 3,
    }
})

export default styles;
