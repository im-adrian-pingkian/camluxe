<script>
  import "../app.css";
  import Navbar from "$lib/components/layouts/Navbar.svelte";
  import Highlights from "$lib/components/Highlights.svelte";

  const galleryImages = [
    {
      src: "/images/homepage-1.png",
      alt: "Camluxe Photography",
      colSpan: "col-span-3",
      objectFit: "object-cover",
    },
    {
      src: "/images/homepage-2.png",
      alt: "Camluxe Photography",
      colSpan: "col-span-4",
      objectFit: "object-cover",
    },
    {
      src: "/images/homepage-3.png",
      alt: "Camluxe Photography",
      colSpan: "col-span-2",
      objectFit: "object-cover",
    },
  ];

  const carouselImages = [
    { src: "/images/homepage-4.png", alt: "Camluxe Photography" },
    { src: "/images/homepage-5.png", alt: "Camluxe Photography" },
    { src: "/images/homepage-6.png", alt: "Camluxe Photography" },
    { src: "/images/homepage-7.png", alt: "Camluxe Photography" },
    { src: "/images/homepage-8.png", alt: "Camluxe Photography" },
    { src: "/images/homepage-4.png", alt: "Camluxe Photography" },
    { src: "/images/homepage-5.png", alt: "Camluxe Photography" },
    { src: "/images/homepage-6.png", alt: "Camluxe Photography" },
    { src: "/images/homepage-7.png", alt: "Camluxe Photography" },
    { src: "/images/homepage-8.png", alt: "Camluxe Photography" },
  ];
</script>

<div
  class="relative bg-[url('/images/background-lines.png')] bg-fixed bg-center bg-no-repeat bg-cover"
