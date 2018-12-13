import React, { Component } from 'react';
//dimensions then we can get the SCREEN_WIDTH
import { View } from 'react-native';
//text from react-native-elements can use html props in the tags ie. H1
import { Text, ButtonGroup } from 'react-native-elements';
//connect to state
import { connect } from 'react-redux';
import { selectKeyIndex } from '../actions';
import { BUTTON_GROUP_STYLES } from '../constants';

//dont need this anymore or the dimensions from react-native because weve remade this in constant for reusability
// const SCREEN_WIDTH = Dimensions.get('window').width;

class KeysButtons extends Component {
    render() {
        //using the properties down below...why cant we just go on straight instead of making another variable?
        // const keys = this.props.keys;
        // const selectedKeyIndex = this.props.selectedValues.selectedKeyIndex;
        //short version
        //DRY concept so no more 'styles.'
        const { selectedValues: {selectedKeyIndex}, keys } = this.props;
        //looping through the keys
        const keyButtons = keys.map(key => (key.shortKey ? '/' : [key.key]));
        const {
            containerStyle,
            buttonStyle,
            selectedTextStyle,
        } = BUTTON_GROUP_STYLES;

        return (
            <View style={{ justifyContent: 'center', alignItems: 'center'}}>
                <Text h3>Key</Text>
                <Text h1 style={{ marginBottom: 2}}>{keys[selectedKeyIndex].key}</Text>
                <ButtonGroup 
                    onPress={index => this.props.selectKeyIndex(index)}
                    buttons={keyButtons}
                    selectedIndex={selectedKeyIndex}
                    containerStyle={containerStyle}
                    buttonStyle={buttonStyle}
                    selectedTextStyle={selectedTextStyle}                   
                />
            </View>
        );
    }
}

//returning the keys and selectedValues from keys_reducers and selection_reducer
//by assigning them to the mapStateToProps( keys, selectedValues)
const mapStateToProps = ({ keys, selectedValues }) => ({ keys, selectedValues });
const mapDispatchToProps = {
    selectKeyIndex: (index) => selectKeyIndex(index),
  };
export default connect(mapStateToProps, mapDispatchToProps)(KeysButtons);