/**
 * Created by andrew on 02/02/15.
 */


Template.accueil.helpers({
    username: function () {
        return Meteor.user() && Meteor.user().username;
    }
});