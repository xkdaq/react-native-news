import React, {Component} from 'react';
import {StyleSheet, Text} from 'react-native';
import SplashScreen from "react-native-splash-screen";


/**
 * Create by xuke on 2018/10/11
 * 首页
 * */
export default class News extends Component<Props> {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        SplashScreen.hide();  //隐藏启动屏
    }

    render() {
        return (
            <Text>许可</Text>
        );
    }

}


const styles = StyleSheet.create({

});
