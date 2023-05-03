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

const html = document.querySelector("body");


if(html){
    const newElement = document.createElement('h6');
    newElement.textContent = citations[0];
    html.appendChild(newElement);
}
const head = document.querySelector('head');
const style = document.createElement('style');
style.innerHTML = `
    h6 {
       position: fixed;
       bottom: 0px;
       right: 150px;
       z-index: 4; 
       background-color: red;
       color: black;
       margin-bottom:0px;

    } 
    `;
head.appendChild(style);


