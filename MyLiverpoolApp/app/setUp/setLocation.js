import {View, Text, StyleSheet, Dimensions} from 'react-native';

function SetLocation() {
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
                <Text>Add your location</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SetLocation;