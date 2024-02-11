import styles from './Chat-Icon.module.css';
import { TbRobot } from 'react-icons/tb';
const ChatBotIcon = () => {
  return (
    <div
      onClick={() => {
        let chatIcon = document.getElementById('chat-bot-icon');
        let chatContainer = document.getElementById('chatbot-container');
        if (chatContainer) {
          chatContainer.style.display = 'block';
          chatIcon.style.display = 'none';
        }
      }}
      id="chat-bot-icon"
      className={styles.chatBotIcon}
    >
      <div style={{ width: '100%' }} role="img" aria-label="ChatBot Icon">
        <TbRobot className={`${styles.tbRobot}`} color="#59c1bd" />
      </div>
    </div>
  );
};

export default ChatBotIcon;
