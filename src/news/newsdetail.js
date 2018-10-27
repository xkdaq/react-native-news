import React, {Component} from 'react';
import {Dimensions, StyleSheet, View, WebView} from 'react-native';
import RequestUtil from "../util/RequestUtil";
import APIs from "../util/service";

const {height, width} = Dimensions.get('window');

export default class NewsDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            detail: "",
            show: false,
        };


    }

    render() {
        return (
            <View style={{flex: 1, width: width, backgroundColor: 'white', flexDirection: 'column'}}>
                {this.state.show ?
                    <WebView
                        originWhitelist={['*']}
                        style={{marginLeft: 10, marginRight: 10}}
                        source={{
                            baseUrl: '',
                            html: this.state.detail.data.content,
                        }}/>
                    : RequestUtil.loading}
            </View>
        );
    }

    componentDidMount() {
        let {params} = this.props.navigation.state;
        this.getData(params.xuke);
    }


    getData(xuke) {
        var that = this;
        RequestUtil.getRequest(APIs.getNewsDetail + xuke,
            function (data) {
                //成功回调
                that.setState({
                    show: true,
                    detail: data,
                })
            }, function (error) {
                alert(error)
            });

    }
}


var styles = StyleSheet.create({});
