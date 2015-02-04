/**
 * Created by andrew on 02/02/15.
 */
Template.toutesLesAgences.helpers({
    agences: function () {
        return Agences.find({});

    }
});

Template.toutesLesAgences.helpers({
    agencesTotal: function () {
        return Agences.find().count();
}
});