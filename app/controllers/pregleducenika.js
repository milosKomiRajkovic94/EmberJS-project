import Ember from 'ember';


export default Ember.Controller.extend({
	predmetid: "",
	ocena: "",

	actions:{

		unesiOcenu(student){
			var mark = this.get('ocena');
			var val = this.get('predmetid');

			if(val !== ""){
				var subject = this.store.peekRecord('subject', val);

				this.store.createRecord('grade', {
					marks: [mark],
					student: student,
					subject: subject
				}).save().then(function(grade){
					student.get('grades').pushObject(grade);
					student.save();
					subject.get('grades').pushObject(grade);
					subject.save();
				});
				
				alert("Uspešno uneta prva ocena iz predmeta!");
			}else{
				alert("Nije izabran nijedan predmet!");
			}
		},
		
		unesiPojedinacno(val){
			var mark = this.get('ocena');
			
			this.store.findRecord('grade', val).then(function(grade){
				grade.get('marks').pushObject(mark);
				grade.save();
			});
			
			alert("Uspešno uneta ocena iz datog predmeta!");
		},
		
		izbrisiRed(val){
			this.store.findRecord('grade', val, {backgroundReload: false}).then(function(grade){
				grade.deleteRecord();
				grade.get('isDeleted');
				grade.save();
			});

			alert("Uspešno izbrisan red u tabeli stanja ocena!");
		}
	}
});
