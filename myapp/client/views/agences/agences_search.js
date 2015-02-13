

Session.set('resultat' , undefined);

Template.agencesSearch.events({
//FORMULAIRE
    'submit form': function (e) {
        e.preventDefault();
        var agencesSearch = {
            agenceGroupe: $(e.target).find('[name=agenceGroupe]').val(),
            raisonSocialeAgence: $(e.target).find('[name=raisonSocialeAgence]').val(),
            ville: $(e.target).find('[name=ville]').val(),
            type: $(e.target).find('[name=type]').val(),
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
        alert("Je recherche "+[search.agenceGroupe] +" ou "+ [search.raisonSocialeAgence] +" ou "+ [search.ville]+" ou " + [search.type])
        var agencesFind =
                Agences.find({$or: [
                    {agenceGroupe:String(search.agenceGroupe)},
                    {raisonSocialeAgence:String(search.raisonSocialeAgence)},
                    {ville:String(search.ville)},
                    {type:String(search.type)}

                ]} )

            ; // Requete db

        return agencesFind ;
    }

});