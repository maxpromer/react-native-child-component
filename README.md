# react-native-child-component
Example for create child component. See `App.js` and `Page.js`

## Focus :-P

`Page.js` is file component Page. it has title bar. i want to show some title bar in app so i create this component to show title bar and botton of title bar i want to show content and content from parant (See App.js)

```javascript
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Page extends Component {
    render() {
        return (
            <View>
                {/* Header */}
                <View>
                    <Text>Title here !</Text>
                </View>
                
                {/* Body */}
                <View>{this.props.children}</View>
            </View>
        );
    }
}
```

`App.js` is parent of Page.js. in this file use Page component and in Page compent has child.

```javascript
import React, { Component } from 'react';
import { Text } from 'react-native';
import Page from './Page';

export default class App extends Component {
    render() {
        return (
            <Page>
                {/* Content */}
                <Text>Well !, Good, Best !, Work !</Text>
            </Page>
        );
    }
}
```
