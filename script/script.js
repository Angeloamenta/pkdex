var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!',
      info: null,
      text: "",
      sprite: null,
      npokedex: null,
      name: null,
      type: null,
      pokemons: null,
      pokemons2: null,
      pika: null,
      shiny:null,
      shinysee: false


    },

    created () {
         axios.get(`https://pokeapi.co/api/v2/pokemon/`)
          .then((result) => {
            console.log(result.data.results);
            // console.log(JSON.stringify(result.data.results));
            // let poke = JSON.stringify(result.data.results)
            this.pokemons = result.data.results   
          }).catch((error) => { console.log(error); });


          axios.get(`https://pokeapi.co/api/v2/pokemon/pikachu`)
          .then((result) => {
            this.pika = result.data.sprite 
            console.log(this.pika);
          }).catch((error) => { console.log(error); });



        
    },

    methods: {
        
        search() {
            console.log(this.text);
            
            axios.get(`https://pokeapi.co/api/v2/pokemon/`+ this.text)
            .then((result) => {
              console.log(result.data);
              this.sprite = result.data.sprites.front_default
              this.name = result.data.name.toUpperCase()
              this.type =result.data.types
              this.npokedex=result.data.id
              this.shiny=result.data.sprites.front_shiny
              console.log(this.shiny);

              console.log(this.type);

            }).catch((error) => { console.log(error); });
        },

        shinychange() {
            this.shinysee = !this.shinysee;
            console.log(this.shinysee);
        }
    }

      
  })