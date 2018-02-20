import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import plLocaleData from 'react-intl/locale-data/pl';

import { DEFAULT_LOCALE } from '../app/modules/locales/locales.redux';

import enTranslationMessages from './translations/en.json';
import plTranslationMessages from './translations/pl.json';

addLocaleData(enLocaleData);
addLocaleData(plLocaleData);

export const appLocales = [
  'en',
  'pl',
];

export const formatTranslationMessages = (locale, messages) => {
  const defaultFormattedMessages = locale !== DEFAULT_LOCALE
    ? formatTranslationMessages(DEFAULT_LOCALE, enTranslationMessages)
    : {};
  return Object.keys(messages).reduce((formattedMessages, key) => {
    const formattedMessage = !messages[key] && locale !== DEFAULT_LOCALE
      ? defaultFormattedMessages[key]
      : messages[key];
    return Object.assign(formattedMessages, { [key]: formattedMessage });
  }, {});
};

export const translationMessages = {
  en: formatTranslationMessages('en', enTranslationMessages),
  pl: formatTranslationMessages('pl', plTranslationMessages),
};
