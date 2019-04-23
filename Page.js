import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Page extends Component {
    render() {
        return (
            <View>
                {/* Header */}
                <View 
                    style={{ 
                        backgroundColor: "#000", 
                        padding: 12,
                        elevation: 6
                    }}
                >
                    <Text 
                        style={{ 
                            fontSize: 26, 
                            color: "#FFF", 
                            textAlign: "center" 
                        }}
                    >Title here !</Text>
                </View>
                
                {/* Body */}
                <View>{this.props.children}</View>
            </View>
        );
    }
}