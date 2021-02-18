import Ember from 'ember';
import layout from './template';
import WebrtcTroubleshooterComponent from '../webrtc-troubleshooter/component';

const LOGLEVELS = ['debug', 'info', 'log', 'warn', 'error'];

const logBuffer = [];
const Logger = {};
LOGLEVELS.forEach(level => {
  Logger[level] = function () {
    const textarea = document.getElementsByTagName('textarea')[0];
    const args = [...arguments];
    const toBuffer = [];
    args.forEach(a => {
      let toLog = a;
      if (a instanceof Error) {
        toLog = {
          message: a.message,
          details: a.details,
          name: a.name,
          status: a.status
        };
      }
      toBuffer.push(toLog);
    });
    logBuffer.push([level, toBuffer]);
    if (textarea) {
      textarea.value = JSON.stringify(logBuffer, null, 2);
    }
    Ember.Logger[level](...arguments);
  };
});

const download = function (filename) {
  const element = document.createElement('a');
  const text = document.getElementsByTagName('textarea')[0].value;
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
};

export default WebrtcTroubleshooterComponent.extend({
  layout,
  classNames: ['flashy', 'flashy-webrtc-troubleshooter'],
  saveSuiteToWindow: true,

  init () {
    if (!this.get('logger')) {
      this.set('logger', Logger);
    }
    this._super(...arguments);
  },

  actions: {
    downloadDiagnosticReport () {
      download('purecloud-diagnostics-' + new Date().getTime() + '.json');
    }
  }
});
