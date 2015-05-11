

Template.utilisateurItem.helpers({
    utilisateurItem: function () {
        Utilisateurs.find(
            {_id: this._id}
        );
    },
    uploads:function(){
        return Uploads.find();
    }
});

Template.utilisateurItem.events({
    'change .fileInput':function(event,template){
        FS.Utility.eachFile(event,function(file){
            var fileObj = new FS.File(file);
            Uploads.insert(fileObj, function(err){
                console.log(err);
            })
        })
    }
});