import React, {Components} from 'react';
import {
	PixelRatio,
	Dimensions
} from 'react-native';

const _global = {
	size:{
		width : Dimensions.get('window').width,
		height : Dimensions.get('window').height
	},
	pixel:1/PixelRatio.get(),
	get:function(url, successCallBack, errorCallBack){
		fetch(url)
			.then((response) => response.json())
			.then((responseJson) => {
				successCallBack(responseJson);
			})
			.catch((error) => {
				errorCallBack(error);
			});
	}
}
export default _global