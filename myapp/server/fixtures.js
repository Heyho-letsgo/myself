if (Groupes.find().count() === 0)
{
	Groupes.insert({raisonSociale: 'Immo01'});
	Groupes.insert({raisonSociale: 'Immo02'});
	Groupes.insert({raisonSociale: 'Immo03', adresse: '25 rue Belliard'});
}


if (Agences.find().count() === 0)
{
	Agences.insert({raisonSocialeAgence: 'Agence01'});
	Agences.insert({raisonSocialeAgence: 'Agence02'});
	Agences.insert({raisonSocialeAgence: 'Agence03', adresse: '48 rue des Moines'});
}
