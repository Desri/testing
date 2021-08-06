<template>
  <div>
    <div class="headingPage">
      <h4>List User</h4>
    </div>
    <b-row>
      <b-col cols="6" sm="3" lg="3" class="pl-1 pr-1 mb-2" v-for="(data, index) in listUser" v-bind:key="data.id">
        <div class="boxUers">
          <b-card
            no-body>
            <img v-if="data.picture" :src="data.picture" class="card-img-top">
            <img v-else src="@/assets/img/no_avatar.png"/>
            <div class="boxnumber">
              <div class="number">
                <p>#{{index+1}}</p>
              </div>
            </div>
            <b-card-body>
              <a href="javascript:void(0)" @click="onShowDetilModal(data.id)">
                <div class="creadBy">
                  <div class="user">
                    <div class="listUser">
                      <div class="icons">
                        <b-icon-person></b-icon-person>
                      </div>
                      <div class="descUser">
                        <p><span v-if="data.title">{{data.title}}. </span> {{data.firstName}} {{data.lastName}}</p>
                      </div>
                    </div>
                    <div class="listUser">
                      <div class="icons">
                        <b-icon-envelope></b-icon-envelope>
                      </div>
                      <div class="descUser">
                        <p>{{data.email}}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </b-card-body>
            <template #footer>
              <a href="javascript:void(0)" @click="onModalEdit(data.firstName, data.lastName, data.email)">Edit</a>
            </template>
          </b-card>
        </div>
      </b-col>
      <infinite-loading v-if="page != totalPage" spinner="waveDots" @infinite="infiniteScroll">
        <span slot="no-more"></span>
        <span slot="no-results"></span>
      </infinite-loading>
    </b-row>
    <b-modal ref="modal-edit" id="modalEdit" centered title="Edit" hide-footer>
      <div class="formEdit">
        <b-form-group label="First Name:">
          <b-form-input
            placeholder="First Name"
            v-model="firstName"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Last Name:">
          <b-form-input
            placeholder="Last Name"
            v-model="lastName"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group label="Email:">
          <b-form-input
            placeholder="Email"
            v-model="email"
            required
          ></b-form-input>
        </b-form-group>
        <div class="boxSubmit">
          <b-button type="submit" variant="primary" @click="onEdit">Submit</b-button>
          <div class="spiner" v-if="onShow">
            <b-icon icon="arrow-clockwise" animation="spin" font-scale="4"></b-icon>
          </div>
        </div>
      </div>
    </b-modal>
    <b-modal ref="modal-detail" id="modalDetail" centered title="Detail" hide-footer>
      <detail></detail>
    </b-modal>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import axios from 'axios';
  export default {
    data () {
      return {
        onShow: false,
        id: '',
        firstName: '',
        lastName: '',
        email: '',
        page: 1,
        totalPage: '12'
      }
    },
    computed: {
      listUser () {
        return this.$store.state.user.listUser.data
      },
      url() {
        return `${window.location.origin}/api2/user?page=${this.page}&limit=8`;
      },
    },
    async mounted() {
      
    },
    methods: {
      ...mapActions({
        pushDetailUser: 'user/fetchDetailUser',
        pushEditUser: 'user/fetchEditUser',
      }),
      infiniteScroll($state) {
        setTimeout(() => {
          this.page++;
          axios
            .get(this.url, {
              headers: {
                'App-id': `61094e21e53dd58cc8eb2a60`
              },
            })
            .then(response => {
              if (response.data.total > 1) {
                response.data.data.forEach(item => this.listUser.push(item));
                $state.loaded();
              } else {
                $state.complete();
              }
            })
            .catch(err => {
              console.log(err);
            });
        },500);
      },
      async onShowDetilModal(id){
        let response = await this.pushDetailUser(id);
        this.$refs['modal-detail'].show()
      },
      async onModalEdit(firstName, lastName, email) {
        this.$refs['modal-edit'].show()
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
      },
      async onEdit() {
        this.onShow = true
        let postdata = {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email
        }
        let response = await this.pushEditUser(postdata);
        this.listUser.push(this.$store.state.user.updateUser);
        this.$refs['modal-edit'].hide()
        this.onShow = false
      }
    }
  }
</script>