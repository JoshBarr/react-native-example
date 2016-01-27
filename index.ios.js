/**
 * NZ Festival Demo App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
    AppRegistry,
    Component,
    Text,
    View,
    Navigator
} from 'react-native';

import config from './config';
import styles from './styles';
import Home from './views/home';
import EventInfo from './views/eventInfo';


class Festival extends Component {
    constructor(props) {
        super(props)
        this._renderScene = this._renderScene.bind(this);
        this._configureScene = this._configureScene.bind(this);
    }

    _renderScene(route, navigator) {
        if (route.name === 'home') {
            return (
                <Home
                    name={route.name}
                    onDetail={(details, image) =>  {
                        navigator.push({
                            name: 'event',
                            details,
                            image
                        })
                    }}
                />
            );
        }

        if (route.name === 'event') {
            return (
                <EventInfo
                    name={route.name}
                    details={route.details}
                    image={route.image}
                    onBack={() => { navigator.pop() }}
                />
            );
        }
    }

    _configureScene(route) {
        if (route.sceneConfig) {
          return route.sceneConfig;
        }

        return Navigator.SceneConfigs.FloatFromRight;
    }

    render() {
        return (
            <Navigator
                initialRoute={{ name: 'home', index: 0}}
                renderScene={this._renderScene}
                configureScene={this._configureScene} />
        );
    }
}

AppRegistry.registerComponent('Festival', () => Festival);

