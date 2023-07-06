const myVideoInputs = [];
var constraints = { audio: true, video: true }; 

const doGetDevicesInfo = async () => {
    await navigator.mediaDevices.enumerateDevices()
        .then(results => {
            results.forEach(results => {
                if (results.kind === 'videoinput') {
                    console.log(results);
                    myVideoInputs.push(results);
                }
            })
        })
        .catch(error => {
            console.log(error);
        })

}

const startCamera = async (myVideoInputs, whichCamera) => {
    if (myVideoInputs == undefined) { console.log('myVideoInputs is undefinded'); return;}
    await navigator.mediaDevices.getUserMedia({
        video: {
            width: 600,
            height: 400,
            deviceId: myVideoInputs.deviceId
        }
    })
    .then(stream => {
        whichCamera.srcObject = stream;
    })
    .catch(error => {
        console.log(error);
    })
}

const doStartCamera = (video) => {
    const id = video.id;
    switch (id) {
        case 'cameraview1':
            startCamera(myVideoInputs[0], camera1);
            break;
        case 'cameraview2':
            startCamera(myVideoInputs[1], camera2);
            break;
        case 'cameraview3':
            startCamera(myVideoInputs[2], camera3);
            break;
        case 'cameraview4':
            startCamera(myVideoInputs[3], camera4);
            break;
    }

}

const StartAllCamera = function(){
    for(i=0; i<4; i++)
    {
        switch (i) {
            case 0:
                startCamera(myVideoInputs[0], camera1);
                break;
            case 1:
                startCamera(myVideoInputs[1], camera2);
                break;
            case 2:
                startCamera(myVideoInputs[2], camera3);
            break;
            case 3:
                startCamera(myVideoInputs[3], camera4);
            break;
        }
    }
}

//////////////////////////////////////////////////////////
// const http = require('http');
// const server = http.createServer(function(req, res){

// });

// server.listen(5000, function(){
//     console.log("서버 실행 중..");
// });

