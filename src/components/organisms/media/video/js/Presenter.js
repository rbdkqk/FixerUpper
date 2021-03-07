export default class Presenter {
  constructor(repository, header, body) {
    this.repository = repository;
    this.header = header;
    this.body = body;
  }

  searchYouTube({ query, max, key, param }, callback) {
    let ajaxReq = new XMLHttpRequest();

    ajaxReq.onreadystatechange = function () {
      try {
        if (ajaxReq.status >= 200 && ajaxReq.status < 300) {
          console.log('success ajax request : ', ajaxReq);
          // this.repository.youtubeVideosList = '새로 받아온 유튜브리스트'
          // this.body.render();
        } else {
          alert('youtube api 요청 실패함');
        }
      } catch (error) {
        alert('error : ', error.description);
      }
    };

    ajaxReq.open(
      'GET',
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&videoEmbeddable=true&key=${key}&${param}=${query}&maxResults=${max}`
      // false
    );

    ajaxReq.send();
  }

  handleSearchRequest(query, param) {
    // 아래 각 항목을 순차 실행하도록 구성할 것임

    // 1. ajax call;
    this.getYouTubeVideos(query, param);
    // 2. store Videos to this.repository.youtubeVideosList;
    // 3. rerender call : this.body.render()
  }

  // 1. ajax call;
  getYouTubeVideos(query, param) {
    let searchOption = {
      query: query,
      max: 3, // 나중엔 9로 바꿔줘야 한다 (6개 정도로 줄이는 것도 고려해 볼 것)
      key: 'AIzaSyBNbjMP3rGUUiFG2p1w95hKelLnA6-IDcs',
      param: param,
    };

    searchYouTube(searchOption, (videos) => {
      console.log({ videos });
      // if (param === 'q') {
      //   return this.setState({
      //     videos: videos.items.slice(1),
      //     currentVideo: videos.items[0],
      //   });
      // }

      // if (param === 'relatedToVideoId') {
      //   return this.setState({
      //     videos: videos.items.slice(1),
      //   });
      // }
    });
  }
}
