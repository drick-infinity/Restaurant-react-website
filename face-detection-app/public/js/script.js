const video = document.getElementById('videoInput');

Promise.all([
    faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
    faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
    faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
]).then(start).catch(error => {
    console.error('Error loading models:', error);
});

function start() {
    document.body.append('Models Loaded');
    video.src = '../videos/speech.mp4';

    recognizeFaces();
}

async function recognizeFaces() {
    try {
        const labeledDescriptors = await loadLabeledImages();
        const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors, 0.7);

        video.addEventListener('play', () => {
            console.log('Playing');
            const canvas = faceapi.createCanvasFromMedia(video);
            document.body.append(canvas);

            const displaySize = { width: video.width, height: video.height };
            faceapi.matchDimensions(canvas, displaySize);

            setInterval(async () => {
                const detections = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceDescriptors();
                const resizeDetection = faceapi.resizeResults(detections, displaySize);
                canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);

                const results = resizeDetection.map((d) => {
                    // return faceMatcher.findBestMatch(d.descriptor);  
                    if (d) {
                        // Check if 'd' is not null
                        return faceMatcher.findBestMatch(d.descriptor);
                    } else {
                        // Handle the case where no face is detected
                        return null;
                    }
                });

                results.forEach((result, i) => {
                    if(results){

                        const box = resizeDetection[i].detection.box;
                        const drawBox = new faceapi.draw.DrawBox(box, { label: result.toString() });
                        drawBox.draw(canvas);
                    }
                });
                console.log('Drawing bounding boxes...');
            }, 100);
        });
    } catch (error) {
        console.error('Error in recognizeFaces:', error);
    }
}
//other code
async function loadLabeledImages() {
    const labels = ['Black Widow', 'Captain America', 'Hawkeye', 'Jim Rhodes', 'Thor', 'Tony Stark'];

    try {
        return Promise.all(
            labels.map(async (label) => {
                const descriptions = [];
                for (let i = 1; i <= 4; i++) {
                    const img = await faceapi.fetchImage(`../labeled_images/${label}/${i}.jpg`);
                const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
                    if (detections) {
                        descriptions.push(detections.descriptor);
                     }
                     else {
                        console.warn(`No face detected ${label}/${i}.jpg`);
                    }
                }
                if(descriptions.length > 0){

                    document.body.append(label + ' Face Loaded |');
                    return new faceapi.LabeledFaceDescriptors(label, descriptions);
                }else{
                    console.warn(`Skipping label ${label} due to no detected faces.`);
                    return null;
                }
            }).filter(descriptor => descriptor !== null)
        );
    } catch (error) {
        console.error('Error in loadLabeledImages:', error);
        return [];
    }
}




//using webcam
// async function setupCamera() {
//     const constraints = { video: true };

//     try {
//         const stream = await navigator.mediaDevices.getUserMedia(constraints);
//         video.srcObject = stream;
//     } catch (error) {
//         console.error('Error accessing webcam:', error);
//     }
// }

// Call setupCamera before calling recognizeFaces
// setupCamera();



// async function loadLabeledImages() {
//     const labels = ['Black Widow', 'Captain America', 'Hawkeye', 'Jim Rhodes', 'Thor', 'Tony Stark'];

//     try {
//         return Promise.all(
//             labels.map(async (label) => {
//                 const descriptions = [];
//                 for (let i = 1; i <= 4; i++) {
//                     const img = await faceapi.fetchImage(`../labeled_images/${label}/${i}.jpg`);
//                     const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor();
//                     descriptions.push(detections.descriptor);
//                 }
//                 document.body.append(label + ' Face Loaded |');
//                 return new faceapi.LabeledFaceDescriptors(label, descriptions);
//             })
//         );
//     } catch (error) {
//         console.error('Error in loadLabeledImages:', error);
//         return [];
//     }
// }



//my written code original one
// const video = document.getElementById('videoInput');

// Promise.all([
//     faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
//     faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
//     faceapi.nets.ssdMobilenetv1.loadFromUri('/models'),
// ]).then(start)

// function start(){
//     document.body.append('Models Loaded')
//     video.src='../videos/speech.mp4'

//     recognizeFaces()

// }

// async function recognizeFaces(){
//     const labeledDescriptors = await loadLabeledImages()
//     const faceMatcher = new faceapi.FaceMatcher(labeledDescriptors,0.7)

//     video.addEventListener('play',() => {
//         console.log('playing')
//         const canvas = faceapi.createCanvasFromMedia(video)
//         document.body.append(canvas)

//         const displaySize = {width: video.width,height:video.height}
//         faceapi.matchDimensions(canvas, displaySize)

//         setInterval(async() =>{
//             const detection = await faceapi.detectAllFaces(video).withFaceLandmarks().withFaceDescriptor()

//             const resizeDetection = faceapi.resizeResults(detection, displaySize)
//             canvas.getContext('2d').clearRect(0,0, canvas.width, canvas.height)

//             const results = resizeDetection.map((d) => {
//                 return faceMatcher.findBestMatch(d.descriptor)
//             })

//             results.forEach((result, i) => {
//                 const box = resizeDetection[i].detection.box
//                 const drawBox = new faceapi.draw.DrawBox(box,{label: result.tostring()})
//                 drawBox.draw(canvas) 
//             })

//         },100);
//     })
// }


// function loadLabeledImages(){
//     const labels = ['Black Widow','Captain America','Hawkeye','Jim Rhodes','Thor','Tony Stark']

//     return Promise.all(
//         labels.map(async(label)=>{
//             const descriptons = []
//             for(let i=1; i<=4;i++){
//                 const img = await faceapi.fetchImage(`../labeled_images/${label}/${i}.jpg`)
//                 const detections = await faceapi.detectSingleFace(img).withFaceLandmarks().withFaceDescriptor()
//                 descriptons.push(detections.descriptor)
//             }
//             document.body.append(label + 'Face Loaded|')
//             return new faceapi.LabeledFaceDescriptors(label,descriptons)
//         })
//     )
// }