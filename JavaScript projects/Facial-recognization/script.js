const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const startButton = document.getElementById('startButton');

let stream;

startButton.addEventListener('click', async () => {
    if (stream) {
        video.srcObject = stream;
        await video.play();
        return;
    }

    try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = stream;
        await video.play();
    } catch (error) {
        console.error('Error accessing camera:', error);
    }

    startButton.textContent = 'Stop Recognition';
    startButton.addEventListener('click', () => {
        video.srcObject = null;
        stream.getTracks().forEach(track => track.stop());
        startButton.textContent = 'Start Recognition';
    });
});