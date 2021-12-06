import React from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

function ListScreen(props) {
  return (
    <div className="container">
      <div>
        <Link to="/"><h2>프로젝트 제목</h2></Link>
      </div>

      <div className="postContainer">
        <Link to="read">제목1</Link>
        <div className="other">
          <p>작성자</p>
          <Link to="/create"><button className='icon'><AiOutlineEdit /></button></Link>
          <button className='icon'><AiOutlineDelete /></button>
        </div>
      </div>

      <div className="postContainer">
        <Link to="read">제목2</Link>
        <div className="other">
          <p>작성자</p>
          <Link to="/create"><button className='icon'><AiOutlineEdit /></button></Link>
          <button className='icon'><AiOutlineDelete /></button>
        </div>
      </div>

      <div className="postContainer">
        <Link to="read">제목3</Link>
        <div className="other">
          <p>작성자</p>
          <Link to="/create"><button className='icon'><AiOutlineEdit /></button></Link>
          <button className='icon'><AiOutlineDelete /></button>
        </div>
      </div>

      <div className="postContainer">
        <Link to="read">제목4</Link>
        <div className="other">
          <p>작성자</p>
          <Link to="/create"><button className='icon'><AiOutlineEdit /></button></Link>
          <button className='icon'><AiOutlineDelete /></button>
        </div>
      </div>

      <div className="postContainer">
        <Link to="read">제목5</Link>
        <div className="other">
          <p>작성자</p>
          <Link to="/create"><button className='icon'><AiOutlineEdit /></button></Link>
          <button className='icon'><AiOutlineDelete /></button>
        </div>
      </div>

      <p>1 2 3 4 5</p>
      
      <Link to="/create"><button>글쓰기</button></Link>

    </div>
  );
}

export default ListScreen;