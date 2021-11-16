import { useState } from "react";

import { toDateString, toImage } from "../hooks";
const Logs = ({data}) => {
    
    return (
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              {/* <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th> */}
              <th>Opponent</th>
              <th>Date</th>
             
              <th>Result</th>
              <th>MINs</th>
              <th title="field goal percentage">FG</th>
              <th>3P</th>
              <th>FT</th>
              <th>REB</th>
              <th>AST</th>
              <th>STL</th>
              <th>BLK</th>
              <th>TOV</th>
              <th>PTS</th>
             
            </tr>
          </thead>
          <tbody>
            {data.pl.gls.glt[0].gl.map((game, idx)=>(
              <tr key={idx}>
              {/* <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th> */}
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="w-12 h-12 mask mask-squircle">
                      <img
                        src={toImage(game.ota)}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">
                      {game.otc} {game.otn}
                    </div>
                    <div class="text-sm opacity-50">@ {game.gcode.slice(-3)}</div>
                  </div>
                </div>
              </td>
              <td>
                {toDateString(game.gdte)}
                <br />
                {/* <span class="badge badge-outline badge-sm">
                  Desktop Support Technician
                </span> */}
              </td>
              <td>{game.res}</td>
              <td>{game.min}</td>
              <td>{game.fgm}/{game.fga}</td>
              <td>{game.tpm}/{game.tpa}</td>
              <td>{game.ftm}/{game.fta}</td>
              <td>{game.reb}</td>
              <td>{game.ast}</td>
              <td>{game.stl}</td>
              <td>{game.blk}</td>
              <td>{game.tov}</td>
              <td>{game.pts}</td>
              {/* <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th> */}
            </tr>
            ))}
            
            
          </tbody>
          
        </table>
      </div>
    );
  };
  const Profile = ({data}) => {
    return (
      <div class="flex justify-center">
        <div class=" h-full grid items-center gap-4  shadow-xl bg-base-100 rounded-box place-items-center flex-shrink-0 col-span-3 row-span-3 mx-2  place-self-start w-full">
          <div class="dropdown">
            <div tabindex="0">
              <div class="avatar online">
                <div class="w-24 h-24 p-px mask mask-squircle bg-base-content bg-opacity-10">
                  <img
                    src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/260x190/${data.pl.pid}.png`}
                    width="94"
                    height="94"
                    alt="Avatar Tailwind CSS Component"
                    class="mask mask-squircle"
                  />
                </div>
              </div>
            </div>{" "}
          </div>{" "}
          <div>
            <div class="dropdown w-full h-full">
              <div tabindex="0">
                <div class="text-center">
                  <div class="text-lg font-extrabold">
                    {data.pl.fn} {data.pl.ln} (#{data.pl.num})
                  </div>{" "}
                  <div class="my-3 text-sm text-base-content text-opacity-60">
                    Position: {data.pl.pos}
                    <br />
                    Height: {data.pl.ht.split("-")[0]}'{data.pl.ht.split("-")[1]}
                    <br />
                    College: {data.pl.hcc}
                  </div>
                </div>
              </div>{" "}
            
            </div>{" "}
           
          </div>{" "}
      
        </div>
      </div>
    );
  };
const Table = ({ data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="table w-full table-compact">
        <thead>
          <tr>
            <th></th>
            <th>Team</th>
            <th>SEA</th>
            <th>MINs</th>
            <th title="field goal percentage">FG%</th>
            <th>3P%</th>
            <th>FT%</th>
            <th>REB</th>
            <th>AST</th>
            <th>STL</th>
            <th>BLK</th>
            <th>TOV</th>
            <th>PTS</th>
          </tr>
        </thead>
        <tbody>
          {data.pl.ca.sa.map((item, idx) => (
            <tr key={idx}>
              <td></td>
              <td>{item.tn}</td>
              <td>{item.val}</td>
              <td>{item.min}</td>
              <td>{item.fgp}</td>
              <td>{item.tpp}</td>
              <td>{item.ftp}</td>
              <td>{item.reb}</td>
              <td>{item.ast}</td>
              <td>{item.stl}</td>
              <td>{item.blk}</td>
              <td>{item.tov}</td>
              <td>{item.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const PlayerModal = ({ player }) => {
    console.log(player)
  let tabs = [<Profile  data={player}/>,<Table  data={player}/>,  <Logs  data={player}/>];
  const [tab, setTab] = useState(0);
  const handleTab = (e) => {
    const { id } = e.target;
    e.preventDefault();
    setTab(Number(id));
  };
  return (
    <>
      <div className="w-full flex justify-center tabs tabs-boxed">
        <a
          id="0"
          onClick={handleTab}
          className={`tab ${tab == 0 ? `tab-active` : `tab`}`}
        >
          Profile
        </a>
        <a
          id="1"
          onClick={handleTab}
          className={`tab ${tab == 1 ? `tab-active` : `tab`}`}
        >
          Stats
        </a>
        <a
          id="2"
          onClick={handleTab}
          className={`tab ${tab == 2 ? `tab-active` : `tab`}`}
        >
          Game Logs
        </a>
      </div>
      {tabs[tab]}
    </>
  );
};

export default PlayerModal;
