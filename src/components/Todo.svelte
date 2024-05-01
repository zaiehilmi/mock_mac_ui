<script lang="ts">
    export let title: string = "TODO";
    export let isShown: boolean = false;
</script>

{#if isShown}
    <div
        class="bg-gradient-to-r from-violet-500 to-purple-500 rounded-lg p-6 m-8"
    >
        <p class="text-white font-semibold">Miss: {title}</p>
    </div>
{/if}
