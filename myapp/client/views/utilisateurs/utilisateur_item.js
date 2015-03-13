Template.utilisateurItem.helpers({
    utilisateurItem: function () {
        Utilisateurs.find(
            {_id: this._id}
        );
    }
});

