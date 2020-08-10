// All of the imports/requires
// var axios = require('axios');
// A special/work-around kind of import/require for vue.js
// Vue needs additional files and build tools so this way works
// for our current gulp/webpack setup:
import Vue from 'vue/dist/vue.js';
// import tippy from 'tippy.js';
// import anime from 'animejs/lib/anime.es.js';

(function(){
  var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      increments: [0, 0, 0, 0]
    },
    methods: {
      increment: function () {
        var number = (app.increments[0] = app.increments[0] + 1);
        app.increments[0] = number;
        console.log(app.increments);
      }
    } // Methods ENDS
  })

})(); // iffe ENDS
