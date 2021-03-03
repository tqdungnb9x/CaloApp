import React, { useState } from "react";
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, StatusBar } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import calofull from "../data/calofull"
import _ from 'lodash'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


function Item({ item, index, onPress }) {
    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.tableRow, backgroundColor: { index } % 2 == 1 ? "#F0FBFC" : "white" }}>
            <Text style={{...styles.columnRowTxt} }>{item.STT}</Text>
            <Text style={{ ...styles.columnRowTxt, fontWeight: "bold" }}>{item.Name}</Text>
            <Text style={{...styles.columnRowTxt}}>{item.Type}</Text>
            <Text style={{...styles.columnRowTxt}}>{item.Calo}</Text>
        </TouchableOpacity>
    );
}

export default FoodList = ({ navigation }) => {

    const [columns, setColumns] = useState([
        "STT",
        "Tên",
        "Phân loại",
        "Calo",
    ])
    const [direction, setDirection] = useState(null)
    const [selectedColumn, setSelectedColumn] = useState(null)
    const [DATA, setDATA] = useState(calofull())

    const sortTable = (column) => {
        const newDirection = direction === "desc" ? "asc" : "desc"
        const sortedData = _.orderBy(DATA, [column], [newDirection])
        setSelectedColumn(column)
        setDirection(newDirection)
        setDATA(sortedData)
    }

    const tableHeader = () => (
        <View style={styles.tableHeader}>
            {
                columns.map((column, index) => {
                    {
                        return (
                            <TouchableOpacity
                                key={index}
                                style={styles.columnHeader}
                                onPress={() => sortTable(column)}>
                                <Text style={styles.columnHeaderTxt}>{column + " "}
                                    {selectedColumn === column && <MaterialCommunityIcons
                                        name={direction === "desc" ? "arrow-down-drop-circle" : "arrow-up-drop-circle"}
                                    />
                                    }
                                </Text>
                            </TouchableOpacity>
                        )
                    }
                })
            }
        </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                keyExtractor={(item, index) => index + ""}
                ListHeaderComponent={tableHeader}
                stickyHeaderIndices={[0]}
                renderItem={({ item, index }) => {
                    return (
                        <Item
                            item={item}
                            index={index}
                            onPress={() =>
                                navigation.navigate("FoodDetails", {
                                    id: item.STT,
                                    otherParams: {
                                        Type: item.Type,
                                        Name: item.Name,
                                        Unit: item.Unit,
                                        Calo: item.Calo,
                                        Protein: item.Protein,
                                        Fat: item.Fat,
                                        Carb: item.Carb,
                                    },
                                })} />
                    );

                }}
            />
            <StatusBar style="auto" />

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tableHeader: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "#37C2D0",
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        height: 50
    },
    tableRow: {
        flexDirection: "row",
        height: 80,
        alignItems: "center",
    },
    columnHeader: {
        width: "25%",
        justifyContent: "center",
        alignItems: "center"
    },
    columnHeaderTxt: {
        color: "white",
        fontWeight: "bold",
    },
    columnRowTxt: {
        width: "25%",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center"
        // paddingLeft: 5,
        // paddingRight: 5
    }
});

