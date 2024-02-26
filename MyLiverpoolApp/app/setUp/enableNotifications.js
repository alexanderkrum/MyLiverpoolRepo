import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import SetUpButton from '../../components/setUpButtonComponent';

function EnableNotifications({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.logo}>
                <Image source={require('../../assets/images/notifications-circle.png')}/>
            </View>
            <View style={styles.text}>
                <View>
                    <Text style={styles.textTitle}>Enable Notifications</Text>
                </View>
                <View>
                    <Text style={styles.textText}>
                    Allow The LCC App to notify you{'\n'}
                    on new events, bin collection{'\n'}
                    days and other important{'\n'}
                    information
                    </Text>
                </View>
                <View style={styles.button}>
                    <SetUpButton buttonName={'Enable'}/>
                </View>
            </View>
            <View style={styles.later}>
                <Text 
                style={styles.laterText}
                onPress={() => navigation.navigate('homePage')}
                >
                    Enable Later
                </Text>
            </View>
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        flex: 1,
        justifyContent: 'flex-end',
        //backgroundColor: 'pink',
    },
    text: {
        flex: 1,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        //backgroundColor: 'yellow',
    },
    textTitle: {
        fontWeight: '900',
        fontSize: RPH(3),
        color: '#2E3B43',
    },
    textText: {
        textAlign: 'center',
        fontWeight: '600',
        fontSize: RPH(2),
        lineHeight: RPH(3),
        color: '#2E3B43',
    },
    button: {
        paddingTop: RPH(1.5)
    },
    later: {
        flex: 0.7,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingBottom: RPH(6),
        paddingRight: RPW(10),
        //backgroundColor: 'red',
    },
    laterText: {
        fontWeight: '700',
        fontSize: RPH(2),
        color: '#5c348B',
        textDecorationLine: 'underline'
    }
});

export default EnableNotifications;