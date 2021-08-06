<template>
  <div>
    <b-form>
      <b-form-group>
        <b-form-input
          v-model="form.phone"
          type="text"
          placeholder="Phone"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="form.password"
          :type="passwordVisible ? 'text' : 'password'"
          placeholder="Password"
          required
        ></b-form-input>
        <div @click='togglePasswordVisibility' :arial-label='passwordVisible ? "Hide password" : "Show password"'>
          <span v-if="passwordVisible"><b-icon-eye></b-icon-eye></span>
          <span v-else><b-icon-eye-slash></b-icon-eye-slash></span>
        </div>
      </b-form-group>
      <div class="boxSubmit">
        <b-button block variant="primary" @click="onSubmit">Submit</b-button>
        <div class="spiner" v-if="onShow">
          <b-icon icon="arrow-clockwise" animation="spin" font-scale="4"></b-icon>
        </div>
      </div>
    </b-form>
    <div class="forgot">
      <p>
        <NuxtLink to="/#">Forgot Password?</NuxtLink>
      </p>
    </div>
    <div class="login-sosmed">
      <div class="box-sosmed fb-login">
        <b-icon-facebook></b-icon-facebook> Facebook
      </div>
      <div class="box-sosmed google-login">
        <b-icon-google></b-icon-google> Google
      </div>
    </div>
    <div class="text-register">
      <p>
        Don't have an account? <NuxtLink to="/#">Register</NuxtLink>
      </p>
    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    data () {
      return {
        form: {
          phone: '628129063694',
          password: 'sjdfkhgsjdfgjsdf'
        },
        onShow: false,
        passwordVisible: false,
      }
    },
    computed: {
      
    },
    async mounted() {
      
    },
    methods: {
      ...mapActions({
        pushLogin: 'login/fetchedLogin',
      }),

      togglePasswordVisibility () {
        this.passwordVisible = !this.passwordVisible
      },
      
      async onSubmit() {
        this.onShow = true
        var payload = {
          "phone": this.form.phone,
          "password": this.form.password
        }
        let response = await this.pushLogin(payload);
        location.reload();
      },

    }
  }
</script>