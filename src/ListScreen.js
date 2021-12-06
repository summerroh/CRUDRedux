import React from 'react';
import { AiOutlineEnter } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

function ListScreen(props) {
  return (
    <div className="container">
      <div>
        <Link to="/">프로젝트 제목</Link>
      </div>

      <div className="postContainer">
        <Link to="read">제목</Link>
        <div className="other">
          <p>작성자</p>
          <Link to="/update"><button className='icon'><AiOutlineEdit /></button></Link>
          <button className='icon'><AiOutlineDelete /></button>
        </div>
      </div>

      <div className="postContainer">
        <p><AiOutlineEnter className="commentIcon" />댓글 제목1</p>
        <div className="other">
          <p>작성자</p>
          <Link to="/update"><button className='icon'><AiOutlineEdit /></button></Link>
          <button className='icon'><AiOutlineDelete /></button>
        </div>
      </div>

      <div className="postContainer">
        <p>
          <AiOutlineEnter className="commentIcon" />
          <AiOutlineEnter className="commentIcon" />
          댓글 제목2</p>
        <div className="other">
          <p>작성자</p>
          <Link to="/update"><button className='icon'><AiOutlineEdit /></button></Link>
          <button className='icon'><AiOutlineDelete /></button>
        </div>
      </div>

      <div className="postContainer">
        <p>제목</p>
        <div className="other">
          <p>작성자</p>
          <Link to="/update"><button className='icon'><AiOutlineEdit /></button></Link>
          <button className='icon'><AiOutlineDelete /></button>
        </div>
      </div>

      <p>1 2 3 4 5</p>
      
      <Link to="/create"><button>글쓰기</button></Link>

    </div>
  );
}

export default ListScreen;