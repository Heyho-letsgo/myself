/**
 * Created by andrew on 02/02/15.
 */
Template.groupeEdit.events({
    'submit form': function (e) {
        e.preventDefault();

        var currentGroupeId = this._id;
        var groupeProperties = {
            raisonSociale: $(e.target).find('[name=raisonSociale]').val(),
            numVoie: $(e.target).find('[name=numVoie]').val(),
            voie: $(e.target).find('[name=voie]').val(),
            adresse: $(e.target).find('[name=adresse]').val(),
            cp: $(e.target).find('[name=cp]').val(),
            ville: $(e.target).find('[name=ville]').val(),
            tel: $(e.target).find('[name=tel]').val(),
            mail: $(e.target).find('[name=mail]').val()
        };

        Groupes.update(currentGroupeId, {$set: groupeProperties}, function (error) {
            if (error) {
                // display the error to the user
                alert(error.reason);
            } else {
                Router.go('groupeItem', {_id: currentGroupeId});
            }
        });
    }
})

