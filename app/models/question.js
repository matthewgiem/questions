import DS from 'ember-data';

export default DS.Model.extend({
  statement: DS.attr(),
  author: DS.attr(),
  additionalnotes: DS.attr(),
  answers: DS.hasMany('answer', { asymc: true })
});
