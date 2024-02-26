import React, {useState} from "react";
import { View, Text, Pressable, StyleSheet, Dimensions } from 'react-native';

function LanguageButton({ lang, onPress}) {

    const [userLang, setUserLang] = useState(null);
    //Selected language is stored in userLang

    return (
        <View>
            {lang.map((item) => {
                function setLanguage() {
                    return setUserLang(item.value)
                }
                
                return (
                    <Pressable 
                    style={
                        item.value === userLang ? styles.selected : styles.unselected
                    }
                    onPress={() => {setLanguage()}}>
                            <Text style={styles.option}> 
                                <Text style={item.value === userLang ? styles.whiteFont : styles.unselected}>
                                    {item.value}
                                </Text>
                            </Text>
                    </Pressable>
                );
            })}
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
    option: {
        height: RPH(8),
        width: RPW(70),
        fontWeight: '600',
        fontSize: RPH(2.4),
        color: '#5C348B',
        marginTop: RPH(1.5),
        paddingTop: RPH(1),
        paddingBottom: RPH(1),
        paddingLeft: RPW(4),
    },
    selected: {
        backgroundColor: '#5C348B',
    },
    whiteFont: {
        color: '#FFFFFF',
    },
});

export default LanguageButton;

