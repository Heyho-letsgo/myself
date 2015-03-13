Template.utilisateursList.helpers({
    utilisateurs: function () {
        return Utilisateurs.find();
    }
});


Template.utilisateursListSimple.helpers({
    utilisateurs: function () {
        return Utilisateurs.find();
    }
});
