import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity } from 'react-native';

class Main extends Component{
    constructor(props){
        super(props);
        this.state = { name: '' };
    }
    static navigationOptions = {
        title: 'Simple Chat App',
    };
    // state = { name: '' }
    render(){
        // goChat = () => {
        //     // 1.
        //     this.props.navigation.navigate('stackChat', { name: this.state.name });
        // }
        // onChangeText = name => this.setState({ name: "Halo" });
        // onChangeText(() => {
        //     this.setState({ name })
        // })
        return(
            <View>
                <Text style={styles.title}>Enter Your Name : </Text>
                <TextInput
                    onChangeText={name => this.setState({name})}
                    style={styles.nameInput}
                    placeholder="Input Your name"
                    value={this.state.name}
                />
                <TouchableOpacity onPress={ () => this.props.navigation.navigate('stackChat', { name: this.state.name }) }>
                    <Text style={styles.buttonText}>Next</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const offset = 24;
const styles = StyleSheet.create({
  nameInput: { // 3. <- Add a style for the input
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#111111',
    borderWidth: 1,
  },
  title: { // 4.
    marginTop: offset,
    marginLeft: offset,
    fontSize: offset,
  },
  buttonText: { // 5.
    marginLeft: offset,
    fontSize: offset,
  },
});

export default Main;