import i18nActions from 'redux-react-i18n'
export { i18nActions }

import i18nReducer from 'redux-react-i18n'
export { i18nReducer }

// You can use the complete scheme of store/reducers/actions proposed by author
export { default as Loc } from './LocRN'

// Or you can just take a presentational container and map state to props by yourself
export { default as LocPresentational } from './LocPresentationalRN'