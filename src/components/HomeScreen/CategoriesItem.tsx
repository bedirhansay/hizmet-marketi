import React, { FC } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { TCategory } from "utils";
import { useNavigation } from "@react-navigation/native";

type CategoriesItemProps = {
  category: TCategory;
};
export const CategoriesItem: FC<CategoriesItemProps> = ({ category }) => {
  const nav = useNavigation();

  const touchHandler = (id: any) => {
    // @ts-ignore
    nav.navigate("CategoryDetails", { id: id });
  };

  return (
    <TouchableOpacity
      onPress={() => touchHandler(category.id)}
      className="flex items-center space-y-2"
    >
      <Image
        style={{
          backgroundColor: "white",
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        }}
        source={{ uri: category.src }}
        className="w-20 h-20 flex object-contain rounded-xl mt-2 shadow-xl shadow-cyan-400"
      />
      <Text className="text-center">{category.name}</Text>
    </TouchableOpacity>
  );
};
