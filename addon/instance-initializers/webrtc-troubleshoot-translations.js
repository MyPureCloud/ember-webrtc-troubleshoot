/* global _, requirejs */
const SUPPORTED_LOCALES = ['de', 'en-us', 'es', 'fr', 'it', 'ja', 'ko', 'nl', 'no', 'pl', 'pt_br', 'sv', 'tr', 'zh_cn'];

export function initialize (appInstance) {
  const intlService = appInstance.lookup('service:intl');
  if (intlService) {
    _.each(SUPPORTED_LOCALES, function (locale) {
      let componentLocale;
      let path = `webrtc-troubleshoot/translations/${locale}`;
      try {
        componentLocale = requirejs(path)['default'];
        intlService.addTranslations(locale, componentLocale);
      } catch (e) {
        // no locale for the language set up.
      }
    });
  }
}

export default {
  name: 'webrtc-troubleshoot-translations',
  after: 'ember-intl',
  initialize
};
