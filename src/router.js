import React from "react";
import {StackNavigator} from "react-navigation";
import News from "./news/news";


const RootStack = StackNavigator(
    {
        News: {
            screen: News,
            navigationOptions: () => ({
                header: null
            })
        },

        //...

    },

    {
        navigationOptions: {
            headerTintColor: "#fff",
            headerStyle: {
                backgroundColor: "#23a2f2"
            }
        }
    },
);

export default RootStack;
