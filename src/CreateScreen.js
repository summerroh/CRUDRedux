import React from 'react';
import { Link } from 'react-router-dom';

function CreateScreen(props) {
  return (
    <div className="container">
      <div>
        <Link to="/">프로젝트 제목</Link>
      </div>

      <div className="postContainer">
        <textarea className="textInput">제목</textarea>
      </div>

      <div className="contentContainer">
        <textarea className="textInput">내용</textarea>
      </div>

      <div className="authorContainer">
        <textarea className="textInput">작성자</textarea>
      </div>

      <button>등록</button>

    </div>
  );
}

export default CreateScreen;