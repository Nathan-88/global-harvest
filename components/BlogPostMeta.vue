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
  <div class="w-full lg:flex items-center lg:space-x-[40%] mt-4">
    <div class="p-2">
    <span :class="`rounded-full bg-stone-600 text-white px-3 mr-2 py-1`"> {{ author }}</span>
    <span :class="`rounded-full bg-stone-600 text-white px-3 py-1`">{{ formattedDate }}</span>
    </div>
    <p class="p-2 font-bold text-gray-700 hover:text-black">more &#8594;</p>
  </div>
</template>
