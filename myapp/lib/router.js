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


