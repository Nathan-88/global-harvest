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
        <div class="mx-auto text-center bg-cover bg-center flex flex-col justify-center text-white items-center max-w-full h-[40vh]  bg-blog lg:h-[60vh] mb-4">
            <h2 class="text-xl mdtext-4xl sm:text-3xl font-extrabold mb-4 w-[70vw] sm:w-[50vw]">{{ blogPost.title }}</h2>
        </div>
            <p class="mx-auto my-4 text-sm text-gray-500">created by {{ blogPost.author }} published {{ blogPost.dates.published }}
            </p>
        <div>
            <h2 class="text-center mx-auto font-bold text-3xl p-6 underline decoration-double">{{ blogPost.title }}</h2>
            <article class=" mb-16 p-6 prose max-w-none lg:prose-lg xl:prose-xl
            2xl:prose-2xl dark:prose-dark">
            <ContentDoc class="con"> </ContentDoc>
            </article>
        </div>
        </div>
    </section>
</template>

