Meteor.publish('groupes', function(raisonSociale) {
    return Groupes.find();
});

Meteor.publish('agences', function(type) {
    return Agences.find({type: type});
});

Meteor.publish('toutesLesAgences', function() {

    return Agences.find();
});


