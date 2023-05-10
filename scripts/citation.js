const citations = [

    "“La meilleure façon de prédire votre avenir est de le créer.” - Abraham Lincoln",
    "“Le succès est la somme de petits efforts répétés jour après jour.” - Robert Collier",
    "“Le travail acharné bat le talent quand le talent ne travaille pas dur.” - Tim Notke",
    "“Ne laissez jamais personne vous dire que vous ne pouvez pas faire quelque chose. Si vous avez un rêve, vous devez le protéger.” - Chris Gardner",
    "“Lorsque vous voulez réussir aussi fort que vous voulez respirer, alors vous réussirez.” - Eric Thomas",
    "“Si vous voulez vivre une vie heureuse, attachez-la à un but, pas à des personnes ou à des choses.” - Albert Einstein",
    "“La motivation vous fait démarrer, l’habitude vous fait continuer.” - Jim Ryun",
    "“Le succès n’est pas la clé du bonheur. Le bonheur est la clé du succès. Si vous aimez ce que vous faites, vous réussirez.” - Albert Schweitzer",
    "“Le temps est un bien plus précieux que l’argent. Vous pouvez obtenir plus d’argent, mais vous ne pouvez pas obtenir plus de temps.” - Jim Rohn",
    "“Faites de chaque jour votre chef-d’œuvre.” - John Wooden"

]

// setInterval(() => {
    
    const html = document.querySelector("body");
    
    
    if(html){
        const div = document.createElement('div');
        div.className += 'CamilleClaraSteve'
        const span = document.createElement('span');
        span.textContent = "💡";
        span.className += "spanCitation"
        html.appendChild(div);
        div.appendChild(span)
        
        
        document.querySelector(".spanCitation").addEventListener("mouseover", () =>{
            let randomNumber = Math.ceil(Math.random() * 10-1) ;
            
            fetch('http://localhost:5000/citations2')
            .then(response => response.json())
            .then((data) => {
                console.log(data[randomNumber].message)
                
            const newElement = document.createElement('h6');
            newElement.textContent = data[randomNumber].message;
            div.appendChild(newElement)
            document.querySelector(".spanCitation").addEventListener("mouseleave", () =>{
                div.removeChild(newElement)
    
            })
            })
            .catch(error => console.log(error));

        })

    }
    const head = document.querySelector('head');
    const style = document.createElement('style');
    style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Gochi+Hand&display=swap');
    
        .CamilleClaraSteve {
            position: fixed;
            bottom: 15px;
            right: 0px;
            z-index: 4;
            color: black;
            clip-path: circle(8% at 91.5% 30%);
            transition: all 0.5s ease-in-out;
            border-radius: 10px;
            padding: 10px;
            width: 250px;
            height: 100px;
            text-align: center;
            background: rgb(255,255,207);
            background: radial-gradient(circle, rgba(255,255,207,0.7036064425770308) 13%, rgba(247,197,126,1) 84%);
        }
        .CamilleClaraSteve:hover {
            clip-path: circle(75%);
        }
        .CamilleClaraSteve span {
            float: right;
            position: relative;
            margin-right: 2%;
        }
        .CamilleClaraSteve h6 {
            padding-top: 20px;
            font-size: 14px;
            font-family: 'Gochi Hand', cursive;
        }
        `;
    head.appendChild(style);
// }, 1000);

