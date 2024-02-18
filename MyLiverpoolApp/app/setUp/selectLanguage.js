import {View, Text, StyleSheet, Dimensions} from 'react-native';
import LanguageButton from '../../components/language/languageComponent';

function SelectLanguage({ navigation }) {

    const lang = [
        {value: 'English \n'},
        {value: 'Arabic \n عربي'},
        {value: 'Vietnamese \nTiếng Việt'},
        {value: 'Farsi \n فارسی'},
        {value: 'Urdu \n اردو'},
        {value: 'Chinese \n 中国人'}
    ]

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titleTxt}>Select Your{'\n'}Preferred{'\n'}Language</Text>
            </View>
            <View style={styles.text}>
                <Text style={styles.textTxt}>This can always be{'\n'}changed later</Text>
            </View>
            <View style={styles.langContainer}>
                <LanguageButton style={styles.lang} lang={lang} onPress={() => navigation.navigate('setLocation')}/>

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
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        flex: 3.5,
        justifyContent: 'center',
        //backgroundColor: 'yellow',
    },
    titleTxt: {
        fontSize: RPH(5),
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
        //backgroundColor: 'red',
    },
    textTxt: {
        fontStyle: 'italic',
        fontWeight: '600',
        fontSize: RPH(2),
        textAlign: 'center',
        color: '#2E3B43',
    },
    langContainer: {
        flex: 6.5,
        borderColor: '#5C348B',
        borderWidth: 3,
        borderRadius: 20,
        width: RPW(70),
        height: RPH(100),
        marginBottom: 50,
        //backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'center',

    },
    
});

export default SelectLanguage;