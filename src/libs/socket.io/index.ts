import { Manager } from "socket.io-client";
import { Dispatch } from 'redux'
import { addMessageToChat } from "src/store/apps/chat";
import axios from "axios";

type SetFunction = (arg: any) => void

class SocketClient {
  socket: any;

  connect(setId: SetFunction) {
    const manager = new Manager(`${process.env.NEXT_PUBLIC_MANDALORE}/socket.io/socket.io.js`, {
      extraHeaders: {
        authorization: `Bearer ${localStorage.getItem('AuthorizationToken')}`
      }
    });
  
    this.socket?.removeAllListeners();
    this.socket = manager.socket('/');
  
    this.socket.on('connection', () => setId(this.socket.id));
  }

  sendMessage(message: string) {
    this.socket?.emit('clientChat', { message })
  }

  async sendAudio(audio: FormData) {
    await axios.post(`${process.env.NEXT_PUBLIC_MANDALORE}/chat/${this.socket.id}`, audio, {
      headers: {
        authorization: `Bearer ${localStorage.getItem('AuthorizationToken')}`
      }
    })
  }

  recieveMessages(dispatch: Dispatch<any>) {
    this.socket?.on('clientChat', (res: any) => dispatch(addMessageToChat(res)))
  }

  recieveAudio(dispatch: Dispatch<any>) {
    this.socket?.on('audio', (res: any) => dispatch(addMessageToChat(res)))
  }

  recieveBroadcast(dispatch: Dispatch<any>) {
    this.socket?.on('broadcast', (res: any) => dispatch(addMessageToChat(res)))
  }
}

export const socketClient = new SocketClient();