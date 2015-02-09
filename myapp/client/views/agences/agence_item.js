/**
 * Created by andrew on 09/02/15.
 */
Template.AgenceItem.events({
    'click .delete': function () {
        Agences.remove(this._id);
        Router.go('AgencesList');
    }

});