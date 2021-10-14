import axios from "axios";
import XMLParser from "react-xml-parser";
export const CHANGETHEME = "CHANGETHEME";
export const CHANGEDASHTHEME = "CHANGEDASHTHEME";
export const CHANGETEAM = "CHANGETEAM";
export const FETCH_TEAM_DETAILS_SUCCESS = "FETCH_TEAM_DETAILS_SUCCESS";
export const FETCH_TEAM_DETAILS_FAILURE = "FETCH_TEAM_DETAILS_FAILURE";
export const FETCH_TEAM_DETAILS_STARTED = "FETCH_TEAM_DETAILS_STARTED";
export const FETCH_TEAM_ROSTER_SUCCESS = "FETCH_TEAM_ROSTER_SUCCESS";
export const FETCH_TEAM_ROSTER_FAILURE = "FETCH_TEAM_ROSTER_FAILURE";
export const FETCH_TEAM_ROSTER_STARTED = "FETCH_TEAM_ROSTER_STARTED";
export const FETCH_TEAM_COLORS_SUCCESS = "FETCH_TEAM_COLORS_SUCCESS";
export const FETCH_TEAM_COLORS_FAILURE = "FETCH_TEAM_COLORS_FAILURE";
export const FETCH_TEAM_COLORS_STARTED = "FETCH_TEAM_COLORS_STARTED";
export const FETCH_TEAM_IMAGES_SUCCESS = "FETCH_TEAM_IMAGES_SUCCESS";
export const FETCH_TEAM_IMAGES_FAILURE = "FETCH_TEAM_IMAGES_FAILURE";
export const FETCH_TEAM_IMAGES_STARTED = "FETCH_TEAM_IMAGES_STARTED";
export const FETCH_TEAM_VIDEOS_SUCCESS = "FETCH_TEAM_VIDEOS_SUCCESS";
export const FETCH_TEAM_VIDEOS_FAILURE = "FETCH_TEAM_VIDEOS_FAILURE";
export const FETCH_TEAM_VIDEOS_STARTED = "FETCH_TEAM_VIDEOS_STARTED";
export const FETCH_TEAM_DATA_SUCCESS = "FETCH_TEAM_DATA_SUCCESS";
export const FETCH_TEAM_DATA_FAILURE = "FETCH_TEAM_DATA_FAILURE";
export const FETCH_TEAM_DATA_STARTED = "FETCH_TEAM_DATA_STARTED";
export const FETCH_TEAM_RSS_FEED_SUCCESS = "FETCH_TEAM_RSS_FEED_SUCCESS";
export const FETCH_TEAM_RSS_FEED_FAILURE = "FETCH_TEAM_RSS_FEED_FAILURE";
export const FETCH_TEAM_RSS_FEED_STARTED = "FETCH_TEAM_RSS_FEED_STARTED";

export const toggleTheme = (theme) => ({
  type: CHANGETHEME,
  payload: theme,
});

export const toggleTeams = (team) => ({
  type: CHANGETEAM,
  payload: team,
});

export const toggleDashTheme = (theme) => ({
  type: CHANGEDASHTHEME,
  payload: theme,
});

