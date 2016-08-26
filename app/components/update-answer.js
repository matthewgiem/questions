import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions:  {
    updateAnswerForm()  {
      this.set('updateAnswerForm', true);
    },
    update (answer){
      var params = {
        text: this.get('text'),
        // question: this.get('question'),
        author: this.get('author'),
      };
      this.set('updateAnswerForm', false);
      this.sendAction('update', answer, params);
    }
  }
});
