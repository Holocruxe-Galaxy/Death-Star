// ** React Imports
import { useEffect, useState } from 'react'

// ** MUI Imports
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ** Store & Actions Imports
import { useDispatch, useSelector } from 'react-redux'
import { sendMsg, fetchUserProfile, fetchChatsContacts } from 'src/store/apps/chat'

// ** Types
import { RootState, AppDispatch } from 'src/store'
import { StatusObjType } from 'src/types/apps/chatTypes'

// ** Utils Imports
import { getInitials } from 'src/@core/utils/get-initials'

// ** Chat App Components Imports
import ChatContent from 'src/views/apps/chat/ChatContent'

const AppChat = () => {
  const [leftSidebarOpen, setLeftSidebarOpen] = useState<boolean>(false)
  const [userProfileRightOpen, setUserProfileRightOpen] = useState<boolean>(false)

  // ** Hooks
  const theme = useTheme()
  const dispatch = useDispatch<AppDispatch>()
  const hidden = useMediaQuery(theme.breakpoints.down('lg'))

  const smAbove = useMediaQuery(theme.breakpoints.up('sm'))
  const sidebarWidth = smAbove ? 370 : 300
  const mdAbove = useMediaQuery(theme.breakpoints.up('md'))
  const statusObj: StatusObjType = {
    busy: 'error',
    away: 'warning',
    online: 'success',
    offline: 'secondary'
  }

  useEffect(() => {
    dispatch(fetchUserProfile())
    dispatch(fetchChatsContacts())
  }, [dispatch])

  const handleLeftSidebarToggle = () => setLeftSidebarOpen(!leftSidebarOpen)
  const handleUserProfileRightSidebarToggle = () => setUserProfileRightOpen(!userProfileRightOpen)

  return (
      <ChatContent
        hidden={hidden}
        sendMsg={sendMsg}
        mdAbove={mdAbove}
        dispatch={dispatch}
        statusObj={statusObj}
        getInitials={getInitials}
        sidebarWidth={sidebarWidth}
        userProfileRightOpen={userProfileRightOpen}
        handleLeftSidebarToggle={handleLeftSidebarToggle}
        handleUserProfileRightSidebarToggle={handleUserProfileRightSidebarToggle}
      />
  )
}

AppChat.contentHeightFixed = true

export default AppChat
