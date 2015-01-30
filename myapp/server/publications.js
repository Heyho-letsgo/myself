Meteor.publish('agences', function(Agence01) {
    return Agences.find({raisonSocialeAgence: 'Agence01'});
});


Meteor.publish('groupes', function(Immo03) {
    return Groupes.find({raisonSociale: 'Immo03'});
});