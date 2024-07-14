const socket = io();

socket.on('status', (newStatus) => {
  const statusElement = document.getElementById('status');
  const statusImageElement = document.getElementById('statusImage');

  statusElement.innerText = newStatus;

  if (newStatus === 'online') {
    statusImageElement.src = 'online.png';
    statusImageElement.alt = 'Online Status';
  } else {
    statusImageElement.src = 'offline.png';
    statusImageElement.alt = 'Offline Status';
  }
});