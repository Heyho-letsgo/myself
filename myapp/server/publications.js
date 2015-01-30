Meteor.publish('groupes', function(raisonSociale) {
    return Groupes.find({raisonSociale: raisonSociale});
});

Meteor.publish('agences', function(type) {
    return Agences.find({type: type});
});

Meteor.publish('toutesLesAgences', function() {
    return Agences.find();
});

