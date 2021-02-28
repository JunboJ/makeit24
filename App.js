import React from 'react';
import MainNavigator from './navigation/mainNavigator';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import { useState } from 'react';

const fetchFonts = () => {
  return Font.loadAsync({
    'segoe-ui': require('./assets/fonts/Segoe-UI.ttf'),
    'segoe-ui-bold': require('./assets/fonts/Segoe-UI-Bold.ttf'),
    'segoe-ui-italic': require('./assets/fonts/Segoe-UI-Italic.ttf'),
    'segoe-ui-bold-italic': require('./assets/fonts/Segoe-UI-Bold-Italic.ttf'),
  })
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  if (!dataLoaded) {
    return (
      <AppLoading startAsync={fetchFonts} onFinish={() => setDataLoaded(true)} onError={(er) => console.log(er)} />
    )
  }

  return (
    <MainNavigator />
  );
}
