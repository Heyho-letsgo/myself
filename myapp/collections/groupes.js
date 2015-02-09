Groupes = new Meteor.Collection('groupes');


Groupes.allow({
    insert: function(userId, doc ){return !! userId;},
    update: function(userId, doc ){return !! userId}
});