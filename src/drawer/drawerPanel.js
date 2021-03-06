import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';


const headerImg = require('./../res/drawable/img_header.png');
const photoImg = require('./../res/drawable/img_default_photo.png');

const news = require('./../res/drawable/icon_news.png');
const market = require('./../res/drawable/icon_yule.png');
const setting = require('./../res/drawable/icon_setting.png');
const about = require('./../res/drawable/icon_about.png');

const right = require('./../res/drawable/icon_menu_right.png');

const {height, width} = Dimensions.get('window');

/**
 * Create by xuke on 2018/10/11
 * 侧边栏
 * */
export default class DrawerPanel extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={{height: 160, alignItems: 'center'}}>
                    <Image source={headerImg}/>
                    <View style={{
                        marginTop: 30,
                        position: 'absolute',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>
                        <Image source={photoImg}/>
                        <Text style={{color: 'white', marginTop: 8}}>会唱情歌小猴子</Text>
                        <TouchableOpacity style={styles.loginBtn}>
                            <Text style={{color: 'white', fontSize: 10}}>登录</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={{
                    height: height,
                    backgroundColor: 'white'
                }}>
                    {this.renderItem(news, '新闻')}
                    {this.renderItem(market, '娱乐')}
                    {this.renderItem(setting, '设置')}
                    {this.renderItem(about, '关于')}
                </View>
            </View>
        )
    }

    renderItem(img, title) {
        return (
            <TouchableOpacity
                style={styles.item}
            >
                <View style={styles.item_left}>
                    <Image source={img}/>
                    <Text style={styles.item_left_text}>{title}</Text>
                </View>
                <Image style={styles.item_right_img} source={right}/>
            </TouchableOpacity>
        )
    }


}

const styles = StyleSheet.create({
    loginBtn: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 16,
        paddingVertical: 3,
        borderWidth: 1,
        borderColor: 'white'
    },
    item: {
        height: 54,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    item_left: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 18
    },
    item_left_text: {
        color: '#9B9B9B',
        fontSize: 14,
        marginLeft: 12
    },
    item_right_img: {
        marginRight: 18
    }
});



