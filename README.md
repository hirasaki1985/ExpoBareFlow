# ExpoBareFlow
## install
```
$ git clone git@github.com:hirasaki1985/ExpoBareFlow.git
$ cd ExpoBareFlow
$ yarn install
```

## execute
### android
```
// develop
$ yarn android:dev

// staging
$ yarn android:staging

// production
$ yarn android:prod
```

### ios
#### preparing
```
$ (cd ios && pod install)
```

#### Xcode setting

1. Xcode menu, go to Product > Scheme > Edit Scheme.
2. Click Duplicate Scheme on the bottom and name it TestAppDevelopment and check the shared checkbox.
3. create Schemes 
  - TestAppDevelopment
  - TestAppStaging
  - TestAppProduction

#### run
```
// develop
$ yarn ios:dev

// staging
$ yarn ios:staging

// production
$ yarn ios:prod
```

### expo
```
$ expo start
```



