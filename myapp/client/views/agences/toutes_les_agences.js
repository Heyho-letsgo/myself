/**
 * Created by andrew on 02/02/15.
 */
Template.toutesLesAgences.helpers({

    agences: function () {
        return Agences.find();
    }

});

Template.toutesLesAgences.helpers({
    agencesTotalParUttilisateur: function () {
        return Agences.find(
            {
            userId: { $in : [Meteor.user()]}}
            ).count();
}
});

Template.toutesLesAgences.helpers({
    agencesTotal: function () {
        return Agences.find().count();
}
});




Template.toutesLesAgences.helpers({
    username: function () {
        return Meteor.user() && Meteor.user()._id;
    }
});


/*Template.toutesLesAgences.helpers({
    agencesParUtilisateur: function () {
        return Agences.find({
            $where: function () {
                return this.userId._id
                Meteor.userId();
            }
        });

    }
});*/

Template.toutesLesAgences.helpers({
    agencesParUtilisateur: function () {
        return Agences.find({
            userId: { $in : [Meteor.user()]}});
    }
        });


/*

 db.agences.find({userId: {_id: 'PCGD6SpTAohMRw2m5'}})

db.agences.find({$where: function(){
    return this.userId._id === 'PCGD6SpTAohMRw2m5';
}});

*/
