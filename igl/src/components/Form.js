import { useEffect, useState } from "react";
import { GiPistolGun } from "react-icons/gi";
import { AiOutlineReload } from "react-icons/ai";
import { legends, weapons, weaponsWithImages } from "../dictionaries/Loadout";
import LoadoutGrid from "./LoadoutGrid";

const Form = () => {
  const [username1, setUsername1] = useState("");
  const [username2, setUsername2] = useState("");
  const [username3, setUsername3] = useState("");
  const [loadoutLoaded, setLoadoutLoaded] = useState(false);

  useEffect(() => {}, [loadoutLoaded]);

  const updateUsername1 = (e) => {
    setUsername1(e.target.value);
  };

  const updateUsername2 = (e) => {
    setUsername2(e.target.value);
  };

  const updateUsername3 = (e) => {
    setUsername3(e.target.value);
  };

  const handleSubmission = (e) => {
    e.preventDefault();
    setLoadoutLoaded(true);
    // console.table(generateLoadout());
  };

  const getPrimaryWeapon = () => {
    let primaryLoadoutData = weaponsWithImages[Math.floor(Math.random() * weaponsWithImages.length)];
    console.log(primaryLoadoutData)
    const data = {
      weapon: primaryLoadoutData.weapon,
      img: primaryLoadoutData.img
    }
    return data
  };

  const getSecondaryWeapons = () => {
    let secondaryLoadoutData = weaponsWithImages[Math.floor(Math.random() * weaponsWithImages.length)];
    const data = {
      weapon: secondaryLoadoutData.weapon,
      img: secondaryLoadoutData.img
    }
    return data
  }

  const getLegend = () => {

    let selectALegend = legends[Math.floor(Math.random() * legends.length)];
    const data = {
      weapon: selectALegend.legend,
      img: selectALegend.img
    }
    return data
  }

  const generateLoadout = () => {
    let loadOutForAllTeamMembers = [
      {
        username: username1,
        primary: getPrimaryWeapon(),
        secondary: getSecondaryWeapons(),
        legend: getLegend()
      },
      {
        username: username2,
        primary: getPrimaryWeapon(),
        secondary: getSecondaryWeapons(),
        legend: getLegend()
      },
      {
        username: username3,
        primary: getPrimaryWeapon(),
        secondary: getSecondaryWeapons(),
        legend: getLegend()
      },
    ];
    console.log(loadOutForAllTeamMembers);
    return loadOutForAllTeamMembers;
  };

  return (
    <div class="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
      <div class="max-w-lg mx-auto">
        {/* <p class="max-w-md mx-auto mt-4 text-center text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati
          sunt dolores deleniti inventore quaerat mollitia?
        </p> */}
        {loadoutLoaded === true ? (
          ""
        ) : (
          <>
            <h1 class="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
              Enter in your teammates
            </h1>
            <form
              action=""
              class="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl bg-apexred"
              onSubmit={handleSubmission}
            >
              {/* <p class="text-lg font-medium">Sign in to your account</p> */}

              <div>
                <label for="team1" class="text-sm font-medium">
                  Teammate 1
                </label>

                <div class="relative mt-1">
                  <input
                    type="team1"
                    id="team1"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="username1"
                    onChange={updateUsername1}
                  />

                  <span class="absolute inset-y-0 inline-flex items-center right-4">
                    <GiPistolGun />
                  </span>
                </div>
              </div>

              <div>
                <label for="team2" class="text-sm font-medium">
                  Teamamte 2
                </label>

                <div class="relative mt-1">
                  <input
                    type="team2"
                    id="team2"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="username2"
                    onChange={updateUsername2}
                  />

                  <span class="absolute inset-y-0 inline-flex items-center right-4">
                    <GiPistolGun />
                  </span>
                </div>
              </div>

              <div>
                <label for="team3" class="text-sm font-medium">
                  Teammate 3
                </label>

                <div class="relative mt-1">
                  <input
                    type="team3"
                    id="team3"
                    class="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                    placeholder="username3"
                    onChange={updateUsername3}
                  />

                  <span class="absolute inset-y-0 inline-flex items-center right-4">
                    <GiPistolGun />
                  </span>
                </div>
              </div>

              <button
                type="submit"
                class="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg bg-apexblue"
              >
                Ready Up
              </button>

              {/* <p class="text-sm text-center text-gray-500">
            No account?
            <a class="underline" href="">
              Sign up
            </a>
          </p> */}
            </form>
          </>
        )}
      </div>

      {loadoutLoaded === true && (
        <>
          {" "}
          <div class="block m-auto">
            <button
              class="flex items-center justify-center px-8 py-4 font-bold transition bg-green-100 border-4 border-black rounded-xl focus:outline-none focus:ring shadow-[6px_6px_0_0_#000] hover:shadow-none active:bg-green-50 w-64 m-auto"
              onClick={() => setLoadoutLoaded(false)}
            >
              New Loadout{" "}
              <span aria-hidden="true" class="ml-2 text-lg" role="img">
                <AiOutlineReload />
              </span>
            </button>
          </div>
          <LoadoutGrid loadouts={generateLoadout()} />
        </>
      )}
    </div>
  );
};

export default Form;
