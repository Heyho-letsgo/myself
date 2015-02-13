/**
 * Created by andrew on 30/01/15.
 */


Template.agenceNew.events({
    'submit form': function (e) {
        e.preventDefault();
        var agence = {
            raisonSocialeAgence: $(e.target).find('[name=raisonSocialeAgence]').val(),
            ville: $(e.target).find('[name=ville]').val(),
            type: $(e.target).find('[name=type]').val(),
            adresse: $(e.target).find('[name=adresse]').val(),
            userId:Meteor.user()
        };

        agence._id = Agences.insert(agence);
        Router.go('mainPage');
    }
});
