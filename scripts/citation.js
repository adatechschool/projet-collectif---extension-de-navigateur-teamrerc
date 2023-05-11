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
    @import url('https://fonts.googleapis.com/css2?family=Asap:wght@200&display=swap');
  

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
                z-index: 1000;
                color: black;
                clip-path: circle(8% at 91% 22%);
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
            padding-top: 10px;
            font-size: 12px;
            font-family: 'asap', cursive;
            
        }
        `;
    head.appendChild(style);


