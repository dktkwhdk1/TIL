const video = document.getElementById('video'); // 비디오 태그
const playBtn = document.getElementById('play'); // 플레이 버튼
const stopBtn = document.getElementById('stop'); // 스탑 버튼
const progress = document.getElementById('progress'); // 프로그레스 바
const timestamp = document.getElementById('timestamp'); // 타임스탬프

// Play & pause video
function toggleVideoStatus() {
  // 비디오가 멈춰있니?
  if (video.paused) {
    video.play(); // 재생해라
  } else {
    video.pause(); // 멈춰라
  }
}

// update play/pause icon
function updatePlayIcon() {
  // 비디오가 멈춰있니?
  if (video.paused) {
    // 플레이 버튼을 재생 버튼(세모)으로 바꿔라
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    // 플레이 버튼을 일시 정지 버튼으로 바꿔라
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// update progress & timestamp
function updateProgress() {
  // 프로그레스 바의 값(0으로 되어 있음)을 (현재 경과 시간 / 영상 전체 시간) * 100 = %로
  progress.value = (video.currentTime / video.duration) * 100;

  // Get minutes
  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  // Get seconds
  let seconds = Math.floor(video.currentTime % 60);
  if (seconds < 10) {
    seconds = '0' + String(seconds);
  }

  timestamp.innerHTML = `${mins}:${seconds}`;
}

// Set video time to progress
function setVideoProgress() {
  // 프로그레스 바의 특정 부분을 클릭했을 때 호출되는 함수
  // 영상의 현재 시간을 (프로그레스 바의 값 * 전체 시간) / 100으로 set
  // updateProgress 함수에서의 식을 변형한 것
  video.currentTime = (+progress.value * video.duration) / 100;
}

// Stop video
function stopVideo() {
  // back to the beginning
  video.currentTime = 0;
  video.pause();
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

playBtn.addEventListener('click', toggleVideoStatus);

stopBtn.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
