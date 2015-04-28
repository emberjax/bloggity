import {
  moduleFor,
  test
} from 'ember-qunit';

moduleFor('route:posts', {});

test('model hook retrieves from posts api endpoint', function(assert) {
  assert.expect(2);
  var route = this.subject();
  var post = {id: 3};

  route.store = {
    find: function(args){
      assert.equal(args, 'post');
      return post;
    }
  };

  var model = route.model({});
  assert.equal(model, post);
});
