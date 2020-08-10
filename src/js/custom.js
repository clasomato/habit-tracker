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
      increments: [0, 0, 0, 0],
      number: false,
      coffeeCounter: 0,
      socialMedia: 0,
      cigarette: 0,
      waterCounter: 0,
      shows: 0,
      alcahol: 0,
    },
    methods: {
      coffeeIncrement: function () {
        app.coffeeCounter ++;
        localStorage.setItem("coffeeCounter", app.coffeeCounter);
      },
      waterIncrement: function () {
        app.waterCounter ++;
        localStorage.setItem("waterCounter", app.waterCounter);
      },
      openAddTile: function () {

      },
      clearTiles: function () {
        app.coffeeCounter = 0
        app.waterCounter = 0
        localStorage.setItem("coffeeCounter", 0);
        localStorage.setItem("waterCounter", 0);
      },
      openNav: function () {
        console.log('nav open')
        $('#navModal').show(500);
      },
      closeNav: function () {
        $('#navModal').hide(500);
      }
     }, // Methods ENDS
    beforeDestroy: function () {

    } // Before destroy ENDS
  })

  window.onbeforeunload = function(){
      return localStorage.setItem("coffeeCounter", app.coffeeCounter);
      return localStorage.setItem("waterCounter", app.waterCounter);
  }


  function getCoffeeIncrement () {
    var cc = localStorage.getItem("coffeeCounter");
    app.coffeeCounter = cc
    console.log(cc)
  }
  function getWaterIncrement () {
    var cc = localStorage.getItem("waterCounter");
    app.waterCounter = cc
    console.log(cc)
  }




  // Calling functions
  getCoffeeIncrement()
  getWaterIncrement()

})(); // iffe ENDS
