import React from 'react'
import { StyleSheet } from 'react-native'

import Colors from 'Colors'

const themes = {
	default: {
		backgroundColor: Colors.white.concat('44'),
		borderWidth: 0,
    borderBottomWidth: 2,
    borderRadius: 2,
		borderBottomColor: Colors.lightgray,
    overflow: 'hidden',
	},

	warning: {
		borderBottomColor: Colors.warning,
	},

	error: {
		borderBottomColor: Colors.error,
	},
};

export default themes;