// ** React Imports
import { useEffect, useState } from 'react';

// ** MUI Imports
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box, { BoxProps } from '@mui/material/Box';
import { makeStyles } from '@mui/styles'
import { styled } from '@mui/material/styles';

// ** Custom Components Import
import ChatLog from './ChatLog';
import SendMsgForm from 'src/views/apps/chat/SendMsgForm';

// ** Types
import { ChatContentType } from 'src/types/apps/chatTypes';
import { saveId } from 'src/store/apps/chat';
import { socketClient } from 'src/libs/socket.io';

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
}));

const ChatContent = (props: ChatContentType) => {
  // ** Props
  const {
    hidden,
    mdAbove,
    store,
    dispatch,
  } = props;

  // ** States
  const [active, setActive] = useState(false);
  const [activeArea, setActiveArea] = useState(false)

  const [id, setId] = useState('');

  const useStyles = makeStyles(() => ({
    startConversation: {
      background: 'linear-gradient(180deg, #00FFED -10%, rgba(248, 54, 244, 0.20) 100%)'
    }
  }))

  useEffect(() => {
    if (id) dispatch(saveId(id));
    socketClient.recieveMessages(dispatch);
    socketClient.recieveBroadcast(dispatch);
    socketClient.recieveAudio(dispatch);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);


  const handleStartConversation = () => {
    socketClient.connect(setId);
    setActive(true);
  };

  const handleMouseEnter = () => {
    setActiveArea(true)
  }

  const handleMouseLeaves = () => {
    setActiveArea(false)
  }

  const classes = useStyles()

  const renderContent = () => {
    if (store) {
      const messages = store.messages
      
      if (active === false) {

        return (
          <ChatWrapperStartChat
            sx={{
              ...(mdAbove ? { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 } : {}),
            }}
          >
            <IconButton
              sx={{ display: 'flex', flexDirection: 'column', height: 217, width: 238, '&.MuiButtonBase-root:hover': { bgcolor: "transparent"}}}
              onClick={() => handleStartConversation()}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeaves}
            >              
              <Box
                component='div'
                className={ activeArea ? classes.startConversation : ''}
                sx={{
                  px: 6,
                  py: 3,
                  mt: 8,
                  width:'14.813rem',
                  height: '3.125rem',
                  borderRadius: '5px',
                  boxShadow: '4px 4px 25px 0px rgba(0, 0, 0, 0.70), 4px 4px 4px 0px rgba(66, 65, 136, 0.25) inset',
                  backgroundColor: 'background.paper',
                  cursor: mdAbove ? 'pointer' : 'pointer',
                }}
              >
                <Typography sx={{ fontWeight: 500, color: '#00FFED' }}>Iniciar Conversación</Typography>
              </Box>
            </IconButton>
          </ChatWrapperStartChat>
        );
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
              <ChatLog hidden={hidden} data={{messages: messages}} />
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