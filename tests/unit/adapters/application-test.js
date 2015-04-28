import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('adapter:application', 'ApplicationAdapter', {});

// Replace this with your real tests.
test('sets a namespace to "api"', function(assert) {
  var adapter = this.subject();
  assert.equal(adapter.get('namespace'), 'api');
});
