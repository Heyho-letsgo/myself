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
                userId: { $in : [Meteor.user()]}}
        ).count();
    },
    agencesTotal: function () {
        return Agences.find().count();
    },
    username: function () {
        return Meteor.user() && Meteor.user()._id;
    },
    agencesParUtilisateur: function () {
        return Agences.find({
            userId: { $in : [Meteor.user()]}});
    }
  });


Template.agencesList.events({
    'click .deleteItem': function () {
        Agences.remove(this._id);
        Router.go('agencesList');
    },
  'click .archiveItem' : function () {
        Agences.update(this._id, {$set: {archive: true}});
       }
  });
