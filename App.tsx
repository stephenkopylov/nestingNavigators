/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import {
  createNavigationContainerRef,
  NavigationContainer,
} from "@react-navigation/native";
import React from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import { HomeScreen } from "./HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SidePanelScreen1 } from "./SidePanelScreen1";
import { SidePanelScreen2 } from "./SidePanelScreen2";
import absoluteFill = StyleSheet.absoluteFill;

const Stack = createStackNavigator();
export const navigationRef = createNavigationContainerRef();

const App = () => {
  const [leftPanelOpen, setLeftPanelOpen] = React.useState(false);
  const [leftPanelInitialRoute, setLeftPanelInitialRoute] = React.useState<string | undefined>(undefined);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar />
      <HomeScreen />
      {leftPanelOpen && (
        <Pressable
          onPress={() => {
            setLeftPanelOpen(false);
          }}
          style={absoluteFill}
        />
      )}
      <View
        style={{
          position: "absolute",
          backgroundColor: "red",
          width: 50,
          left: 20,
          top: 20,
          bottom: 20,
          overflow: "hidden",
        }}>
        <Pressable
          onPress={() => {
            setLeftPanelInitialRoute("SidePanelScreen1");
            setLeftPanelOpen(true);
          }}>
          <Text>{"Open left menu on first screen"}</Text>
        </Pressable>
        <View style={{ height: 10 }} />
        <Pressable
          onPress={() => {
            setLeftPanelInitialRoute("SidePanelScreen2");
            setLeftPanelOpen(true);
          }}>
          <Text>{"Open left menu on second screen"}</Text>
        </Pressable>
      </View>
      <NavigationContainer ref={navigationRef}>
        {leftPanelOpen && (
          <View
            key={leftPanelInitialRoute}
            style={{
              position: "absolute",
              backgroundColor: "red",
              width: 300,
              left: 100,
              top: 20,
              bottom: 20,
              overflow: "hidden",
            }}>
            <Stack.Navigator
              initialRouteName={leftPanelInitialRoute}
              screenOptions={{ animationEnabled: false }}>
              <Stack.Group
                screenOptions={{
                  presentation: "card",
                  animationEnabled: true,
                }}>
                <Stack.Screen
                  name="SidePanelScreen1"
                  component={SidePanelScreen1}
                  options={{ headerShown: false }}
                />
              </Stack.Group>
              <Stack.Group screenOptions={{ animationEnabled: true }}>
                <Stack.Screen
                  name="SidePanelScreen2"
                  component={SidePanelScreen2}
                  options={{ headerShown: false }}
                />
              </Stack.Group>
            </Stack.Navigator>
          </View>
        )}
      </NavigationContainer>
      <NavigationContainer>
        <View
          style={{
            position: "absolute",
            backgroundColor: "red",
            width: 300,
            right: 20,
            top: 20,
            bottom: 20,
          }}>
          <Stack.Navigator>
            <Stack.Screen
              name="SidePanelScreen1"
              component={SidePanelScreen1}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="SidePanelScreen2"
              component={SidePanelScreen2}
            />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: "400",
  },
  highlight: {
    fontWeight: "700",
  },
});

export default App;
