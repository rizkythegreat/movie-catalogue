import 'regenerator-runtime'
import '../styles/style.css'
import '../styles/responsive.css'
import App from './views/app'
import swRegister from './utils/sw-register'
import WebSocketInitiator from './utils/websocket-initiator'
import CONFIG from './globals/config'
import FooterToolsInitiator from './utils/footer-tools-initiator'

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent')
})

window.addEventListener('hashchange', () => {
  app.renderPage()
})

window.addEventListener('load', () => {
  app.renderPage()
  swRegister()
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER)
})

// Initialize footer tools
FooterToolsInitiator.init({
  subscribeButton: document.querySelector('#subscribePushNotification'),
  unsubscribeButton: document.querySelector('#unsubscribePushNotification')
})
