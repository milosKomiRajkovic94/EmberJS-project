import DS from 'ember-data';

export default DS.Model.extend({
	name: DS.attr('string'),
	subjects: DS.hasMany('subject'),
	students: DS.hasMany('student')
});
