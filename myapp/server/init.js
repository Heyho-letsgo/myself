
Meteor.startup(function () {
    UploadServer.init({
        tmpDir: process.env.PWD + '/.uploads/tmp',
        uploadDir: process.env.PWD + '/.uploads/',
        checkCreateDirectories: true, //create the directories for you
        imageVersions: {thumbnailBig: {width: 400, height: 300}, thumbnailSmall: {width: 200, height: 100}}

    })
});