const LoadoutGrid = (
  loadout = [
    {
      username: "bro",
      primary: "gay",
      secondary: "supergay",
    },
    {
      username: "bro2",
      primary: "gay",
      secondary: "supergay",
    },
    {
      username: "bro3",
      primary: "gay",
      secondary: "supergay",
    },
  ]
) => {
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
          <a href="" class="block">
            <div class="flex justify-center">
              <strong class="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black">
                {" "}
                Chris
              </strong>
            </div>

            <img
              alt="Trainer Product"
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
              class="object-cover w-full -mt-3 h-96"
            />

            <h5 class="mt-4 text-sm text-black/90">
            Weapon
            </h5>

            <div class="flex items-center justify-between mt-4 font-bold">
              <p class="text-lg">$189.99</p>

              <p class="text-xs tracking-wide uppercase">6 Colors</p>
            </div>
          </a>

          <a href="" class="block">
            <div class="flex justify-center">
              <strong class="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black">
                {" "}
                Robb
              </strong>
            </div>

            <img
              alt="Trainer Product"
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
              class="object-cover w-full -mt-3 h-96"
            />

            <h5 class="mt-4 text-sm text-black/90">
              Weapon
            </h5>

            <div class="flex items-center justify-between mt-4 font-bold">
              <p class="text-lg">$189.99</p>

              <p class="text-xs tracking-wide uppercase">6 Colors</p>
            </div>
          </a>

          <a href="" class="block">
            <div class="flex justify-center">
              <strong class="relative h-6 px-4 text-xs leading-6 text-white uppercase bg-black">
                {" "}
                Tj
              </strong>
            </div>

            <img
              alt="Trainer Product"
              src="https://images.unsplash.com/photo-1491553895911-0055eca6402d"
              class="object-cover w-full -mt-3 h-96"
            />

            <h5 class="mt-4 text-sm text-black/90">
            Weapon
            </h5>

            <div class="flex items-center justify-between mt-4 font-bold">
              <p class="text-lg">$189.99</p>

              <p class="text-xs tracking-wide uppercase">6 Colors</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LoadoutGrid;
