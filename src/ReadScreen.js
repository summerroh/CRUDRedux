import React from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from 'react-router-dom';

function ReadScreen(props) {
  return (
    <div className="container">
      <div>
        <Link to="/">프로젝트 제목</Link>
      </div>


      <div className="titleContainer">
        <p>제목</p>
        <div className="other">
          <p>작성자</p>
        </div>
      </div>


      <div className="contentContainer">
        <p>내용</p>
      </div>

      <Link to="/update"><button className='icon'><AiOutlineEdit /></button></Link>
      <button className='icon'><AiOutlineDelete /></button>

    </div>
  );
}

export default ReadScreen;