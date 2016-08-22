import Ember from 'ember';

export default Ember.Route.extend({
  editQuestionForm: false,
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },
  actions:  {
    updateQuesionComponent()  {
      this.set('editQuestionForm', false);
      console.log("why the fuck isn't this working");
    },
    editQuestionFormButton() {
      this.set('editQuestionForm', true);
      console.log("why the fuck isn't this working FFUUCCKK");
      console.log('try and put this in a component');
    }
  }
});
