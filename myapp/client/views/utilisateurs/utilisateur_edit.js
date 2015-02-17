Template.utilisateurEdit.events({
    'submit form': function (e) {
        e.preventDefault();
        // Je récupère l'Id de l'utilisateur.
        var currentUtilisateurId = this._id;
        // Je récupère les valeurs saisies dans les champssci-dessous.
        var utilisateurProperties = {
            nom: $(e.target).find('[name=nom]').val(),
            utilisateurNew: 0,
            dateModification: new Date()


        };


        // Je met à jour les valeurs saisies dans la collection
        Utilisateurs.update(currentUtilisateurId, {$set: utilisateurProperties}, function (error) {
            // En cas de saisie non conforme, j'affiche le/les messages d'erreur.
            if (error) {
                // display the error to the user
                alert(error.reason);
            } else {
                Router.go('agencesList', {_id: currentUtilisateurId});
            }
        });
    }
})