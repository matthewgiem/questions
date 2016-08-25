import Ember from 'ember';

export default Ember.Component.extend({
  editQuestionForm: false,
  actions:  {
    editQuestionFormButton()  {
      this.set('editQuestionForm', true);

    },
     updateQuestionComponent(question){
      var params = {
        statement: this.get('statement'),
        author: this.get('author'),
        additionalnotes: this.get('additionalnotes'),
      };
      this.set('editQuestionForm', false);
      this.sendAction('update', question, params);
    }
  }
});
