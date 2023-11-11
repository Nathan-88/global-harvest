<script setup>

const { path } = useRoute()

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
    return queryContent().where({ _path: path }).findOne()
})

</script>

<template>
    <section class="mt-16 md:mt-20">
        <div v-if="blogPost" class="max-w-screen-xl mx-auto px-4
        lg:px-8 xl:px-52 2xl:px-72 pt-16 pb-2 text-gray-900 dark:text-white">
        <!-- Blog Post -->
        <div class="mx-auto text-center bg-cover bg-center flex flex-col justify-center text-white items-center max-w-full h-[40vh]  bg-blog lg:h-[60vh] mb-10">
            <h2 class="text-xl mdtext-4xl sm:text-3xl font-extrabold mb-4 w-[70vw]">{{ blogPost.title }}</h2>
        </div>
        
            <article class="mb-16 prose max-w-none lg:prose-lg xl:prose-xl
            2xl:prose-2xl dark:prose-dark">
            <ContentDoc />
            </article>
        </div>
    </section>
</template>