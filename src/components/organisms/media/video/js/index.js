// header 부분 실험중
let youtubeModalHeader = document.getElementById('youtubeModal-header');

let searchInput = document.createElement('input');

searchInput.id = 'video-search-input';
searchInput.placeholder = 'Youtube 영상을 검색하세요!';
// searchInput.style.cssText = 'flex:1;width:50%;';
searchInput.style.width = '50%';

youtubeModalHeader.appendChild(searchInput);
