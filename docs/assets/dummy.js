"use strict";

/* jshint ignore:start */



/* jshint ignore:end */

define('dummy/app', ['exports', 'ember', 'dummy/resolver', 'ember-load-initializers', 'dummy/config/environment'], function (exports, _ember, _dummyResolver, _emberLoadInitializers, _dummyConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _dummyConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _dummyConfigEnvironment['default'].podModulePrefix,
    Resolver: _dummyResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _dummyConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('dummy/components/webrtc-troubleshooter/component', ['exports', 'webrtc-troubleshoot/components/webrtc-troubleshooter/component'], function (exports, _webrtcTroubleshootComponentsWebrtcTroubleshooterComponent) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _webrtcTroubleshootComponentsWebrtcTroubleshooterComponent['default'];
    }
  });
});
define('dummy/controllers/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({
    iceServers: null,

    init: function init() {
      this._super.apply(this, arguments);
      var savedServers = window.localStorage.getItem('iceServers');
      if (savedServers) {
        this.set('iceServers', JSON.parse(savedServers));
      }
    },

    actions: {
      openTroubleshoot: function openTroubleshoot() {
        alert('troubleshooting!'); // eslint-disable-line
      }
    }
  });
});
define('dummy/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('dummy/helpers/app-version', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.appVersion = appVersion;
  var version = _dummyConfigEnvironment['default'].APP.version;

  function appVersion() {
    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('dummy/helpers/format-date', ['exports', 'ember-intl/helpers/format-date'], function (exports, _emberIntlHelpersFormatDate) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatDate['default'];
    }
  });
});
define('dummy/helpers/format-html-message', ['exports', 'ember-intl/helpers/format-html-message'], function (exports, _emberIntlHelpersFormatHtmlMessage) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatHtmlMessage['default'];
    }
  });
});
define('dummy/helpers/format-message', ['exports', 'ember-intl/helpers/format-message'], function (exports, _emberIntlHelpersFormatMessage) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatMessage['default'];
    }
  });
});
define('dummy/helpers/format-number', ['exports', 'ember-intl/helpers/format-number'], function (exports, _emberIntlHelpersFormatNumber) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatNumber['default'];
    }
  });
});
define('dummy/helpers/format-relative', ['exports', 'ember-intl/helpers/format-relative'], function (exports, _emberIntlHelpersFormatRelative) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatRelative['default'];
    }
  });
});
define('dummy/helpers/format-time', ['exports', 'ember-intl/helpers/format-time'], function (exports, _emberIntlHelpersFormatTime) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersFormatTime['default'];
    }
  });
});
define('dummy/helpers/intl-get', ['exports', 'ember-intl/helpers/intl-get'], function (exports, _emberIntlHelpersIntlGet) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersIntlGet['default'];
    }
  });
});
define('dummy/helpers/l', ['exports', 'ember-intl/helpers/l'], function (exports, _emberIntlHelpersL) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersL['default'];
    }
  });
});
define('dummy/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('dummy/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define('dummy/helpers/t', ['exports', 'ember-intl/helpers/t'], function (exports, _emberIntlHelpersT) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlHelpersT['default'];
    }
  });
});
define('dummy/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'dummy/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _dummyConfigEnvironment) {
  var _config$APP = _dummyConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('dummy/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('dummy/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('dummy/initializers/export-application-global', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_dummyConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _dummyConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_dummyConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('dummy/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: _ember['default'].K
  };
});
define('dummy/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: _ember['default'].K
  };
});
define("dummy/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('dummy/instance-initializers/ember-intl', ['exports', 'ember', 'dummy/config/environment', 'ember-intl/utils/links'], function (exports, _ember, _dummyConfigEnvironment, _emberIntlUtilsLinks) {
  exports.instanceInitializer = instanceInitializer;
  var warn = _ember['default'].warn;

  function filterBy(type) {
    return Object.keys(requirejs._eak_seen).filter(function (key) {
      return key.indexOf(_dummyConfigEnvironment['default'].modulePrefix + '/' + type + '/') === 0;
    });
  }

  function instanceInitializer(instance) {
    var service = undefined;

    if (typeof instance.lookup === 'function') {
      service = instance.lookup('service:intl');
    } else {
      service = instance.container.lookup('service:intl');
    }

    if (typeof Intl === 'undefined') {
      warn('[ember-intl] Intl API is unavailable in this environment.\nSee: ' + _emberIntlUtilsLinks['default'].polyfill, false, {
        id: 'ember-intl-undefined-intljs'
      });
    }

    var cldrs = filterBy('cldrs');

    if (!cldrs.length) {
      warn('[ember-intl] project is missing CLDR data\nIf you are asynchronously loading translation, see: ${links.asyncTranslations}.', false, {
        id: 'ember-intl-missing-cldr-data'
      });
    } else {
      cldrs.map(function (moduleName) {
        return requirejs(moduleName, null, null, true)['default'];
      }).forEach(function (locale) {
        return locale.forEach(service.addLocaleData);
      });
    }

    filterBy('translations').forEach(function (moduleName) {
      var localeSplit = moduleName.split('\/');
      var localeName = localeSplit[localeSplit.length - 1];
      service.addTranslations(localeName, requirejs(moduleName, null, null, true)['default']);
    });
  }

  exports['default'] = {
    name: 'ember-intl',
    initialize: instanceInitializer
  };
});
/* globals requirejs, Intl */

