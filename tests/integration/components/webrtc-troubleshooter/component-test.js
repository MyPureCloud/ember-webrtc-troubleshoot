import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('webrtc-troubleshooter', 'Integration | Component | webrtc troubleshoot', {
  integration: true
});

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value')
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{webrtc-troubleshooter}}`);

  assert.equal(this.$('.options').length, 1);
});
