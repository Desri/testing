<template>
  <div class="container">
    <b-row>
      <b-col sm="12" lg="11" class="mb-3 py-5 mx-auto">
        <div class="boxProfile">
          <div class="profile">
            <b-card>
              <div class="avatarUser">
                <div class="avatarImg">
                  <img src="@/assets/img/avatar.png"/>
                  <h2>{{dataUser.name}}</h2>
                </div>
              </div>
              <div class="descProfile">
                <p><span>Id</span> : {{dataUser.id}}</p>
                <p><span>Nama</span> : {{dataUser.name}}</p>
                <p><span>Email</span> : {{dataUser.email}}</p>
                <p><span>No. HP</span> : {{dataUser.mobileNumber}}</p>
                <p><span>PIN</span> : {{dataUser.pin}}</p>
              </div>
            </b-card>
          </div>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    data () {
      return {
        dataUser: {},
      }
    },
    computed: {
      ...mapGetters({
        
      }),
    },
    async mounted() {
      this.dataUser = JSON.parse(localStorage.getItem("dataLogin"))
    },
    methods: {
      ...mapActions({
        
      }),
    }
  }
</script>