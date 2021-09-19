import React, { Component } from "react";
import VideoCategory from "../../components/UI/VideoCategory/VideoCategory";
import discoverStyles from "./Discover.module.css";
import { getVideosByCategory } from "./../../axios/youtube-requests";

class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [],
      videos: [],
    };
  }

  componentDidMount() {
    getVideosByCategory(1)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  render() {
    return (
      <div>
        <div className={discoverStyles.tags}>
          <hr />
          <div>
            <VideoCategory />
          </div>
          <hr />
        </div>
        <div>Discover</div>
      </div>
    );
  }
}

export default Discover;
