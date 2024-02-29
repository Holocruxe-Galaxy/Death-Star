import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";

const ChatWrapper = () => {
  const [on, setOn] = useState<boolean>(false)

  

  if(!on)
    return (
      <Stack spacing={5} sx={{ display: 'flex', flexDirection: 'column' }}>
        <img src="https://i.imgur.com/49mV0Tr.png" alt="" />
        <Button onClick={() => setOn(true)} variant="contained">INICIAR CHAT</Button>
      </Stack>
    )

  
  return <h1>Funca</h1>

}

export default ChatWrapper