'use strict';

import React, {
  Component,
  Text,
  View,
  Navigator,
  WebView,
  Image,
  TouchableOpacity,
  ScrollView,
  InteractionManager
} from 'react-native';


import config from '../config';
import styles from '../styles';


class EventInfo extends Component {

    constructor(props) {
      super(props);

      this.state = {
        placeholder: true
      }
    }

    componentDidMount () {
      InteractionManager.runAfterInteractions(() => {
        this.setState({ placeholder: false });
      });
    }

    _onBtnPress() {
      if (!this.props.details) {
        return;
      }


    }

    render() {
      let details = this.props.details;

      if (!details) {
        return <View></View>
      }

      let HTML = "<html><head><style> body { font-family: sans-serif; color: #333; margin: 0; padding: 0; font-size: 14px; line-height: 1.5; }</style><body>" + this.props.details.event_description + "</body></html>";

      return (
        <View style={styles.container}>
          <ScrollView>
            <View style={{ paddingTop: 50, paddingBottom: 30 }}>
              <TouchableOpacity onPress={this.props.onBack}>
                <Text style={styles.back}>ALL EVENTS</Text>
              </TouchableOpacity>
              {details.presented_by ?
                (<Text style={styles.partner}>{details.presented_by.toUpperCase()}</Text>) : null}
              <Text style={{color: config.brandColor, fontSize: 22, paddingLeft: 20, paddingRight: 20, fontWeight: 'bold', textAlign: 'center' }}>
                {this.props.details.title.toUpperCase()}
              </Text>
              <View style={{flexDirection: 'column', marginTop: 10, alignItems: 'center', justifyContent: 'center', flex: 1}}>
              {details.company ? <Text style={styles.small}>{details.company}</Text> : null}
              {details.country ? <Text style={styles.country}>{details.country}</Text> : null}
              </View>
            </View>

            { this.state.placeholder ? null :
            <View style={styles.bigImage}>
              <Image style={styles.bigImageEl} source={{ uri: this.props.image.medium.url }}></Image>
              {this.props.details.is_featured ? <Text style={styles.featured}>FEATURED</Text> : null }
            </View>}

            <View style={styles.padding}>
              {this.state.placeholder ? null :
              <WebView
                automaticallyAdjustContentInsets={true}
                style={{ height: 1000 }}
                scalesPageToFit={false}
                decelerationRate={'normal'}
                html={ HTML }
                /> }
                {this.state.placeholder ? null : <TouchableOpacity onPress={this._onBtnPress} style={styles.button}><Text>Book Now</Text></TouchableOpacity> }
            </View>
          </ScrollView>
        </View>
      );
    }
}

module.exports = EventInfo
