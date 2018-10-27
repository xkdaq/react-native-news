/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import RootStack from "./src/router";


export default class App extends Component<Props> {

    render() {
        return (
            <RootStack/>
        );
    }
}
