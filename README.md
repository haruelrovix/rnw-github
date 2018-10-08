# rnw-github [![Build status](https://build.appcenter.ms/v0.1/apps/5e9d98d7-a605-49c7-b921-94ebda4a0d4e/branches/master/badge)](https://appcenter.ms) [![CircleCI](https://circleci.com/gh/haruelrovix/rnw-github/tree/master.svg?style=svg)](https://circleci.com/gh/haruelrovix/rnw-github/tree/master)
A React Native Web app that fetches GitHub API.

- Run on Android and Web 🎉
- Infinite Scroll

## Deployment

Web Hosted on [Surge](https://surge.sh/), see it **Live** here:

✔️ **[rnw-github.surge.sh](http://rnw-github.surge.sh/)**

The `apk` for Android can be downloaded [here](https://appcenter.ms/download?url=%2Fv0.1%2Fapps%2Fharuelrovix%2FRNW-GitHub%2Fbuilds%2F22%2Fdownloads%2Fbuild).

Continuous Deployment by [Visual Studio App Center](https://appcenter.ms) for Native and [CircleCI](https://circleci.com/dashboard) for Web. 🔥

||Android|Web|
|-|-|-|
|Home|<img src="https://user-images.githubusercontent.com/17120764/46534747-7ddb9f80-c8d3-11e8-9263-ecce29998131.png" width=400 />|<img src="https://user-images.githubusercontent.com/17120764/46603380-13b63b00-cb1d-11e8-915b-80ce9478f00c.png" width=400 />|

## Development

1. Clone repository
  ```sh
  $ git clone https://github.com/haruelrovix/rnw-github.git && cd rnw-github
  ```
2. Install package dependencies
  ```sh
  $ yarn
  ```

### Web

1. Start React development server
  ```sh
  $ yarn web
    Compiled successfully!

    You can now view react-native-web-github in the browser.

      Local:            http://localhost:3000/
      On Your Network:  http://w.x.y.z:3000/

    Note that the development build is not optimized.
    To create a production build, use yarn build.
  ```
 2. It will try to open browser at `port:3000` automatically. 👍
 
### Android
 
 1. Make sure you have android simulator running or a physical device connected
 2. Simply run `yarn android`
   ```sh
  $ yarn android
  yarn run v1.9.4
  
  $ react-native run-android
  Scanning folders for symlinks in D:\Projects\rnw-github\node_modules (59ms)
  Starting JS server...
  Building and installing the app on the device (cd android && gradlew.bat installDebug)...
  Starting a Gradle Daemon, 1 incompatible and 1 stopped Daemons could not be reused, use --status for details
    ...
    
  ```
 
 <img src="https://user-images.githubusercontent.com/17120764/46603258-c639ce00-cb1c-11e8-9e43-b10c1a9b120b.png" width=300 />

### iOS
 
In theory, it should be can be run on iOS simulator using `yarn ios` command. Have no Mac machine to test it. 😅
 
 
## Acknowledgements

RNW GitHub created using [react-native-web](https://github.com/necolas/react-native-web) and [react-native-elements](https://github.com/react-native-training/react-native-elements). 💖 Bootstrapped with [CRNWA](https://github.com/VISI-ONE/create-react-native-web-app).
