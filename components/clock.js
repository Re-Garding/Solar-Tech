// """clock component for react js"""

import React, { useState, useEffect} from 'react';
import { Text, View } from 'react-native';

function Clock() {
    const [clockState, setClockState] = useState();


    useEffect(() => {
        setInterval(() => {
            const date = new Date();
            setClockState(date.toLocaleTimeString());
        }, 1000);
    }, []);

    return (
        <View style={{flexDirection: 'row'}}>
            <Text style={{ fontSize: 48, marginTop: -250}}>{clockState}</Text>
            <Text>     </Text>
        </View>
        )
}

export default Clock