import React from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const{ width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    text: {
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 26,
        lineHeight: 36,
        textAlign: 'center',
    },
    title: {
        fontStyle: 'normal',
        fontSize: 18,
        fontWeight: "400",
        lineHeight: 24,
        textAlign: 'center',    
    },
    button: {
        fontStyle: 'normal',
        fontSize: 18,
        fontWeight: "400",
        lineHeight: 24,
        textAlign: 'center',
        backgroundColor: '#ffffff', 
    },
    image: {
        width: width,
    },
});
 
const slides = [
  {
    key: 1,
    text: 'Connect Scocially, Trade Economically!',
    image: require('../assets/images/onboarding4.png'),
    backgroundColor: '#ffffff',
  },
  {
    key: 2,
    title: 'Be a part of an exclusive community of brands and retailers',
    image: require('../assets/images/onboarding1.png'),
    backgroundColor: '#ffffff',
  },
  {
    key: 3,
    title: 'Digitize your business and be equipped for the ever-expanding industry.',
    image: require('../assets/images/onboarding2.png'),
    backgroundColor: '#ffffff',
  },
  {
    key: 4,
    title: 'Real time update of inventory, orders and accounts.',
    image: require('../assets/images/onboarding1.png'),
    backgroundColor: '#ffffff',
  },
];
 
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRealApp: false,
        };
    }    
            
    _renderItem = ({ item }) => {
      return (
        <View style={{ flex: 1,justifyContent: "flex-start", alingItems: "center", flexDirection: 'column'}}>
          <Image source={item.image} style={styles.image}/>
          <Text style={ styles.text} >{item.text}</Text>
          {item.key == 1 && 
          <TouchableOpacity >
          <Text style={styles.button}>Start Connecting</Text>
          </TouchableOpacity> }
          <Text style={ styles.title}>{item.title}</Text>
        </View>
      );
    };

    _onDone = () => {
      this.setState({ showRealApp: true });
    };
    render() {
      if (this.state.showRealApp) {
        return <App />;
      } else {
        return (
            <AppIntroSlider
                activeDotStyle={{ width: 40, backgroundColor: '#4A69D6'}}
                dotStyle= {{ backgroundColor: '#f2f1f6'}}
                renderItem={this._renderItem} 
                data={slides} 
                onDone={this._onDone}
            />
        );
      }
    }
  }