
Template.groupesList.helpers({
    groupes : function() {
        return Groupes.find();
    }
});



Template.groupesList.helpers({
    totalGroupe : function() {
        return Groupes.find().count();
}
    });