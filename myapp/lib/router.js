/**
 * Created by andrew on 30/01/15.
 */
Router.configure({
    layoutTemplate: 'mainLayout'
});


Router.map(function(){
    this.route('accueil', {path: '/'});
    this.route('mainPage', {path: '/mainPage'});
    this.route('googlePlaces', {path: '/places'});




    this.route('groupeItem', {
        path: '/groupesList/:_id',
        data: function () {
            return Groupes.findOne(this.params._id);
        }
    });
    this.route('groupeEdit',{
        path: 'groupesList/:_id/edit',
        data: function () {
            return Groupes.findOne(this.params._id);
        }
    });
    this.route('groupesList', {path: '/groupesList'});
    this.route('groupeNew', {path: '/groupeNew'});
    this.route('groupesSearch', {path: '/groupesSearch'});

    this.route('rassemblement', {path: '/rassemblement'});

    this.route('agenceItem', {
        path: '/agencesList/:_id',
        data: function () {
            return Agences.findOne(this.params._id);
        }
    });
    this.route('agencesResult', {
        path: '/agencesResult/:_id',
        data: function () {
            return Agences.find();
        }
    });
    this.route('agenceEdit',{
        path: 'agencesList/:_id/edit',
        data: function () {
            return Agences.findOne(this.params._id);
        }
    });
    this.route('agenceNew', {path: '/agenceNew'});
    this.route('agencesSearch', {path: '/agencesSearch'});
    this.route('agencesList', {path: '/agencesList'});
    this.route('agencesListArchive', {
        path: '/agencesListArchive',
        data: function () {
          return Agences.find({'archive' : true})
    }});

  

    this.route('utilisateurItem', {
        path: '/utilisateursList/:_id',
        data: function () {
            return Utilisateurs.findOne(this.params._id);
        }
    });
    this.route('utilisateursResult', {
        path: '/utilisateursResult/:_id',
        data: function () {
            return Utilisateur.find();
        }
    });
    this.route('utilisateurEdit',{
        path: 'utilisateursList/:_id/edit',
        data: function () {
            return Utilisateurs.findOne(this.params._id);
        }
    });
    this.route('utilisateurNew', {path: '/utilisateurNew'});
    this.route('utilisateursSearch', {path: '/utilisateursSearch'});
    this.route('utilisateursList', {path: '/utilisateursList'});




});


var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}

Router.onBeforeAction(requireLogin, {only: 'rassemblement'});

Router.onBeforeAction(requireLogin, {only: 'groupeNew'});
Router.onBeforeAction(requireLogin, {only: 'groupeEdit'});
Router.onBeforeAction(requireLogin, {only: 'agenceNew'});
Router.onBeforeAction(requireLogin, {only: 'groupesList'});


Router.onBeforeAction(requireLogin, {only: 'agenceEdit'});
Router.onBeforeAction(requireLogin, {only: 'agencesList'});
Router.onBeforeAction(requireLogin, {only: 'agenceSubmit'});
Router.onBeforeAction(requireLogin, {only: 'agencesSearch'});
Router.onBeforeAction(requireLogin, {only: 'agencesListArchive'});


Router.onBeforeAction(requireLogin, {only: 'utilisateurEdit'});
Router.onBeforeAction(requireLogin, {only: 'utilisateursList'});
Router.onBeforeAction(requireLogin, {only: 'utilisateurNew'});
Router.onBeforeAction(requireLogin, {only: 'utilisateursSearch'});

