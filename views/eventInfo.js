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
        this.setState({placeholder: false});
      });
    }

    render() {
      let details = this.props.details ;

      if (!details) {
        return <View></View>
      }

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
                  <Text style={styles.body}>
                    {this.props.details.event_description}
                  </Text>}
                </View>
              </ScrollView>
            </View>
        );
    }
}

module.exports = EventInfo
