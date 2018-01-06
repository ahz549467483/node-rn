import React, { Component } from 'react';
import {
    View,
    Platform,
    StyleSheet,
    Text,
    WebView
} from 'react-native';
import TWebView from '../../components/TWebView';
const nearByURL = '../../html/nearby.html';
class Toilet extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TWebView isNearBy={nearByURL} />
            </View>
        )
    }
}
export default Toilet;
const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});