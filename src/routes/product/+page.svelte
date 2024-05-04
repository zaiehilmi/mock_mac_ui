<script lang="ts">
    import type { ApiResponse } from "$lib/interface/ApiResponse";
    import type { ProductCustomizationResponse } from "$lib/interface/ProductData";
    import Header from "../../components/Header.svelte";
    import Ribbon from "../../components/ribbon.svelte";
    import { onMount } from "svelte";

    var data: ProductCustomizationResponse;

    const getProductInfo = async () => {
        const res = await fetch(
            "http://localhost:8080/getProduct?id=1&colorId=0",
        );
        const json: ApiResponse<ProductCustomizationResponse> =
            await res.json();

        return json.data;
    };

    onMount(async () => {
        data = await getProductInfo();
    });
</script>

<div>
    <Header />
    <Ribbon />

    {#if data}
        <div class="mt-16 flex flex-col desktop:flex-row mx-6">
            <div>
                <p2 class="font-medium text-3xl"
                    >Customize your {data.productName}
                </p2>
                <div class="flex flex-col items-center mt-4 gap-5">
                    <img
                        src={data.imageUrl}
                        alt="silver macbook"
                        class="w-52"
                    />
                    <button class="text-xs text-sky-500">View gallery</button>
                </div>
            </div>

            <div class="mt-10">
                {#each data.moreDescription as item}
                    <p class="mt-3 text-gray-600">{item}</p>
                {/each}
            </div>
        </div>
    {:else}
        <div class="animate-spin" />
    {/if}
</div>
