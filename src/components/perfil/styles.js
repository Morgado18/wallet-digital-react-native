
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    page_profile: {
        marginTop: "-30%"
    },
    top: {
        flexDirection: "column",
        width: "100%",
        height: "auto",
        alignContent: "center",
        justifyContent: "center",
    },
    img_user: {
        width: 150,
        height: "53%",
        overflow: "hidden",
        backgroundColor: "#c9c9c9",
        borderRadius: 80,
        alignContent: "center",
        justifyContent: "center",
    },
    img: {
        width: "100%",
        height: "100%",
    },
    data_user: {
        alignContent: "center",
        justifyContent: "center",
        marginTop: "5%",
    },
    text_data_user: {
        color:"gray",
        fontWeight:"400",
        letterSpacing: 1,
    }
})

export default styles;