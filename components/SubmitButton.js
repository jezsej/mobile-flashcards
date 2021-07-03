import React from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'
import { black, gray, white } from '../utils/colors'

export default function SubmitButton({
    children,
    onPress,
    btnStyle = {},
    txtStyle = {},
    disabled = false
}) {
  
    const disabledButtonText = disabled ? styles.btnTextDisabled : {};
    return (
        <View style={styles.btnContainer}>
            <TouchableOpacity
                style={[styles.btn, btnStyle, disabled ? styles.btnDisabled : null]}
                onPress={onPress}
                disabled={disabled}
            >
                <Text
                    style={[
                        styles.btnText,
                        txtStyle,
                        disabled ? styles.btnTextDisabled : {},
                        disabledButtonText
                    ]}
                >
                    {children}
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        alignItems: 'center',
        marginBottom: 20
    },
    btn: {
        width: 200,
        height: 50,
        backgroundColor: black,
        justifyContent: `center`,
        alignItems: `center`,
        borderWidth: 1,
        borderColor: '#999'
    },
    btnDisabled: {
        backgroundColor: gray,
        borderColor: gray
    },
    btnText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: black
    },
    btnTextDisabled: {
        color: white
    }
});
