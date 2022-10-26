import React from "react";
import logo from "../assets/BEETAFORA4A-removebg-preview.png";

const Posts = () => {
  return (
    <>
      <div id="posts">
        <div className="container">
          <div className="row">
            <div className="col-md-3 item">
              <div class="animate-box">
                <a
                  href="images/sanJuan.jpg"
                  class="image-popup fh5co-board-img"
                  title="Title..."
                >
                  <img src="https://images.unsplash.com/photo-1571752726703-5e7d1f6a986d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8ZmlzaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                </a>
              </div>
              <div class="fh5co-desc">
                <p>
                  <strong>Title...</strong>
                  <br />
                  Description
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
