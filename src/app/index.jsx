import { Text, View } from "react-native";
import SignInScreen from "./(auth)/sign-in";

export default function Index() {
    return (
        <SignInScreen>
            <View className="flex-1 items-center justify-center bg-red-500">
                <Text className="text-3xl font-bold text-white">
                    NativeWind Test
                </Text>
            </View>
        </SignInScreen>
    );
}