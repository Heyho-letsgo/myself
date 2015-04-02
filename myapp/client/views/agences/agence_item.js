/**
 * Created by andrew on 09/02/15.
 */

/*Template.agencesItem.helpers({
    nameAgences: function () {
        return Agences.findOne(this._id);
        }
});*/


Template.agenceItem.events({
    'click .deleteItem': function () {
        Agences.remove(this._id);
        Router.go('agencesList');
    }

});

Template.agenceItem.events({
    'click .addUtilisateur': function () {
        // Je récupère l'id du groupe en cours et la valeur du champ raisonSociale.
        var idAgence = this._id;
        var agenceName = this.raisonSocialeAgence;
        var idGroupe = this.groupeId;
        var groupeName = this.groupeRaisonSociale;
        var randomId = Random.id([17]);

//alert( groupeName)
        // je crée une nouvelle agence en passant les champs ci-dessous.
        Utilisateurs.insert({
            userId: Meteor.user(),
            groupeId: idGroupe,
            groupeRaisonSociale: groupeName,
            agenceId: idAgence,
            raisonSocialeAgence: agenceName,
            dateCreation: new Date(),
            //Je crée un champ temporaire et lui affecte une valeur --> à transformer en valeur random
            utilisateurNew: randomId
        });

        //var agenceCourante = Agences.findOne({}, {sort:{groupeId:idGroupeSearch}});


        // Je crée la variable qui me permet de passer l'Url de la route
        var utilisateurCourant = Utilisateurs.findOne({utilisateurNew: randomId});
        // Je vais sur l'Url.
        Router.go("utilisateurEdit", {_id: utilisateurCourant._id});

    }

});





