Template.groupeItem.events({
        'click .delete': function () {
            Groupes.remove(this._id);
            Router.go('groupesList');
        }

});
/**
 * Created by andrew on 09/02/15.
 */



Template.groupeItem.events({
'click .addAgence': function () {
    //var currentUserId = this.userId;
        var idGroupeSearch =  this._id;
        var groupeName = this.raisonSociale;

alert( groupeName)

        //Session.set('resultatId',idGroupeSearch);
        //Session.set('groupName', groupeName ) ;

        Agences.insert({
            userId:Meteor.user(),
            groupeId: idGroupeSearch,
            groupeRaisonSociale: groupeName,
            agenceNew: 1
        });

        //var agenceCourante = Agences.findOne({}, {sort:{groupeId:idGroupeSearch}});
    var agenceCourante = Agences.findOne({agenceNew : 1});

        Router.go("agenceEdit", { _id: agenceCourante._id}) ;

    }

});



        /*  var agencesFind =
         Agences.find({$or: [
         {raisonSocialeAgence:String(search.raisonSocialeAgence)},
         {ville:String(search.ville)},
         {type:String(search.type)}

         ]} )

         ; // Requete db

         return agencesFind ;
         */





       // alert ([idGroupeSearch.raisonSociale])
        //
