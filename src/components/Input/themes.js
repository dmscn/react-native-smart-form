import React from 'react'
import { StyleSheet } from 'react-native'

import Colors from 'Colors'

const themes = {
  default: {
    backgroundColor: Colors.smoke,
  },

  underline: {
    borderWidth: 0,
    borderBottomWidth: 2,
    borderBottomColor: Colors.lightishGray,
  },

  warning: {
    borderBottomColor: Colors.warning,
  },

  error: {
    borderBottomColor: Colors.error,
  },
};

export default themes;