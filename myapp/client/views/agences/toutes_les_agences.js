/**
 * Created by andrew on 02/02/15.
 */
Template.toutesLesAgences.helpers({
    agences : function () {
        return Agences.find({});

    }
});