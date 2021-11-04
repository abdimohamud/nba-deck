import React, { useContext, useEffect, useState } from "react";
import classNames from "classnames";
import { Timeline } from "react-twitter-widgets";
import { useParams } from "react-router-dom";
import { Title } from "../style";
import PlayerCard from "../components/PlayerCard";
import Carousel from "react-elastic-carousel";
import Loader from "react-loader-spinner";
import TeamContext from "../context";
import { fetchRssFeed, fetchTeamDetails, fetchTeamInfo, fetchTeamRoster, fetchTeamVideos } from "../hooks";
import { TeamLoader } from "../components/TeamLoader";
import XMLParser from "react-xml-parser";
import InfiniteCarousel from "react-leaf-carousel"
const Dashboard = () => {
  const [showLoader, setShowLoader] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);
    const {favoriteTeam, teams, setFavoriteTeam, roster, setRoster, rssFeed, setRSSFeed, videos, setVideos } = useContext(TeamContext)
    // const {favoriteTeam, dashtheme, teams, roster, videos, teamData, teamRSSfeed} = useSelector((state) => state.preferences);
    const [teamDetails, setTeamDetails] = useState(null)
    // const [teamRosters, setTeamRosters] = useState(null)
    const [teamInfo, setTeamInfo] = useState(null)
    const breakPoints = [
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2 },
      { width: 768, itemsToShow: 3 },
      { width: 1200, itemsToShow: 4 }
    ]
    const {id} = useParams()
    console.log(favoriteTeam)
    
    console.log(teamDetails)
    console.log(teamInfo)

  useEffect(()=>{
    if (id ){
      let team = teams.filter(team=> team.key === id)[0]
     
      setFavoriteTeam(team)
      
      //   let vids = teamData.filter(item=> item.abv===id)[0].youtube;
      //  let rssfeed = teamData.filter(item=> item.abv===id)[0].rss;
      
      // if(vids){
        //   dispatch(fetchTeamVideos(vids))
        // }
        // if (rssfeed){
          // dispatch(fetchRssFeed(rssfeed))
          // }
          
          
          
          
          
          
          fetchTeamRoster(favoriteTeam.short).then(res =>{console.log(res.data["t"]["pl"].slice(0, 12)) ;setRoster(res.data)}).catch(err=>console.log(err))
          fetchTeamDetails(favoriteTeam.key).then(res =>{ let team = res.data.data.filter(i=> i.key ===favoriteTeam.key)[0]; setTeamDetails(team)}).catch(err=>console.log(err))
          fetchTeamInfo(favoriteTeam.key).then(res => setTeamInfo(res.data.data)).catch(err=>console.log(err))  
          fetchTeamVideos(favoriteTeam.youtube).then(res => setVideos(res.data)).catch(err=>console.log(err))
          fetchRssFeed(favoriteTeam.short).then(res =>{ 
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
              return post})
            
            setRSSFeed(articles)}).catch(err=>console.log(err))     
    }
        
      },[id])
      console.log(videos)
      return   (
    <div>
      {showLoader? <TeamLoader img={favoriteTeam.logo} theme={favoriteTeam.theme}/>:
    <>
      <div className={classNames("p-20", `bg-${favoriteTeam.theme.primary}`)}>

        <div className={classNames("bg-white p-6 rounded-lg shadow-lg flex justify-center items-center ",`bg-${favoriteTeam.theme.secondary}`)}>
        
          <img src={favoriteTeam?favoriteTeam.logo:''}   style={{width:'250px'}} alt={favoriteTeam.key} />
        <Title >{teamDetails?`${teamDetails["1"]["0"][0]["CITY"]} ${teamDetails["1"]["0"][0]["NICKNAME"]}`: <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      />}</Title>   
   </div>
      </div>
      <div className="card-body"><h2 className="my-4 text-4xl font-bold card-title text-center">The BreakDown</h2>  <p>{teamInfo?teamInfo.description: <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      />}</p> 
      
      <p>EST 🕛:{teamDetails?teamDetails["0"]["0"][0]["YEARFOUNDED"]: <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      />} </p>
      <p>HomeCourt 🏠 :{teamDetails?teamDetails["0"]["0"][0]["ARENA"]: <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      />}</p>
      <p>Rings:🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆🏆</p>
      <p>All Time Record:  3427-2331</p>
      <div className="justify-end space-x-2 card-actions"> <a href={teamInfo?`https://www.${teamInfo.website}`:""} ><button className="btn">Learn More → </button> </a></div></div>
      <h2 className={classNames(" text-4xl text-center font-bold card-title",`bg-${favoriteTeam.theme.secondary} text-${favoriteTeam.theme.alternative}`)}>The Roster</h2>
    
      <div className="card-wrapper">   

        <Carousel breakPoints={breakPoints}>
    {
      roster?roster["t"]["pl"].slice(0, 12).map((item, idx) => (
        <PlayerCard key={idx} player={item.pid} dashtheme={favoriteTeam.theme}   />
      )): <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      />
    }
  </Carousel>
        </div>
      <div className="flex">
        <div className={classNames("p-20 w-full md:w-1/2",`bg-${favoriteTeam.theme.secondary}`)}>
        <div className={classNames("heading text-center font-bold text-2xl m-5 flex justify-center items-center",`text-${favoriteTeam.theme.alternative}`)}>    <svg xmlns="http://www.w3.org/2000/svg"  className={`fill-current text-${favoriteTeam.theme.alternative}`} width="72" height="72" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg> Twitter</div>
          <div className="bg-white rounded-lg shadow-lg">
         
            <div className="p-6">
           

 <Timeline
  dataSource={{
    sourceType:'profile',
    
    screenName: teamDetails?teamDetails["2"]["0"][2]["WEBSITE_LINK"].split("/")[3]:'nopocketchange'
  }}
  options={{
    height: '600'
  }}
/>
            </div>
          </div>
        </div>
        <div className={classNames("p-20 w-full md:w-1/2",`bg-${favoriteTeam.theme.secondary}`)}>
        <div className={classNames("heading text-center font-bold text-2xl m-5 flex justify-center items-center",`text-${favoriteTeam.theme.alternative}`)}>   <svg xmlns="http://www.w3.org/2000/svg" className={`fill-current text-${favoriteTeam.theme.alternative}`} width="72" height="72" viewBox="0 0 24 24"><path d="M7 15h13v1h-13v-1zm4-4v3h5v-3h-5zm-1 0h-3v1h3v-1zm-3 3h3v-1h-3v1zm13-1h-3v1h3v-1zm-6.951-6.573v-.396h-1.215v1.941h1.255v-.396h-.78v-.406h.698v-.393h-.698v-.35h.74zm1.396.261l.238 1.284h.5l.501-1.941h-.482l-.249 1.32-.238-1.32h-.492l-.27 1.345-.24-1.345h-.505l.46 1.941h.506l.271-1.284zm1.901.916c-.149 0-.324-.043-.466-.116l-.024-.013-.098.398.015.008c.102.058.318.119.547.119.581 0 .788-.328.788-.61 0-.272-.161-.458-.507-.586-.254-.096-.338-.145-.338-.247 0-.098.1-.161.254-.161.136 0 .266.03.388.088l.023.011.107-.39-.015-.007c-.145-.065-.311-.098-.495-.098-.442 0-.739.239-.739.593 0 .262.181.458.535.581.227.081.304.144.304.247 0 .117-.102.183-.279.183zm-5.325.368h.485v-1.941h-.438v1.189l-.641-1.189h-.535v1.941h.438v-1.327l.691 1.327zm8.979 1.028h-13v1h13v-1zm0 2h-3v1h3v-1zm-17-9v17.199c0 .771-1 .771-1 0v-15.199h-2v15.98c0 1.115.905 2.02 2.02 2.02h19.958c1.117 0 2.022-.904 2.022-2.02v-17.98h-21zm19 16h-17v-14h17v14z"/></svg> <br/>  News
          </div><div className="bg-white rounded-lg shadow-lg">
            <div className="p-6">
            <div class="scrollbar-thin scrollbar-thumb-blue-700 scrollbar-track-blue-300  overflow-y-scroll" style={{height:"37rem"}}>


<div class="h-64 bg-gray-400">
{rssFeed?rssFeed.map((item, idx)=>(
            <div class="bg-white overflow-hidden border-b-4 border-blue-500 " key={idx}>
            <img src={item[item.length-2].name==="enclosure"?item[item.length-2].attributes.url.split("?")[0]:favoriteTeam.logo} class="w-full object-cover h-32 sm:h-48 md:h-64" alt="teamfeed"/>
            <div class="p-4 md:p-6">
              <p class="text-blue-500 font-semibold text-xs mb-1 leading-none">News</p>
             <a href={item[1].value}> <h3 class="font-semibold mb-2 text-xl leading-tight sm:leading-normal">{item[0].value}</h3></a>
              <div class="text-sm flex items-center">
                <svg class="opacity-75 mr-2" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px" width="12" height="12" viewBox="0 0 97.16 97.16" style={{enableBackground:"new 0 0 97.16 97.16"}} xmlSpace="preserve">
                  <path d="M48.58,0C21.793,0,0,21.793,0,48.58s21.793,48.58,48.58,48.58s48.58-21.793,48.58-48.58S75.367,0,48.58,0z M48.58,86.823    c-21.087,0-38.244-17.155-38.244-38.243S27.493,10.337,48.58,10.337S86.824,27.492,86.824,48.58S69.667,86.823,48.58,86.823z"/>
                  <path d="M73.898,47.08H52.066V20.83c0-2.209-1.791-4-4-4c-2.209,0-4,1.791-4,4v30.25c0,2.209,1.791,4,4,4h25.832    c2.209,0,4-1.791,4-4S76.107,47.08,73.898,47.08z"/>
                </svg>
                <p class="leading-none">{`${item[item.length-1].value.split(" ")[1]} ${item[item.length-1].value.split(" ")[2]} ${item[item.length-1].value.split(" ")[3]}`}</p>
              </div>
            </div>
          </div>
        )): <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      />}
</div>
</div>
         
            </div>
          
          </div>
        </div>
        </div>
    
      <div className={classNames("p-20 ",`bg-${favoriteTeam.theme.primary}`)} >
        
     
        <div className={classNames("heading text-center font-bold text-2xl m-5 flex justify-center items-center",`text-${favoriteTeam.theme.secondary}`)}>
        <svg xmlns="http://www.w3.org/2000/svg" className={`fill-current text-${favoriteTeam.theme.secondary}`} width="72" height="72" viewBox="0 0 24 24"><path d="M4.652 0h1.44l.988 3.702.916-3.702h1.454l-1.665 5.505v3.757h-1.431v-3.757l-1.702-5.505zm6.594 2.373c-1.119 0-1.861.74-1.861 1.835v3.349c0 1.204.629 1.831 1.861 1.831 1.022 0 1.826-.683 1.826-1.831v-3.349c0-1.069-.797-1.835-1.826-1.835zm.531 5.127c0 .372-.19.646-.532.646-.351 0-.554-.287-.554-.646v-3.179c0-.374.172-.651.529-.651.39 0 .557.269.557.651v3.179zm4.729-5.07v5.186c-.155.194-.5.512-.747.512-.271 0-.338-.186-.338-.46v-5.238h-1.27v5.71c0 .675.206 1.22.887 1.22.384 0 .918-.2 1.468-.853v.754h1.27v-6.831h-1.27zm2.203 13.858c-.448 0-.541.315-.541.763v.659h1.069v-.66c.001-.44-.092-.762-.528-.762zm-4.703.04c-.084.043-.167.109-.25.198v4.055c.099.106.194.182.287.229.197.1.485.107.619-.067.07-.092.105-.241.105-.449v-3.359c0-.22-.043-.386-.129-.5-.147-.193-.42-.214-.632-.107zm4.827-5.195c-2.604-.177-11.066-.177-13.666 0-2.814.192-3.146 1.892-3.167 6.367.021 4.467.35 6.175 3.167 6.367 2.6.177 11.062.177 13.666 0 2.814-.192 3.146-1.893 3.167-6.367-.021-4.467-.35-6.175-3.167-6.367zm-12.324 10.686h-1.363v-7.54h-1.41v-1.28h4.182v1.28h-1.41v7.54zm4.846 0h-1.21v-.718c-.223.265-.455.467-.696.605-.652.374-1.547.365-1.547-.955v-5.438h1.209v4.988c0 .262.063.438.322.438.236 0 .564-.303.711-.487v-4.939h1.21v6.506zm4.657-1.348c0 .805-.301 1.431-1.106 1.431-.443 0-.812-.162-1.149-.583v.5h-1.221v-8.82h1.221v2.84c.273-.333.644-.608 1.076-.608.886 0 1.18.749 1.18 1.631v3.609zm4.471-1.752h-2.314v1.228c0 .488.042.91.528.91.511 0 .541-.344.541-.91v-.452h1.245v.489c0 1.253-.538 2.013-1.813 2.013-1.155 0-1.746-.842-1.746-2.013v-2.921c0-1.129.746-1.914 1.837-1.914 1.161 0 1.721.738 1.721 1.914v1.656z"/></svg> Videos
        </div>

      {videos? <InfiniteCarousel
          breakpoints={[
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3
              }
            }
          ]}
          dots={true}
          showSides={true}
          sidesOpacity={0.5}
          incrementalSides={true}
          slidesToScroll={4}
          slidesToShow={4}
          scrollOnDevice={true}
        >
          { JSON.parse(videos).map((item, index) => (
                <div
                  key={index}
                  class="each mb-10 m-2 shadow-lg border-gray-800 bg-gray-100 relative"
                >
                  <img
                    class="w-full"
                    src={item.videoThumbnails[3].url}
                    alt="vid"
                  />
                  <div class="badge absolute top-0 right-0 bg-red-500 m-1 text-gray-200 p-1 px-2 text-xs font-bold rounded">
                    {item.viewCountText}
                  </div>

                  <div class="desc p-4 text-gray-800">
                    <a
                      href={`https://www.youtube.com/watch?v=${item.videoId}`}
                      target="_new"
                      class="title font-bold block cursor-pointer hover:underline"
                    >
                      {item.title}
                    </a>
                    <a
                      href={`https://www.youtube.com/user/${item.authorId}`}
                      target="_new"
                      class="badge bg-indigo-500 text-blue-100 rounded px-1 text-xs font-bold cursor-pointer"
                    >
                      {item.author}
                    </a>
                   
                  </div>
                </div>
              ))
            }
        </InfiniteCarousel>
        : <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
      />}
     
          </div>
          </>
}
    </div>
  );
};

export default Dashboard;
