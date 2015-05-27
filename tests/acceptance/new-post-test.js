import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'bloggity/tests/helpers/start-app';

var application;

module('Acceptance: NewPost', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('creating a post', function(assert) {
  assert.expect(2);

  visit('/posts').then(function(){
    click('a:contains("New Post")');
  }).then(function() {
    fillIn('textarea', 'blogger');
    fillIn('input', 'Trip to outer space!');
    click('button');
  }).then(function(){
    assert.equal(currentURL(), '/posts');
    assert.ok(/Trip to outer space!/.test(find('li').text()));
  });
});
