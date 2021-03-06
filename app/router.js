import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

export default Router.map(function() {
  this.route('posts', function() {});
  this.route('post', { path: '/posts/:id'});

  this.route('new-post', { path: '/posts/new' });
  this.route('edit-post', {path: '/post/:id/edit'});
});
