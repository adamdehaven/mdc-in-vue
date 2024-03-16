<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
// Import package exports
import MDCRenderer from "@nuxtjs/mdc/runtime/components/MDCRenderer";
import type { MDCParserResult } from "@nuxtjs/mdc/runtime/types/index";
// Import composable
import useMarkdownParser from "./composables/useMarkdownParser";

const md = `
# Just a Vue app

This is markdown content rendered via the \`<MDCRenderer>\` component, including MDC below.

::alert
Hello MDC world!
::
`;

const ast = ref<MDCParserResult | null>(null);
const parse = useMarkdownParser();

onBeforeMount(async () => {
  ast.value = await parse(md);
});
</script>

<template>
  <div class="app-container">
    <Suspense>
      <MDCRenderer v-if="ast?.body" :body="ast.body" :data="ast.data" />
    </Suspense>
  </div>
</template>

<style scoped>
.app-container {
  text-align: left;
}
</style>
