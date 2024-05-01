<script lang="ts">
    import Divider from "./Divider.svelte";
    import apple_icon from "../assets/apple_icon.svg";
    import chevron_right_icon from "../assets/chevron_right_icon.svg";
    import { FooterMenu } from "$lib/static/footerMenu";
    import Todo from "./Todo.svelte";

    export var breadcrumbPath: string[];
</script>

<footer class="mt-20 pt-6 pb-2 px-3 bg-zinc-100">
    <!-- foot note -->
    <section></section>
    <Todo title="foot note" />

    <Divider />

    <!-- breadcrumb -->
    <div class="py-3 flex flex-row gap-4 place-items-center text-zinc-500">
        <img src={apple_icon} alt="home" />

        {#each breadcrumbPath as path}
            <img src={chevron_right_icon} alt="to" class="w-2" />
            <p>{path}</p>
        {/each}
    </div>

    <!-- footer menu -->
    <div class="flex flex-col gap-3">
        {#each FooterMenu as item}
            <Divider />
            <button class="text-start">{item}</button>
        {/each}
    </div>

    <Divider style="mt-3" />

    <!-- tak penting -->
    <div class="py-4 flex flex-col gap-4 text-xs">
        <p class="text-zinc-400">
            More ways to shop: Fund a retailer near you. Or call 1800-80-6419
        </p>
        <button class="text-start text-gray-600">Malaysia</button>
        <p class="text-zinc-400">
            Copyright © 2024 Apple Inc. All rights reserved.
        </p>
    </div>
</footer>
