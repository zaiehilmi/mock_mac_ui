<script lang="ts">
  import Header from "../components/Header.svelte";
  import icon_chat from "../assets/chat_icon.svg";
  import PillButton from "../components/PillButton.svelte";
  import ProductCard from "../components/ProductCard.svelte";
</script>

<div>
  <Header />

  <!-- ribbon -->
  <div class="flex justify-center bg-zinc-100 mt-1 py-4 font-normal px-20">
    <p class="text-center">
      Pay 0% interest for up to 24 months. Terms apply. <span>
        <a
          href="https://www.apple.com/my/shop/buy-mac/macbook-pro"
          class="text-blue-500 font-light">Learn more ></a
        >
      </span>
    </p>
  </div>

  <!-- Spotlight -->
  <div class="pt-14 place-content-center grid">
    <h1 class="text-3xl desktop:text-5xl text-center">
      Choose your new MacBook Pro.
    </h1>

    <div class="flex flex-col items-center pt-7 text-xl gap-1">
      <img src={icon_chat} alt="chat now" />
      <p>Have questions about buying a Mac?</p>
      <a
        href="https://www.apple.com/my/shop/buy-mac/macbook-pro/14-inch#"
        class="text-blue-500 font-light">Chat with a Mac Specialist</a
      >
    </div>
  </div>

  <PillButton />

  <div
    class="px-10 mt-7 grid grid-cols desktop:grid-cols-3 justify-items-center gap-5 desktop:px-80"
  >
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>
</div>
