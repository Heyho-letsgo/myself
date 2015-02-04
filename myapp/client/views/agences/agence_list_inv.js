/**
 * Created by andrew on 02/02/15.
 */
Template.agencesListInv.helpers({
    agences: function () {
        return Agences.find({adresse: {$ne: " "}},
            {
                sort: {raisonSocialeAgence: 1}, limit: 5
            });
    }
});


