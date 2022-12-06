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
      shinysee: false,
      headers: null


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

          // , {
          //   Authorization: '2O3jlUI9BXPZR72RKYBcaDB6eObcjw4Dh1msrbAAkVeJinmZDTFGtm6eHu3aWVJr'
          // }

         
          axios.post('https://data.mongodb-api.com/app/data-hthnm/endpoint/data/v1/action/find', {
  
  headers: {
    'content-type': 'application/json',
    authorization: '2O3jlUI9BXPZR72RKYBcaDB6eObcjw4Dh1msrbAAkVeJinmZDTFGtm6eHu3aWVJr'
  },
  body: {
    "dataSource": "Cluster0",
    "database": "mean-api",
    "collection": "test_vehicles",
    "filter": {}
  }
})
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.log(err)
  })

  


          
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