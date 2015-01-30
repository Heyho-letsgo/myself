Meteor.publish('agences', function() {
    return Agences.find();
});


Meteor.publish('groupes', function() {
    return Groupes.find();
});