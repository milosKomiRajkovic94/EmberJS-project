import DS from 'ember-data';

export default DS.Model.extend({
	firstName: DS.attr('string'),
	lastName: DS.attr('string'),
	class: DS.belongsTo('class'),
	grades: DS.hasMany('grade'),
	visible: DS.attr('boolean')
});
