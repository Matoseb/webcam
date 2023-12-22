export async function createWebcam(params) {

  params = {
    selfie: false,

    ...params
  }


  const constraints = {
    video: {
      facingMode: params.selfie ? 'user' : 'environment'
    },
    audio: false
  }

  const video = document.createElement('video')
  video.autoplay = true
  // ios fix safari
  video.setAttribute('playsinline', true)
  video.muted = true // ios

  const stream = await navigator.mediaDevices.getUserMedia(constraints)
  video.srcObject = stream
  await videoLoaded(video)

  console.log('video loaded', video.videoWidth, video.videoHeight);

  // video.play()
  // video.width = 
  // video.height = 480

  return video
}

export function videoLoaded(video) {
  return new Promise((resolve, reject) => {
    video.addEventListener('loadedmetadata', () => {
      resolve()
    });
  });
}

export function toCanvas(video) {
  const canvas = document.createElement('canvas')
  const ctx = canvas.getContext('2d')
  canvas.width = video.videoWidth
  canvas.height = video.videoHeight
  ctx.drawImage(video, 0, 0, canvas.width, canvas.height)
  return canvas
}