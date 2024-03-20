// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

interface Messages {
  messages: Message[]
}

interface Message {
  message: string;
  id?: string;
  date: Date | string;
  isBroadcasted?: boolean;
}

interface ChatReducer {
  id: string;
  selectedChat: null
  messages: /* null | */ Message[];
  chats: null | any[];
}

// ** Fetch User Profile
export const fetchUserProfile = createAsyncThunk('appChat/fetchUserProfile', async () => {
  const response = await axios.get('/apps/chat/users/profile-user')

  return response.data
})

// ** Fetch Chats & Contacts
export const fetchChatsContacts = createAsyncThunk('appChat/fetchChatsContacts', async () => {
  const response = await axios.get('/apps/chat/chats-and-contacts')

  return response.data
})

export const addMessageToChat = createAsyncThunk('appChat/addMsgs', (messages: Messages): Message => {
  return messages.messages.slice(-1)[0]
})

export const addAudioToChat = createAsyncThunk('appChat/addAudios', async (messages: Messages) => {
  return messages.messages
  })

// ** Select Chat
export const saveId = createAsyncThunk(
  'appChat/saveId',
  async (id: string) => {    
  return id
  }
)

export const appChatSlice = createSlice({
  name: 'appChat',
  initialState: {
    id: '',
    chats: null,
    selectedChat: null,
    messages: []
  } as ChatReducer,
  reducers: {
    removeSelectedChat: state => {
      state.selectedChat = null
    }
  },
  extraReducers: builder => {
    builder.addCase(fetchChatsContacts.fulfilled, (state, action) => {
      state.chats = action.payload.chatsContacts
    })
    builder.addCase(saveId.fulfilled, (state, action) => {
      state.id = action.payload
    })
    builder.addCase(addAudioToChat.fulfilled, (state, action) => {
      state.messages = action.payload
    })
    builder.addCase(addMessageToChat.fulfilled, (state, action) => {
      state.messages = [ ...state.messages, action.payload ]
    })
  }
})

export const { removeSelectedChat } = appChatSlice.actions

export default appChatSlice.reducer