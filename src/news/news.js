import React, {Component} from 'react';
import {DrawerLayoutAndroid, StyleSheet, Text, ToolbarAndroid, View} from 'react-native';
import SplashScreen from "react-native-splash-screen";
import DrawerPanel from "../drawer/drawerPanel";


/**
 * Create by xuke on 2018/10/11
 * 新闻首页
 * */

//引入打开侧边栏的图标
let drawer = require('../res/drawable/icon_menu.png');

export default class News extends Component<Props> {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        SplashScreen.hide();  //隐藏启动屏
    }

    render() {
        return (
            <DrawerLayoutAndroid
                ref={(drawer) => {
                    this.drawer = drawer;
                }}
                drawerWidth={250}
                drawerPosition={DrawerLayoutAndroid.positions.left}
                renderNavigationView={() => this.renderNavigationView()}>
                <View style={styles.content}>
                    <ToolbarAndroid
                        navIcon={drawer}
                        onIconClicked={this.onOpenDrawer.bind(this)}
                        title={'News'}
                        titleColor={'#4A4A4A'}
                        style={styles.toobar}
                    />

                    <Text>许可</Text>
                </View>
            </DrawerLayoutAndroid>
        );
    }


    /**
     * 加载侧边栏
     * */
    renderNavigationView() {
        return (
            <DrawerPanel/>
        );
    }

    /**
     * 打开侧边栏
     * */
    onOpenDrawer() {
        this.drawer.openDrawer();
    }

}


const styles = StyleSheet.create({
    //首页内容
    content: {
        flex: 1,
        flexDirection: 'column'
    },
    //首页导航栏
    toobar: {
        backgroundColor: '#FFFFFF',
        height: 56
    },

});
