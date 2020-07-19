const changeIcon = (id) => {
  const item = document.getElementById(id);
  const currentName = item.classList[1];
  const playBar = document.getElementById('play-bar');
  if (currentName === 'fa-play') {
    item.classList.remove('fa-play');
    item.classList.add('fa-pause');
    console.log(playBar);
    playBar.style.display = 'block';
  } else {
    item.classList.remove('fa-pause');
    item.classList.add('fa-play');
    playBar.style.display = 'none';
  }
};
