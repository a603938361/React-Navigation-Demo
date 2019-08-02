/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    Text,
} from 'react-native';

export default class Thr extends Component {

    constructor(props) {
      super(props);
      this.state = {};
    }

    static navigationOptions = ({navigation}) => {
        return{
            title: 'Thr',
            headerLeft:()=>{
                return <Text>Back</Text>
            }
        }
    };

    componentWillMount(): void {
    }

    render(){
        return(
            <Text onPress={() => {
                this.props.navigation.push('Fout');
            }}>Thr</Text>
        )
    }
}
