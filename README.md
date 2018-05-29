# redux-react-native-i18n

[![Build Status](https://travis-ci.org/derzunov/redux-react-native-i18n.svg?branch=master)](https://travis-ci.org/derzunov/redux-react-native-i18n)
[![npm](https://img.shields.io/npm/dt/redux-react-native-i18n.svg)](https://www.npmjs.com/package/redux-react-native-i18n)
[![npm](https://img.shields.io/npm/v/redux-react-native-i18n.svg)](https://www.npmjs.com/package/redux-react-native-i18n)
[![Package Quality](http://npm.packagequality.com/shield/redux-react-native-i18n.svg)](http://packagequality.com/#?package=redux-react-native-i18n)

[![Package Quality](http://npm.packagequality.com/badge/redux-react-native-i18n.png)](http://packagequality.com/#?package=redux-react-native-i18n)

An **i18n** solution with **plural forms** support for **React Native** apps on Redux.

This package provides functionality of [redux-react-i18n](https://github.com/derzunov/redux-react-i18n) to React Native.
The difference between this package and [redux-react-i18n](https://github.com/derzunov/redux-react-i18n) is in presentational component and its container. ```<Loc/>``` from this package uses ```<Text> ``` from ```'react-native'``` instead of ```<span>```.

<img alt="React Native Logo" src="https://raw.githubusercontent.com/derzunov/redux-react-native-i18n/master/react-native-logo.jpg" width="100%" />

This package provides functionality of [redux-react-i18n](https://github.com/derzunov/redux-react-i18n) to React Native.

The difference between this package and [redux-react-i18n](https://github.com/derzunov/redux-react-i18n) is in presentational component. It uses ```<Text> ``` from 'react-native' instead of ```<span>```

## Workers of all countries, unite!

<img alt="redux-react-i18n" src="https://raw.githubusercontent.com/derzunov/redux-react-i18n/master/i18n-logo.jpg" width="100%" />

### Supported languages list with expected codes for pluralize mechanics switching
- Russian ( ru, ru-RU )
- English ( en, en-US, en-UK )
- French ( fr )
- German ( de )
- Polish ( pl )
- Czech ( cs )
- Portuguese ( pt )
- Brazilian Portuguese ( pt-BR, br )
- Arabic ( ar-AR, ar )
- Turkish ( tr )
- Occitan ( oc )
- Belarusian ( be )
- Bosnian ( bs )
- Croatian ( hr )
- Serbian ( sr )
- Ukrainian ( uk )
- ...

## Example Web Demo

[derzunov.github.io/redux-react-i18n](https://derzunov.github.io/redux-react-i18n/)


## Short code demo

#### Write ( jsx ):
```jsx
<Loc locKey="your_key_1"/>
<Loc locKey="your_key_2" number={1}/>
<Loc locKey="your_key_2" number={2}/>
<Loc locKey="your_key_2" number={5}/>
```
#### Result ( html ):
```html
<Text>Перевод вашего первого ключа из словаря для текущего языка</Text>
<Text>Пришла 1 кошечка</Text>
<Text>Пришли 2 кошечки</Text>
<Text>Пришло 5 кошечек</Text>
```

### What am I using:
redux-react-i18n: ( [github](https://github.com/derzunov/redux-react-i18n) or [npm](https://www.npmjs.com/package/redux-react-i18n) )

## Install:
***You need react-native to be installed!***

Terminal:
```
npm i redux-react-native-i18n
```

## What's in the box

### Components:
 - **Loc ( Container Component )**
 - LocPresentational ( Presentational Component )

### Actions
 - setCurrent( languageCode )
 - setLanguages( languageCode )
 - addDictionary( languageCode, dictionary )
 - setDictionaries( dictionaries )

### Reducer
 - i18n


## Full code demo ( complete solution ):
```jsx
import { i18nReducer, i18nActions, Loc } from 'redux-react-native-i18n'

...
// "reducers" contains your reducers
reducers.i18n = i18nReducer
...

const store = createStore( combineReducers( reducers ) )

...
// Set dictionaries (simpliest exapmple) -----------------------------------------------------------------------------------------------

// This dictionaries can be supported by Localization team without need to know somth about interface or project,
// and you just can fetch it to your project
const dictionaries = {
    'ru-RU': {
        'key_1': 'Первый дефолтный ключ',
        'key_2': [ '$Count', ' ', ['штучка','штучки','штучек']], // 1 штучка, 3 штучки, пять штучек
        'key_3': {
            'nested_1': 'Первый вложенный ключ',
            'nested_2': 'Второй вложенный ключ',
        },
        /* ... */
        /* Other keys */
    },
    'en-US': {
        'key_1': 'First default key',
        'key_2': [ '$Count', ' ', ['thing','things']], // 1 thing, 2 things, 153 things
        'key_3': {
            'nested_1': 'First nested key',
            'nested_2': 'Second nested key',
        },
    }
    /* ... */
    /* Other dictionaries */
}
store.dispatch( i18nActions.setDictionaries( dictionaries ) )
// / Set dictionaries (simpliest exapmple) ---------------------------------------------------------------------------------------------

// Set languages (simpliest exapmple) --------------------------------------------------------------------------------------------------
const languages = [
    {
        code: 'ru-RU',
        name: 'Русский'
    },
    {
        code: 'en-US',
        name: 'English (USA)'
    }
    /* ... */
    /* Other languages */
]

store.dispatch( i18nActions.setLanguages( languages ) )
// / Set languages (simpliest exapmple) ------------------------------------------------------------------------------------------------

// Set current language code (you can map this action to select component or somth like this)
store.dispatch( i18nActions.setCurrentLanguage( 'ru-RU' ) )
```

#### And now you can use "Loc" container component

```jsx
import { Loc } from 'redux-react-native-i18n'
...

<View>
    <Loc locKey="key_1"/> // => Первый дефолтный ключ
    <Loc locKey="key_2" number={7}/> // => 7 штучек
    <Loc locKey="key_3.nested_1"/> // => Первый вложенный ключ
    <Loc locKey="key_3.nested_2"/> // => Второй вложенный ключ
</View>

```

## If you don't want to use a complete solution:

#### Just use a dumb component and you can design store/actions/reducers by yourself like you want

```jsx
// Just import presentational component LocPresentational
import { LocPresentational } from 'redux-react-native-i18n'
...
...
...
// Then map data to props => currentLanguage, dictionary (See more in src/Loc.js):
const mapStateToProps = ( { /*getting data from the state*/ }, ownProps ) => ({
    currentLanguage: yourCurrentLanguageFromState,
    dictionary: yourDictionaryFromState
});
Loc = connect( mapStateToProps )( LocPresentational )
...
...
...
<Loc locKey="YOUR_KEY_1"/>
<Loc locKey="YOUR_KEY_2"  number={42}/>

```
See more in src/\*.js
