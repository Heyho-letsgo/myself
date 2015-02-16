/**
 * Created by andrew on 16/02/15.
 */

Utilisateurs = new Meteor.Collection('utilisateurs');



Utilisateurs.allow({
    insert: function(userId, doc ){return !! userId;},
    update: function(userId, doc ){return !! userId},
    remove: function(userId, doc ){return !! userId}
});