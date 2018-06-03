/**
 * @providesModule Constants
 */

import { Dimensions, Platform } from 'react-native';
import Colors from 'Colors';

const constants = {
	platform: Platform.OS,
	viewHeight: Dimensions.get('window').height - headerHeight,
	viewPadding: 16,
	defaultSpacer: 10,
	screenHeight: Dimensions.get('window').height,
	screenWidth: Dimensions.get('window').width,
	divider: { backgroundColor: Colors.smoke },
};

export default constants;
