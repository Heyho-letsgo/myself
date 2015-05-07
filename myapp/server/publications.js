Meteor.publish('groupes', function () {
    return Groupes.find();
});


Meteor.publish('agences', function () {

    return Agences.find();
});


Meteor.publish('utilisateurs', function () {

    return Utilisateurs.find();
});



Meteor.publish("uploads", function () {
      return Uploads.find();
});