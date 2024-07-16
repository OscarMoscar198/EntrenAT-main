import "react-native-gesture-handler";
import React, { useEffect, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { WelcomeScreen } from "./src/ui/screens/WelcomeScreen";
import { LoginScreen } from "./src/ui/screens/LoginScreen";
import { RegisterScreen } from "./src/ui/screens/RegisterScreen";
import { PaperProvider } from "react-native-paper";
import HomeScreen from "./src/ui/screens/HomeScreen";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function App() {
  const hideSplashScreen = useCallback(async () => {
    await SplashScreen.hideAsync();
  }, []);

  useEffect(() => {
    hideSplashScreen();
  }, [hideSplashScreen]);

  return (
    <PaperProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <SafeAreaView style={styles.container}>
            <Stack.Navigator initialRouteName="Welcome">
              <Stack.Screen
                name="Welcome"
                component={WelcomeScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={LoginScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Register"
                component={RegisterScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          </SafeAreaView>
        </SafeAreaProvider>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
