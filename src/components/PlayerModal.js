import { useState } from "react";

const Logs = ({ data }) => {
  return (
    <div class="overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="w-12 h-12 mask mask-squircle">
                    <img
                      src="/tailwind-css-component-profile-2@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Hart Hagerty</div>
                  <div class="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              Zemlak, Daniel and Leannon
              <br />
              <span class="badge badge-outline badge-sm">
                Desktop Support Technician
              </span>
            </td>
            <td>Purple</td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="w-12 h-12 mask mask-squircle">
                    <img
                      src="/tailwind-css-component-profile-3@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Brice Swyre</div>
                  <div class="text-sm opacity-50">China</div>
                </div>
              </div>
            </td>
            <td>
              Carroll Group
              <br />
              <span class="badge badge-outline badge-sm">Tax Accountant</span>
            </td>
            <td>Red</td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="w-12 h-12 mask mask-squircle">
                    <img
                      src="/tailwind-css-component-profile-4@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Marjy Ferencz</div>
                  <div class="text-sm opacity-50">Russia</div>
                </div>
              </div>
            </td>
            <td>
              Rowe-Schoen
              <br />
              <span class="badge badge-outline badge-sm">
                Office Assistant I
              </span>
            </td>
            <td>Crimson</td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
          <tr>
            <th>
              <label>
                <input type="checkbox" class="checkbox" />
              </label>
            </th>
            <td>
              <div class="flex items-center space-x-3">
                <div class="avatar">
                  <div class="w-12 h-12 mask mask-squircle">
                    <img
                      src="/tailwind-css-component-profile-5@56w.png"
                      alt="Avatar Tailwind CSS Component"
                    />
                  </div>
                </div>
                <div>
                  <div class="font-bold">Yancy Tear</div>
                  <div class="text-sm opacity-50">Brazil</div>
                </div>
              </div>
            </td>
            <td>
              Wyman-Ledner
              <br />
              <span class="badge badge-outline badge-sm">
                Community Outreach Specialist
              </span>
            </td>
            <td>Indigo</td>
            <th>
              <button class="btn btn-ghost btn-xs">details</button>
            </th>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
            <th></th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

const Profile = ({ data }) => {
  return (
    <div class="flex justify-center">
      <div class="grid items-center gap-4  shadow-xl bg-base-100 rounded-box place-items-center flex-shrink-0 col-span-3 row-span-3 mx-2  place-self-start w-full">
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
          <div class="dropdown w-full">
            <div tabindex="0">
              <div class="text-center">
                <div class="text-lg font-extrabold">
                  {data.pl.fn} {data.pl.ln}
                </div>{" "}
                <div class="my-3 text-sm text-base-content text-opacity-60">
                  Strategic Art Manager
                  <br />
                  Global Illustration Observer
                  <br />
                  Business Alignment Developer
                </div>
              </div>
            </div>{" "}
            <div tabindex="0" class="py-2 dropdown-content">
              <div class="shadow-xl w-72 card compact bg-neutral-focus text-neutral-content rounded-box">
                <div class="card-body">
                  <h2 class="font-extrabold capitalize card-title">
                    card component
                  </h2>{" "}
                  <p class="text-sm text-neutral-content text-opacity-80">
                    Card component is used to show products, features and more.
                  </p>{" "}
                  <div class="flex justify-end mt-4">
                    <a
                      href="/components/card"
                      class="btn btn-primary btn-sm xl:btn-md"
                    >
                      See component
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div class="dropdown w-full">
            <div tabindex="0">
              <div class="mt-2 text-center">
                <div class="badge badge-ghost">Design</div>{" "}
                <div class="badge badge-ghost">Art</div>{" "}
                <div class="badge badge-ghost">Illustration</div>
              </div>
            </div>{" "}
            <div tabindex="0" class="py-2 dropdown-content">
              <div class="shadow-xl w-72 card compact bg-neutral-focus text-neutral-content rounded-box">
                <div class="card-body">
                  <h2 class="font-extrabold capitalize card-title">
                    badge component
                  </h2>{" "}
                  <p class="text-sm text-neutral-content text-opacity-80">
                    Use badge component to highlight small inline items
                  </p>{" "}
                  <div class="flex justify-end mt-4">
                    <a
                      href="/components/badge"
                      class="btn btn-primary btn-sm xl:btn-md"
                    >
                      See component
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <div class="dropdown dropdown-top">
          <div tabindex="0">
            <div class="btn-group">
              <button class="btn btn-accent btn-sm">Follow</button>{" "}
              <button
                aria-label="button component"
                class="btn btn-accent btn-sm btn-square"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="w-6 h-6 stroke-current"
                >
                  {" "}
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                  ></path>{" "}
                </svg>
              </button>
            </div>
          </div>{" "}
        </div>
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
  let tabs = [<Table  data={player}/>, <Profile  data={player}/>, <Logs  data={player}/>];
  const [tab, setTab] = useState(0);
  const handleTab = (e) => {
    const { id } = e.target;
    e.preventDefault();
    setTab(Number(id));
  };
  return (
    <>
      <div className="tabs tabs-boxed">
        <a
          id="0"
          onClick={handleTab}
          className={`tab ${tab == 0 ? `tab-active` : `tab`}`}
        >
          Stats
        </a>
        <a
          id="1"
          onClick={handleTab}
          className={`tab ${tab == 1 ? `tab-active` : `tab`}`}
        >
          Profile
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
