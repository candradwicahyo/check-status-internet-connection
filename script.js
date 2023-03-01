window.onload = () => {
  
  function checkStatusInternet() {
    setInterval(() => {
      const text = document.querySelector('.text');
      const status = window.navigator.onLine;
      text.textContent = (status) ? 'online' : 'offline';
    }, 10);
  }
  
  checkStatusInternet();
  
}