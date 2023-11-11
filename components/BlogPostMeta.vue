<script setup>
const props = defineProps({
  author: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const formattedDate = computed(() => {
  return new Date(props.date).toDateString();
});
</script>

<template>
  <div class="flex items-center space-x-2 mt-4">
    <span :class="`rounded-full bg-stone-600 text-white px-3 py-1`"> {{ author }}</span>
    <span :class="`rounded-full bg-stone-600 text-white px-3 py-1`">{{ formattedDate }}</span>
  </div>
</template>
