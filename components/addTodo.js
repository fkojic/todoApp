import React, { useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';


export default function AddToDo({ submitHandler }) {
    const [text, settext] = useState('')
    const changeHandler = (val) => {
        settext(val)
    }

    return (
        <View style={styles.header}>
            <TextInput
                style={styles.input}
                placeholder='new todo...'
                onChangeText={(val) => changeHandler(val)}
            />
            <Button 
                color='coral'
                title='Add Todo'
                onPress={() => submitHandler(text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input : {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    title : {
        textAlign: 'center',
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    }
});