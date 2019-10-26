console.log("Vamos carajo! Ponele media pilas")

// 1. create fetch call using the fetch call with json API
// 4. create for each loop to iterate through the api data
// 5. NEXT - I need to create if then function to add styling.  I believe I need to review the student container section.



let parksUS = () => fetch("http://localhost:8088/parks")
    .then(parks => parks.json())
    .then(parsedParks => {
        console.table(parsedParks);
        // let parksInfo = ""      I TRIED FOR LOOP AND IT DIDN'T WORK SO I TRIED FOR EACH
        // for (var i = 0; i < parsedParks.length; i++) {
            // parksInfo = parsedParks
            parsedParks.forEach(parks => {
                parksComponent = ""
                if (parks.visited === true) {
                    parksComponent = "visited"
                } else 
                    parksComponent = "notvisited"
                //CREATE THE IF/THEN FUNCTION
            const parksContainer = document.querySelector("#article")
            parksContainer.innerHTML += parksFactory(parks) // plus equals to add new ones
            
        })
    })
parksUS();


// 2. created a function to populate the information on the DOM.
// 3. interpolated the return and included parks.name and parks.state to match info from the API

const parksFactory = parks => {
    return `
    <article class= ${parksComponent}>
    <h3>${parks.name}</h3>
    <p>${parks.state}</p>
</article>
    `
}





// let parksUS = () => fetch("http://localhost:8088/parks")
//     .then(parks => parks.json())
//     .then(parsedParks => {
//         console.table(parsedParks);
//         // let parksInfo = ""      I TRIED FOR LOOP AND IT DIDN'T WORK SO I TRIED FOR EACH
//         // for (var i = 0; i < parsedParks.length; i++) {
//             // parksInfo = parsedParks
//             parsedParks.forEach(parks => {
//                 //CREATE THE IF/THEN FUNCTION
//             const parksContainer = document.querySelector("#article")
//             parksContainer.innerHTML += parksFactory(parks) // plus equals to add new ones
            
//         })
//     })
// parksUS();


