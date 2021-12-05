import React from 'react';
import { AiOutlineEnter } from "react-icons/ai";

function ListScreen(props) {
  return (
    <div className="container">
      <div>
        <h1>프로젝트 제목</h1>
      </div>


      <div className="postContainer">
        <p className="title">제목</p>
        <div className="other">
          <p>작성자</p>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>

      <div className="postContainer">
        <p className="title"><AiOutlineEnter className="commentIcon" />댓글 제목1</p>
        <div className="other">
          <p>작성자</p>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>

      <div className="postContainer">
        <p className="title">
          <AiOutlineEnter className="commentIcon" />
          <AiOutlineEnter className="commentIcon" />
          댓글 제목2</p>
        <div className="other">
          <p>작성자</p>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>

      <div className="postContainer">
        <p className="title">제목</p>
        <div className="other">
          <p>작성자</p>
          <button>수정</button>
          <button>삭제</button>
        </div>
      </div>

      
      <button>글쓰기</button>

    </div>
  );
}

export default ListScreen;