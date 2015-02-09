/**
 * Created by andrew on 09/02/15.
 */

Template.groupeItem.events({
    'click .delete': function () {
        Groupes.remove(this._id);
        Router.go('groupesList');
    }

});


