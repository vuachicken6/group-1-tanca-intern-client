import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,TouchableOpacity } from 'react-native';

import {navigate} from '../../../utils/navigate';
const DATA = [
    {
        id: 'CA_VAN_PHONG',
        title: 'Ca Văn Phòng',
        timeStartHour: '08',
        timeStartMinute: '30',
        timeEndHour: '17',
        timeEndMinute: '30',
        branch: 'VP Công ty',
        uptime: [1, 1, 1, 1, 1, 0]
    },
    {
        id: 'CA_VAN_PHONG1',
        title: 'Ca Văn Phòng',
        timeStartHour: '08',
        timeStartMinute: '30',
        timeEndHour: '17',
        timeEndMinute: '30',
        branch: 'VP Công ty',
        uptime: [1, 1, 1, 1, 1, 0]

    },
    {
        id: 'CA_VAN_PHONG2',
        title: 'Ca Văn Phòng',
        timeStartHour: '08',
        timeStartMinute: '30',
        timeEndHour: '17',
        timeEndMinute: '30',
        branch: 'VP Công ty',
        uptime: [1, 1, 1, 1, 1, 0]
    },
];

function Item({data}) {
    var time=`${data.timeStartHour}:${data.timeStartMinute}-${data.timeEndHour}:${data.timeEndMinute}`
    return (
        <TouchableOpacity style={styles.txtContent}
        onPress={()=> navigate('ShiftDetail',data)} >
            <Text >{data.title}</Text>
            <Text>{time}</Text>
        </TouchableOpacity>
    );
}

export default function Shift() {
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Item data={item}/>}
                keyExtractor={item => item.id}
                style={{borderBottomWidth:1,paddingLeft:10,}}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    txtContent: {
        padding: 12,
        fontSize: 16,
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});