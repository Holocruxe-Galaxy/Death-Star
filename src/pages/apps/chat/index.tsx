// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { fetchUserProfile, fetchChatsContacts } from 'src/store/apps/chat'

// ** Types
import { RootState, AppDispatch } from 'src/store'

// ** Hooks
import { useSettings } from 'src/@core/hooks/useSettings'

// ** Chat App Components Imports
import ChatContent from 'src/views/apps/chat/ChatContent'

import { socketClient } from 'src/libs/socket.io';
import { saveId } from 'src/store/apps/chat';

const AppChat = () => {

  // ** Hooks
  const theme = useTheme()
  const { settings } = useSettings()
  const dispatch = useDispatch<AppDispatch>()
  const [isActive, setIsActive] = useState(false)
  const [id, setId] = useState('');
  const hidden = useMediaQuery(theme.breakpoints.down('lg'))
  const store = useSelector((state: RootState) => state.chat)

  // ** Vars
  const { skin } = settings
  const mdAbove = useMediaQuery(theme.breakpoints.up('md'))

  useEffect(() => {
    if (id) dispatch(saveId(id));
    socketClient.recieveMessages(dispatch);
    socketClient.recieveBroadcast(dispatch);
    socketClient.recieveAudio(dispatch);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleStartConversation = () => {
    socketClient.connect(setId);
    setIsActive(true);
  };


  useEffect(() => {
    dispatch(fetchUserProfile())
    dispatch(fetchChatsContacts())
  }, [dispatch])

  return (
    <Box
      component="div"
      className='app-chat'
      sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        borderRadius: 1,
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'background.paper',
        boxShadow: skin === 'bordered' ? 0 : 6,
        ...(skin === 'bordered' && { border: `1px solid ${theme.palette.divider}` })
      }}
    >
      <ChatContent
        store={store}
        hidden={hidden}
        mdAbove={mdAbove}
        dispatch={dispatch}
        handleStartConversation={handleStartConversation}
        isActive={isActive}
        setIsActive={setIsActive}
      />
    </Box>
  )
}

AppChat.contentHeightFixed = true

export default AppChat
