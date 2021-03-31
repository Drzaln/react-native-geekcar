# How to run this?

### 1. Clone this repo
```sh
$ git clone https://github.com/Drzaln/react-native-geekcar.git

$ cd react-native-geekcar
```
### 2. run npm install
```sh
$ npm i
```
### 3. start the server
```sh
$ npx react-native start
```
### 4. run the project
- for android
```sh
$ npx react-native run-android
```
- for ios
```sh
$ npx react-native run-ios
```

# How to build this project?
currently i only test this on android.

### 1. go to android directory
```sh
$ cd android/
```
### 2. run gradle assembleRelease
```sh
$ ./gradlew assembleRelease
```
### 3. the .apk file will be located at `android/app/build/outputs/apk`