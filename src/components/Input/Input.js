import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons as Icon } from '@expo/vector-icons';

import Colors from 'Colors';
import Typo from 'Typo';
import { validate } from 'Validator';

import themes from './themes';
import InputIcon from '../InputIcon/InputIcon'

/* Validation Methods */
const ON_BLUR = "onBlur";
const ON_CHANGE = "onChange";

class Input extends Component {
	state = {
    selected: false,
    state: 'default',
    value: '',
  }

  /* only for demo purpuses */
  componentDidMount() {
    this.props.disabled && this.setState({ state: 'disabled' });
    this.props.state && this.setState({ state: this.props.state });
  }
  /* end */

	getValue = () => {
		return this.state.value;
  }
  
  validateInput = () => {
    let { state, message } = validate(value, this.props.conditions);
    this.setState(state => {
      state.state = state;
      state.message = message;
      return state;
    });
  }

	_onChangeText = value => {
		if (this.props.validationMethod === ON_CHANGE) this.validateInput();		
		this.setState({ value });
	}

	_onFocus = value => {
		this.setState({ selected: true });
		if (this.props.onFocus) this.props.onFocus(value);
	}

	_onBlur= value => {		
		if (this.props.validationMethod === ON_BLUR) this.validateInput();
		this.setState({ selected: false });
		if (this.props.onBlur) this.props.onBlur(value);
	}	

	render() {
    let state = this.props.disabled ? 'disabled' : this.state.state;
    
    let stateStyle;
    let rightIconProps;
    let color = this.props.color;
    
    switch(state) {
      case 'warning': 
        stateStyle = themes.warning;
        color = Colors.warning;
        rightIconProps = { name: 'md-warning', color };
        break;
      case 'error': 
        stateStyle = themes.error;
        color = Colors.error;
        rightIconProps = { name: 'md-close', color };
        break;
      case 'disabled': 
        stateStyle = themes.default;
        color = Colors.lightishGray;
        break;
      case 'done': {
        rightIconProps = { name: 'md-checkmark', color: Colors.success };
      }
      default : 
        stateStyle = themes.default;
        color = Colors.gray;
    }

		let rightIcon = <InputIcon {...rightIconProps} />
		
		let leftIcon = this.props.icon || this.props.iconName && <InputIcon name={this.props.iconName} color={color} />

		let errorMessage = (
			<Text style={[Typo.small, { color: color }]}>
				{this.props.errorMessage}
			</Text>
		);

		return (			
			<View>
				<View style={[styles.inputContainer, themes.default, themes.underline, stateStyle]}>
					{leftIcon}
					<TextInput 
            {...this.props}
            style={[styles.textInput, { color: color }]}
            underlineColorAndroid="transparent"
            placeholderTextColor={color.concat("AA")}
            selectionColor={color}
            tintColor={color}
            editable={!this.props.disabled}
						onChangeText={this._onChangeText}
						onFocus={this._onFocus}
            onBlur={this._onBlur}
            value={this.state.value}
					/>
					{rightIcon}
				</View>
				
				{ this.props.warning ? errorMessage : null }
			</View>
		);
	}
}

Input.propTypes = {
  validationMethod: PropTypes.oneOf(['onBlur', 'onChange']),
  icon: PropTypes.element,
  iconName: PropTypes.string,
}

Input.defaultProps = {
  validationMethod: 'onBlur',
}

const styles = StyleSheet.create({	
	inputContainer: {
    width: '80%',
    height: 40,
    marginHorizontal: 10,
		flexDirection: 'row',
	},	

	textInput: {
    flex: 1,
    fontSize: 16,
    marginRight: 2,
    alignSelf: 'center',
	}
});

export default Input;