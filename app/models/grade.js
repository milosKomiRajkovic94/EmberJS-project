import DS from 'ember-data';

export default DS.Model.extend({
	marks: DS.attr('array'),
	subject: DS.belongsTo('subject'),
	student: DS.belongsTo('student')
});
