// ** MUI Imports
import MuiAvatar from '@mui/material/Avatar'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Box, { BoxProps } from '@mui/material/Box'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Import
import ChatLog from './ChatLog'
import SendMsgForm from 'src/views/apps/chat/SendMsgForm'

// ** Types
import { ChatContentType } from 'src/types/apps/chatTypes'
import { Button } from '@mui/material';

// ** Styled Components
const ChatWrapperStartChat = styled(Box)<BoxProps>(({ theme }) => ({
  flexGrow: 1,
  height: '100%',
  display: 'flex',
  borderRadius: 1,
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: theme.palette.action.hover
}))

const ChatContent = (props: ChatContentType) => {
  // ** Props
  const {
    store,
    hidden,
    mdAbove,
    dispatch,
    handleStartConversation,
    isActive
  } = props

  const renderContent = () => {
    if (store) {
      if (!isActive) {
        return (
          <ChatWrapperStartChat
          >
            <MuiAvatar
              sx={{
                mb: 5,
                pt: 8,
                pb: 7,
                px: 7.5,
                width: 110,
                height: 110,
                boxShadow: 3,
                '& svg': { color: 'action.active' },
              }}
            >
              <Icon icon='mdi:message-outline' fontSize='3.125rem' />
            </MuiAvatar>
            <Button
              onClick={handleStartConversation}
              sx={{
                px: 6,
                py: 2.25,
                boxShadow: 3,
                borderRadius: 5,
                backgroundColor: 'background.paper',
                cursor: mdAbove ? 'default' : 'pointer'
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>Start Conversation</Typography>
            </Button>
          </ChatWrapperStartChat>
        )
      } else {
        return (
          <Box
            component='div'
            sx={{
              width: 0,
              flexGrow: 1,
              height: '100%',
              backgroundColor: 'action.hover'
            }}
          >
            <Box
            component='div'
            sx={{
              py: 3,
              px: 5,
              mb: 3,
              height: "11%",
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              borderBottom: theme => `1px solid ${theme.palette.divider}`
            }}
            ></Box>

            { store.messages ? (
              <ChatLog hidden={hidden} data={{messages: store.messages }} />
            ) : null }

            <SendMsgForm store={store} dispatch={dispatch} />
          </Box>
        );
      }
    } else {
      return null;
    }
  };

  return renderContent();
};

export default ChatContent;