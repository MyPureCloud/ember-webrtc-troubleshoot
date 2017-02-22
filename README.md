#### PSA

This addon is still under development and not *quite* ready for use.

TODO:
* [x] bring in bower deps
* [x] create dummy application
* [ ] more unit tests
* [ ] more integration tests

# ember-webrtc-troubleshoot

[![Build Status](https://travis-ci.org/MyPureCloud/ember-webrtc-troubleshoot.svg?branch=master)](https://travis-ci.org/MyPureCloud/ember-webrtc-troubleshoot)
[![Coverage Status](https://coveralls.io/repos/github/MyPureCloud/ember-webrtc-troubleshoot/badge.svg?branch=master)](https://coveralls.io/github/MyPureCloud/ember-webrtc-troubleshoot)

This addon is designed to provide you with two things:

1. A bunch of tests for self-diagnostic webrtc troubleshooting

2. A component for running those tests

This addon uses [ember-intl](https://github.com/yahoo/ember-intl) for i18n. It has it's own collection of keys (in English only). When using in your app, you'll want to replicate these i18n keys in your i18n. Eventually, I'd like to have a blueprint setup that does this for you automatically.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs linter and tests)
* `ember test` (These will fail because phantom/node have no support for webrtc)
* `ember test --server` (Tests should pass here)

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
