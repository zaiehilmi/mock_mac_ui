<script lang="ts">
  import Header from "../components/Header.svelte";
  import icon_chat from "../assets/chat_icon.svg";
  import PillButton from "../components/PillButton.svelte";
  import ProductCard from "../components/ProductCard.svelte";

  import { Consideration } from "$lib/static/consideration";
  import ConsiderationSection from "../components/ConsiderationSection.svelte";
  import Footer from "../components/Footer.svelte";
  import Todo from "../components/Todo.svelte";
  import Ribbon from "../components/ribbon.svelte";

  let considerations = Consideration;
  let breadcrumbPath = ["Mac", "MacBook Pro", "Buy MacBook Pro"];
</script>

<div>
  <Header />
  <Ribbon />

  <!-- Spotlight -->
  <div class="pt-14 place-content-center grid px-8">
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

  <Todo title="Filter by chip" />

  <div
    class="px-10 mt-7 grid grid-cols desktop:grid-cols-3 justify-items-center gap-5 desktop:px-80"
  >
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
  </div>

  <Todo title="whats in the box" />

  <section class="mt-11 pt-14 pb-10 mx-8 rounded-xl bg-zinc-50 px-8">
    <div class="text-center text-2xl">
      <h3>What to consider when choosing your</h3>
      <h3>MacBook Pro.</h3>
    </div>

    <p class="text-center mt-4 text-base">
      Configure your laptop on the next step.
    </p>

    <div class="grid gap-10 pt-6 desktop:grid-cols desktop:grid-cols-4">
      {#each considerations as item}
        <ConsiderationSection cd={item} />
      {/each}
    </div>

    <div
      class="mt-20 text-xs font-light flex desktop:text-center gap-1 desktop:justify-center"
    >
      <p class="">Have questions about buying a Mac?</p>
      <a
        href="https://www.apple.com/my/shop/buy-mac/macbook-pro#"
        class="text-blue-600 font-normal">Chat with a Mac Specialist</a
      >
    </div>
  </section>

  <Todo title="compare mac models" />
  <Todo title="apple care+ for mac" />

  <Footer {breadcrumbPath} />
</div>
