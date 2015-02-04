/**
 * Created by andrew on 30/01/15.
 */


Template.agenceSubmit.events({
    'submit form': function (e) {
        e.preventDefault();
        var ref = 1
        var agence = {
            raisonSocialeAgence: $(e.target).find('[name=raisonSocialeAgence]').val(),
            ville: $(e.target).find('[name=ville]').val(),
            type: $(e.target).find('[name=type]').val(),
            adresse: $(e.target).find('[name=adresse]').val(),
            ref: ref += 1
        };

        agence._id = Agences.insert(agence);
        Router.go('mainPage');
    }
});
