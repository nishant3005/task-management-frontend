import io from 'socket.io-client';

const socket = io(
  'https://intelligent-task-management-system-backend.vercel.app/'
);

export default socket;
