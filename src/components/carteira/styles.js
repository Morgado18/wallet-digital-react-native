
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    safe: {
        width: "100%",
        height: "auto",
        flex: 1,
        alignItems: 'center', // Centraliza horizontalmente
        justifyContent: 'flex-start', // Alinha o conteúdo ao topo
        marginTop: "4%",
        marginBottom: "25%",
    },
    scrollView: {
        width: "90%",
    },
    boxCarta: {
        width: "95%",
        minHeight: 250,
       /*  maxHeight: "auto", */
       /*  padding: "5%", */

          /*  minHeight: "auto", */
    // Caso precise garantir que o card se expanda
       /*  flexGrow: 1,
 */
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
    box_image_code: {
        width: "100%",
        height: 100,
        overflow: "hidden",
        right: 0,
        top: "-20%",
        borderRadius: 5,
    },
    image_code: {
        width: 100,
        height: "100%",
    },
    text_dataLeft: {
        fontSize: 14,
        color: "#fff",
        fontWeight: "200",
        letterSpacing: 1,
        marginBottom: 3,
    },
    status: {
        backgroundColor: "red",
        width: "50%",
        color: "#fff",
        paddingLeft: "2%",
        marginTop: 4
    },
    boxAddDoc: {
       /*  backgroundColor: "gray", */
        borderColor: "gray",
        borderWidth: 2,
        borderRadius: 15,
        marginLeft: "2%",
        marginRight: "2%",
        marginTop: "10%",
        overflow: "hidden",
        width: "95%",
        minHeight: 200,
        padding: "5%",
        alignItems: "center",
        justifyContent: "center"
    },
    btn_newDoc: {
        width:"30%",
        height: 80,
        borderColor: "gray",
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 100,
    },
    img_newDoc: {
        width:"100%",
        height: "100%",
    }
})

export default styles;