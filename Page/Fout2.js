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


export default class Fout2 extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }


    componentWillMount(): void {
        this.navLister = this.props.navigation.addListener(
            'didBlur',
            payload => {
                console.log('didBlur -- ', payload);
            },
        );
        console.log('componentWillMount')
    }

    componentDidMount(): void {
        console.log('componentDidMount')
        this.navLister.remove();
    }


    render() {
        return (
            <Text onPress={() => {
                this.props.navigation.goBack();
            }}>Fout22</Text>
        );
    }
}
