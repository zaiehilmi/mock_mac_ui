<script lang="ts">
    export let style = "";
</script>

<button
    class="{style} border-2 border-r-1 rounded-xl p-2 font-medium text-lg border-gray-300 active:border-blue-500 min-w-full min-h-16"
>
    <slot />
</button>
