import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const index = () => {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView
        contentContainerStyle={{
          height: "100%",
        }}
      >
        <View className="justify-center items-center h-full px-4">
          <Image
            source={"/assets/logo.svg"}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          lets see
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({});
