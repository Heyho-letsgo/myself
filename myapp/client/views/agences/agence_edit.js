/**
 * Created by andrew on 02/02/15.
 */
Template.agenceEdit.events({
    'submit form': function (e) {
        e.preventDefault();
        // Je récupère l'Id de l'agence
        var currentAgenceId = this._id;
        // Je récupère les valeurs saisies dans les champssci-dessous.
        var agenceProperties = {
            raisonSocialeAgence: $(e.target).find('[name=raisonSocialeAgence]').val(),
            ville: $(e.target).find('[name=ville]').val(),
            type: $(e.target).find('[name=type]').val(),
            adresse: $(e.target).find('[name=adresse]').val(),
            agenceNew: 0,
            archive: false,
            dateModification: new Date()

        };
        // Je met à jour les valeurs saisies dans la collection
        Agences.update(currentAgenceId, {$set: agenceProperties}, function (error) {
            // En cas de saisie non conforme, j'affiche le/les messages d'erreur.
            if (error) {
                // display the error to the user
                alert(error.reason);
            } else {
                Router.go('agenceItem', {_id: currentAgenceId});
            }
        });
    }
})

Template.agenceEdit.events({
    'click #deleteAgence': function () {
        Agences.remove(this._id);
        Router.go('groupesList');
    }

});