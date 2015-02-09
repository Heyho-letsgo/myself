/**
 * Created by andrew on 30/01/15.
 */


Template.groupeSubmit.events({
    'submit form': function (e) {
        e.preventDefault();
        var groupe = {
            raisonSociale: $(e.target).find('[name=raisonSociale]').val(),
            numVoie: $(e.target).find('[name=numVoie]').val(),
            voie: $(e.target).find('[name=voie]').val(),
            adresse: $(e.target).find('[name=adresse]').val(),
            cp: $(e.target).find('[name=cp]').val(),
            ville: $(e.target).find('[name=ville]').val(),
            tel: $(e.target).find('[name=tel]').val(),
            mail: $(e.target).find('[name=mail]').val(),
            userId:Meteor.user()
        };

        groupe._id = Groupes.insert(groupe);
        Router.go('groupesList');
    }
});
