import React from 'react';
import { AiOutlineEdit } from "react-icons/ai";
import { AiOutlineDelete } from "react-icons/ai";
import { AiOutlineEnter } from "react-icons/ai";
import { Link } from 'react-router-dom';

function ReadScreen(props) {
  return (
    <div className="container">
      <div>
        <Link to="/"><h2>프로젝트 제목</h2></Link>
      </div>

      <div className="titleContainer">
        <p>제목</p>
        <p>작성자</p>
      </div>

      <div className="contentContainer">
        <p>내용</p>
      </div>

      <Link to="/create"><button className='icon'><AiOutlineEdit /></button></Link>
      <button className='icon'><AiOutlineDelete /></button>

      <hr />
      {/* <span> */}
      <h3> 댓글 작성 </h3>
      <div className="contentContainer">
        <textarea className="textInput">댓글 내용</textarea>
      </div>

      <div className="authorContainer">
        <textarea className="textInput">댓글 작성자</textarea>
      </div>

      <button>댓글 등록</button>
      {/* </span> */}

      <hr />
      <h3> 댓글 목록 </h3>
      <div className="contentContainer">
        <p>댓글1</p>
        <divZ>
          <p>댓글 작성자</p>
          <div>
            <Link to="/create"><button className='icon'><AiOutlineEdit /></button></Link>
            <button className='icon'><AiOutlineDelete /></button>
          </div>
          <button>대댓글 작성</button>
        </divZ>
      </div>

      <div className="contentContainer">
        <p><AiOutlineEnter className='commentIcon'/>대댓글1</p>
        <div>
          <p>대댓글1 작성자</p>
          <Link to="/create"><button className='icon'><AiOutlineEdit /></button></Link>
          <button className='icon'><AiOutlineDelete /></button>
        </div>
      </div>

      <div className="contentContainer">
        <p><AiOutlineEnter className='commentIcon'/>대댓글2</p>
        <div>
          <p>대댓글2 작성자</p>
          <Link to="/create"><button className='icon'><AiOutlineEdit /></button></Link>
          <button className='icon'><AiOutlineDelete /></button>
        </div>
      </div>

      <div className="contentContainer">
        <p><AiOutlineEnter className='commentIcon'/>대댓글3</p>
        <div>
          <p>대댓글3 작성자</p>
          <Link to="/create"><button className='icon'><AiOutlineEdit /></button></Link>
          <button className='icon'><AiOutlineDelete /></button>
        </div>
      </div>

      <div className="contentContainer">
        <p><AiOutlineEnter className='commentIcon'/>대댓글4</p>
        <div>
          <p>대댓글4 작성자</p>
          <Link to="/create"><button className='icon'><AiOutlineEdit /></button></Link>
          <button className='icon'><AiOutlineDelete /></button>
        </div>
      </div>

      <div className="contentContainer">
        <p><AiOutlineEnter className='commentIcon'/>대댓글5</p>
        <div>
          <p>대댓글5 작성자</p>
          <Link to="/create"><button className='icon'><AiOutlineEdit /></button></Link>
          <button className='icon'><AiOutlineDelete /></button>
        </div>
      </div>

      <p>대댓글 더보기</p>

      <div className="contentContainer">
        <p>댓글2</p>
        <div>
          <p>댓글 작성자</p>
          <div>
            <Link to="/create"><button className='icon'><AiOutlineEdit /></button></Link>
            <button className='icon'><AiOutlineDelete /></button>
          </div>
          <button>대댓글 작성</button>
        </div>
      </div>

      <div className="contentContainer">
        <p><AiOutlineEnter className='commentIcon'/>대댓글1</p>
        <div>
          <p>대댓글1 작성자</p>
          <Link to="/create"><button className='icon'><AiOutlineEdit /></button></Link>
          <button className='icon'><AiOutlineDelete /></button>
        </div>
      </div>

      <div className="contentContainer">
        <p>댓글3</p>
        <div>
          <p>댓글 작성자</p>
          <div>
            <Link to="/create"><button className='icon'><AiOutlineEdit /></button></Link>
            <button className='icon'><AiOutlineDelete /></button>
          </div>
          <button>대댓글 작성</button>
        </div>
      </div>

      <p>댓글 더보기</p>

    </div>
  );
}

export default ReadScreen;