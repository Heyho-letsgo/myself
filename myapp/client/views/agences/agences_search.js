

//Session.set('resultat' , undefined);

Template.agencesSearch.events({
//FORMULAIRE
    'submit form': function (e) {
        e.preventDefault();
        var agencesSearch = {
            raisonSocialeAgence: $("#searchTerms").val(),
            userId:Meteor.user()
        };

        //Chargement des entrées formulaire dans la session
        Session.set('resultat', agencesSearch);

    }
});


Template.agencesSearch.helpers({

    searchResult:function(){

        var search = Session.get('resultat'); // Récupere les valeurs entrées dans le formulaire par la session

        var agencesFind = Agences.find({raisonSocialeAgence:String(search.raisonSocialeAgence)}); // Requete db

        return agencesFind ;
    }

});