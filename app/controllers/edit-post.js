import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit(){
      this.model.save().then(()=>{
        this.transitionToRoute('posts');
      });
    }
  }
});
