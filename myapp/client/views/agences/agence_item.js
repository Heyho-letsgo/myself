/**
 * Created by andrew on 09/02/15.
 */
Template.agenceItem.events({
    'click .deleteItem': function () {
        Agences.remove(this._id);
        Router.go('agencesList');
    }

});

