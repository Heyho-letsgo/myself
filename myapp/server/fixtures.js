if (Groupes.find().count() === 0)
{
	Groupes.insert({raisonSociale: 'GroupeImmo01'});
	Groupes.insert({raisonSociale: 'GroupeImmo02'});
	Groupes.insert({raisonSociale: 'GroupeImmo03', adresse: '25 rue Belliard'});
}


if (Agences.find().count() === 0)
{
	Agences.insert({ville: 'Lyon',type: 'agence',raisonSocialeAgence: 'Agence01'});
	Agences.insert({ville: 'Paris',type: 'agence',raisonSocialeAgence: 'Agence02'});
	Agences.insert({ville: 'Paris',type: 'agence',raisonSocialeAgence: 'Agence03', adresse: '48 rue des Moines'});
}
