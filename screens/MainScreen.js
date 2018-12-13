import React, { Component } from 'react';
import { View, Platform, Image } from 'react-native'; 
import { Divider } from 'react-native-elements';
import icon from '../assets/icons/pure-icon.png';
import { STATUS_BAR_HEIGHT, SCREEN_WIDTH } from '../constants';
import KeysButtons from '../components/KeysButtons.js';
import CapoButtons from '../components/CapoButtons.js';
import CapoKey from '../components/CapoKey';
import ViewChordsButton from '../components/ViewChordsButton';
import ChordsModal from '../modals/ChordsModal'

//caching image
import Expo from 'expo';
// function cacheImages(image) {
//     //loop through images with mapping
//     return image.map(image => {
//         if (typeof image === 'string') return Image.prefetch(image);
//         //else download image
//         return Expo.Asset.fromModule(image).downloadAsync();
//     });
// }

//new way of writing the above function
const cacheImages = images => images.map( image => {
    //loop through images with mapping, checks the string if its a url, download, 
    if (typeof image === 'string') return Image.prefetch(image);
    //else if its an asset load it from cache
    return Expo.Asset.fromModule(image).downloadAsync();
});


class MainScreen extends Component {
    static navigationOptions = () => ({
        title: 'Guitar Keys',
        headerStyle: {
            //OS specific
            height: Platform.OS === 'android' ? 54 + STATUS_BAR_HEIGHT : 54,
            backgroundColor: '#2196f3'
        },
        headerTitleStyle: {
            //OS specific
            marginTop: Platform.OS === 'android' ? STATUS_BAR_HEIGHT : 0,
            color: 'white'
        },
        //putting image here later inside this empty view
        headerLeft: 
            <Image 
                source={icon}
                style={styles.imageStyles}
            />
    });

    //state used by cache
    state = {
        appIsReady: false
    }

    //override function
    componentwillMount() {
        this._loadAssetsAsync();
    }

    //async function loads images from cache
    async _loadAssetsAsync() {
        const imageAssets = cacheImages([icon]);
        await Promise.all([...imageAssets]);
        this.setState({ appIsReady: true});
    }

    render() {
        //constant to hold the styles
        const { containerStyle, dividerStyle, buttonContainerStyle } = styles;
        return (
            <View styles={{ backgroundColor: 'red' }}>
                <ChordsModal />
                {/* <View style={containerStyle}> */}
                    <KeysButtons />
                <View style={{ alignItems: 'center' }}>
                    <Divider style={dividerStyle}/>
                </View>
                    <CapoButtons />
                <View style={{ alignItems: 'center' }}>
                    <Divider style={dividerStyle}/>
                </View>
                <View>
                    <CapoKey />
                </View>
                <ViewChordsButton style={buttonContainerStyle}/>
                {/* BottomBannerAd */}
            </View>
        );       
    }
}

const styles = {
    imageStyles: {
        marginTop: Platform.OS === 'android' ? 20 : 0,
        marginLeft: 10,
        width: 40,
        height: 40
    },
    containerStyle: {
        flex: 1,
        justifycontent: 'space-around',
        alignItems: 'center'
    },
    dividerStyle: {
        width: '90%',
        backgroundColor: '#2196f3',
    },
    buttonContainerStyle: {
        width: SCREEN_WIDTH,
        justifycontent: 'center',
        alignItems: 'center',
        paddingBottom: 10
    }
};

export default MainScreen;