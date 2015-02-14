Meteor.publish('groupes', function() {
    return Groupes.find();
});


Meteor.publish('agences', function() {

    return Agences.find();
});


