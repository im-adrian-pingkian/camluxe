<script>
  const categories = [
    {
      id: "01",
      title: "Portrait",
      description: "Capturing the soul behind every glance",
      //   image: "/images/portrait.jpg",
      bgColor: "#A39B91",
    },
    {
      id: "02",
      title: "Fashion",
      description: "Elegance in every frame, style in every shot",
      image: "/images/fashion.jpg",
      bgColor: "#7E2323",
    },
    {
      id: "03",
      title: "Landscape",
      description: "Discover the wonder",
      image: "/images/landscape.jpg",
      bgColor: "#D0E5D8",
    },
    {
      id: "04",
      title: "Lifestyle",
      description: "Everyday moments, timelessly captured",
      image: "/images/lifestyle.jpg",
      bgColor: "#63B1BE",
    },
  ];

  let hoveredCategory = null;
</script>

<div class="w-full my-8">
  <h1
    class="text-8xl text-[--text-color] font-main font-semibold text-center my-8"
  >
    HIGHLIGHTS
  </h1>

  <div class="flex relative border-2 border-[#A39B91]">
    {#each categories as category, i}
      <div
        class="flex-1 relative h-[761px] cursor-pointer border-2 border-[#A39B91]"
        on:mouseenter={() => (hoveredCategory = category.id)}
        on:mouseleave={() => (hoveredCategory = null)}
      >
        <div
          class="absolute inset-0 bg-[#d9d9d9] transition-opacity duration-500"
          class:opacity-0={hoveredCategory === category.id}
          class:opacity-100={hoveredCategory !== category.id}
        ></div>

        <div
          class="absolute inset-0 transition-opacity duration-100"
          style="background-color: {category.bgColor};"
          class:opacity-100={hoveredCategory === category.id}
          class:opacity-0={hoveredCategory !== category.id}
        ></div>

        <div
          class="absolute inset-0 flex flex-col items-start justify-start gap-8 p-4 z-20"
          style={`padding-top: ${i * 8}rem;`}
        >
          <span
            class="text-9xl font-semibold font-main mt-4 mb-12"
            class:text-white={hoveredCategory === category.id}
            >{category.id}</span
          >
          <h3
            class="text-[40px] font-semibold font-main mb-2"
            class:text-white={hoveredCategory === category.id}
          >
            {category.title}
          </h3>
          <p
            class="font-paragraph text-base font-semibold max-w-full text-left"
            class:text-white={hoveredCategory === category.id}
          >
            {category.description}
          </p>
        </div>
      </div>
    {/each}

    {#if hoveredCategory === "01"}
      <div
        class="absolute bottom-0 left-0 w-[297px] h-[445px] z-10 overflow-visible pointer-events-none"
      >
        <img
          src="/images/portrait-2.png"
          alt="Portrait 2"
          class="absolute bottom-[0px] right-0 w-[297px] h-[445px] object-contain filter blur-[4px]"
        />
        <img
          src="/images/portrait-3.png"
          alt="Portrait 3"
          class="absolute bottom-20 -right-[15%] h-auto object-contain filter blur-[4px]"
        />
        <img
          src="/images/portrait-1.png"
          alt="Portrait 1"
          class="absolute bottom-0 -right-10 w-[140%] h-auto object-contain filter blur-[1px]"
        />
      </div>
    {/if}

    {#if hoveredCategory === "02"}
      <div
        class="absolute bottom-0 left-1/4 w-[381px] h-[654px] z-10 overflow-visible pointer-events-none"
      >
        <img
          src="/images/fashion-1.png"
          alt="Fashion 1"
          class="absolute bottom-[0px] right-0 w-[381px] h-auto object-contain filter blur-[1px]"
        />
      </div>
    {/if}

    {#if hoveredCategory === "03"}
      <div class="absolute inset-0 left-1/2 w-1/4 z-10 pointer-events-none">
        <img
          src="/images/landscape-1.png"
          alt="Landscape"
          class="w-full h-full object-cover"
        />
      </div>
    {/if}

    {#if hoveredCategory === "04"}
      <div
        class="absolute bottom-0 left-3/4 w-[377px] h-[761px] z-10 overflow-visible pointer-events-none"
      >
        <img
          src="/images/lifestyle-1.png"
          alt="Lifestyle"
          class="absolute bottom-0 right-[65px] h-full object-contain filter blur-[1px]"
        />
      </div>
    {/if}
  </div>

  <div
    class="w-full transition-colors duration-300 border-2 border-[#A39B91]"
    class:bg-[#d9d9d9]={!hoveredCategory}
    class:bg-[--accent-color]={hoveredCategory}
  >
    <div class="flex justify-center items-center">
      <button class="font-main font-medium text-[40px] py-3 text-white">
        View Gallery
      </button>
    </div>
  </div>
</div>
