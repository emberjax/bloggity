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
  var posts = server.createList('post', 2);
 

  andThen(function() {
    assert.equal(currentURL(), '/posts');
    assert.equal(find('h1').text(), 'Bloggity: The EmberJax Blog');
    posts.forEach((post)=>{
      assert.equal(find('li.post-' + post.id).text(), post.title);
    });
  });
  click('a:last');

  andThen(function(){
    assert.ok( /posts/.test(currentURL()));
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



test('posts show displays title and body of desired post', function(assert) {
  var post = server.create('post', { id: 1, title: 'foo', body: 'bar' });
  visit('/posts/1');

  click('.back');
  andThen(function(){
    assert.equal(currentURL(), '/posts');
  });
});



