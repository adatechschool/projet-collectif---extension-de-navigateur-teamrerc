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
    "“Faites de chaque jour votre chef-d’œuvre.” - John Wooden",
    "“La seule limite à nos réalisations de demain sont nos doutes d'aujourd'hui.” - Franklin D. Roosevelt",
    "“Si vous avez le courage de commencer, vous avez le courage de réussir.” - David Viscott",
    "“Le plus dur dans la réussite, c'est de se décider à agir, le reste n'est que de la ténacité.” - Amelia Earhart",
    "“Le talent est un cadeau, mais le travail acharné est un choix.” - Kobe Bryant",


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

            let randomNumber = Math.ceil(Math.random() * citations.length-1) ;
            const newElement = document.createElement('h6');
            newElement.textContent = citations[randomNumber];
            div.appendChild(newElement)
            document.querySelector(".spanCitation").addEventListener("mouseleave", () =>{
                div.removeChild(newElement)
    
            })
        })

    }
    const head = document.querySelector('head');
    const style = document.createElement('style');
    style.innerHTML = `
    @import url('https://fonts.googleapis.com/css2?family=Asap:wght@200&display=swap');
    @import url("https://fonts.googleapis.com/css2?family=Luckiest+Guy&family=Pacifico&family=Pangolin&display=swap");
  

        .CamilleClaraSteve {
            /* From https://css.glass */
                background: rgba(156, 228, 247, 0.79);
                border-radius: 16px;
                box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
                backdrop-filter: blur(4px);
                -webkit-backdrop-filter: blur(4px);
                border: 1px solid rgba(156, 228, 247, 0.3);
                            
        }

        
            .CamilleClaraSteve {
                
                backface-visibility: hidden;
                position: fixed;
                bottom: 15px;
                right: 0px;
                z-index: 4;
                color: black;
                clip-path: circle(8% at 91.5% 15%);
                transition: all 0.5s ease-in-out;
                border-radius: 10px;
                padding: 10px;
                width: 250px;
                height: 100px;
                text-align: center;
                box-shadow: 0 6px 7px -1px #ffffff;
               
                
               
                
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
            font-family: 'asap', cursive;
            
        }
        `;
    head.appendChild(style);
// }, 1000);

