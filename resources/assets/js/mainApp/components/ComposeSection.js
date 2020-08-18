import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class ComposeSection extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Joe'
    };
  }
  submitForm = async () => {
    try {
      await axios.post('/api/post', {
        firstName: 'Fred',
        lastName: 'Flintstone'
      });
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <section className="compose-section">
        <textarea name id cols={80} rows={8} defaultValue={''} />
        <div className="user-img" />
        <div className="buttons">
          <div className="button photo-btn">
            <i className="fas fa-camera-retro" />
          </div>
          <div className="button video-btn">
            <i className="fas fa-video" />
          </div>
          <div className="button send-btn" onClick={this.submitForm}>
            <i className="fas fa-paper-plane" />
          </div>
        </div>
      </section>
    );
  }
}

export default ComposeSection;
