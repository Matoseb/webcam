import './style.css'
import { createWebcam, toCanvas } from './composables/video'
import { useLoading } from './composables/dom'
import { delay } from './utils'

const app = document.querySelector('#app')
const button = document.createElement('button')


const webcam = await createWebcam({
  selfie: true
})
app.appendChild(webcam)

button.textContent = 'Take a picture'
const { startLoading, stopLoading } = useLoading(button)


button.onclick = async () => {
  const canvas = toCanvas(webcam)
  // // to base64
  // const data = canvas.toDataURL('image/png')
  // console.log(data);


  

  startLoading("Sending photo...")
  await delay(2000);
  stopLoading()
}

app.appendChild(button)
