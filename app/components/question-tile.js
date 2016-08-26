import Ember from 'ember';

export default Ember.Component.extend({
  questionDetails: Ember.computed('question.statement', 'question.author', function() {
    return this.get('question.statement') + ' author: ' + this.get('question.author');
  })
});
