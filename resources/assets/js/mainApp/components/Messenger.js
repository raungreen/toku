import React, { Component } from "react";
import ReactDOM from "react-dom";

class Messenger extends Component {
  constructor() {
    super();
    this.state = {};
  }
  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (
      <section id="messenger">
        <div className="messenger-header">
          <div className="messenger-icon">
            <i className="fas fa-comments" />
          </div>
          <div className="title">Messenger</div>
          <div className="options-icon">
            <i className="fas fa-ellipsis-v" />
          </div>
        </div>
        <div className="users">
          <div className="users-container">
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5…872c40https://pbs.twimg.com/profile_images/953000038967468033/n4Ngwvi7.jpg)",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                }}
              />
              <div className="username">LeBron James</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5…872c40https://pbs.twimg.com/profile_images/953000038967468033/n4Ngwvi7.jpg)",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                }}
              />
              <div className="username">Anthony Davis</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5…872c40https://pbs.twimg.com/profile_images/953000038967468033/n4Ngwvi7.jpg)",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                }}
              />
              <div className="username">Danny Green</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user">
              <div
                className="user-img"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5…872c40https://pbs.twimg.com/profile_images/953000038967468033/n4Ngwvi7.jpg)",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                }}
              />
              <div className="username">Kyle Kuzma</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
            <div className="user active">
              <div
                className="user-img"
                style={{
                  background:
                    "url(https://images.unsplash.com/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5…872c40https://pbs.twimg.com/profile_images/953000038967468033/n4Ngwvi7.jpg)",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  borderRadius: "50%",
                  height: "30px",
                  width: "30px",
                }}
              />
              <div className="username">JaVale McKee</div>
              <div className="conversation">
                <i className="fas fa-comment-dots" />
              </div>
            </div>
          </div>
        </div>
        <div className="search">
          <input type="text" name defaultValue placeholder="Search" />
        </div>
      </section>
    );
  }
}

export default Messenger;
