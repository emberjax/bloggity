import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'bloggity/tests/helpers/start-app';

var application;

module('Acceptance: Post / Posts', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting "/" redirects to posts', function(assert) {
  server.create('post');
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/posts');
  });
});

test('posts show displays title and body of desired post', function(assert) {
  assert.expect(2);
  var post = server.create('post', { id: 1, title: 'foo', body: 'bar' });
  visit('/posts/1');

  andThen(function() {
    assert.ok(/foo/.test(find('h1').text()));
    assert.ok(/bar/.test(find("div .content").text()));
  });
});
