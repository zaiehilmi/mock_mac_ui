<script lang="ts">
  import logo_apple from "../assets/apple_icon.svg";
  import icon_search from "../assets/search_icon.svg";
  import icon_kart from "../assets/kart_icon.svg";
  import icon_hamburger from "../assets/hamburger_icon.svg";
  import icon_chevron_down from "../assets/chevron_down_icon.svg";

  let menu: string[] = [
    "Store",
    "Mac",
    "iPad",
    "Watch",
    "AirPods",
    "TV & Home",
    "Entertainment",
    "Accessories",
    "Support",
  ];

  let subMenu: string[] = ["Overview", "macOS", "Compare"];
</script>

<header class="flex flex-col py-1 px-4 shadow-sm shadow-gray-300">
  <!-- row pertama -->
  <div class="flex gap-9 flex-row justify-between desktop:justify-center">
    <img src={logo_apple} alt="logo apple" />

    {#each menu as item}
      <button class="hidden desktop:block text-xs font-normal text-gray-600">
        {item}
      </button>
    {/each}

    <div class="flex gap-9">
      <img src={icon_search} alt="search" />
      <img src={icon_kart} alt="kart" />
      <img class="visible desktop:hidden" src={icon_hamburger} alt="more" />
    </div>
  </div>

  <!-- row kedua -->
  <div
    class="flex flex-row justify-between desktop:justify-around min-w-1 py-2"
  >
    <button>
      <h3 class="text-base desktop:text-xl">MacBook Pro</h3>
    </button>

    <div class="flex gap-6">
      {#each subMenu as item}
        <button class="hidden desktop:block text-xs font-normal text-gray-600"
          >{item}</button
        >
      {/each}

      <div class="desktop:hidden">
        <img src={icon_chevron_down} alt="submenu" />
      </div>
    </div>
  </div>
</header>
