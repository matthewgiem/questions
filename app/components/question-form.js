import Ember from 'ember';

export default Ember.Component.extend({
  actions:  {
    submitFormToComponent() {
      var params = {
        question: this.get('question'),
        author: this.get('author'),
        additionalnotes: this.get('additionalnotes')
      }
      this.sendAction('submitQuestionToRoute', params);
    }
  }
});
