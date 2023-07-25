<script lang="ts" setup>
import {
  Todo
} from "../common/models/todo.model";

defineProps<{
  items: any;
}>();
</script>

<template>
  <section v-if="items.length > 0">
    <todo-item v-for="item in items" :key="item?.id" :todo="item" />
  </section>
</template>