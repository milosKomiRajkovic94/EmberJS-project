import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		unosUcenika(val){
			var firstName = this.get('firstName');
			var lastName = this.get('lastName')
			var razred = this.get('store').peekRecord('class', val);

			this.store.createRecord('student', {
				firstName: firstName,
				lastName: lastName,
				visible: false,
				class: razred
			}).save().then(function(student){
				razred.get('students').pushObject(student);
				razred.save();
			});

			this.setProperties({
				firstName: '',
				lastName: ''
			});

			alert("Uspešno dodavanje učenika!");
		}
	}
});
