import React from 'react';
import { View } from 'react-native';
import ButtonCustom from '../../components/buttonCustom/ButtonCustom';
import constants from '../../constants/constants';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const GameHeader = ({ navigation }) => {
	return (
		<View style={{ marginTop: 90 }}>
			<ButtonCustom
				colorTheme="lightWarning"
				size="small"
				onPressHandler={() => {
					navigation.goBack();
				}}
			>
				<MaterialCommunityIcons name="home" size={18} color={constants.colorPalette.rnSet3.red} />
			</ButtonCustom>
		</View>
	);
};

export default GameHeader;
