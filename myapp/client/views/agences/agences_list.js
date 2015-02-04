Template.agencesList.helpers({
    agences: function () {
        return Agences.find({},
            {
                sort: {raisonSocialeAgence: -1}, limit: 5
            });
    }
});




