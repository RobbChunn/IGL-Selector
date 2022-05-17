import ApexBanner from "../images/apexbanner.jpg"

const BruceBanner = () => {
  return (
    <section class={`text-white bg-apex-banner`}>
      <div class="max-w-screen-xl px-4 py-10 mx-auto lg:items-center lg:flex">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-3xl font-extrabold">
            APEX IGL Selector
          </h1>

          <p class="max-w-xl mx-auto mt-4 sm:leading-relaxed sm:text-xl">
          Make games more fun, because this season sucks.
          </p>
        </div>
      </div>
    </section>

    // <img src={ApexBanner} />
  );
};

export default BruceBanner;
