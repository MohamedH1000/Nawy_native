import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const addapartment = () => {
  const [apartmentDetails, setApartmentDetails] = useState<any>({
    bathroomCount: null,
    price: null,
    roomCount: null,
    imageSrc: [],
    description: "",
    locationValue: {},
    title: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const clear = () => {
    setApartmentDetails({
      bathroomCount: null,
      price: null,
      roomCount: null,
      imageSrc: [],
      description: "",
      locationValue: {},
      title: "",
    });
  };
  const handlePress = () => {
    try {
    } catch (error) {}
  };
  return (
    <SafeAreaView className="mt-20">
      <ScrollView>
        <View>
          <Text
            className="text-3xl text-[#1e4164] 
        text-center font-bold"
          >
            Add Apartment
          </Text>
          <View className="flex-row justify-between items-center mt-10 px-4">
            <Text
              className="text-[#1e4164] 
        font-bold"
            >
              Number of Rooms:
            </Text>
            <View className="border-2 border-[#1e4164] w-[200px] h-12 rounded-2xl">
              <TextInput
                className="text-[white] font-semibold text-base p-2"
                value={apartmentDetails.roomCount}
                onChangeText={(e) =>
                  setApartmentDetails({ ...apartmentDetails, roomCount: e })
                }
              ></TextInput>
            </View>
          </View>
          <View className="flex-row justify-between items-center mt-10 px-4">
            <Text
              className="text-[#1e4164] 
        font-bold"
            >
              Number of bathrooms:
            </Text>
            <View className="border-2 border-[#1e4164] w-[200px] h-12 rounded-2xl">
              <TextInput
                className="text-[white] font-semibold text-base p-2"
                value={apartmentDetails.bathroomCount}
                onChangeText={(e) =>
                  setApartmentDetails({ ...apartmentDetails, bathroomCount: e })
                }
              ></TextInput>
            </View>
          </View>
          <View className="mt-[50px]">
            <Text className="text-[#1e4164] text-2xl font-semibold">
              How do you love to describe the place?
            </Text>
          </View>
          <View className="px-4 mt-5">
            <View
              className="border-2 border-[#1e4164]
            w-full h-12 rounded-2xl"
            >
              <TextInput
                className="text-[white] font-semibold text-base p-2"
                value={apartmentDetails.Address}
                onChangeText={(e) =>
                  setApartmentDetails({ ...apartmentDetails, Address: e })
                }
                placeholder="Address"
              ></TextInput>
            </View>
          </View>
          <View className="px-4 mt-10">
            <View
              className="border-2 border-[#1e4164]
            w-full h-12 rounded-2xl "
            >
              <TextInput
                className="text-[white] font-semibold text-base p-2"
                value={apartmentDetails.description}
                onChangeText={(e) =>
                  setApartmentDetails({ ...apartmentDetails, description: e })
                }
                placeholder="Description"
              ></TextInput>
            </View>
          </View>
          <Text className="text-[#1e4164] font-bold text-2xl mt-10">
            Now, Price the apartment
          </Text>
          <Text className="text-[#1e4164] opacity-60 mt-5">
            What is the price of apartment?
          </Text>
          <View className="px-4 mt-5">
            <View
              className="border-2 border-[#1e4164]
            w-full h-12 rounded-2xl "
            >
              <TextInput
                className="text-[white] font-semibold text-base p-2"
                value={apartmentDetails.price}
                onChangeText={(e) =>
                  setApartmentDetails({ ...apartmentDetails, price: e })
                }
              ></TextInput>
            </View>
          </View>
          <View className="px-4 mt-5">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={handlePress}
              disabled={isLoading}
              className="w-full bg-[#1e4164] rounded-xl py-4 
              px-2 flex justify-center items-center"
            >
              <Text className="text-white font-bold">Add Apartment</Text>
            </TouchableOpacity>
          </View>
          <View className="px-4 my-5">
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={clear}
              disabled={isLoading}
              className="w-full border-[#1e4164] rounded-xl py-4 
              px-2 flex justify-center items-center border-2 bg-white"
            >
              <Text className="text-[#1e4164] font-bold">Clear the fields</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default addapartment;

const styles = StyleSheet.create({});
