/**
 * Created by andrew on 02/02/15.
 */
Template.agenceEdit.events({
    'submit form': function (e) {
        e.preventDefault();

        var currentAgenceId = this._id;
        var agenceProperties = {
            raisonSocialeAgence: $(e.target).find('[name=raisonSocialeAgence]').val(),
            ville: $(e.target).find('[name=ville]').val(),
            type: $(e.target).find('[name=type]').val(),
            adresse: $(e.target).find('[name=adresse]').val()
        };

        Agences.update(currentAgenceId, {$set: agenceProperties}, function (error) {
            if (error) {
                // display the error to the user
                alert(error.reason);
            } else {
                Router.go('agenceItem', {_id: currentAgenceId});
            }
        });
    }
})

