var app = { 
    // Application Constructor 
    initialize: function() { 
        document.addEventListener('deviceready', 
this.onDeviceReady.bind(this), false); 
    }, 
 
    // deviceready Event Handler 
    onDeviceReady: function() { 
        this.receivedEvent('deviceready'); 
 

document.getElementById('takePhotoBtn').addEventListener('click'
 , this.takePhoto); 
    }, 
 
    // Update DOM on a Received Event 
    receivedEvent: function(id) { 
        console.log('Received Event: ' + id); 
    }, 
 
    takePhoto: function() { 
        navigator.camera.getPicture(onSuccess, onFail, { 
            quality: 50, 
            destinationType: Camera.DestinationType.DATA_URL 
        }); 
 
        function onSuccess(imageData) { 
            var image = document.getElementById('photo'); 
            image.src = "data:image/jpeg;base64," + imageData; 
            image.style.display = 'block'; 
        } 
 
        function onFail(message) { 
            alert('Failed because: ' + message); 
        } 
    } 
}; 
 
app.initialize();