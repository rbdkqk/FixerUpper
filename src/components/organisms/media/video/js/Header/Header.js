// 문제해결
// input의 입력내용을 매번 갱신하기 위해 기존에는 keyup 항목에  setSearchWord 메소드를 걸어줬음
// 그러나 이렇게 하면 setSearchWord 메소드를 읽지 못함 (html 최상단에 별도 파일로 함수 선언해주면 읽어들이는데, 이렇게하면 각 클래스의 state에 접근할 수 없을 것 같았음)
// 그래서 방법 찾다가, setSearchWord 메소드를 별도 선언하지 않고, constructor안에서 searchInput을 잡고 addEventListener를 줬음
// 그래도 안되길래 찾아보다가, window.onload에 넣어주라고 해서 해봤는데 성공함

// 문제점 1 : constructor 안에서 외부 메소드에 접근할 수 없길래, temp를 억지로 선언하고 그 메소드를 갖다 썼음
// 문제점 2 : 그렇게 해도 this.presenter에 접근하지 못함

// 문제점 3 : this가 class가 아니라 window 객체를 잡음 : 그래서 this.presenter.handleSearchRequest 메소드가 실행되지 않고 있다.
// (this.searchWord 이건 잘 잡으면서, this.presenter 이건 null도 아니고 undefined이다)

export default class Header {
  constructor() {
    this.presenter = null;
    this.searchWord = '';

    // this.searchNewVideoList = function () {
    //   console.log('asdgasd');
    //   //   this.presenter.handleSearchRequest(this.searchWord, 'q');
    // };

    window.onload = function () {
      const searchInput = document.getElementsByClassName('searchInput');
      searchInput[0].addEventListener('keyup', (e) => {
        let newSearchWord = document.getElementsByClassName('searchInput')[0]
          .value;
        this.searchWord = newSearchWord;
        console.log(newSearchWord, this.searchWord, this.presenter);
      });

      const searchBtn = document.getElementsByClassName('searchBtn');
      searchBtn[0].addEventListener('click', (e) => {
        // 강제로 아래와 같이 작성해서 temp.__proto__.searchNewVideoList();까지는 성공했으나,
        // searchNewVideoList()에 들어간 this.presenter.handleSearchRequest(this.searchWord, 'q');는 찾지 못한다
        // 아래의 this가 window 객체가 잡혀버리는 문제인 듯
        // this가 이 클래스로 만든 인스턴스어야 this.presenter. 등이 작동할텐데...
        // 이 부분을 해결하지 못해서, Vanilla JS로 본 기능을 만드는 시도가 멈추게 됨...
        console.log('this : ', this);
        let temp = new Header();

        console.log(temp.__proto__);
        temp.__proto__.searchNewVideoList();
      });
    };
  }

  setPresenter(presenter) {
    console.log('setPresenter ', presenter);
    // 여기서는 presenter / this.presenter가 잘 잡힌다
    // 추측 : 순서상 constructor가 먼저 실행되고 그 뒤에 setPresenter 이게 실행돼서 그런것같음
    this.presenter = presenter;
    console.log(this.presenter);
  }

  setSearchWord() {
    console.log('agsag');
    let newSearchWord = document.getElementsByClassName('searchInput')[0].value;
    this.searchWord = newSearchWord;
    console.log(newSearchWord, this.searchWord);
  }

  // input에서 enter 키 입력시, searchNewVideoList 함수 작동
  // input에서 onKeyDown='this.handleEnterKeyPress();' 이렇게 줘야하는데, 일단 에러나니까 잠깐 제외했음
  handleEnterKeyPress(event) {
    if (event.key === 'Enter') {
      this.searchNewVideoList();
    }
  }

  handleSearchButton() {
    this.searchNewVideoList();
  }

  searchNewVideoList() {
    console.log('여기?');
    this.presenter.handleSearchRequest(this.searchWord, 'q');
  }
  // onkeyup='setSearchWord()'
  // onclick='handleSearchButton'
  render() {
    return `
      <div
        class='Header'
        style='display: flex; width: 100%; height:10%; min-height: 50px;'
      >
        <div class='emptyDiv' style='flex: 0.2; padding: 10px'></div>
        <div
          class='inputDiv'
          style='flex: 0.6; display: flex; align-items: center; justify-content: center; padding: 10px 50px;'
        >
          <input
            type='text'
            class='searchInput'
            style='flex: 0.9; min-width:150px; height: 30px;'
            
          ></input>
          <button
            class='searchBtn'
            style='flex: 0.1; width:100px; height: 30px;'
            
          >
            Search!
          </button>
        </div>
        <div
          class='submitBtnDiv'
          style='flex: 0.2; display: flex; align-items: center; justify-content: center; padding: 10px'
        >
          <button class='submitBtn' style='width:100px; height: 30px;'>
            Submit!
          </button>
        </div>
      </div>
    `;
  }
}
