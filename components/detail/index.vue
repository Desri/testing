<template>
  <div>
    <div class="detail">
      <b-card no-body class="overflow-hidden" style="max-width: 540px;">
        <b-row no-gutters>
          <b-col md="6" class="imgBig">
            <b-card-img :src="detailUser.picture" alt="Image" class="rounded-0"></b-card-img>
          </b-col>
          <b-col md="6">
            <b-card-body v-if="detailUser">
              <div class="headingDetail">
                <div class="userDetail">
                  <div class="avatar">
                    <img :src="detailUser.picture">
                  </div>
                  <div class="named">
                    <h3>{{detailUser.firstName}} {{detailUser.lastName}}</h3>
                    <div class="date">
                      <p><b-icon-stopwatch></b-icon-stopwatch> {{formatDate(detailUser.updatedAt)}}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="descDetail">
                <div class="heading">
                  <h3>User Info</h3>
                </div>
                <div class="boxdetail">
                  <div class="icons">
                    <b-icon-person></b-icon-person>
                  </div>
                  <div class="descUser">
                    <p><span>{{detailUser.title}}. </span> {{detailUser.firstName}} {{detailUser.lastName}}</p>
                  </div>
                </div>
                <div class="boxdetail">
                  <div class="icons">
                    <b-icon-envelope></b-icon-envelope>
                  </div>
                  <div class="descUser">
                    <p>{{detailUser.email}}</p>
                  </div>
                </div>
                <div class="boxdetail">
                  <div class="icons">
                    <b-icon-calendar-date></b-icon-calendar-date>
                  </div>
                  <div class="descUser">
                    <p>{{formatDate(detailUser.dateOfBirth)}}</p>
                  </div>
                </div>
                <div class="boxdetail">
                  <div class="icons">
                    <b-icon-telephone></b-icon-telephone>
                  </div>
                  <div class="descUser">
                    <p>{{detailUser.phone}}</p>
                  </div>
                </div>
                <div class="boxdetail">
                  <div class="icons">
                    <b-icon-building></b-icon-building>
                  </div>
                  <div class="descUser">
                    <p>{{detailUser.location.street}}, {{detailUser.location.state}}, {{detailUser.location.city}}, {{detailUser.location.country}}</p>
                  </div>
                </div>
              </div>
            </b-card-body>
          </b-col>
        </b-row>
      </b-card>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        detailUser: ''
      }
    },
    computed: {
      
    },
    async mounted() {
      this.detailUser = this.$store.state.user.detailUser
    },
    methods: {

    }
  }
</script>