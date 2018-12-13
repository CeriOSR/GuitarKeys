import React, { Component } from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import { openChordsModal } from '../actions';

//we are importing connect because we are using an action to handle openChordModals

class ViewChordsButton extends Component {
    handleOpenModal = () => {
        this.props.openChordsModal();                // call openChordsModal
    };
    render() {
        return (
            <View style={this.props.style}>
                <Button
                    raised
                    icon={{ name: 'library-music'}}
                    title="View Transposed Chords"
                    backgroundColor="#2196F3"
                    // onPress={() => this.props.openChordsModal}   //this doesnt work
                    onPress={this.props.handleOpenModal}
                />
            </View>
        );
    }
}

//were not gonna pass any state to props so no mapToStateProps, but we have to pass openChordsModal
export default connect(null, { openChordsModal })(ViewChordsButton);