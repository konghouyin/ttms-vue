<template>
  <div>
    <div>
  <!--      picture -->
      <u-picture></u-picture>
    </div>
    <div>
  <!--      movie -->
      <u-movie></u-movie>
    </div>
    <div>
  <!--      double -->
      <u-double></u-double>
    </div>
  </div>
</template>

<script>
  import uPicture from './UserPicture.vue'
  import uMovie from './UserMovie.vue'
  import uDouble from './UserDouble.vue'

  export default {
      data() {
        return {
          formdata: [
          ]
        }
      },
      components: {
        uMovie,
        uDouble,
        uPicture,
      },
      props: {

      },
     }
</script>

<style>
</style>
