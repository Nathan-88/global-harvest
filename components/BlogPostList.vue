<script setup>
const { data: blogPostList } = await useAsyncData('blogPostList', () => {
    return queryContent('/blog').find()
})

// console.log(blogPostList)
</script>

<template>
    <section class="container mx-auto flex flex-col items-center justify-center mt-4 md:mt-6 p-4">
    <!-- BLOG POSTS -->
    <div v-for="posts in blogPostList" :key="posts._path" class="w-full  lg:w-
    2/3 md:w-1/2 sm:w-1/1 px-4 py-6 border rounded-lg shadow
    bg-white dark:bg-gray-800">
    <NuxtLink :to="posts._path">
        <h2 class="text-xl font-bold text-black hover:underline p-3 start">{{ posts.title }}</h2>
        <div class=" p-2">
            {{ posts.description }}
        
        <BlogPostMeta :author="posts.author" :date="posts.dates.published" />
        </div>

    </NuxtLink>
    </div>
    </section>
</template>