>
  <Navbar />

  <div class="page-container flex flex-col justify-center relative">
    <img
      src="/images/bg-spiral.png"
      alt="Background Spiral"
      class="absolute top-8 left-0 z-0"
    />
    <div class="flex justify-center">
      <h1
        class="relative flex justify-center items-center text-3xl font-extralight w-[437px] h-auto text-center pt-8 z-10"
      >
        —The art of capturing moments to create visually stunning and
        captivating photographs—
      </h1>
    </div>
    <div class="grid grid-cols-9 gap-6 items-end">
      {#each galleryImages as image}
        <div class={`${image.colSpan} relative`}>
          <div class="absolute inset-0 bg-[#766555] opacity-50 z-10"></div>
          <div class="absolute -right-3 -bottom-3 w-full h-full z-0">
            <img
              src={image.src}
              alt={image.alt}
              class="w-full h-full opacity-50"
            />
          </div>
          <img
            src={image.src}
            alt={image.alt}
            class={`w-full h-auto ${image.objectFit} relative z-5`}
          />
        </div>
      {/each}
    </div>
    <div class="py-8 grid grid-cols-9 gap-4">
      <div class="col-span-3 flex flex-col justify-center items-center">
        <button
          class="bg-[--accent-color] text-white font-paragraph font-medium py-2 px-4 shadow-lg"
        >
          CHECK OUR GALLERY
        </button>
        <div
          class="flex justify-center items-center px-4 py-1 bg-[--accent-color]"
        >
          <img src="/images/down-arrow.png" alt="Arrow" class="w-5 h-5" />
        </div>
      </div>
      <h3
        class="pl-12 pr-16 col-span-4 text-xl text-[--text-color] font-paragraph font-normal text-justify"
      >
        Explore our curated photography categories, each offering a unique
        perspective. Lifestyle captures the essence of everyday moments, while
        Landscape showcases the breathtaking beauty of nature. Portrait
        highlights the depth of human expressions, and Fashion reveals the
        elegance and artistry of style. Dive into each category to discover
        stunning visuals and uncover hidden talents, each telling its own
        captivating story.
      </h3>
    </div>
  </div>
  <div class="overflow-x-scroll overflow-y-hidden no-scrollbar">
    <div class="flex">
      {#each carouselImages as image}
        <div class="flex-shrink-0 relative">
          <div class="absolute inset-0 bg-[#766555] opacity-50 z-10"></div>
          <img
            src={image.src}
            alt={image.alt}
            class="h-auto w-auto object-cover"
          />
        </div>
      {/each}
    </div>
  </div>
  <div class="flex justify-center">
    <h1
      class="relative flex justify-center items-center text-2xl font-extralight h-auto text-center pt-4 z-10"
    >
      —Chosen by leading brands to transform their vision into captivating
      visual stories—
    </h1>
  </div>
  <div class="page-container flex justify-center py-10">
    <div class="grid grid-cols-5 gap-8 items-center">
      <div class="flex justify-center">
        <img src="/images/lv.png" alt="Louis Vuitton" class="h-16" />
      </div>
      <div class="flex justify-center">
        <img src="/images/mango.png" alt="Mango" class="h-18" />
      </div>
      <div class="flex justify-center">
        <img src="/images/nike.png" alt="Nike" class="h-28" />
      </div>
      <div class="flex justify-center">
        <img src="/images/oxygn.png" alt="Oxygn" class="h-12" />
      </div>
      <div class="flex justify-center">
        <img src="/images/adidas.png" alt="Adidas" class="h-12" />
      </div>
    </div>
  </div>
  <div class="overflow-x-scroll overflow-y-hidden no-scrollbar">
    <div class="flex mb-12">
      {#each carouselImages as image}
        <div class="flex-shrink-0 relative">
          <div class="absolute inset-0 bg-[#766555] opacity-50 z-10"></div>
          <img
            src={image.src}
            alt={image.alt}
            class="h-auto w-auto object-cover"
          />
        </div>
      {/each}
    </div>
  </div>
  <div class="page-container">
    <Highlights />
  </div>
  <div class="page-container relative">
    <div
      class="absolute w-screen left-1/2 right-1/2 top-[25%] bottom-1/2 -mx-[50vw] bg-[#766555]/50 h-[209px] -z-10"
    ></div>
    <div class="grid grid-cols-7 gap-4 items-center py-12">
      <div class="col-span-1 flex justify-center">
        <h1
          class="text-7xl font-main font-semibold"
          style="writing-mode: vertical-rl; text-orientation: mixed; transform: rotate(180deg);"
        >
          LENSMAN
        </h1>
      </div>

      <div class="col-span-2 relative flex justify-start">
        <div class="flex flex-col w-[347px]">
          <div class="relative w-full">
            <div class="absolute inset-0 bg-[#766555] opacity-50 z-10"></div>
            <img
              src="/images/lensman-1.png"
              alt="Lensman"
              class="object-cover relative z-5"
            />

            <!-- Side button -->
            <div class="absolute -right-7 top-1/2 flex items-center">
              <button
                class="flex justify-center items-center px-1 py-4 bg-[--accent-color]"
              >
                <img
                  src="/images/down-arrow.png"
                  alt="Arrow"
                  class="w-5 h-5 -rotate-90"
                />
              </button>
            </div>
          </div>

          <div class="flex items-center justify-start gap-32 w-full">
            <h3 class="text-xl font-paragraph">Riley Bennett</h3>
            <div class="flex items-center">
              <button
                class="flex justify-center items-center px-4 py-1 bg-[--accent-color]"
              >
                <img
                  src="/images/down-arrow.png"
                  alt="Arrow"
                  class="w-5 h-5 opacity-0"
                />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-1"></div>

      <div class="col-span-3 flex flex-col items-start justify-between h-full">
        <h2 class="text-[36px] font-main leading-tight">
          —Explore curated portfolios that ignite creativity and showcase
          visionary artistry—
        </h2>
        <button
          class="bg-[--accent-color] text-white font-paragraph font-medium py-2 px-4 shadow-lg mb-6"
        >
          SEE OTHER LENSMAN
        </button>
      </div>
    </div>
    <div class="grid grid-cols-7 gap-4 items-center py-12">
      <div class="col-span-1"></div>
      <div class="col-span-3">
        <h3 class="text-xl font-paragraph text-justify font-light">
          Lensman, a place where photographers reveal their masterpieces.
          Immerse yourself in a handpicked array of breathtaking portfolios,
          unearth hidden gems, and let the distinctive visions of our showcased
          photographers ignite your creativity.
        </h3>
      </div>
    </div>
  </div>

  <div class="page-container relative py-12">
    <h1
      class="text-8xl text-[--text-color] font-main font-semibold text-left my-8"
    >
      PURPOSE
    </h1>
    <div class="grid grid-cols-[75%_25%]">
      <div class="flex flex-col justify-center">
        <h2 class="text-[36px] font-main leading-tight mb-8 pr-16">
          —Unleash your vision, inspire others, and grow together—where every
          click brings your story to light—
        </h2>

        <p class="text-xl font-paragraph text-justify font-light max-w-96">
          The platform is designed specifically for photographers to showcase
          their unique perspectives. Users can receive valuable feedback from
          peers, aiding in growth and skill improvement. They can find
          inspiration through the work and stories of other photographers. The
          user-friendly interface ensures photos are displayed beautifully and
          intuitively.
        </p>
      </div>
      <div class="flex w-full relative">
        <div class="relative">
          <div
            class="absolute top-3 left-3 h-full bg-[#766555] opacity-50 z-5 w-screen"
          ></div>
          <img
            src="/images/purpose-1.png"
            alt="Purpose"
            class="h-auto w-auto opacity-70 relative z-10 shadow-md"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="page-container relative py-12">
    <h1
      class="text-8xl text-[--text-color] font-main font-semibold text-right my-8"
    >
      BLOG
    </h1>

    <div class="grid grid-cols-[50%_50%] gap-8">
      <div class="grid grid-cols-2 gap-6">
        <div class="flex flex-col">
          <div class="relative">
            <div
              class="absolute top-3 left-3 w-44 h-44 bg-[#766555] opacity-50 z-10"
            ></div>
            <img
              src="/images/blog-1.png"
              alt="Blog Post"
              class="w-44 h-44 object-cover mb-4 relative z-5"
            />
          </div>
          <h3 class="text-sm font-paragraph font-semibold w-44">
            Insights for Success: Navigating the World of Business
          </h3>
        </div>
        <div class="flex flex-col">
          <div class="relative">
            <div
              class="absolute top-3 left-3 w-44 h-44 bg-[#766555] opacity-50 z-10"
            ></div>
            <img
              src="/images/blog-2.png"
              alt="Blog Post"
              class="w-44 h-44 object-cover mb-4 relative z-5"
            />
          </div>
          <h3 class="text-sm font-paragraph font-semibold w-44">
            Mastering Growth: Effective Strategies for Upskilling While
            Balancing a Busy Work Life
          </h3>
        </div>
        <div class="flex flex-col">
          <div class="relative">
            <div
              class="absolute top-3 left-3 w-44 h-44 bg-[#766555] opacity-50 z-10"
            ></div>
            <img
              src="/images/blog-3.png"
              alt="Blog Post"
              class="w-44 h-44 object-cover mb-4 relative z-5"
            />
          </div>
          <h3 class="text-sm font-paragraph font-semibold w-44">
            Living the UX Researcher's Life: Navigating Challenges, Embracing
            Insights, and Shaping User Experiences
          </h3>
        </div>
        <div class="flex flex-col">
          <div class="relative">
            <div
              class="absolute top-3 left-3 w-44 h-44 bg-[#766555] opacity-50 z-10"
            ></div>
            <img
              src="/images/blog-4.png"
              alt="Blog Post"
              class="w-44 h-44 object-cover mb-4 relative z-5"
            />
          </div>
          <h3 class="text-sm font-paragraph font-semibold w-44">
            How Can Team Brainstorming Spark Ideas and Turn Them into Action
          </h3>
        </div>
      </div>

      <!-- Right column - Blog info -->
      <div class="flex flex-col justify-between">
        <div class="flex flex-col items-center justify-evenly h-full">
          <p
            class="w-full text-xl font-paragraph text-justify font-light max-w-96"
          >
            Explore our curated collection of business blogs, where you'll find
            insights, strategies, and tips to navigate and succeed in the
            dynamic world of business. Dive in to stay informed and inspired!
          </p>

          <button
            class="bg-[--accent-color] text-white font-paragraph font-medium py-2 px-4 shadow-lg mb-4 w-fit"
          >
            CHECK OUR BLOG
          </button>

          <button
            class="bg-[--accent-color] text-white font-paragraph font-medium py-2 px-4 shadow-lg mb-4 w-fit"
          >
            REACH US THROUGH
          </button>
        </div>
        <div class="w-full p-4 bg-[#766555]/50">
          <p class="text-5xl text-center font-main">today@cameragenic.com</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .no-scrollbar::-webkit-scrollbar {
    display: none;
  }
  .no-scrollbar {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
  .touch-pan-x {
    touch-action: pan-x;
  }
</style>
