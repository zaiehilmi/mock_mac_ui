<script lang="ts">
    import type { ApiResponse } from "$lib/interface/ApiResponse";
    import type { ProductCustomizationResponse } from "$lib/interface/ProductData";
    import Divider from "../../components/Divider.svelte";
    import Header from "../../components/Header.svelte";
    import TextButton from "../../components/TextButton.svelte";
    import Ribbon from "../../components/ribbon.svelte";
    import SelectionButton from "../../components/SelectionButton.svelte";
    import { onMount } from "svelte";
    import Footer from "../../components/Footer.svelte";

    var data: ProductCustomizationResponse;
    let breadcrumbPath = [
        "Mac",
        "MacBook Pro",
        "Buy MacBook Pro",
        "Customise MacBook Pro",
    ];

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
                    <TextButton>View gallery</TextButton>
                </div>
            </div>

            <div class="mt-10">
                {#each data.moreDescription as item}
                    <p class="mt-3 text-gray-600">{item}</p>
                {/each}

                <Divider style="mt-9 mb-5" />

                <div class="flex flex-col items-start gap-4">
                    <h4>Add a trade-in</h4>
                    <p class="text-gray-600">
                        Get credit towards a new Mac when you trade in your
                        eligible computer. Or recycle it for free.**
                    </p>

                    <TextButton>Get started</TextButton>
                </div>

                <Divider style="mt-9 mb-5" />

                <div class="flex flex-col gap-2 items-start">
                    <h3 class="text-lg">Memory</h3>
                    <TextButton>How much memory is right for you?</TextButton>

                    {#each data.memory as item}
                        <SelectionButton
                            style="flex flex-col items-start justify-center"
                        >
                            <h3>{item.option}</h3>
                            {#if item.price != "RM 0.00"}
                                <p class="text-gray-600 font-light">
                                    {item.price}
                                </p>
                            {/if}
                        </SelectionButton>{/each}
                </div>
            </div>
        </div>
    {:else}
        <div class="animate-spin" />
    {/if}

    <Footer {breadcrumbPath} />
</div>
