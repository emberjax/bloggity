import Ember from 'ember';
import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('post', {});

test('it can be created with title / body / authorName', function(assert) {
  assert.expect(3);
  var model = this.subject();
  var store = this.store();
  var record;

  Ember.run(function(){
    store.createRecord('post', {id: 1, title: 'foo', body: 'bar', authorName: 'baz'});
    record = store.find('post', 1);
  });

  record.then(function(model){
    var expected = model.toJSON();
    assert.equal(expected.title, 'foo');
    assert.equal(expected.body, 'bar');
    assert.equal(expected.authorName, 'baz');
  });
});
