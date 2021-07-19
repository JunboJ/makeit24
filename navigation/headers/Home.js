import React, { useEffect, useCallback } from 'react';
import { View, StyleSheet } from 'react-native';
import constants from '../../constants/constants';

import ButtonCustom from '../../components/buttonCustom/ButtonCustom';

const HomeHeader = ({ navigation }) => {
	const onLoginPressedHandler = useCallback(() => {
		navigation.navigate({ routeName: 'Login' });
	}, []);

	return (
		<View style={{ marginTop: 90 }}>
			<ButtonCustom
				size="small"
				title="Login"
				colorTheme="lightWarning"
				textColor={constants.colorPalette.rnSet3.red}
				onPressHandler={onLoginPressedHandler}
			/>
		</View>
	);
};

export default HomeHeader;
