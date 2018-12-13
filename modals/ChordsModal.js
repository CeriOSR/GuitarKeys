import React, { Component } from 'react';
import { View, Modal } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { closeChordsModal } from '../actions';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../constants';

class ChordsModal extends Component {

    //handle the onPress
    handleCloseChordsModal = () => {
        this.props.closeChordsModal();
    };

    render () {
        const {
            modalStyle,
            containerStyle,
            buttonContainerStyle,
        } = styles;

        return (
            <Modal 
                transparent
                animationType={'slide'}
                visible={this.props.modal.chordsModalIsOpen}
                // onRequestClose={() => this.props.closeChordsModal}
                onRequestClose={this.handleCloseChordsModal}
            >
                <View style={modalStyle}>
                    <View style={containerStyle}>
                        {/* Other Content */}

                        <View style={buttonContainerStyle}>
                            <Button
                                raised
                                icon={{ name: 'close' }}
                                title="Close"
                                backgroundColor="#2196F3"
                                onPress={this.handleCloseChordsModal}
                            />
                        </View>
                    </View>
                </View>

            </Modal>
        );
    }
}

const marginPerc = 0.05;

//styles we gonna add and use later
const styles = {
    modalStyle: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    containerStyle: {
        flex: 1,
        marginTop: SCREEN_HEIGHT * marginPerc,
        marginBottom: SCREEN_HEIGHT * marginPerc,
        marginLeft: SCREEN_WIDTH * marginPerc,
        marginRight: SCREEN_WIDTH * marginPerc,
        backgroundColor: 'white'
    },
    buttonContainerStyle: {
        paddingBottom: 10
    }
};

const mapStateToProps = ({ modal, selectedValues, keys }) => ({ modal, selectedValues, keys });

//we need to pass the state to props and only action we need is the closeChordsModal
export default connect(mapStateToProps, { closeChordsModal })(ChordsModal);