import React, { Component } from 'react';
import {
    View,
    Platform,
    StyleSheet,
    Text
} from 'react-native';

class Weather extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>天气</Text>
            </View>
        )
    }
}
export default Weather;
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
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