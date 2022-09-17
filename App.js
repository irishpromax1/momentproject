

import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
} from 'react-native';

import SignIn from './src/screens/auth/SignIn';

const iOS_CLIENT_ID = '136858494655-dacp7o02pu8gvpa1ft730ro7ltq31mid.apps.googleusercontent.com'


const App = () => {

  useEffect(() => {

  },[])
 
    return ( //JSX = Javascript XML
    <SafeAreaView> 
      <SignIn/>
    </SafeAreaView>
    );
};



//const styles = StyleSheet.create({
//  themeHeader: {margin: 16, fontSize: 16, backgroundColor:}
//})
export default App;
