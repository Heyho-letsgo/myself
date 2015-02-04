Template.mainPage.helpers({

	affichageTotalAgences : function(){
		return Agences.find({}).count();
	}
});