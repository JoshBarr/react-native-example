## Festival: React Native

This is a demo React Native App, so we can learn about the technology.

Follow [this guide](https://facebook.github.io/react-native/docs/getting-started.html) to set up the tools you'll need.

It speaks to the API on the *live* festival website. [See it here](http://www.festival.co.nz/public-api/v1/pages/).

### Signing authorities:

To test on a real device, you'll need to have xCode signed in to the Apple Developer Programme.

There's details in the UPM. Look for `mobile@springload.co.nz`.


### Important note:

To develop on the iOS simulator, the default settings in `AppDelegate.m` (xcode)
will be fine:

```
jsCodeLocation = [NSURL URLWithString:@"http://localhost:8081/index.ios.bundle?platform=ios&dev=true"];
```

For developing on a device rapidly, you can change `localhost` above to your machine's local IP address, eg:

```
jsCodeLocation = [NSURL URLWithString:@"http://10.0.0.96:8081/index.ios.bundle?platform=ios&dev=true"];
```

__note__: This will only work with real devices, not with builds targeting the iOS simulator.

When you want to develop/test on a real device, it's easiest to bundle the JS
with the app. You can do that by uncommenting this line:

```
//   jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"main" withExtension:@"jsbundle"];
```


