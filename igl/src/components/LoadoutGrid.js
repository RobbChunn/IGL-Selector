const LoadoutGrid = (props) => {
  const { loadouts } = props;
  return (
    <section>
      <div class="max-w-screen-xl px-4 py-2 mx-auto">
        <div>
          <span class="inline-block w-12 h-1 bg-red-700"></span>

          <h2 class="mt-1 text-2xl font-extrabold tracking-wide uppercase lg:text-3xl">
            Loadouts
          </h2>

        </div>

        <div class="grid grid-cols-2 mt-8 lg:grid-cols-3 gap-x-4 gap-y-8">
          {loadouts.map((currentLoadout, index) => (
            <a href="" class="block" key={index}>
              <div class="flex justify-center">
                <strong class="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black">
                  {" "}
                  {currentLoadout.username}
                </strong>
              </div>

              <img
                alt="Trainer Product"
                src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
                class="object-cover w-full -mt-3 h-96"
              />

              <div class="flex items-center justify-between mt-4 font-bold flex-col">
                <strong class="inline-flex items-center border border-gray-200 rounded relative px-2.5 py-1.5 text-xs font-medium m-auto mt-3 h-12">
                  <span class="animate-ping w-2.5 h-2.5 bg-green-600/75 rounded-full absolute -top-1 -left-1"></span>
                  <span class="w-2.5 h-2.5 bg-green-600 rounded-full absolute -top-1 -left-1"></span>

                  <span class="text-gray-700"> Primary: </span>

                  <span class="text-green-700 ml-1.5">
                    {currentLoadout.primary}
                  </span>
                </strong>

                <strong class="inline-flex items-center border border-gray-200 rounded relative px-2.5 py-1.5 text-xs font-medium m-auto mt-3 h-12">
                  <span class="animate-ping w-2.5 h-2.5 bg-red-600/75 rounded-full absolute -top-1 -left-1"></span>
                  <span class="w-2.5 h-2.5 bg-red-600 rounded-full absolute -top-1 -left-1"></span>

                  <span class="text-gray-700"> Secondary: </span>

                  <span class="text-green-700 ml-1.5">
                    {currentLoadout.secondary}
                  </span>
                </strong>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoadoutGrid;
