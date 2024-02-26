import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import * as Location from 'expo-location';
import SetUpButton from '../../components/setUpButtonComponent';

function SetLocation({ navigation }) {

    // User location coords are stored in 'location' 
    const [location, setLocation] = useState(null);

    const allowLocation = async () => {
        
                let {status} = await Location.requestForegroundPermissionsAsync()

                if (status === 'granted') {
                    console.log('Permission granted!');
                    const loc = await Location.getCurrentPositionAsync();
                    console.log(loc);
                    setLocation(loc);
                } else {
                    console.log('Permission not granted :(')
                }
            
    };

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleTxt}>Access Location{'\n'}Specific Features</Text>
            </View>
            <View style={styles.text}>
                <Text style={styles.textTxt}>Add your address to access{'\n'}
                    address specific features{'\n'}
                    including local events and{'\n'}
                    rubbish collection dates
                </Text>
            </View>
            <View style={styles.addLocation}>
                <View>
                    <TouchableOpacity 
                    style={styles.addLocationButton} 
                    onPress={allowLocation} 
                    onPressIn={() => navigation.navigate('enableNotifications')}
                    >
                        {/*<Text style={styles.buttonText}>Share</Text>*/}
                        <SetUpButton buttonName={'Share'} />
                    </TouchableOpacity>
                </View>
                {/*<Text>{JSON.stringify(location)}</Text>*/}
            </View>
            <View style={styles.addLater}>
                <Text style={styles.addLaterText} 
                onPress={() => navigation.navigate('enableNotifications')}> 
                    Add Later
                </Text>
            </View>
        </View>
    );
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
        alignItems: 'center'
    },
    title: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: RPH(5)
        //backgroundColor: 'yellow',
    },
    titleTxt: {
        fontSize: RPH(4),
        textAlign: 'center',
        fontWeight: '900',
        color: '#2E3B43',
        lineHeight: RPH(6),
        top: 30
    },
    text: {
        flex: 1,
        marginTop: 10,
        justifyContent: 'flex-start',
        //backgroundColor: 'pink',
    },
    textTxt: {
        fontWeight: '600',
        fontSize: RPH(2.5),
        lineHeight: RPH(4),
        textAlign: 'center',
        color: '#2E3B43'
    },
    addLocation: {
        flex: 2,
    },
    buttonText: {
        
    },
    addLater: {
        flex: 0.6,
        //backgroundColor: 'red',
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        width: '100%',
        paddingBottom: RPH(6),
        paddingRight: RPW(10),
    }, 
    addLaterText: {
        fontWeight: '700',
        fontSize: RPH(2),
        color: '#5c348B',
        textDecorationLine: 'underline'
    }
});

export default SetLocation;