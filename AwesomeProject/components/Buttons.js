import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Buttons(props) {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: props.color,
                
                width: 30,     
                height: 30,
                
                borderRadius: 50, 
                
                justifyContent: "center",
                alignItems: "center",

                marginRight: 10,
                marginBottom: 10
            }}
        >
            <Text style={{color: "white"}}>{props.value}</Text>
        </TouchableOpacity>
    );
}