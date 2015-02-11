

Session.set('resultat' , undefined);

Template.agencesSearch.events({
//FORMULAIRE
    'submit form': function (e) {
        e.preventDefault();
        var agencesSearch = {
            raisonSocialeAgence: $(e.target).find('[name=raisonSocialeAgence]').val(),
            ville: $(e.target).find('[name=ville]').val(),
            userId:Meteor.user()
        };

        //Chargement des entrées formulaire dans la session
        Session.set('resultat', agencesSearch);
//alert([agencesSearch.raisonSocialeAgence] + [agencesSearch.ville])

    }
});


Template.agencesSearch.helpers({

    searchResult:function(){

        var search = Session.get('resultat'); // Récupere les valeurs entrées dans le formulaire par la session
        alert([search.raisonSocialeAgence] + [search.ville])
        var agencesFind =
                Agences.find({$or: [{raisonSocialeAgence:String(search.raisonSocialeAgence)}, {ville:String(search.ville)}]} )

            ; // Requete db

        return agencesFind ;
    }

});