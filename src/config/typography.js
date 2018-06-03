/**
 * @providesModule Typo
 */

import { StyleSheet } from 'react-native';

import Colors from 'Colors';

const ultraLarge = 40;
const largeText = 20;
const mediumText = 16;
const smallText = 13;

const textStyles = StyleSheet.create({
  ultraLarge: {
    fontSize: ultraLarge,
    color: Colors.charcoal,
  },
  large: {
    fontSize: largeText,
    color: Colors.charcoal,
  },
  medium: {
    fontSize: mediumText,
    color: Colors.charcoal,
  },
  small: {
    fontSize: smallText,
    color: Colors.charcoal,
  },


  ultraLargeLight: {
    fontSize: ultraLarge,
    color: Colors.white,
  },
  largeLight: {
    fontSize: largeText,
    color: Colors.white,
  },
  mediumLight: {
    fontSize: mediumText,
    color: Colors.white,
  },
  smallLight: {
    fontSize: smallText,
    color: Colors.white,
  },


  ultraLargeMuted: {
    fontSize: ultraLarge,
    color: Colors.gray,
  },
  largeMuted: {
    fontSize: largeText,
    color: Colors.gray,
  },
  mediumMuted: {
    fontSize: mediumText,
    color: Colors.gray,
  },
  smallMuted: {
    fontSize: smallText,
    color: Colors.gray,
  },


  ultraLargeBold: {
    fontSize: ultraLarge,
    fontWeight: 'bold',
    color: Colors.charcoal,
  },
  largeBold: {
    fontSize: largeText,
    fontWeight: 'bold',
    color: Colors.charcoal,
  },
  mediumBold: {
    fontSize: mediumText,
    fontWeight: 'bold',
    color: Colors.charcoal,
  },
  smallBold: {
    fontSize: smallText,
    fontWeight: 'bold',
    color: Colors.charcoal,
  },


  ultraLargeBoldLight: {
    fontSize: ultraLarge,
    fontWeight: 'bold',
    color: Colors.white,
  },
  largeBoldLight: {
    fontSize: largeText,
    fontWeight: 'bold',
    color: Colors.white,
  },
  mediumBoldLight: {
    fontSize: mediumText,
    fontWeight: 'bold',
    color: Colors.white,
  },
  smallBoldLight: {
    fontSize: smallText,
    fontWeight: 'bold',
    color: Colors.white,
  },


  ultraLargeBoldMuted: {
    fontSize: ultraLarge,
    fontWeight: 'bold',
    color: Colors.gray,
  },
  largeBoldMuted: {
    fontSize: largeText,
    fontWeight: 'bold',
    color: Colors.gray,
  },
  mediumBoldMuted: {
    fontSize: mediumText,
    fontWeight: 'bold',
    color: Colors.gray,
  },
  smallBoldMuted: {
    fontSize: smallText,
    fontWeight: 'bold',
    color: Colors.gray,
  },
});

export default textStyles;