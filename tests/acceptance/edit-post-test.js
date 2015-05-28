import Ember from 'ember';
import {
  module,
  test
} from 'qunit';
import startApp from 'bloggity/tests/helpers/start-app';

var application;

module('Acceptance: EditPost', {
  beforeEach: function() {
    application = startApp();
  },

  afterEach: function() {
    Ember.run(application, 'destroy');
  }
});

test('visiting /edit-post', function(assert) {
  server.create('post', { title: 'baz', body: 'quux' });

  visit('/posts').then(function(){
    let editLink = find('li:contains("baz")').parent().parent().find("a:contains('Edit')");
    click(editLink);
  }).then(function() {
    fillIn('textarea', 'blogger');
    fillIn('input', 'Trip to outer space!');
    click('button');
  }).then(function(){
    assert.equal(currentURL(), '/posts');
    assert.ok(/Trip to outer space!/.test(find('li').text()));
  }).then(function(){
    click("li:contains('Trip to outer space!')");
  }).then(function(){
    assert.ok(/blogger/.test(find('div.content').text()));
  });

});
