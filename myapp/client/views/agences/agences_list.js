Template.agencesList.helpers({
    agences: function () {
        return Agences.find({},
            {
                sort: {raisonSocialeAgence: -1}, limit: 5
            });
    },
      totalAgences: function () {
    	return Agences.find().count();
	}
});


Template.agencesList.helpers({
    agences: function () {
        return Agences.find();
    }
});

Template.agencesList.helpers({
    agencesTotalParUttilisateur: function () {
        return Agences.find(
            {
                userId: { $in : [Meteor.user()]}}
        ).count();
    }
});

Template.agencesList.helpers({
    agencesTotal: function () {
        return Agences.find().count();
    }
});




Template.agencesList.helpers({
    username: function () {
        return Meteor.user() && Meteor.user()._id;
    }
});


Template.agencesList.helpers({
    agencesParUtilisateur: function () {
        return Agences.find({
            userId: { $in : [Meteor.user()]}});
    }
});






