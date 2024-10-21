const  setup=document.getElementById("setup");
const  punchline=document.getElementById("punchline");
const  btn=document.getElementById("btn");

async function getJokes(){
    let url=`https://official-joke-api.appspot.com/random_joke`;

    try{
        const response=await fetch(url);
        if(!response.ok){
            throw new Error("City not found");
        }

        const data=await response.json();
        const set=data.setup;
        const punch=data.punchline;

        setup.innerHTML=`${set}`;
        punchline.innerHTML=`${punch}`


    
    }
    catch(error){
        setup.innerHTML=error.message
    }

}
btn.addEventListener("click",getJokes);
