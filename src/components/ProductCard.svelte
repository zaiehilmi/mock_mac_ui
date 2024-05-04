<script lang="ts">
    import bookmark_icon from "../assets/bookmark_icon.svg";
    import truck_icon from "../assets/truck_icon.svg";
    import type { ProductData } from "$lib/interface/ProductData";

    export let productData: ProductData = {
        installment: "499.96",
        price: "11,999.00",
        moreDescription: [
            "16-inch Liquid Retina XDR display",
            "Three Thunderbolt 4 ports, HDMI port, SDXC card slot, headphone jack, MagSafe 3 port",
            "Magic Keyboard with Touch ID",
            "Force Touch trackpad",
            "140W USB-C Power Adapter",
        ],
        shortSpec: {
            cpu: "12-core CPU",
            gpu: "18-core GPU",
            ram: "18GB Unified Memory",
            rom: "512GB SSD Storage",
        },
        chipsetImage:
            "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp-m3-pro-icon-202310?wid=51&hei=51&fmt=png-alpha&.v=1697039562659",
        color: [
            {
                name: "Space Black",
                image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-spaceblack-select-202310?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1697311054290",
            },
            {
                name: "Silver",
                image: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/mbp16-silver-select-202310?wid=904&hei=840&fmt=jpeg&qlt=95&.v=1697230830241",
            },
        ],
    };
</script>

<div
    class="bg-zinc-100 place-content-center grid rounded-xl px-4 max-w-80 desktop:min-w-72 pb-8"
>
    <img
        src={productData.color[0].image}
        alt="macbook pro 14 inch"
        class="w-96 rounded-xl"
    />
    <p class="text-xs text-gray-600">{productData.color[0].name}</p>

    <!-- color selection -->
    <div class="py-3 flex gap-4 pl-3">
        <button class="rounded-full w-6 h-6 bg-neutral-800" />
        <button class="rounded-full w-6 h-6 bg-neutral-200 active:border-10" />
    </div>

    <img src={productData.chipsetImage} alt="apple silicon m3 pro" />

    <div class="font-medium text-xl pt-4 leading-6 desktop:text-2xl">
        <p>{productData.shortSpec.cpu}</p>
        <p>{productData.shortSpec.gpu}</p>
        <p>{productData.shortSpec.ram}</p>
        <p>{productData.shortSpec.rom}</p>
    </div>

    <div class="font-normal leading-5 max-w-80 mt-4 text-gray-700">
        {#each productData.moreDescription as item}
            <p class="pt-2">{item}</p>
        {/each}
    </div>

    <div class="mt-2">
        <h3 class="font-medium text-xl pt-4 leading-6 desktop:text-2xl">
            RM {productData.price}
        </h3>
        <p class="mt-3">or</p>
        <h3 class="font-medium text-xl pt-4 leading-6 desktop:text-2xl">
            RM {productData.installment}/mo. for 24 mo.*
        </h3>
    </div>

    <!-- tak penting -->
    <div class="mt-12 text-gray-700">
        <h4 class="font-medium text-gray-900">Add a trade-in</h4>
        <p>
            Get credit towards a new Mac when you trade in your eligible
            computer. Or recycle it for free.**
        </p>
        <div class="mt-2 flex flex-row text-blue-600">
            <a
                href="https://www.apple.com/my/shop/buy-mac/macbook-pro/16-inch-m3-pro"
                >Get started</a
            >
        </div>
    </div>

    <a
        href="/product"
        class="bg-blue-600 py-3 rounded-xl text-white font-light mt-6 text-center"
    >
        Select
    </a>

    <div class="mt-9 text-gray-700">
        <h4 class="font-medium text-gray-900">Need a moment?</h4>
        <p>
            Keep all your selections by saving this device to Your Saves, then
            come back anytime and pick up right where you left off.
        </p>
        <div class="mt-2 flex flex-row text-blue-600">
            <img src={bookmark_icon} alt="save now" />
            <a
                href="https://www.apple.com/my/shop/buy-mac/macbook-pro/16-inch-m3-pro"
                >Save for later</a
            >
        </div>
    </div>

    <div class="flex flex-row items-start gap-3 mt-12">
        <img src={truck_icon} alt="check deliverable" />
        <div>
            <p>Order today. Delivers to 45000</p>
            <p class="font-medium">Thu 09/05/2024 — Free</p>
        </div>
    </div>
</div>
