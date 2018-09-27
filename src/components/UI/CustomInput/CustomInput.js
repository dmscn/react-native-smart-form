import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import AnimatedHideView from 'react-native-animated-hide-view';
import { TextInputMask } from 'react-native-masked-text';
import { mixed } from 'yup';

import Colors from 'Colors';
import Typo from 'Typo';

import themes from './themes';
import InputIcon from './InputIcon';

class CustomInput extends Component {
	state = {
		selected: false,
		state: 'default',
    value: this.props.initialValue || '',
    loading: false,
	};

	getValue = () => {
    if(this.props.type) {
      if(this.props.type == 'datetime') {
        return this._maskedInput.getRawValue().format('YYYY-MM-DD');
      }
      return this._maskedInput.getRawValue();
    }

    return this.state.value;
  };
  
  setValue = value => {
    this.setState({ value });
  }

  disable = () => {
    this.setState({ state: 'disabled' });
  }

  startLoading = () => {
    this.setState({ state: 'disabled', loading: true });
  }

  stopLoading = () => {
    this.setState({ state: 'default', loading: false });
  }

	validateInput = async () => {
		try {
			let value = this.getValue();
			let valid = await this.props.validationSchema.validate(value);
			this.setState({
				state: 'done',
				errorMessage: '',
      });
      return true;
		} catch (err) {
			this.setState({
				state: 'error',
				errorMessage: err.message,
      });
      return false;
		}
	};	

	_onChangeText = value => {
		this.setState({
			value,
			state: 'default',
			errorMessage: '',
		});
		if (this.props.onChange) this.props.onChange(this.getValue());
	};

	_onFocus = value => {
		this.setState({ selected: true });
		if (this.props.onFocus) this.props.onFocus(value);
	};

	_onBlur = value => {    
		this.setState({ selected: false });
		this.validateInput();
		if (this.props.onBlur) this.props.onBlur(value);
  };

	render() {
		let state = this.props.disabled ? 'disabled' : this.state.state;

		let stateStyle;
		let rightIconProps;
		let color = this.props.color;

		switch (state) {
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
				color = Colors.lightgray;
				break;
			case 'done': {
				rightIconProps = { name: 'md-checkmark', color: Colors.success };
			}
      default:
				stateStyle = themes.default;
				color = this.props.color || Colors.lightgray;
		}

		let rightIcon = this.state.loading ? 
    ( 
      <ActivityIndicator color={Colors.lightgray} />
    ) : (
      <InputIcon {...rightIconProps} />
    );

		let leftIcon =
			this.props.icon || (this.props.iconName && <InputIcon name={this.props.iconName} color={color} />);

		let errorMessage = (
			<Text style={[Typo.small, styles.errorMessage, { color: color }]}>{this.state.errorMessage}</Text>
    );
    
    let input = this.props.type ?
    ( 
      <TextInputMask
        ref={ref => this._maskedInput = ref}
        {...this.props}
        style={[styles.textInput, { color: color }]}
        underlineColorAndroid="transparent"
        placeholderTextColor={color.length > 7 ? color.slice(0, 7).concat('AA') : color.concat('AA')}
        selectionColor={color.length > 7 ? color.slice(0, 7).concat('88') : color.concat('88')}
        tintColor={color}
        editable={!this.props.disabled}
        onChangeText={this._onChangeText}
        onFocus={this._onFocus}
        onBlur={this._onBlur}
        value={this.state.value}
      />
    ) : (
        <TextInput
          {...this.props}
          style={[styles.textInput, { color: color }]}
          underlineColorAndroid="transparent"
          placeholderTextColor={color.length > 7 ? color.slice(0, 7).concat('AA') : color.concat('AA')}
          selectionColor={color.length > 7 ? color.slice(0, 7).concat('88') : color.concat('88')}
          tintColor={color}
          editable={!this.props.disabled}
          onChangeText={this._onChangeText}
          onFocus={this._onFocus}
          onBlur={this._onBlur}
          value={this.state.value}
        />
    );

		return (
      <View style={[styles.container, this.props.containerStyle]}>
				<AnimatedHideView visible={this.state.value.length > 0} unmountOnHide>
          <Text style={[Typo.small, styles.label, { color: color }]}>{this.props.placeholder}:</Text>
				</AnimatedHideView>
				<View
					style={[
						styles.inputContainer,
						themes.default,
						stateStyle,
						{ borderBottomWidth: this.state.selected ? 2.6 : 2, borderBottomColor: color },
            this.props.backgroundColor && { backgroundColor: this.props.backgroundColor },
					]}
				>
					{leftIcon}
					{input}
					{rightIconProps ? rightIcon : null}
				</View>

				{this.state.errorMessage ? errorMessage : null}
			</View>
		);
	}
}

CustomInput.propTypes = {
  validationMethod: PropTypes.oneOf(['onBlur', 'onChange']),
  icon: PropTypes.element,
  iconName: PropTypes.string,
  validationSchema: PropTypes.object,
}

CustomInput.defaultProps = {
  validationMethod: 'onBlur',
  initialValue: '',
  validationSchema: mixed().notRequired(),
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },

	inputContainer: {
    minHeight: 40,
    marginVertical: 5,
    paddingVertical: 5,
    paddingHorizontal: 5,
		flexDirection: 'row',
  },
  
  label: {
    marginTop: 5,
    marginHorizontal: 5,
  },

	textInput: {
		flex: 1,
		fontSize: 16,
    alignSelf: 'center',
  },
  
  errorMessage: {
    marginBottom: 5,
    marginHorizontal: 5,
  },
});

export default CustomInput;
