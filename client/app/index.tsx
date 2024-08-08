import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

const index = () => {
  const handlePress = () => {
    router.push("/addapartment");
  };
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="justify-between items-center px-4 w-full">
          <Image
            source={require("../assets/logo.png")}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
        </View>
        <View className="mt-10 justify-center items-center">
          <TouchableOpacity
            activeOpacity={0.7}
            className={"bg-[#1e4164] rounded-md px-6 py-4"}
            onPress={handlePress}
          >
            <Text className="text-white">Add Apartment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