/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */
define('dummy/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('dummy/router', ['exports', 'ember', 'dummy/config/environment'], function (exports, _ember, _dummyConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _dummyConfigEnvironment['default'].locationType
  });

  Router.map(function () {});

  exports['default'] = Router;
});
define('dummy/routes/application', ['exports', 'ember'], function (exports, _ember) {
  // app/routes/application.js
  exports['default'] = _ember['default'].Route.extend({
    intl: _ember['default'].inject.service(),
    beforeModel: function beforeModel() {
      return this.get('intl').setLocale('en-us');
    }
  });
});
define('dummy/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _emberAjaxServicesAjax) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberAjaxServicesAjax['default'];
    }
  });
});
define('dummy/services/intl', ['exports', 'ember-intl/services/intl'], function (exports, _emberIntlServicesIntl) {
  /**
   * Copyright 2015, Yahoo! Inc.
   * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
   */

  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberIntlServicesIntl['default'];
    }
  });
});
define("dummy/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    return {
      meta: {
        "revision": "Ember@2.9.1",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 4,
            "column": 0
          }
        },
        "moduleName": "dummy/templates/application.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("h2");
        dom.setAttribute(el1, "id", "title");
        var el2 = dom.createTextNode("Welcome to Ember");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment, 2, 2, contextualElement);
        return morphs;
      },
      statements: [["inline", "webrtc-troubleshooter", [], ["iceServers", ["subexpr", "@mut", [["get", "iceServers", ["loc", [null, [3, 35], [3, 45]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [3, 0], [3, 47]]], 0, 0]],
      locals: [],
      templates: []
    };
  })());
});
define("dummy/translations/webrtc-troubleshoot/de", ["exports"], function (exports) {
    exports["default"] = {
        "webrtcTroubleshoot": {
            "troubleshootTimeWarning": "Diese Test können bis zu zwei Minuten dauern.",
            "checkMicrophone": "Mikrofon wird überprüft...",
            "checkMicrophoneSuccess": "Keine Mikrofonprobleme",
            "checkMicrophoneFail": "Hoppla, es gibt ein Mikrofonproblem!",
            "checkVolumeFailure": "Hoppla, wir können Sie nicht hören! Sie haben möglicherweise ein Problem mit Ihrem Mikrofon!",
            "checkCamera": "Kamera wird überprüft...",
            "checkCameraSuccess": "Keine Kameraprobleme",
            "checkCameraFail": "Hoppla, es gibt ein Kameraproblem!",
            "checkCameraAdvanced": "Erweiterte Kameratests werden ausgeführt ...",
            "checkCameraAdvancedSuccess": "Erweiterte Kameratests abgeschlossen",
            "checkCameraAdvancedFail": "Fehler bei den erweiterten Kameratests",
            "checkThroughput": "Netzwerkdurchsatz wird überprüft ...",
            "checkThroughputSuccess": "Durchsatzüberprüfung abgeschlossen",
            "checkThroughputFail": "Fehler bei der Durchsatzüberprüfung",
            "checkBandwidth": "Videobandbreite wird überprüft ...",
            "checkBandwidthSuccess": "Bandbreitenüberprüfung abgeschlossen",
            "checkBandwidthFail": "Fehler bei der Bandbreitenüberprüfung",
            "checkConnectivity": "Verbindung wird überprüft...",
            "checkConnectivitySuccess": "Keine Verbindungsprobleme",
            "checkConnectivityFail": "Hoppla, es gibt ein Verbindungsproblem!"
        }
    };
});
define("dummy/translations/webrtc-troubleshoot/en-us", ["exports"], function (exports) {
  exports["default"] = {
    "webrtcTroubleshoot": {
      "troubleshootTimeWarning": "These tests may take up to 2 minutes.",
      "checkMicrophone": "Checking microphone ...",
      "checkMicrophoneSuccess": "No microphone issues",
      "checkMicrophoneFail": "Oops, there was a microphone issue!",
      "checkVolumeFailure": "Oops, we can't hear you! You might have a problem with your microphone!",
      "checkCamera": "Checking camera ...",
      "checkCameraSuccess": "No camera issues",
      "checkCameraFail": "Oops, there was a camera issue!",
      "checkCameraAdvanced": "Performing advanced camera tests ...",
      "checkCameraAdvancedSuccess": "Advanced camera tests complete",
      "checkCameraAdvancedFail": "Advanced camera tests failed",
      "checkThroughput": "Checking network throughput ...",
      "checkThroughputSuccess": "Throughput check complete",
      "checkThroughputFail": "Throughput check failed",
      "checkBandwidth": "Checking video bandwidth ...",
      "checkBandwidthSuccess": "Bandwidth check complete",
      "checkBandwidthFail": "Bandwidth check failed",
      "checkConnectivity": "Checking connectivity ...",
      "checkConnectivitySuccess": "No connectivity issues",
      "checkConnectivityFail": "Oops, there was a connectivity issue!"
    }
  };
});
define("dummy/translations/webrtc-troubleshoot/es", ["exports"], function (exports) {
    exports["default"] = {
        "webrtcTroubleshoot": {
            "troubleshootTimeWarning": "Estas pruebas pueden tardar hasta 2 minutos.",
            "checkMicrophone": "Verificando micrófono...",
            "checkMicrophoneSuccess": "No hay problemas con el micrófono",
            "checkMicrophoneFail": "Hay un problema con el micrófono",
            "checkVolumeFailure": "No podemos escucharlo. Es posible que tenga un problema con su micrófono.",
            "checkCamera": "Verificando cámara...",
            "checkCameraSuccess": "No hay problemas con la cámara",
            "checkCameraFail": "Hay un problema con la cámara",
            "checkCameraAdvanced": "Realizando pruebas avanzadas de la cámara...",
            "checkCameraAdvancedSuccess": "Pruebas avanzadas de la cámara completadas",
            "checkCameraAdvancedFail": "Error en las pruebas avanzadas de la cámara",
            "checkThroughput": "Verificando rendimiento de la red...",
            "checkThroughputSuccess": "Verificación de rendimiento completada",
            "checkThroughputFail": "Error en la verificación de rendimiento",
            "checkBandwidth": "Verificando ancho de banda de video...",
            "checkBandwidthSuccess": "Verificación de ancho de banda completada",
            "checkBandwidthFail": "Error en la verificación de ancho de banda",
            "checkConnectivity": "Verificando conectividad...",
            "checkConnectivitySuccess": "No hay problemas de conectividad",
            "checkConnectivityFail": "Hay un problema con la conectividad"
        }
    };
});
define("dummy/translations/webrtc-troubleshoot/fr", ["exports"], function (exports) {
    exports["default"] = {
        "webrtcTroubleshoot": {
            "troubleshootTimeWarning": "Ces tests peuvent prendre 2 minutes au plus.",
            "checkMicrophone": "Vérification du microphone...",
            "checkMicrophoneSuccess": "Aucun problème de microphone",
            "checkMicrophoneFail": "Désolé ! Une erreur s'est produite avec le microphone.",
            "checkVolumeFailure": "Désolé ! Nous ne vous entendons pas. Il se peut que votre microphone ait un problème.",
            "checkCamera": "Vérification de la caméra...",
            "checkCameraSuccess": "Aucun problème avec la caméra",
            "checkCameraFail": "Désolé ! Une erreur s'est produite avec la caméra.",
            "checkCameraAdvanced": "Tests de caméras avancés en cours...",
            "checkCameraAdvancedSuccess": "Tests de caméras avancés terminés",
            "checkCameraAdvancedFail": "Échec des tests de caméras avancés",
            "checkThroughput": "Vérification du débit du réseau...",
            "checkThroughputSuccess": "Vérification du débit terminée...",
            "checkThroughputFail": "Échec de la vérification du débit",
            "checkBandwidth": "Vérification de la bande passante vidéo...",
            "checkBandwidthSuccess": "Vérification de la bande passante vidéo terminée",
            "checkBandwidthFail": "Échec de la vérification de la bande passante vidéo...",
            "checkConnectivity": "Vérification de la connectivité...",
            "checkConnectivitySuccess": "Aucun problème de connectivité",
            "checkConnectivityFail": "Désolé ! Il y a eu un problème de connectivité."
        }
    };
});
define("dummy/translations/webrtc-troubleshoot/it", ["exports"], function (exports) {
    exports["default"] = {
        "webrtcTroubleshoot": {
            "troubleshootTimeWarning": "La verifica potrebbe richiedere fino a 2 minuti.",
            "checkMicrophone": "Verifica microfono in corso...",
            "checkMicrophoneSuccess": "Il microfono funziona",
            "checkMicrophoneFail": "Il microfono non funziona!",
            "checkVolumeFailure": "Impossibile udire l'utente. Il microfono non funziona.",
            "checkCamera": "Verifica videocamera in corso...",
            "checkCameraSuccess": "La videocamera funziona",
            "checkCameraFail": "La videocamera non funziona!",
            "checkCameraAdvanced": "Esecuzione verifiche avanzate videocamera in corso...",
            "checkCameraAdvancedSuccess": "Verifiche avanzate videocamera completate",
            "checkCameraAdvancedFail": "Verifiche avanzate videocamera non completate",
            "checkThroughput": "Verifica velocità rete in corso...",
            "checkThroughputSuccess": "Verifica velocità completata",
            "checkThroughputFail": "Verifica velocità non completata",
            "checkBandwidth": "Verifica larghezza banda video in corso...",
            "checkBandwidthSuccess": "Verifica larghezza banda completata",
            "checkBandwidthFail": "Verifica larghezza banda non completata",
            "checkConnectivity": "Verifica connettività in corso...",
            "checkConnectivitySuccess": "Nessun problema di connettività",
            "checkConnectivityFail": "Problema di connettività!"
        }
    };
});
define("dummy/translations/webrtc-troubleshoot/ja", ["exports"], function (exports) {
    exports["default"] = {
        "webrtcTroubleshoot": {
            "troubleshootTimeWarning": "これらのテストには最長 2 分かかる場合があります。",
            "checkMicrophone": "マイクをチェックしています ...",
            "checkMicrophoneSuccess": "マイクに問題はありません",
            "checkMicrophoneFail": "マイクに問題が見つかりました!",
            "checkVolumeFailure": "音声が聞こえません。マイクに問題がある可能性があります。",
            "checkCamera": "カメラをチェックしています ...",
            "checkCameraSuccess": "カメラに問題はありません",
            "checkCameraFail": "カメラに問題が見つかりました!",
            "checkCameraAdvanced": "カメラの高度なテストを実行しています...",
            "checkCameraAdvancedSuccess": "カメラの高度なテストが完了",
            "checkCameraAdvancedFail": "カメラの高度なテストが失敗",
            "checkThroughput": "ネットワークの処理能力をチェックしています...",
            "checkThroughputSuccess": "処理能力チェックの完了",
            "checkThroughputFail": "処理能力チェックの失敗",
            "checkBandwidth": "ビデオの帯域幅をチェックしています...",
            "checkBandwidthSuccess": "処理能力チェックの完了",
            "checkBandwidthFail": "処理能力チェックの失敗",
            "checkConnectivity": "接続をチェックしています ...",
            "checkConnectivitySuccess": "接続に問題はありません",
            "checkConnectivityFail": "接続に問題が見つかりました!"
        }
    };
});
define("dummy/translations/webrtc-troubleshoot/ko", ["exports"], function (exports) {
    exports["default"] = {
        "webrtcTroubleshoot": {
            "troubleshootTimeWarning": "이러한 테스트는 최대 2분이 걸릴 수 있습니다.",
            "checkMicrophone": "마이크 확인 중...",
            "checkMicrophoneSuccess": "마이크 문제 없음",
            "checkMicrophoneFail": "마이크 문제가 있습니다.",
            "checkVolumeFailure": "소리가 들리지 않습니다. 마이크에 문제가 있을 수도 있습니다.",
            "checkCamera": "카메라 검사 중...",
            "checkCameraSuccess": "카메라 문제 없음",
            "checkCameraFail": "카메라 문제가 있습니다.",
            "checkCameraAdvanced": "고급 카메라 테스트 수행 중...",
            "checkCameraAdvancedSuccess": "고급 카메라 테스트 완료",
            "checkCameraAdvancedFail": "고급 카메라 테스트 실패",
            "checkThroughput": "네트워크 처리량 확인 중...",
            "checkThroughputSuccess": "처리량 확인 완료",
            "checkThroughputFail": "처리량 확인 실패",
            "checkBandwidth": "비디오 대역폭 확인 중...",
            "checkBandwidthSuccess": "대역폭 확인 완료",
            "checkBandwidthFail": "대역폭 확인 실패",
            "checkConnectivity": "연결 검사 중...",
            "checkConnectivitySuccess": "연결 문제 없음",
            "checkConnectivityFail": "연결 문제가 있습니다."
        }
    };
});
define("dummy/translations/webrtc-troubleshoot/nl", ["exports"], function (exports) {
    exports["default"] = {
        "webrtcTroubleshoot": {
            "troubleshootTimeWarning": "Deze tests kunnen 2 minuten duren.",
            "checkMicrophone": "Microfoon controleren...",
            "checkMicrophoneSuccess": "Geen microfoonproblemen",
            "checkMicrophoneFail": "Er is een probleem met de microfoon.",
            "checkVolumeFailure": "We kunnen u niet horen. Er is mogelijk een probleem met uw microfoon.",
            "checkCamera": "Camera controleren...",
            "checkCameraSuccess": "Geen cameraproblemen",
            "checkCameraFail": "Er is een probleem met de camera.",
            "checkCameraAdvanced": "Uitvoeren van uitgebreide cameratests...",
            "checkCameraAdvancedSuccess": "Uitgebreide cameratests voltooid",
            "checkCameraAdvancedFail": "Uitgebreide cameratests mislukt",
            "checkThroughput": "Controleren van netwerkverbinding...",
            "checkThroughputSuccess": "Netwerkcontrole voltooid",
            "checkThroughputFail": "Netwerkcontrole mislukt",
            "checkBandwidth": "Controleren van videobandbreedte...",
            "checkBandwidthSuccess": "Controle van bandbreedte voltooid",
            "checkBandwidthFail": "Controle van bandbreedte mislukt",
            "checkConnectivity": "Connectiviteit controleren...",
            "checkConnectivitySuccess": "Geen connectiviteitsproblemen",
            "checkConnectivityFail": "Er is een probleem met de connectiviteit."
        }
    };
});
define("dummy/translations/webrtc-troubleshoot/no", ["exports"], function (exports) {
    exports["default"] = {
        "webrtcTroubleshoot": {
            "troubleshootTimeWarning": "Disse testene kan ta opptil 2 minutter.",
            "checkMicrophone": "Sjekker mikrofon ...",
            "checkMicrophoneSuccess": "Ingen mikrofonproblemer",
            "checkMicrophoneFail": "Beklager. Det oppstod et mikrofonproblem.",
            "checkVolumeFailure": "Beklager, vi kan ikke høre deg. Det kan hende du har et problem med mikrofonen.",
            "checkCamera": "Sjekker kamera ...",
            "checkCameraSuccess": "Ingen kameraproblemer",
            "checkCameraFail": "Beklager, det oppstod et kameraproblem.",
            "checkCameraAdvanced": "Utfører avanserte kameratester ...",
            "checkCameraAdvancedSuccess": "Avanserte kameratester er fullført",
            "checkCameraAdvancedFail": "Avanserte kameratester mislyktes",
            "checkThroughput": "Sjekker nettverksgjennomstrømming ...",
            "checkThroughputSuccess": "Gjennomstrømmingssjekk er fullført",
            "checkThroughputFail": "Gjennomstrømmingssjekk mislyktes",
            "checkBandwidth": "Sjekker videobåndbredde ...",
            "checkBandwidthSuccess": "Sjekk av båndbredde er fullført",
            "checkBandwidthFail": "Sjekk av båndbredde mislyktes",
            "checkConnectivity": "Kontrollerer tilkobling ...",
            "checkConnectivitySuccess": "Ingen tilkoblingsproblemer",
            "checkConnectivityFail": "Beklager, det oppstod et tilkoblingsproblem."
        }
    };
});
define("dummy/translations/webrtc-troubleshoot/pl", ["exports"], function (exports) {
    exports["default"] = {
        "webrtcTroubleshoot": {
            "troubleshootTimeWarning": "Wykonanie testów może zająć do 2 minut.",
            "checkMicrophone": "Sprawdzanie mikrofonu...",
            "checkMicrophoneSuccess": "Brak problemów z mikrofonem",
            "checkMicrophoneFail": "Ups! Wystąpił problem z mikrofonem.",
            "checkVolumeFailure": "Nie słyszę Cię! Być może wystąpił problem z mikrofonem.",
            "checkCamera": "Sprawdzanie kamery...",
            "checkCameraSuccess": "Brak problemów z kamerą",
            "checkCameraFail": "Ups! Wystąpił problem z kamerą.",
            "checkCameraAdvanced": "Wykonywanie zaawansowanych testów kamery...",
            "checkCameraAdvancedSuccess": "Zaawansowane testy kamery zakończone",
            "checkCameraAdvancedFail": "Zaawansowane testy kamery nie powiodły się",
            "checkThroughput": "Sprawdzanie przepływności sieci...",
            "checkThroughputSuccess": "Kontrola przepływności zakończona",
            "checkThroughputFail": "Kontrola przepływności zakończona niepowodzeniem",
            "checkBandwidth": "Sprawdzanie przepustowości wideo...",
            "checkBandwidthSuccess": "Kontrola przepustowości zakończona",
            "checkBandwidthFail": "Kontrola przepustowości zakończona niepowodzeniem",
            "checkConnectivity": "Sprawdzanie łączności...",
            "checkConnectivitySuccess": "Brak problemów z łącznością",
            "checkConnectivityFail": "Ups! Wystąpił problem z łącznością."
        }
    };
});
define("dummy/translations/webrtc-troubleshoot/pt-br", ["exports"], function (exports) {
    exports["default"] = {
        "webrtcTroubleshoot": {
            "troubleshootTimeWarning": "Estes testes podem demorar até 2 minutos.",
            "checkMicrophone": "Verificando o microfone ...",
            "checkMicrophoneSuccess": "Nenhum problema no microfone",
            "checkMicrophoneFail": "Ops, houve um problema no microfone!",
            "checkVolumeFailure": "Ops, não conseguimos ouvir você! Deve ter algum problema com seu microfone!",
            "checkCamera": "Verificando a câmera ...",
            "checkCameraSuccess": "Nenhum problema na câmera",
            "checkCameraFail": "Ops, houve um problema na câmera!",
            "checkCameraAdvanced": "Realizando testes avançados de câmera...",
            "checkCameraAdvancedSuccess": "Testes avançados de câmera concluídos",
            "checkCameraAdvancedFail": "Testes avançados de câmera falharam",
            "checkThroughput": "Verificando a taxa de transferência de rede...",
            "checkThroughputSuccess": "Verificação de taxa de transferência concluída",
            "checkThroughputFail": "Verificação de taxa de transferência falhou",
            "checkBandwidth": "Verificando a largura de banda de vídeo...",
            "checkBandwidthSuccess": "Verificação de largura de banda de vídeo concluída",
            "checkBandwidthFail": "Verificação de largura de banda de vídeo falhou",
            "checkConnectivity": "Verificando a conectividade ...",
            "checkConnectivitySuccess": "Nenhum problema na conectividade",
            "checkConnectivityFail": "Ops, houve um problema na conectividade!"
        }
    };
});
define("dummy/translations/webrtc-troubleshoot/sv", ["exports"], function (exports) {
    exports["default"] = {
        "webrtcTroubleshoot": {
            "troubleshootTimeWarning": "Det kan ta upp till 2 minuter att köra dessa tester.",
            "checkMicrophone": "Kontrollerar mikrofon ...",
            "checkMicrophoneSuccess": "Inga mikrofonproblem",
            "checkMicrophoneFail": "Ojdå, det har uppstått ett mikrofonproblem!",
            "checkVolumeFailure": "Hallå, vi kan inte höra dig! Du kanske har problem med mikrofonen!",
            "checkCamera": "Kontrollerar kamera ...",
            "checkCameraSuccess": "Inga problem med kameran",
            "checkCameraFail": "Ojdå, det har uppstått ett problem med kameran!",
            "checkCameraAdvanced": "Utför avancerade kameratester ...",
            "checkCameraAdvancedSuccess": "Avancerade kameratester slutförda",
            "checkCameraAdvancedFail": "Avancerade kameratester misslyckades",
            "checkThroughput": "Kontrollerar nätverkets dataflöde ...",
            "checkThroughputSuccess": "Dataflödeskontroll klar",
            "checkThroughputFail": "Dataflödeskontroll misslyckades",
            "checkBandwidth": "Kontrollerar videobandbredd ...",
            "checkBandwidthSuccess": "Bandbreddskontroll klar",
            "checkBandwidthFail": "Bandbreddskontroll misslyckades",
            "checkConnectivity": "Kontrollerar anslutningen...",
            "checkConnectivitySuccess": "Inga anslutningsproblem",
            "checkConnectivityFail": "Ojdå, det har uppstått ett anslutningsproblem!"
        }
    };
});
define("dummy/translations/webrtc-troubleshoot/th", ["exports"], function (exports) {
    exports["default"] = {
        "webrtcTroubleshoot": {
            "troubleshootTimeWarning": "การทดสอบเหล่านี้อาจใช้เวลาสูงสุด 2 นาที",
            "checkMicrophone": "กำลังตรวจสอบไมโครโฟน ..",
            "checkMicrophoneSuccess": "ไม่พบปัญหาเกี่ยวกับไมโครโฟน",
            "checkMicrophoneFail": "ขออภัย พบปัญหาเกี่ยวกับไมโครโฟน!",
            "checkVolumeFailure": "ขออภัย เราไม่ได้ยินเสียงคุณ! ไมโครโฟนของคุณอาจมีปัญหา!",
            "checkCamera": "กำลังตรวจสอบกล้อง ...",
            "checkCameraSuccess": "ไม่พบปัญหาเกี่ยวกับกล้อง",
            "checkCameraFail": "ขออภัย พบปัญหาเกี่ยวกับกล้อง!",
            "checkCameraAdvanced": "กำลังดำเนินการทดสอบกล้องขั้นสูง ...",
            "checkCameraAdvancedSuccess": "การทดสอบกล้องขั้นสูงเสร็จสมบูรณ์",
            "checkCameraAdvancedFail": "การทดสอบกล้องขั้นสูงล้มเหลว",
            "checkThroughput": "กำลังตรวจสอบปริมาณงานเครือข่าย ...",
            "checkThroughputSuccess": "การตรวจสอบปริมาณงานเสร็จสิ้น",
            "checkThroughputFail": "การตรวจสอบปริมาณงานล้มเหลว",
            "checkBandwidth": "กำลังตรวจสอบแบนด์วิธวิดีโอ ...",
            "checkBandwidthSuccess": "การตรวจสอบแบนด์วิธเสร็จสิ้น",
            "checkBandwidthFail": "การตรวจสอบแบนด์วิธล้มเหลว",
            "checkConnectivity": "กำลังตรวจสอบการเชื่อมต่อ ...",
            "checkConnectivitySuccess": "ไม่พบปัญหาเกี่ยวกับการเชื่อมต่อ",
            "checkConnectivityFail": "ขออภัย พบปัญหาเกี่ยวกับการเชื่อมต่อ!"
        }
    };
});
define("dummy/translations/webrtc-troubleshoot/tr", ["exports"], function (exports) {
    exports["default"] = {
        "webrtcTroubleshoot": {
            "troubleshootTimeWarning": "Bu testler 2 dakika sürebilir.",
            "checkMicrophone": "Mikrofon denetleniyor...",
            "checkMicrophoneSuccess": "Mikrofonla ilgili bir sorun yok",
            "checkMicrophoneFail": "Ne yazık ki mikrofonla ilgili bir sorun var!",
            "checkVolumeFailure": "Ne yazık ki sizi duyamıyoruz! Mikrofonunuzla ilgili bir sorun olabilir!",
            "checkCamera": "Kamera denetleniyor...",
            "checkCameraSuccess": "Kamerayla ilgili sorun yok",
            "checkCameraFail": "Ne yazık ki kamerayla ilgili bir sorun var!",
            "checkCameraAdvanced": "Gelişmiş kamera testleri gerçekleştiriliyor...",
            "checkCameraAdvancedSuccess": "Gelişmiş kamera testleri tamamlandı",
            "checkCameraAdvancedFail": "Gelişmiş kamera testleri başarısız oldu",
            "checkThroughput": "Ağ performansı denetleniyor...",
            "checkThroughputSuccess": "Performans denetimi tamamlandı",
            "checkThroughputFail": "Performans denetimi başarısız oldu",
            "checkBandwidth": "Video bant genişliği denetleniyor...",
            "checkBandwidthSuccess": "Bant genişliği denetimi tamamlandı",
            "checkBandwidthFail": "Bant genişliği denetimi başarısız oldu",
            "checkConnectivity": "Bağlantı denetleniyor...",
            "checkConnectivitySuccess": "Bağlantı sorunu yok",
            "checkConnectivityFail": "Ne yazık ki bağlantıyla ilgili bir sorun var!"
        }
    };
});
define("dummy/translations/webrtc-troubleshoot/zh-cn", ["exports"], function (exports) {
    exports["default"] = {
        "webrtcTroubleshoot": {
            "troubleshootTimeWarning": "这些测试可能需要 2 分钟。",
            "checkMicrophone": "正在检查麦克风...",
            "checkMicrophoneSuccess": "麦克风正常",
            "checkMicrophoneFail": "哎呀，麦克风出问题了！",
            "checkVolumeFailure": "哎呀，我们听不到您讲话！您的麦克风可能出现问题！",
            "checkCamera": "正在检查摄像头...",
            "checkCameraSuccess": "摄像头正常",
            "checkCameraFail": "哎呀，摄像头出问题了！",
            "checkCameraAdvanced": "执行高级摄像头测试...",
            "checkCameraAdvancedSuccess": "高级摄像头测试完成",
            "checkCameraAdvancedFail": "高级摄像头测试失败",
            "checkThroughput": "正在检查网络吞吐量...",
            "checkThroughputSuccess": "吞吐量检查完成",
            "checkThroughputFail": "吞吐量检查失败",
            "checkBandwidth": "正在检查视频带宽...",
            "checkBandwidthSuccess": "带宽检查完成",
            "checkBandwidthFail": "带宽检查失败",
            "checkConnectivity": "正在检查连接...",
            "checkConnectivitySuccess": "连接正常",
            "checkConnectivityFail": "哎呀，连接出问题了！"
        }
    };
});
define("dummy/translations/webrtc-troubleshoot/zh-tw", ["exports"], function (exports) {
    exports["default"] = {
        "webrtcTroubleshoot": {
            "troubleshootTimeWarning": "這些測試可能需要 2 分鐘。",
            "checkMicrophone": "正在檢查麥克風...",
            "checkMicrophoneSuccess": "麥克風正常",
            "checkMicrophoneFail": "哎呀，麥克風出問題了！",
            "checkVolumeFailure": "哎呀，我們聽不到您講話！您的麥克風可能出現問題！",
            "checkCamera": "正在檢查攝影機...",
            "checkCameraSuccess": "攝影機正常",
            "checkCameraFail": "哎呀，攝影機出問題了！",
            "checkCameraAdvanced": "執行進階攝影機測試...",
            "checkCameraAdvancedSuccess": "進階攝影機測試完成",
            "checkCameraAdvancedFail": "進階攝影機測試失敗",
            "checkThroughput": "正在檢查網路輸送量...",
            "checkThroughputSuccess": "輸送量檢查完成",
            "checkThroughputFail": "輸送量檢查失敗",
            "checkBandwidth": "正在檢查視訊頻寬...",
            "checkBandwidthSuccess": "頻寬檢查完成",
            "checkBandwidthFail": "頻寬檢查失敗",
            "checkConnectivity": "正在檢查連接...",
            "checkConnectivitySuccess": "連接正常",
            "checkConnectivityFail": "哎呀，連接出問題了！"
        }
    };
});
define('dummy/utils/intl/missing-message', ['exports', 'ember', 'ember-intl/utils/links'], function (exports, _ember, _emberIntlUtilsLinks) {
  exports['default'] = missingMessage;
  var warn = _ember['default'].warn;

  function missingMessage(key, locales) {
    if (!locales) {
      warn('[ember-intl] no locale has been set. Documentation: ' + _emberIntlUtilsLinks['default'].unsetLocale, false, {
        id: 'ember-intl-no-locale-set'
      });
    } else {
      warn('[ember-intl] translation: \'' + key + '\' on locale: \'' + locales.join(', ') + '\' was not found.', false, {
        id: 'ember-intl-missing-translation'
      });
    }

    return 'Missing translation: ' + key;
  }
});
define('dummy/utils/video-frame-checker', ['exports', 'ember-webrtc-troubleshoot/utils/video-frame-checker'], function (exports, _emberWebrtcTroubleshootUtilsVideoFrameChecker) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberWebrtcTroubleshootUtilsVideoFrameChecker['default'];
    }
  });
});
/* jshint ignore:start */



/* jshint ignore:end */

/* jshint ignore:start */

define('dummy/config/environment', ['ember'], function(Ember) {
  var prefix = 'dummy';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

/* jshint ignore:end */

/* jshint ignore:start */

if (!runningTests) {
  require("dummy/app")["default"].create({"name":"ember-webrtc-troubleshoot","version":"3.0.0+eedd69d2"});
}

/* jshint ignore:end */
//# sourceMappingURL=dummy.map
