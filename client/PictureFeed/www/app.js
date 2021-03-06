// Generated by CoffeeScript 1.7.1
(function() {
  var data, identity, password, serverURL;

  serverURL = "http://test.krashdrive.com";

  identity = "joe+testkd01@megashares.com";

  password = "123456789";

  data = {
    identity: identity,
    password: password,
    remember: 1
  };

  $.ajax({
    type: 'POST',
    url: "" + serverURL + "/auth/login",
    data: data,
    dataType: 'json'
  }).done(function(result) {
    if (result.error) {
      return alert.error('Unable to Login', 'Incorrect username or password.');
    } else {
      return alert.success('Woohoo!', 'You have successfully authorized KrashDrive Sync.');
    }
  });


  /*
     * Get List of images from server
    getFeed = ->
      $scroller.empty()
      $.ajax(
        url: serverURL + "/images"
        dataType: "json"
        type: "GET"
      ).done (data) ->
        l = data.length
        i = 0
  
        while i < l
          $scroller.append "<img src=\"" + serverURL + "/" + data[i].fileName + "\"/>"
          i++
        return
  
      return
  
    
     * Upload image to server
    upload = (imageURI) ->
      ft = new FileTransfer()
      options = new FileUploadOptions()
      options.fileKey = "file"
      options.fileName = "filename.jpg" # We will use the name auto-generated by Node at the server side.
      options.mimeType = "image/jpeg"
      options.chunkedMode = false
       * Whatever you populate options.params with, will be available in req.body at the server-side.
      options.params = description: "Uploaded from my phone"
      ft.upload imageURI, serverURL + "/images", ((e) ->
        getFeed()
        return
      ), ((e) ->
        alert "Upload failed"
        return
      ), options
      return
  
    
     * Take a picture using the camera or select one from the library
    takePicture = (e) ->
      options =
        quality: 45
        targetWidth: 1000
        targetHeight: 1000
        destinationType: Camera.DestinationType.FILE_URI
        encodingType: Camera.EncodingType.JPEG
        sourceType: Camera.PictureSourceType.CAMERA
  
      navigator.camera.getPicture ((imageURI) ->
        console.log imageURI
        upload imageURI
        return
      ), ((message) ->
      
       * We typically get here because the use canceled the photo operation. Fail silently.
      ), options
      false
  
    $(".camera-btn").on "click", takePicture
    getFeed()
    return
   */

}).call(this);
