Meteor.publish('groupes', function() {
    return Groupes.find();
});

Meteor.publish('agences', function(type) {
    return Agences.find({type: type});
});

Meteor.publish('toutesLesAgences', function() {

    return Agences.find();
});


