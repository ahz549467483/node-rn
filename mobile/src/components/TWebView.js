import React, { Component } from 'react';
import {
    StyleSheet,
    WebView,
    View,
    Text
} from 'react-native';

class TWebView extends Component {
    constructor(props){
        super(props);
        this.state = {
            url:this.props.isNearBy,
            isError:false,
            isNearBy: this.props.isNearBy
        }
        this._showError = this._showError.bind(this);
    }
    _showError(){
        this.setState({
            isError:true
        })
    }
    render() {
        let { url, isError } = this.state;
        console.log(url)
        return (
            <View style={styles.container}>
                {
                    isError?
                        <View style={styles.container}>
                            <Text>网络错误请刷新</Text>
                        </View>
                        :
                        <WebView 
                            style={styles.container}
                            onError = {this._showError}
                            startInLoadingState={true}
                            source={{uri:url}}
                        />
                }
            </View>
            
        )
    }
}
export default TWebView;
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