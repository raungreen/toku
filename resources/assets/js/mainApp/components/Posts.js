import React, { Component } from "react";
import ReactDOM from "react-dom";

class Posts extends Component {
  constructor() {
    super();
    this.state = {};
  }
  clickedBtn = () => {
    console.log("swag");
  };
  showLatestPosts = () => {
    if (this.props.initialData.latestPosts != undefined) {
      return this.props.initialData.latestPosts.map((item, index) => {
        let post = item.posts;
        let user = item.users;
        return (
          <div className="update-container" key={index}>
            <div className="author-info">
              <a
                href="#"
                className="user-img"
                style={{
                  backgroundImage: `url('${user.profile_img}')`,
                }}
              />
              <div className="info">
                <a href="/profile">{`${user.first_name} ${user.last_name}`} </a>
                shared a
                <a href="#"> {post.type == "text" ? "story" : "image"}</a>
              </div>
            </div>
            <div className="media">
              <div
                className={`${post.type == "text" ? "story" : "image"}`}
                style={{
                  background:
                    'url("https://images.unsplash.com/photo-1476493279419-b785d41e38d8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=61eaea85f1aa3d065400179c78163f15")',
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              />
            </div>
            <div className="padding-container">
              <div className="grey-container">
                <div className="update-info">
                  <h3>How to become a developer</h3>
                  <p>{post.content}</p>
                </div>
                <div className="update-stats">
                  <div className="icon-section">
                    <div className="like-circle">
                      <i className="fas fa-thumbs-up" />
                    </div>
                  </div>
                  <div className="other-users">
                    David Banner and 28 others liked update
                  </div>
                  <div className="comments-stats">4 comments</div>
                </div>
                <div className="compose-comment">
                  <textarea name id cols={80} rows={8} defaultValue={""} />
                  <div className="buttons">
                    <div className="repost-btn">
                      <i className="fas fa-redo" />
                    </div>
                    <div className="like-btn">
                      <i className="fas fa-thumbs-up" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      });
    }
  };
  render() {
    return (
      <section id="posts">
        {this.showLatestPosts()}
        {/* <div className="update-container">
          <div className="author-info">
            <a href="#" className="user-img" />
            <div className="info">
              <a href="#">Jack Black </a>shared a<a href="#"> story</a>
            </div>
          </div>
          <div className="media">
            <div
              className="image"
              style={{
                background:
                  'url("https://images.unsplash.com/photo-1476493279419-b785d41e38d8?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=61eaea85f1aa3d065400179c78163f15")',
                backgroundPosition: "center center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            />
          </div>
          <div className="padding-container">
            <div className="grey-container">
              <div className="update-info">
                <h3>How to become a developer</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Accusamus, labore! Alias ea totam neque velit ullam ab veniam,
                  laudantium quos molestiae atque magni voluptatum. Explicabo
                  minima suscipit dolorum maxime iste?
                </p>
              </div>
              <div className="update-stats">
                <div className="icon-section">
                  <div className="like-circle">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
                <div className="other-users">
                  David Banner and 28 others liked update
                </div>
                <div className="comments-stats">4 comments</div>
              </div>
              <div className="compose-comment">
                <textarea name id cols={80} rows={8} defaultValue={""} />
                <div className="buttons">
                  <div className="repost-btn">
                    <i className="fas fa-redo" />
                  </div>
                  <div className="like-btn">
                    <i className="fas fa-thumbs-up" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    );
  }
}

export default Posts;
