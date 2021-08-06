import Vue from 'vue'
export default function ({ store, $axios, redirect }) {
    $axios.onRequest(config => {
        config.withCredentials = false
        config.headers.common['Accept'] = 'application/json'
        config.headers.common['X-Requested-With'] = 'XMLHttpRequest'
        config.headers.common['Content-Type'] = 'application/x-www-form-urlencoded', 'multipart/form-data'
        config.headers.common['App-id'] = '61094e21e53dd58cc8eb2a60'
    })
}