<script lang="ts">
    import type { MacBookProConsiderationText } from "$lib/static/consideration";

    export let cd: MacBookProConsiderationText = {
        image: "",
        type: "",
        briefIntroduction: "",
        points: [],
    };
</script>

<div>
    <img src={cd.image} alt="chip name" class="max-w-9" />
    <h4 class="mt-3 font-medium">{cd.type}</h4>
    <p class="text-sm mt-3 text-gray-700">{cd.briefIntroduction}</p>

    <div class="mt-3 flex flex-col gap-2 text-sm text-gray-700">
        {#each cd.points as point}
            <div class="flex flex-row gap-2">
                <p>●</p>
                <p>{point}</p>
            </div>
        {/each}
    </div>
</div>
