import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Page from './Page';

export default class App extends Component {
    render() {
        return (
            <Page>
                <Text
                    style={{ 
                        margin: 10
                    }}
                >Well !, Good, Best !, Work !</Text>
            </Page>
        );
    }
}
