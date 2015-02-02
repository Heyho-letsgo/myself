Agences = new Meteor.Collection('agences');

Agences.allow({
    insert: function(raisonSocialeAgence,ville,type,adresse ){return true;},
    update: function(raisonSocialeAgence,ville,type,adresse ){return true}
    });