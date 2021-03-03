import { StyleSheet } from 'react-native';
import constants from '../../../constants/constants';


const styles = StyleSheet.create({
    cardWrapper: {
        width: '100%',
        height: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: constants.colorPalette.rnPureWhite,
        borderWidth: 3,
        borderColor: constants.colorPalette.rnBlue1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 14,
    }
});

export default styles;