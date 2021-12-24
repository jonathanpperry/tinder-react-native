import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, SafeAreaView, TouchableOpacity, Image } from "react-native";
import useAuth from "../hooks/useAuth";
import tw from "tailwind-rn";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";
import Swiper from "react-native-deck-swiper";

const DUMMY_DATA = [
  {
    firstName: "Elon",
    lastName: "Musk",
    occupation: "Software Developer",
    photoURL:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
    age: 40,
    id: 111,
  },
  {
    firstName: "Elon",
    lastName: "Musk",
    occupation: "Software Developer",
    photoURL:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
    age: 40,
    id: 112,
  },
  {
    firstName: "Elon",
    lastName: "Musk",
    occupation: "Software Developer",
    photoURL:
      "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTc5OTk2ODUyMTMxNzM0ODcy/gettyimages-1229892983-square.jpg",
    age: 40,
    id: 113,
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();

  return (
    <SafeAreaView style={tw("flex-1")}>
      {/* Header */}
      <View style={tw("flex-row items-center justify-between px-5")}>
        <TouchableOpacity onPress={logout}>
          <Image
            style={tw("h-10 w-10 rounded-full")}
            source={{ uri: user.photoURL }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={tw("h-14 w-14")} source={require("../logo.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Chat")}>
          <Ionicons
            name="chatbubbles-sharp"
            size={30}
            color="#FF5864"
          ></Ionicons>
        </TouchableOpacity>
      </View>
      {/* End of header */}

      {/* Cards */}
      <View style={tw("flex-1 -mt-6")}>
        <Swiper
          containerStyle={{ backgroundColor: "transparent" }}
          cards={DUMMY_DATA}
          renderCard={(card) => (
            <View
              key={card.id}
              style={tw("relative bg-white h-3/4 rounded-xl")}
            >
              <Image
                style={tw("absolute top-0 h-full w-full rounded-xl")}
                source={{ uri: card.photoURL }}
              />
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
