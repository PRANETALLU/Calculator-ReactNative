import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Buttons(props) {
    const changeVal = () => {
        if(props.value == "C") {
            props.setValue("");
        }
        else {
            props.setValue(prevValue => prevValue + props.value); 
        }
    }
    return (
        <>
        {props.value != "0" && (<TouchableOpacity
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
            onPress={changeVal}
        >
            <Text style={{color: "white"}}>{props.value}</Text>
        </TouchableOpacity>)}
         
        {props.value == "0" && (<TouchableOpacity
            style={{
                backgroundColor: props.color,
                
                width: 70,     
                height: 30,
                
                borderRadius: 50, 
                
                justifyContent: "center",
                alignItems: "center",

                marginRight: 10,
                marginBottom: 10
            }}
            onPress={changeVal}
        >
            <Text style={{color: "white"}}>{props.value}</Text>
        </TouchableOpacity>)}
        </>
    );
}