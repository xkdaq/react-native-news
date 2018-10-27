import React, {Component} from 'react';
import {DrawerLayoutAndroid, Image, StyleSheet, ToolbarAndroid, View} from 'react-native';
import SplashScreen from "react-native-splash-screen";
import DrawerPanel from "../drawer/drawerPanel";
import RequestUtil from "../util/RequestUtil";
import Swiper from "react-native-swiper";
import APIs from "../util/service";
import ScrollableTabView, {ScrollableTabBar} from 'react-native-scrollable-tab-view'
import NewsList from "./newslist";


/**
 * Create by xuke on 2018/10/11
 * 新闻首页
 * */

//引入打开侧边栏的图标
let drawer = require('../res/drawable/icon_menu.png');

export default class News extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            bannerArr: "",
            tabName: "",
        };
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
                    {/*导航栏*/}
                    <ToolbarAndroid
                        navIcon={drawer}
                        onIconClicked={this.onOpenDrawer.bind(this)}
                        title={'News'}
                        titleColor={'#4A4A4A'}
                        style={styles.toobar}
                    />
                    {/*轮播图*/}
                    <View style={styles.wrapper}>
                        {this.renderBanner()}
                    </View>
                    {/*tab及新闻列表*/}
                    <View style={{flex: 1}}>
                        {this.renderTabView()}
                    </View>
                </View>
            </DrawerLayoutAndroid>
        );
    }

    /**
     * 加载banner图
     * */
    renderBanner() {
        let arr = [];
        if (this.state.bannerArr.code === 1) {
            for (let i = 0; i < this.state.bannerArr.data.length; i++) {
                let url = this.state.bannerArr.data[i].img;
                arr.push(
                    <Image
                        key={i}
                        resizeMode="cover"
                        style={styles.bannerImage}
                        source={{uri: url.indexOf('http') === 0 ? `${url}` : `http://${url}`}}
                    />
                )
            }

            return (
                <Swiper
                    style={styles.wrapper}
                    height={140}
                    autoplay={true}
                    autoplayTimeout={4}
                    dot={<View style={styles.bannerDot}/>}
                    activeDot={<View style={styles.bannerActiveDot}/>}
                    paginationStyle={{bottom: 6}}
                    loop>
                    {arr}
                </Swiper>
            );
        } else {
            return (
                RequestUtil.loading
            );
        }
    }

    /**
     * 加载tablayout
     * */
    renderTabView() {
        let tabNameList = [];
        if (this.state.tabName.code === 1) {
            var data = this.state.tabName.data;
            tabNameList.push(
                data.map((news, i) => {
                    return (<View key={i} tabLabel={news.title}>
                        <NewsList key={i} news={news} navigation={this.props.navigation}/>
                    </View>)
                })
            );
            return (
                <ScrollableTabView
                    renderTabBar={() => <ScrollableTabBar/>}
                    tabBarBackgroundColor="#ffffff"
                    tabBarUnderlineStyle={styles.tabBarUnderline}
                    tabBarActiveTextColor="#3e9ce9"
                    tabBarInactiveTextColor="#aaaaaa">
                    {tabNameList}
                </ScrollableTabView>
            );

        } else {
            return (
                RequestUtil.loading
            );
        }
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

    componentDidMount() {
        SplashScreen.hide();  //隐藏启动屏
        this.getBannerData();
    }

    /**
     * 获取头部的轮播图
     * */
    getBannerData() {
        var that = this;
        /**
         * 获取banner广告轮播
         * */
        RequestUtil.getRequest(APIs.getTestBanner,
            function (data) {
                //成功回调
                that.setState({
                    bannerArr: data
                })
            }, function (error) {
                alert(error)
            });

        /**
         * 获取文章类别
         * */
        RequestUtil.getRequest(APIs.getTestArticleType,
            function (data) {
                //成功回调
                that.setState({
                    tabName: data
                })
            }, function (error) {
                alert(error)
            })


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
    //首页轮播图
    wrapper: {
        width: RequestUtil.windowSize.width,
        height: 140
    },
    //轮播默认小圆点
    bannerDot: {
        backgroundColor: '#9B9B9B',
        width: 10,
        height: 2,
        borderRadius: 0,
        margin: 3
    },
    //轮播选中小圆点
    bannerActiveDot: {
        backgroundColor: '#FFFFFF',
        width: 10,
        height: 2,
        borderRadius: 0,
        margin: 3
    },
    //轮播图片
    bannerImage: {
        flex: 1,
        width: RequestUtil.windowSize.width,
    },


    //tab的下划线
    tabBarUnderline: {
        backgroundColor: '#3e9ce9',
        height: 2
    }

});
