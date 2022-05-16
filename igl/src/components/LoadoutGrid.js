import Havoc from "../images/weapons/Havoc.png";
import Loba from "../images/legends/loba.png";

const LoadoutGrid = (props) => {
  const { loadouts } = props;
  return (
    <section>
      <div class="max-w-screen-xl px-4 py-2 mx-auto">
        <div>
          <span class="inline-block w-12 h-1 bg-apexred"></span>

          <h2 class="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
            Loadouts
          </h2>
        </div>
        <div class="container mx-auto">
          <div class="grid grid-cols-1 mt-8 lg:grid-cols-3 gap-x-4 gap-y-8 relative">
            {loadouts.map((currentLoadout, index) => (
              <a
                href=""
                class="block border-2 border-sky-500 p-6 rounded-lg shadow-xl bg-white"
                key={index}
              >
                <span class="animate-ping w-20 h-20 bg-green rounded-full absolute -top-10 -left-10 m-4 p-1"></span>
                <img
                  class="absolute h-20 w-20 rounded-full -top-10 -left-10 border-2 border-apexred m-4 p-1 bg-white"
                  src={Loba}
                />
                <div class="flex justify-center">
                  <strong class="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-apexred">
                    {" "}
                    {currentLoadout.username}
                  </strong>
                </div>
                <div class="flex justify-center mt-6 p-6 rounded-lg gap-x-6">
                  <img
                    alt="Trainer Product"
                    src={Havoc}
                    class="w-32 h-24 -mt-3 p-6 border-b-4 border-green"
                  />

                  <img
                    alt="Trainer Product"
                    src={Havoc}
                    class="w-32 h-24 -mt-3 p-6 border-b-4 border-apexred"
                  />
                </div>

                <div class="flex items-center justify-between mt-4 font-bold flex-col">
                  <strong class="inline-flex items-center border border-gray-200 rounded relative px-2.5 py-1.5 text-xs font-medium m-auto mt-3 h-12">
                    <span class="animate-ping w-2.5 h-2.5 bg-green rounded-full absolute -top-1 -left-1"></span>
                    <span class="w-2.5 h-2.5 bg-green rounded-full absolute -top-1 -left-1"></span>

                    <span class="text-gray"> Primary: </span>

                    <span class="text-green ml-1.5">
                      {currentLoadout.primary}
                    </span>
                  </strong>

                  <strong class="inline-flex items-center border border-gray-200 rounded relative px-2.5 py-1.5 text-xs font-medium m-auto mt-3 h-12">
                    <span class="animate-ping w-2.5 h-2.5 bg-apexred rounded-full absolute -top-1 -left-1"></span>
                    <span class="w-2.5 h-2.5 bg-apexred rounded-full absolute -top-1 -left-1"></span>

                    <span class="text-gray-700"> Secondary: </span>

                    <span class="text-apexred ml-1.5">
                      {currentLoadout.secondary}
                    </span>
                  </strong>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoadoutGrid;
