import Ember from 'ember';

export default Ember.Route.extend({
  enter: function(){
    this._super(this, arguments);
    this.transitionTo('posts');
  }
});
