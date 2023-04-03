# health-test

## Make it go
```
npm i
npm run build
cd cordova
cordova platform add android
cordova run android --device
```

## Reproduce issue
1. Tap Connect button
2. Tap Get Steps button. You should see a step count.
3. Tap the Disconnet button.
4. Tap the Steps button again. You should not see a step count but you will.
