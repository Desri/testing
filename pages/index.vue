<template>
  <div class="container" v-if="isLogin">
    <b-row>
      <b-col sm="12" lg="11" class="mb-3 py-4 mx-auto">
        <list-user></list-user>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  import ListUser from '~/components/list/ListUser';
  export default {
    data () {
      return {
        isLogin: false
      }
    },
    computed: {
      ...mapGetters({
        
      }),
    },
    async mounted() {
      let checkLogin = localStorage.getItem("dataLogin")
      if ( checkLogin ) {
        this.isLogin = true
        await this.$store.dispatch('user/fetchListUser');
      }
    },
    methods: {
      ...mapActions({
        
      }),
    }
  }
</script>