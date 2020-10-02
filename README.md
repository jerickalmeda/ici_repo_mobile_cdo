<<<<<<< HEAD
# ICI Library Repository (ici_repo_mobileapp)

ICI Library Repository for CdO

## Pre requisites for android build.
```
https://quasar.dev/quasar-cli/developing-cordova-apps/preparation
```
## To modify the .json files, it is located in this directory, contains .jsons for each subject
```
src/statics/jsons
```

## To modify what subjects will display on app, it is located in this directory
```
pages/Applied.vue for Applied Track
pages/Core.vue for Core Track
pages/SubjectType.vue for Specialized Subject
```

## Convertion of materials, handouts, videos
```
To convert materials, handouts and videos:
1. Convert PPTs into PNGs file format, do not change PNG filename format
2. Handouts must be also in PNG format.
3. For videos, rename the video into video.mp4 and put them inside the Week number folder.
```

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```
### To change version of the app for update purposes 
```
package.json file in app root directory
"version": "1.0.29" line
```

### Build the app for production
```bash
1. quasar build -m android
2. jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ICIRepository.keystore {$directory_a}\src-cordova\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk  ICIRepository

E: might be other drive location
Passkey is 123456

3. zipalign -v 4 {$directory_a}\src-cordova\platforms\android\app\build\outputs\apk\release\app-release-unsigned.apk {$directory_b}\app_releases\ICIRepository_G12_1stQtr_Core-Applied_v1.2.10.apk 

{$directory_a} - location of the app-release-unsigned.apk
{$directory_b} - intended for final apk output
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
=======
# ici_mobile_app
Iligan Computer Institute Mobile App (Android)
>>>>>>> 58e3af2d9041b771088ebc4d750846ec2c84a8f4
