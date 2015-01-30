/**
 * Created by andrew on 30/01/15.
 */
Router.configure({

    layoutTemplate: 'layout'
});

Router.map(function() {
    this.route('mainPage', {path: '/'});
});

Router.map(function() {
    this.route('rassemblement', {path: '/rassemblement'});
});


Router.map(function() {
    this.route('toutesLesAgences', {path: '/toutesLesAgences'});
});

Router.map(function(){
    this.route('agenceItem', {
        path: '/toutesLesagences/:_id',
        data: function () {
            return Agences.findOne(this.params._id);
        }
    })
});