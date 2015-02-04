Agences = new Meteor.Collection('agences');



Agences.allow({
    insert: function(userId, doc ){return !! userId;},
    update: function(userId, doc ){return !! userId}
    });