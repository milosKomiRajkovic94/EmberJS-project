import Ember from 'ember';

export default Ember.Controller.extend({
	actions:{
		unosPredmeta(val){
			var title = this.get('title');
			var razred = this.get('store').peekRecord('class', val);

			this.store.createRecord('subject', {
				title: title,
				class: razred
			}).save().then(function(subject){
				razred.get('subjects').pushObject(subject);
				razred.save();
			});

			this.setProperties({
				title: ''
			});

			alert("Uspešno dodavanje predmeta!");
		}
	}
});
