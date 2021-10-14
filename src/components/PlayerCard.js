import "../index.css";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchPlayerStats } from "../redux/actions";
import Loader from "react-loader-spinner";
import Modal from "react-modal";
import PlayerModal from "./PlayerModal";
export default function PlayerCard({ player }) {
  const [stats, setStats] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  Modal.setAppElement("#root");
  const { dashtheme } = useSelector((state) => state.preferences);
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
      fetchPlayerStats(player.pid)
        .then((res) => {
          setStats(res.data.data);
        })
        .catch((err) => console.log(err));
    }
  }, [player]);
    console.log(stats)
  return  (
    <div>
      <div
        className={classNames(
          "card text-center shadow-2xl",
          `bg-${dashtheme.background}`
        )}
        id="cardcont"
      >
        <h2
          className={classNames(
            "text-1xl font-bold card-title pt-4",
            `text-${dashtheme.text}`
          )}
          style={{ fontSize: "28px" }}
        >
          {`${player.fn.toString()} ${player.ln}`}
        </h2>

        <figure className="">
          <div className={classNames("", `bg-${dashtheme.title}`)} id="card">
            <img
              src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${player["pid"]}.png`}
              alt={play.name}
              className="rounded-xl"
            />
          </div>
        </figure>
        <div className="card-body">
          {/* <h2 className="card-title">{play.postion}for {play.team} </h2> */}
          <div className="shadow stats">
            <div className={classNames("stat", `${theme.text}`)}>
              <div className="stat-title">Points </div>
              <div className="stat-value">
                {stats
                  ?(Number(stats.pl.ct.st[stats.pl.ct.st.length-1].pts)/Number(stats.pl.ct.st[stats.pl.ct.st.length-1].gp)).toFixed(1)
                  :"--"}
              </div>
            </div>

            <div className={classNames("stat", `${theme.text}`)}>
              <div className="stat-title">Assists</div>
              <div className="stat-value">
              {stats
                  ?(Number(stats.pl.ct.st[stats.pl.ct.st.length-1].ast)/Number(stats.pl.ct.st[stats.pl.ct.st.length-1].gp)).toFixed(1)
                  :"--"}
              </div>
            </div>
          </div>

          <div className="shadow stats ">
            <div className={classNames("stat", `${theme.text}`)}>
              <div className="stat-title">Total Rebounds </div>
              <div className="stat-value">
              {stats
                  ?(Number(stats.pl.ct.st[stats.pl.ct.st.length-1].reb)/Number(stats.pl.ct.st[stats.pl.ct.st.length-1].gp)).toFixed(1)
                  :"--"}
              </div>
            </div>

            <div className={classNames("stat", `${theme.text}`)}>
              <div className="stat-title">Turnovers</div>
              <div className="stat-value">
              {stats
                  ?(Number(stats.pl.ct.st[stats.pl.ct.st.length-1].tov)/Number(stats.pl.ct.st[stats.pl.ct.st.length-1].gp)).toFixed(1)
                  :"--"}
              </div>
            </div>
          </div>

          {/* <p>
          Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
          sit necessitatibus veritatis sed molestiae voluptates incidunt iure
          sapiente.
        </p> */}
          {/* <div className="justify-center card-actions">
            <button className="btn btn-outline btn-accent" onClick={toggleModal}>More info</button>
          </div> */}
          <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
        className="mymodal"
        overlayClassName="myoverlay"
        closeTimeoutMS={500}
      >
        <PlayerModal player={player}/>
        {/* <div>My modal dialog.</div>
        <button onClick={toggleModal}>Close modal</button> */}
      </Modal>
        </div>
      </div>
    </div>
  );
}
