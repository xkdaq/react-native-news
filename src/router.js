import React from "react";
import {StackNavigator} from "react-navigation";
import News from "./news/news";
import NewsDetail from "./news/newsdetail";


const RootStack = StackNavigator(
    {
        News: {
            screen: News,
            navigationOptions: () => ({
                header: null
            })
        },

        NewsDetail: {
            screen: NewsDetail,
            navigationOptions: {title: "News"}
        },

        //...

    },

    {
        navigationOptions: {
            headerTintColor: "#4A4A4A",
            headerStyle: {
                backgroundColor: "#ffffff"
            }
        }
    },
);

export default RootStack;
