if (Meteor.isServeur) {
    Meteor.startup(function () {
        GoogleMaps.load();
    });
}

