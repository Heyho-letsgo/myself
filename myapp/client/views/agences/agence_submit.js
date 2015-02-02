/**
 * Created by andrew on 30/01/15.
 */


Template.agenceSubmit.events({
    'submit form': function (e) {
        e.preventDefault();

        var agence = {
            raisonSocialeAgence: $(e.target).find('[name=raisonSocialeAgence]').val()
        };

        agence._id = Agences.insert(agence);
        Router.go('mainPage');
    }
});
