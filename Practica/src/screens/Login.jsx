import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import LoginContent from '../components/Login/loginContent';
import LoginHeader from '../components/Login/LoginHeader';

export default function Login(){
    return (
        <View>
            <LoginHeader />
            <LoginContent />
            
        </View>
            
        );
}