/**
 * Created by andrew on 30/01/15.
 */
Router.configure({
    layoutTemplate: 'mainLayout'
});


Router.map(function(){
    this.route('accueil', {path: '/'});
    this.route('mainPage', {path: '/mainPage'});

    this.route('agenceItem', {
        path: '/toutesLesagences/:_id',
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
        path: 'toutesLesagences/:_id/edit',
        data: function () {
            return Agences.findOne(this.params._id);
        }
    });
    this.route('agenceNew', {path: '/agenceNew'});
    this.route('agencesList', {path: '/agencesList'});
    this.route('agencesSearch', {path: '/agencesSearch'});

    this.route('toutesLesAgences', {path: '/toutesLesAgences'});

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
});


var requireLogin = function() {
  if (! Meteor.user()) {
    this.render('accessDenied');
  } else {
    this.next();
  }
}


Router.onBeforeAction(requireLogin, {only: 'agenceEdit'});
Router.onBeforeAction(requireLogin, {only: 'agencesList'});
Router.onBeforeAction(requireLogin, {only: 'toutesLesAgences'});
Router.onBeforeAction(requireLogin, {only: 'agenceSubmit'});
Router.onBeforeAction(requireLogin, {only: 'agenceSearch'});


Router.onBeforeAction(requireLogin, {only: 'groupeNew'});
Router.onBeforeAction(requireLogin, {only: 'groupeEdit'});
Router.onBeforeAction(requireLogin, {only: 'agenceNew'});
Router.onBeforeAction(requireLogin, {only: 'groupesList'});
