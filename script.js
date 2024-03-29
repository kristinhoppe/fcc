//onclick start search
const userInput = document.getElementById("search-input")
const searchForm = document.getElementById("search-form")
const pokeName = document.getElementById("pokemon-name")
const pokeHP = document.getElementById("hp")
const pokeID = document.getElementById("pokemon-id")
const pokeAttack = document.getElementById("attack")
const pokeDefense = document.getElementById("defense")
const pokeSpAttack = document.getElementById("special-attack")
const pokeSpDefense = document.getElementById("special-defense")
const pokeSpeed = document.getElementById("speed")
const pokeWeight = document.getElementById("weight")
const pokeHeight = document.getElementById("height")
const pokeTypes = document.getElementById("types")
const pokeSprite = document.getElementById("sprite-container")
let pokeArr = []


// userInput.addEventListener('keydown', e => {
//   if (e.key === 'Enter') {
//     getUserInput(userInput.value);
    
//   }
// });


//deconstruct reply
const displayPokemon = async() => {
    try{
    const inName = userInput.value.toLowerCase()
    console.log(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inName}`)
   const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${inName}`)
    const pokeArr = await response.json()  
        
    const {name, id, stats, weight,height,types,sprites} = pokeArr
    pokeName.innerHTML = name.toUpperCase()
    pokeID.innerHTML = `#${id}`
    pokeWeight.innerHTML = `Weight: ${weight}`
    pokeHeight.innerHTML = `Height: ${height}`
    pokeSprite.innerHTML = `<img src="${sprites.front_default}" alt="${name}">`

    pokeHP.innerHTML= stats[0].base_stat
    pokeAttack.innerHTML = stats[1].base_stat
    pokeDefense.innerHTML = stats[2].base_stat
    pokeSpAttack.innerHTML = stats[3].base_stat
    pokeSpDefense.innerHTML = stats[4].base_stat
    pokeSpeed.innerHTML = stats[5].base_stat

    pokeTypes.innerHTML = types.map(type => `<span class="type ${type.type.name}">${type.type.name}</span>`).join("")
        
        }catch(err){
            alert('Pokémon not found');
            resetDisplay()
            console.log(err)
            
        }
    
    }

function resetDisplay(){
    pokeSprite.innerHTML = ''
pokeName.innerHTML = '';
  pokeID.innerHTML = '';
  pokeTypes.innerHTML = '';
  pokeHeight.innerHTML = '';
  pokeWeight.innerHTML = '';
  pokeHP.innerHTML = '';
  pokeAttack.innerHTML = '';
  pokeDefense.innerHTML = '';
  pokeSpAttack.innerHTML = '';
  pokeSpDefense.innerHTML = '';
  pokeSpeed.innerHTML = '';
};



//listen to the page
searchForm.addEventListener('click',e=>{e.preventDefault(); displayPokemon()})