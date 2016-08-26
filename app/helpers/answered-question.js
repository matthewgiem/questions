import Ember from 'ember';

export function answeredQuestion(params/*, hash*/) {
  var question = params[0];

  if(question.get('answers').get('length') > 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-ok-circle"></span>');
  };
  if(question.get('answers').get('length') < 1) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-remove-circle"></span>')
  }
}

export default Ember.Helper.helper(answeredQuestion);
