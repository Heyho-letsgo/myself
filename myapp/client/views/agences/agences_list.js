Template.agencesList.helpers({
    agences : function () {
        return Agences.find({},
            {sort: {raisonSocialeAgence: -1}, limit: 5
                });
    }
});

Template.agencesListInv.helpers({
    agences : function () {
        return Agences.find({adresse: '48 rue des Moines'},
            {sort: {raisonSocialeAgence: 1}, limit: 5
                });
    }
});


Template.toutesLesAgences.helpers({
    agences : function () {
        return Agences.find();

    }
});