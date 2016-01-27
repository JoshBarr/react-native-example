'use strict';

import React, {
  AppRegistry,
  Component,
  Text,
  View,
  ScrollView,
  Image,
  TouchableHighlight,
} from 'react-native';

import config from '../config';
import styles from '../styles';


class TouchableButton extends TouchableHighlight {
  touchableGetHighlightDelayMS() {
    return 30;
  }
}




class EventListing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: null,
            image: null
        }
        this._fetchListingImage = this._fetchListingImage.bind(this);
        this._onPress = this._onPress.bind(this);
    }

    _fetchListingImage(img) {

        fetch(img.meta.detail_url, { headers: config.jsonHeaders })
            .then(response => { return response.json() })
            .then(data => {
                this.setState({
                    image: data
                });
            })
    }

    componentDidMount() {
        fetch(this.props.meta.detail_url, { headers: config.jsonHeaders })
            .then(response => { return response.json() })
            .then(data => {

                this.setState({
                    details: data
                })

                console.log(data)

                if (data.listing_image) {
                    this._fetchListingImage(data.listing_image)
                }
            });
    }

    _onPress() {
        this.props.onDetail(this.state.details, this.state.image);
    }

    render() {

        let containerStyles = {
            backgroundColor: '#666'
        };

        return (
            <TouchableButton
                activeOpacity={.9}
                underlayColor={'#666'}
                onPressIn={()=> { this.setState({ highlight: true })}}
                onPressOut={()=> { this.setState({ highlight: false })}}
                onPress={this._onPress}>

                <View style={styles.listItem}>

                    <View style={containerStyles}>
                        {this.state.image ? <Image style={styles.eventThumbnail} source={{ uri: this.state.image.medium.url }} /> : <Image style={styles.eventThumbnail} source={require('../placeholder.png')} /> }
                        {this.state.details && this.state.details.is_featured ? <Text style={styles.featured}>{'FEATURED'}</Text> : null}
                    </View>

                    <View style={styles.eventTitleContainer}>
                        <Text style={this.state.highlight ? styles.eventListTitleActive : styles.eventListTitle}>{this.props.title}</Text>
                        <Text>{this.props.type.name}</Text>
                    </View>
                </View>
            </TouchableButton>
        );
    }
}



class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            events: []
        }

        this._renderEvents = this._renderEvents.bind(this);
    }

    componentDidMount() {
        fetch(`${config.api}/pages/?descendant_of=97`)
            .then(response=>response.json())
            .then(data => {
                this.setState({
                    events: data.pages
                })
            });
    }

    _getEventType(str) {
        switch(str) {
            case 'core.WritersWeekEvent':
                return { name: 'Writer\'s Week Event' }
            case 'core.Event':
            default:
                return { name: 'Event' }
        }
    }

    _renderEvents() {
        return this.state.events.map((event, index) => {
            return (
                    <EventListing
                        onDetail={this.props.onDetail}
                        key={event.id}
                        meta={event.meta}
                        type={this._getEventType(event.meta.type)}
                        title={event.title} />
            );
        });
    }

    render() {
        return (
            <View style={styles.listContainer}>
                <View style={styles.toolbar}>
                    <Text style={styles.toolbarTitle}>
                      NZ Festival
                    </Text>
                </View>

                <ScrollView contentContainerStyles={styles.list}>
                    <View style={styles.padding}>
                        <Text style={styles.intro}>
                            New Zealand’s leading arts festival and makers of extraordinary events
                        </Text>
                    </View>
                    <View style={styles.paddingSide}>
                        <Text style={styles.h4}>
                            SHOWS AND EVENTS
                        </Text>
                    </View>
                    {this.state.events ? this._renderEvents() : <View><Text>Loading...</Text></View>}
                </ScrollView>
            </View>
        );
    }
}

module.exports = Home
