'use strict';
import React, {
  StyleSheet,
} from 'react-native';

import config from './config';


let TEXT_COLOR = '#555';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  listContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f3f3f3',
  },
  list: {
    backgroundColor: '#333',
    // flexDirection: 'column',
    // justifyContent: 'center',
  },
  listItem: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    paddingBottom: 10,
    flexDirection: 'column',
    borderBottomColor: 'rgba(0,0,0,0.1)',
    borderBottomWidth: 1,
    // backgroundColor: '#fff'
  },
  eventTitleContainer: {
    flex: 1,
    padding: 0,
    marginBottom: 20
  },
  eventThumbnail: {
    margin: 0,
    width: 280,
    height: 180,

    resizeMode: 'cover'
  },
  eventListTitle: {
    color: config.brandColor,
    fontSize: 17,
    lineHeight: 25,
    marginBottom: 10,
    marginTop: 10
  },
  eventListTitleActive: {
    color: '#fff',
    fontSize: 17,
    lineHeight: 25,
    marginBottom: 10,
    marginTop: 10
  },
  toolbar: {
    padding: 20,
    paddingBottom: 12,
    paddingTop: 40,
    backgroundColor: config.brandColor,
    borderBottomColor: 'rgba(0,0,0,0.2)',
    borderBottomWidth: 1
  },
  toolbarTitle: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: 17
  },
  intro: {
    color: TEXT_COLOR,
    fontSize: 15,
    lineHeight: 25
  },
  padding: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    paddingTop: 20
  },
  h4: {
    marginTop: 10,
    marginBottom: 10,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#222',
    letterSpacing: 1
  },
  paddingSide: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  featured: {
    backgroundColor: config.brandColor,
    color: '#fff',
    fontSize: 10,
    letterSpacing: .5,
    fontWeight: 'bold',
    padding: 4,
    marginBottom: 2,
    width: 68,
    position: 'absolute',
    top: 0,
    left: 0
  },
  webView: {

  },
  bigImage: {
    backgroundColor: '#666',
    width: 320,
    height: 220,
     // justifyContent: 'flex-start',
     //    alignItems: 'center',
  },
  bigImageTitle: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 10
  },
  bigImageEl: {
    width: 320,
    height: 220
  },
  back: {
    fontSize: 12,
    letterSpacing: 1,
    color: '#222',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#f00'
  },
  partner: {
    fontSize: 10,
    color: config.brandColor,
    textAlign: 'center',
    marginBottom: 10
  },
  small: {
    fontSize: 12,
    color: config.brandColor,
    textAlign: 'center',
    marginBottom: 10
  },
  body: {
    fontSize: 14,
    lineHeight: 21,
    color: '#555'
  },
  country: {
    fontSize: 12,
    textAlign: 'center',
    color: '#555'
  }
});

module.exports = styles;
