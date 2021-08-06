<template>
  <div>
    <header>
      <b-navbar toggleable="lg">
        <b-container>
        <b-navbar-brand href="/">Logo</b-navbar-brand>
          <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="!dataUser" href="#" @click="modalLogin" class="login">LOGIN</b-nav-item>
            <b-nav-item-dropdown right class="boxUser" v-else>
              <template #button-content>
                <span>{{dataUser.name}}</span>
              </template>
              <b-dropdown-item href="/profile">Profile</b-dropdown-item>
              <b-dropdown-item @click="onLogout">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-container>
      </b-navbar>
    </header>
    <b-modal ref="modal-login" id="modal-login" centered title="Login" hide-footer no-close-on-backdrop>
      <modal-login></modal-login>
    </b-modal>
  </div>
</template>

<script>
  import ModalLogin from '~/components/modal/LoginForm';
  export default {
    components : {
      ModalLogin
    },
    data () {
      return {
        dataUser: {},
      }
    },
    async mounted() {
      let checkLogin = localStorage.getItem("dataLogin")
      if ( !checkLogin ) {
        this.modalLogin()
      }
      this.dataUser = JSON.parse(checkLogin)
    },
    methods: {
      modalLogin() {
        this.$refs['modal-login'].show()
      },
      async onLogout() {
        localStorage.clear()
        this.$cookies.removeAll()
        window.location.href = "/";
      }
    }
  }
</script>