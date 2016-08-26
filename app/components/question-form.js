import Ember from 'ember';

export default Ember.Component.extend({
  actions:  {
    submitFormToComponent() {
      var params = {
        statement: this.get('statement'),
        author: this.get('author'),
        additionalnotes: this.get('additionalnotes')
      };
      this.sendAction('submitQuestionToRoute', params);
    }
  }
});
