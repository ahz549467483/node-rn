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
                <TWebView isNearBy={'http://localhost:63342/findwc/mobile/src/html/nearby.html?_ijt=1p941asef6mnnt363jr2k5hj0g'} />
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