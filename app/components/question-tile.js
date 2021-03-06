import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestion: Ember.inject.service(),
  questionDetails: Ember.computed('question.statement', 'question.author', function() {
    return this.get('question.statement') + ' author: ' + this.get('question.author');
  }),
  actions:  {
    addQuestionToFavorite(question) {
      console.log(question);
      console.log(this.get('favoriteQuestion.questions'));
      this.get('favoriteQuestion').add(question);
      console.log(this.get('favoriteQuestion.questions'));
    }
  }
});
