import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, ButtonGroup } from 'react-native-elements';
import { connect } from 'react-redux';
import { selectCapo } from '../actions';
import { BUTTON_GROUP_STYLES } from '../constants';

//selectedCapo = index -1
const CAPO_POSITIONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11']

class CapoButtons extends Component {
    render() {
        //get the selected capo
        const { selectedCapo} = this.props.selectedValues;
        const {
            containerStyle,
            buttonStyle,
            selectedTextStyle,
        } = BUTTON_GROUP_STYLES;
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Text h3>Capo</Text>
                <Text h1 style={{marginBottom: 2 }}>{selectedCapo}</Text>
                <ButtonGroup 
                    onPress={index => this.props.selectCapo(index + 1)}
                    selectedIndex={selectedCapo - 1}
                    buttons={CAPO_POSITIONS}
                    containerStyle={containerStyle}
                    buttonStyle={buttonStyle}
                    selectedTextStyle={selectedTextStyle}
                />
            </View>
        );           
    }
}

//dont need the keys coz we are using numbers to label the buttons
const mapStatetoProps = ({ selectedValues }) => ({selectedValues});

export default connect(mapStatetoProps, { selectCapo })( CapoButtons);
 