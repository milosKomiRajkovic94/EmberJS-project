import DS from 'ember-data';

export default DS.Model.extend({
	title: DS.attr('string'),
	class: DS.belongsTo('class'),
	grades: DS.hasMany('grades')
});
