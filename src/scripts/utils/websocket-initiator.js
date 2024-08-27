import NotificationHelper from './notification-helper'
import CONFIG from '../globals/config'

const WebSocketInitiator = {
  init (url) {
    const webSocket = new WebSocket(url)
    webSocket.onmessage = (message) => this._onMessageHandler(message)
    webSocket.onerror = (error) => console.error('WebSocket error:', error)
    webSocket.onclose = () => console.log('WebSocket connection closed')
  },

  _onMessageHandler (message) {
    const movie = JSON.parse(message.data)

    NotificationHelper.sendNotification({
      title: `${movie.title} is on cinema!`,
      options: {
        body: movie.overview,
        image: `${CONFIG.BASE_IMAGE_URL + movie.poster_path}`
      }
    })
  }
}

export default WebSocketInitiator
