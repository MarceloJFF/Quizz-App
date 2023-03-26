    
        let senhas =[];
        let sorteados = [];
        let sorteado_atual;
        let aviso = document.querySelector('.modal-body');
        let btn = document.querySelector('#btn-sortear');        
        
        
        window.addEventListener('load',()=>{
                getAllValues();
         
        })
  
        function Sortear(){    

            makeSorteio();
            if(sorteado_atual.length !== 0 && sorteado_atual ){
                aviso.innerHTML = `Parabéns, você ganhou 10% de desconto 
                Muito Obrigado por participar!`; 
            }
               
        }

        function getAllValues(){
            // Get all data
            const res = axios.get('https://sheetdb.io/api/v1/kp7lxwm2d4msm?sheet=Página1', {
                "auth": {
                "username": "i3akq0dn",
                "password": "8jhusqsdm2qmgnn0cx3n"
            }
            })
            .then( response => {
                senhas = response.data;
            });    
        }
    
        function makeSorteio(){
                    if(senhas.length > 0){
                        var aleatorio = Math.floor(Math.random() * (senhas.length));
                        console.log(aleatorio);
                        let index = sorteados.findIndex(i => i.Beneficio ===  senhas[aleatorio].Beneficio && i.Tipo === senhas[aleatorio].Tipo);
                        console.log(index);

                        if(index === -1){
                            sorteado_atual = senhas[aleatorio];
                            sorteados.push( senhas[aleatorio] );
                            senhas.splice(aleatorio,1);
                            
                        }else{
                            makeSorteio();
                        }
                        
                    }else{
                        console.log("deu errado");
                    }
        
            console.log(sorteados);
            console.log(senhas);
           // btn.disabled = true;
        }
        
        function getCol(){
        
            axios.get('https://sheetdb.io/api/v1/kp7lxwm2d4msm/cells/A2', {
                "auth": {
                "username": "i3akq0dn",
                "password": "8jhusqsdm2qmgnn0cx3n"
            }
            })
            .then( response => {
                console.log(response.data);
            });
       }

       function updateCol(){
            axios.patch('https://sheetdb.io/api/v1/58f61be4dda40/id/61',{
                "data": {"name": "Scott", "age": 25}
            }).then( response => {
                console.log(response.data);
            });
       }
       
  