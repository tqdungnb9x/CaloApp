import React, { Component, useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";


export default function FoodDetails({ route, navigation }) {
  const { id, otherParams } = route.params;
  return (
      <View style={{ flex: 1, backgroundColor: "white", paddingTop: 16 }}>
          <View style={styles.content}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>STT:</Text>
              <Text style={{ fontSize: 20, textAlign: "right" }}>{id}</Text>
          </View>
          <View style={styles.content}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Phân loại:</Text>
              <Text style={{ fontSize: 20, textAlign: "right" }}>
                  {otherParams.Type}
              </Text>
          </View>
          <View style={styles.content}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Tên:</Text>
              <Text style={{ fontSize: 20, textAlign: "right" }}>
                  {otherParams.Name}
              </Text>
          </View>
          <View style={styles.content}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Đơn vị:</Text>
              <Text style={{ fontSize: 20, textAlign: "right" }}>
                  {otherParams.Unit}
              </Text>
          </View>
          <View style={styles.content}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Calo:</Text>
              <Text style={{ fontSize: 20, textAlign: "right" }}>
                  {otherParams.Calo}
              </Text>
          </View>
          <View style={styles.content}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Đạm:</Text>
              <Text style={{ fontSize: 20, textAlign: "right" }}>
                  {otherParams.Protein}
              </Text>
          </View>
          <View style={styles.content}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Chất béo:</Text>
              <Text style={{ fontSize: 20, textAlign: "right" }}>
                  {otherParams.Fat}
              </Text>
          </View>
          <View style={styles.content}>
              <Text style={{ fontWeight: "bold", fontSize: 20 }}>Tinh bột:</Text>
              <Text style={{ fontSize: 20, textAlign: "right" }}>
                  {otherParams.Carb}
              </Text>
          </View>

      </View>
  );
}
const styles = StyleSheet.create({
  container: {
      flexGrow: 1,
      paddingLeft: 8,
      paddingRight: 8,
      paddingTop: 10,
      paddingBottom: 20,
  },
  content: {
      flexDirection: "row",
      justifyContent: "space-between",
      margin: 8,
      elevation: 8,
  },
  description: {
      fontWeight: 'bold',
      fontSize: 20,
      textAlign: 'center',
      alignItems: 'center'
  },
  containerItem: {
      flexDirection: "row",
      padding: 8,
      marginLeft: 8,
      marginRight: 8,
      borderRadius: 4,
      backgroundColor: "#FFF",
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 4,
      marginBottom: 16,
      borderLeftColor: "green",
      borderLeftWidth: 4,
  },
  date: {
      flex: 1,
      fontSize: 14,
      color: "grey",
      marginBottom: 4,
      textAlign: 'center',

  },
});