export const fetchTeamRosters = () => {
  return (dispatch) => {
    dispatch(fetchTeamRostersStarted());

    return axios
      .get(`${process.env.REACT_APP_API}/api/rosters`)
      .then((res) => {
        dispatch(fetchTeamRostersSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(fetchTeamRostersFailure(err.message));
      });
  };
};

const fetchTeamRostersSuccess = (roster) => ({
  type: FETCH_TEAM_ROSTER_SUCCESS,
  payload: {
    roster,
  },
});

const fetchTeamRostersStarted = () => ({
  type: FETCH_TEAM_ROSTER_STARTED,
});

const fetchTeamRostersFailure = (error) => ({
  type: FETCH_TEAM_ROSTER_FAILURE,
  payload: {
    error,
  },
});

export const fetchTeamDetails = () => {
  return (dispatch) => {
    dispatch(fetchTeamDetailsStarted());

    return axios
      .get(`${process.env.REACT_APP_API}/api/teams`)
      .then((res) => {
        dispatch(fetchTeamDetailsSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(fetchTeamDetailsFailure(err.message));
      });
  };
};

const fetchTeamDetailsSuccess = (team) => ({
  type: FETCH_TEAM_DETAILS_SUCCESS,
  payload: {
    team,
  },
});

const fetchTeamDetailsStarted = () => ({
  type: FETCH_TEAM_DETAILS_STARTED,
});

const fetchTeamDetailsFailure = (error) => ({
  type: FETCH_TEAM_DETAILS_FAILURE,
  payload: {
    error,
  },
});

export const fetchTeamColors = () => {
  return (dispatch) => {
    dispatch(fetchTeamColorsStarted());

    return axios
      .get(`${process.env.REACT_APP_API}/api/colors`)
      .then((res) => {
        dispatch(fetchTeamColorsSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(fetchTeamColorsFailure(err.message));
      });
  };
};

const fetchTeamColorsSuccess = (color) => ({
  type: FETCH_TEAM_COLORS_SUCCESS,
  payload: {
    color,
  },
});

const fetchTeamColorsStarted = () => ({
  type: FETCH_TEAM_COLORS_STARTED,
});

const fetchTeamColorsFailure = (error) => ({
  type: FETCH_TEAM_COLORS_FAILURE,
  payload: {
    error,
  },
});
export const fetchTeamImages = () => {
  return (dispatch) => {
    dispatch(fetchTeamImagesStarted());

    return axios
      .get(`${process.env.REACT_APP_API}/api/images`)
      .then((res) => {
        dispatch(fetchTeamImagesSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(fetchTeamImagesFailure(err.message));
      });
  };
};

const fetchTeamImagesSuccess = (images) => ({
  type: FETCH_TEAM_IMAGES_SUCCESS,
  payload: {
    images,
  },
});

const fetchTeamImagesStarted = () => ({
  type: FETCH_TEAM_IMAGES_STARTED,
});

const fetchTeamImagesFailure = (error) => ({
  type: FETCH_TEAM_IMAGES_FAILURE,
  payload: {
    error,
  },
});

export const fetchTeamVideos = (team) => {
  return (dispatch) => {
    dispatch(fetchTeamVideosStarted());

    return axios
      .get(`${process.env.REACT_APP_API}/api/yt/${team}`)
      .then((res) => {
        dispatch(fetchTeamVideosSuccess(res.data));
      })
      .catch((err) => {
        dispatch(fetchTeamVideosFailure(err.message));
      });
  };
};

const fetchTeamVideosSuccess = (videos) => ({
  type: FETCH_TEAM_VIDEOS_SUCCESS,
  payload: {
    videos,
  },
});

const fetchTeamVideosStarted = () => ({
  type: FETCH_TEAM_VIDEOS_STARTED,
});

const fetchTeamVideosFailure = (error) => ({
  type: FETCH_TEAM_VIDEOS_FAILURE,
  payload: {
    error,
  },
});

export const fetchTeamData = () => {
  return (dispatch) => {
    dispatch(fetchTeamDataStarted());

    return axios
      .get(`${process.env.REACT_APP_API}/api/nbaData`)
      .then((res) => {
        dispatch(fetchTeamDataSuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(fetchTeamDataFailure(err.message));
      });
  };
};

const fetchTeamDataSuccess = (teamData) => ({
  type: FETCH_TEAM_DATA_SUCCESS,
  payload: {
    teamData,
  },
});

const fetchTeamDataStarted = () => ({
  type: FETCH_TEAM_DATA_STARTED,
});

const fetchTeamDataFailure = (error) => ({
  type: FETCH_TEAM_DATA_FAILURE,
  payload: {
    error,
  },
});

export const fetchRssFeed = (feed) => {
  return (dispatch) => {
    dispatch(fetchTeamRSSfeedsStarted());

    return axios
      .get(`${process.env.REACT_APP_CORS_API}/${feed}`)
      .then((res) => {
        const jsonDataFromXml = new XMLParser().parseFromString(res.data);

        let result = jsonDataFromXml.children[0].children.splice(4, 10);

        let articles = result.map((item) => {
          let post = item.children.filter(
            (e) =>
              e.name === "enclosure" ||
              e.name === "author" ||
              e.name === "title" ||
              e.name === "description" ||
              e.name === "link" ||
              e.name === "pubDate"
          );
          return post;
        });
        dispatch(fetchTeamRSSfeedsSuccess(articles));
      })
      .catch((err) => {
        dispatch(fetchTeamRSSfeedsFailure(err.message));
      });
  };
};

const fetchTeamRSSfeedsSuccess = (feeds) => ({
  type: FETCH_TEAM_RSS_FEED_SUCCESS,
  payload: {
    feeds,
  },
});

const fetchTeamRSSfeedsStarted = () => ({
  type: FETCH_TEAM_RSS_FEED_STARTED,
});

const fetchTeamRSSfeedsFailure = (error) => ({
  type: FETCH_TEAM_RSS_FEED_FAILURE,
  payload: {
    error,
  },
});

export const fetchPlayerStats = (playerId) => {
  return axios.get(`${process.env.REACT_APP_API}/api/stats/${playerId}`);
};
