

Session.set('resultat' , undefined);

Template.groupesSearch.events({
//FORMULAIRE
    'submit form': function (e) {
        e.preventDefault();
        var groupesSearch = {
            raisonSociale: $(e.target).find('[name=raisonSociale]').val(),
           // ville: $(e.target).find('[name=ville]').val(),
           // type: $(e.target).find('[name=type]').val(),
            userId:Meteor.user()
        };

        //Chargement des entrées formulaire dans la session
        Session.set('resultat', groupesSearch);
//alert([agencesSearch.raisonSocialeAgence] + [agencesSearch.ville])

    }
});


Template.groupesSearch.helpers({

    searchResult:function(){

        var search = Session.get('resultat'); // Récupere les valeurs entrées dans le formulaire par la session
        alert("Je recherche "+[search.raisonSociale])
        var groupesFind =
                Groupes.find(
                        {raisonSociale:String(search.raisonSociale)}
                    //{ville:String(search.ville)},
                    //{type:String(search.type)}

                );

            ; // Requete db

        return groupesFind ;
    }

});


Template.groupesSearch.helpers({

    agenceNew:function(){

        var search = Session.get('resultat'); // Récupere les valeurs entrées dans le formulaire par la session
        //alert("Je recherche "+[search.raisonSociale])
        var groupesFind =
            Groupes.findOne({_id: this.params._id});
                //{ville:String(search.ville)},
                //{type:String(search.type)}



        ; // Requete db

        return groupesFind ;
    }

});

