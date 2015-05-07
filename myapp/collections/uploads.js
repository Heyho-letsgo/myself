Uploads = new FS.Collection('uploads',{
  stores:[new FS.Store.FileSystem('uploads',{path:'~/myapp/public'})]
});

Uploads.allow({
  insert:function(userId, fileObj){
    return true;
  },
  update: function(userId, fileObj){
    return true;
  },
  download:function(){
    return true;
  }
});
