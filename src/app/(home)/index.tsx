import { useAuth } from "@clerk/expo";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Index() {
    const { isLoaded, isSignedIn, signOut } = useAuth();


    if (!isLoaded) {
        return null;
    }

    if (!isSignedIn) {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>You are not signed in.</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>You are signed in!</Text>

            <Button
                title="Sign out"
                onPress={() => signOut()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    text: {
        fontSize: 20,
        color: "black",
    },
});