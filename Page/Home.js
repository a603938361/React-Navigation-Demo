/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {PureComponent} from 'react';
import {
    Text,
} from 'react-native';

import {DrawerActions} from 'react-navigation'
export default class Home extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = ({navigation}) => {
        return{
            title: 'Home',

        }
    };

    render() {
        return (
            <Text onPress={() => {
                //Thrth

                this.props.navigation.navigate('Thr')
            }}>Home</Text>
        );
    }
}
