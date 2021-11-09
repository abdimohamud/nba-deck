import "../index.css";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { fetchPlayerStats } from "../hooks";
import Modal from "react-modal";
import PlayerModal from "./PlayerModal";
export default function PlayerCard({ player, dashtheme }) {
  const [playerData, setPlayerData] = useState(null)
  const [stats, setStats] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  Modal.setAppElement("#root");
  

  let play = {
    name: "Jimmy Butler",
    number: 22,
    team: "Miami Heat",
    position: "SG/SF",
    ppg: 21.9,
    ast: 7.1,
    trb: 6.9,
    image: "https://cdn.nba.com/headshots/nba/latest/1040x760/202710.png",
  };
  let theme = {
    background: "Miami-Heat-Red",
    text: "Miami-Heat-Black",
    title: "Miami-Heat-Yellow",
    }

  useEffect(() => {
    if (player) {
      fetchPlayerStats(player)
        .then((res) => {
         setPlayerData(res.data)
          
          let playa ={...player, pid:res.data.pl.pid, fn:res.data.pl.fn, ln:res.data.pl.ln,
            pt:
            Number(res.data.pl.ca.sa.slice(-1)[0].pts),
            ast:Number(res.data.pl.ca.sa.slice(-1)[0].ast),
            reb:Number(res.data.pl.ca.sa.slice(-1)[0].reb),
            tov:Number(res.data.pl.ca.sa.slice(-1)[0].tov),}
           

          setStats(playa)
        })
        .catch((err) => console.log(err));
    }
  }, [player]);
    
  return  (
    <div>
      <div
        className={classNames(
          "card text-center shadow-2xl",
          `bg-${dashtheme.primary}`
        )}
        id="cardcont"
      >
        <h2
          className={classNames(
            "text-1xl font-bold card-title pt-4",
            `text-${dashtheme.secondary}`
          )}
          style={{ fontSize: "28px" }}
        >
          {stats?`${stats.fn.toString()} ${stats.ln}`:""}
        </h2>

        <figure className="">
          <div className={classNames("", `bg-${dashtheme.alternative}`)} id="card">
            {stats?<img
              src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${stats["pid"]}.png`}
              alt={play.name}
              className="rounded-xl"
            />:""}
          </div>
        </figure>
        <div className="card-body">
          {/* <h2 className="card-title">{play.postion}for {play.team} </h2> */}
          <div className="shadow stats">
            <div className={classNames("stat", `${theme.secondary}`)}>
              <div className="stat-title">Points </div>
              <div className="stat-value">
                {stats
                  ?stats.pt
                  :"--"}
              </div>
            </div>

            <div className={classNames("stat", `${theme.secondary}`)}>
              <div className="stat-title">Assists</div>
              <div className="stat-value">
              {stats
                  ?stats.ast
                  :"--"}
              </div>
            </div>
          </div>

          <div className="shadow stats ">
            <div className={classNames("stat", `${theme.secondary}`)}>
              <div className="stat-title">Total Rebounds </div>
              <div className="stat-value">
              {stats
                  ?stats.reb
                  :"--"}
              </div>
            </div>

            <div className={classNames("stat", `${theme.secondary}`)}>
              <div className="stat-title">Turnovers</div>
              <div className="stat-value">
              {stats
                  ?stats.tov
                  :"--"}
              </div>
            </div>
          </div>

          {/* <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p> */}
          <div className="justify-center card-actions">
            <button className="btn btn-outline btn-accent" onClick={toggleModal}>More info</button>
          </div>
          <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <PlayerModal player={playerData}/>
         
      </Modal>
        </div>
      </div>
    </div>
  );
}
