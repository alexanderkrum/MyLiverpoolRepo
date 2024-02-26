import {View, Text, StyleSheet, Dimensions} from 'react-native'

function SetUpButton({buttonName}) {
    return (
        <View style={styles.container}>
            <Text style={styles.containerText}>{buttonName}</Text>
        </View>
    )

}

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const RPH = percentage => {
    return (percentage / 100) * screenHeight;
};
const RPW = percentage => {
    return (percentage / 100) * screenWidth;
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#5C348B',
        height: RPH(6),
        width: RPW(40),
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerText: {
        color: '#FFFFFF',
        fontSize: RPH(2),
        fontWeight: '600'
    }
})

export default SetUpButton;