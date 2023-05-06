import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

export const SidePanelScreen1 = () => {
  const navigation = useNavigation();
  return (<View><Text>{"Screen1"}</Text>
    <Pressable onPress={() => {
      navigation.navigate("SidePanelScreen2");
    }}><Text>{"To screen 2"}</Text></Pressable>
  </View>);
};
