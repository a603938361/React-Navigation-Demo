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

export default class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Text onPress={() => {
                this.props.navigation.push('Thr');
            }}>SEC</Text>
        );
    }
}
