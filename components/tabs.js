import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


function CountScreen() {
    return (
        <View>
            <Text>COUNT!</Text>
        </View>
    );
}

function GraphScreen() {
    return (
        <View>
            <Text>Graphs</Text>
        </View>
    );
}

const Tab = createBottomTabNavigator();

export default function Screens() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Count" component={CountScreen} />
                <Tab.Screen name="Graphs" component={GraphScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}