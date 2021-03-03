import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";

import FoodDetails from '../component/FoodDetails'
import FoodList from '../component/FoodList'

const Stack = createStackNavigator();


export default ScreenB = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="FoodList"
                component={FoodList}
                options={{
                    headerTitle: "Thức ăn",
                    // headerStyle: { backgroundColor: "#2c6fb2" },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                        textAlign: 'center',
                        alignItems: 'center'
                    },
                }}
            />
            <Stack.Screen
                name="FoodDetails"
                component={FoodDetails}
                options={{
                    headerTitle: "Chi tiết",
                    headerStyle: { backgroundColor: "#2c6fb2" },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        fontSize: 20,
                        textAlign: 'center',
                        alignItems: 'center'
                    },
                    headerRight: () => <View />,
                }}
            />
        </Stack.Navigator>
    );
};

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

