import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | artwork/piece', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:artwork/piece');
    assert.ok(route);
  });
});
