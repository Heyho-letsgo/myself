Template.groupeItem.events({
        'click .delete': function () {
            Groupes.remove(this._id);
            Router.go('groupesList');
        }

});


Template.groupeItem.events({
'click .addAgence': function () {
    // Je récupère l'id du groupe en cours et la valeur du champ raisonSociale.
        var idGroupeSearch =  this._id;
        var groupeName = this.raisonSociale;

//alert( groupeName)
    // je crée une nouvelle agence en passant les champs ci-dessous.
        Agences.insert({
            userId:Meteor.user(),
            groupeId: idGroupeSearch,
            groupeRaisonSociale: groupeName,
            //Je crée un champ temporaire et lui affecte une valeur --> à transformer en valeur random
            agenceNew: 1
        });

        //var agenceCourante = Agences.findOne({}, {sort:{groupeId:idGroupeSearch}});


    // Je crée la variable qui me permet de passer l'Url de la route
    var agenceCourante = Agences.findOne({agenceNew : 1});
    // Je vais sur l'Url.
        Router.go("agenceEdit", { _id: agenceCourante._id}) ;

    }

});


