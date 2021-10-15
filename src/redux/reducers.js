import * as actions from "./actions";
import { combineReducers } from "redux";

let initialState = {
  theme: {
    background: null,
    title: null,
    text: null,
  },
  favoriteTeam: {},
  dashtheme: {},
  teams: null,
  teamLoading: false,
  teamError: null,
  rosterLoading: false,
  rosterError: false,
  rosters: null,
  colors: null,
  colorLoading: false,
  colorError: null,
  images: null,
  imageLoading: false,
  imageError: null,
  videos: null,
  videoLoading: false,
  videoError: null,
  teamData: null,
  teamDataLoading: false,
  teamDataError: null,
  teamRSSfeed: null,
  teamRSSfeedLoading: false,
  teamRSSfeedError: null,
};

const preferences = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGETHEME:
      return { ...state, theme: action.payload.theme };
    case actions.CHANGETEAM:
      return { ...state, favoriteTeam: action.payload };
    case actions.CHANGEDASHTHEME:
      return { ...state, dashtheme: action.payload };
    case actions.FETCH_TEAM_DETAILS_STARTED:
      return {
        ...state,
        teamLoading: true,
      };
    case actions.FETCH_TEAM_DETAILS_SUCCESS:
      return {
        ...state,
        teamLoading: false,
        teamError: null,
        teams: action.payload.team,
      };
    case actions.FETCH_TEAM_DETAILS_FAILURE:
      return {
        ...state,
        teamLoading: false,
        teamError: action.payload.error,
      };
    case actions.FETCH_TEAM_ROSTER_STARTED:
      return {
        ...state,
        rosterLoading: true,
      };
    case actions.FETCH_TEAM_ROSTER_SUCCESS:
      return {
        ...state,
        rosterLoading: false,
        rosterError: null,
        rosters: action.payload.roster,
      };
    case actions.FETCH_TEAM_ROSTER_FAILURE:
      return {
        ...state,
        rosterLoading: false,
        rosterError: action.payload.error,
      };
    case actions.FETCH_TEAM_COLORS_STARTED:
      return {
        ...state,
        colorsLoading: true,
      };
    case actions.FETCH_TEAM_COLORS_SUCCESS:
      return {
        ...state,
        colorsLoading: false,
        colorError: null,
        colors: action.payload.color,
      };
    case actions.FETCH_TEAM_COLORS_FAILURE:
      return {
        ...state,
        colorsLoading: false,
        colorError: action.payload.error,
      };
    case actions.FETCH_TEAM_IMAGES_STARTED:
      return {
        ...state,
        imagesLoading: true,
      };
    case actions.FETCH_TEAM_IMAGES_SUCCESS:
      return {
        ...state,
        imagesLoading: false,
        imageError: null,
        images: action.payload.images,
      };
    case actions.FETCH_TEAM_IMAGES_FAILURE:
      return {
        ...state,
        imagesLoading: false,
        imageError: action.payload.error,
      };
    case actions.FETCH_TEAM_VIDEOS_STARTED:
      return {
        ...state,
        videosLoading: true,
      };
    case actions.FETCH_TEAM_VIDEOS_SUCCESS:
      return {
        ...state,
        videosLoading: false,
        videoError: null,
        videos: action.payload.videos,
      };
    case actions.FETCH_TEAM_VIDEOS_FAILURE:
      return {
        ...state,
        videosLoading: false,
        videoError: action.payload.error,
      };
    case actions.FETCH_TEAM_DATA_STARTED:
      return {
        ...state,
        teamDataLoading: true,
      };
    case actions.FETCH_TEAM_DATA_SUCCESS:
      return {
        ...state,
        teamDataLoading: false,
        teamDataError: null,
        teamData: action.payload.teamData,
      };
    case actions.FETCH_TEAM_DATA_FAILURE:
      return {
        ...state,
        teamDataLoading: false,
        teamDataError: action.payload.error,
      };
    case actions.FETCH_TEAM_RSS_FEED_STARTED:
      return {
        ...state,
        teamRSSfeedLoading: true,
      };
    case actions.FETCH_TEAM_RSS_FEED_SUCCESS:
      return {
        ...state,
        teamRSSfeedLoading: false,
        teamRSSfeedError: null,
        teamRSSfeed: action.payload.feeds,
      };
    case actions.FETCH_TEAM_RSS_FEED_FAILURE:
      return {
        ...state,
        teamRSSfeedLoading: false,
        videoError: action.payload.error,
      };
    default:
      return state;
  }
};

export default combineReducers({ preferences });
