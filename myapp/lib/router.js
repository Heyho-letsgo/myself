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
    //this.route('mainPage', {path: '/'});
    this.route('agenceSubmit', {path: '/agenceSubmit'});
    this.route('toutesLesAgences', {path: '/toutesLesAgences'});
    this.route('rassemblement', {path: '/rassemblement'});

});

