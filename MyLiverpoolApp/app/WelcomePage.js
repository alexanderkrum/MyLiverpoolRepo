import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';

function WelcomeApp ({ navigation }) {
    return (
        <View style={styles.background}> 
            <Image source={require('../assets/welcomeBackground.png')} style={styles.image}/>
            <View style={styles.logo}>
                <Image source={require('../assets/logo.png')}/>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity  
                    onPress={() => navigation.navigate('selectLanguage')}
                >
                    <Text style={styles.start}>Get Started →</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#5C348B',
        position: 'absolute',
        bottom: 0,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    image: {
        position: 'absolute',
        width: '100%',
        height: '100%',
    },
    logo: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
        top: 50
    },
    btn: {
        flex: 1,
    },
    start: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 600,       
    }
})

export default WelcomeApp;