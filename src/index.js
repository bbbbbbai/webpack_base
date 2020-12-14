import './styles.less'
import bg from './image/694ea1fee42b9e800be2fb5e3e32692f.jpg'

export default function Main() {
  console.log('I get called from print.js!')
  const img = document.createElement('img')
  img.src = bg
  document.querySelector('body').appendChild(img) 
}
