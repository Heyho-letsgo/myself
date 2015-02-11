
Template.agencesSearch.events({
    'submit form': function (e) {
        e.preventDefault();
        var agencesSearch = {
            raisonSocialeAgence: $("#searchTerms").val(),
            userId:Meteor.user()
        };
        var agencesFind = Agences.find();

//        alert(agencesFind)

        //_.each(agencesFind, alert);


        return Router.go('agencesSearch') ;




    }
});


