<template>

  <div>
    <!-- <u-infn></u-infn> -->
    <u-form></u-form>

  </div>
</template>

<script>
  /* import uInfn from './UserInfn.vue' */
  import uForm from './UserForm.vue'

  export default {
    data() {
      return {
        formdata: [
        ]
      }
    },
    components: {
      uForm,
    },
    props: {

    },
   }
</script>

<style>

</style>
