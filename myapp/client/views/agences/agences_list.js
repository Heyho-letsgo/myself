document.title = "Liste des agences";

Template.agencesList.helpers({
    agences: function () {
        return Agences.find({},
            {
                sort: {raisonSocialeAgence: -1}, limit: 5
            });
    },
    agencesTotalParUttilisateur: function () {
        return Agences.find(
            {
                userId: {$in: [Meteor.user()]},
                'archive': false
            }
        ).count();
    },
    agencesTotal: function () {
        return Agences.find(
            {
                userId: {$in: [Meteor.user()]},
                'archive': false
            }
        ).count();
    },

    lienVersAgencesSearchSiEgalAUn: function () {
       var zob =  Agences.find(
            {
                userId: {$in: [Meteor.user()]},
                'archive': false
            }
        ).count();
        if (zob >= 1){
            return "Chercher  une agence !  ";
        }
    },

    lienVersAccueil: function () {
        var zob =  Agences.find(
            {
                userId: {$in: [Meteor.user()]},
                'archive': false
            }
        ).count();
        if(zob ===0){
            return "Fuck";
        }
    },








    username: function () {
        return Meteor.user() && Meteor.user()._id;
    },
    agencesParUtilisateur: function () {
        return Agences.find({
            userId: {$in: [Meteor.user()]},
            'archive': false
        });
    }
});


Template.agencesList.events({

    'click .archiveItem': function () {
        Agences.update(this._id, {$set: {archive: true}});
    }
});
