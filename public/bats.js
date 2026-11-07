 var batimg={};
    var speed={};
    //add fx container
    fx_cont=document.createElement('div');
fx_cont.style.position='fixed';
fx_cont.style.top='0';
fx_cont.style.left='0';
    fx_cont.style.width='100%';
    fx_cont.style.height='100%';
     
    fx_cont.style.overflow='visible';
    fx_cont.style.pointerEvents='none';
    fx_cont.style.background='none !important';
document.body.appendChild(fx_cont)    
    
    for (i=0;i<7;i++){ speed[i]=1;
    batimg[i]=document.createElement('img');
batimg[i].src='bat.gif'   
    batimg[i].style.position='absolute'
        distance=Math.random()
       batimg[i].style.width=(10-(distance*8))+'%'
    batimg[i].style.opacity=(100-(distance*50))+'%'
    batimg[i].style.top=((Math.random())*100)+"%"
            batimg[i].style.left=((Math.random())*100)+"vw"
        fx_cont.appendChild(batimg[i])
       speed[i]=(Math.random()+0.2)
        if (Math.random()<0.5){
            speed[i]*=-1
        }
                      if (speed[i]<0){
                         
                           batimg[i].style.transform="scaleX(-1)";
                      }
    }

    
    window.requestAnimationFrame(batMove)
    var stall=0;
    function batMove(){
         stall++;
         
        if (stall==2){
            for (i=0;i<7;i++){
         aa=batimg[i].style.left.replace("vw",'')
           aa=parseFloat(aa)+speed[i]  
               if ((aa>100) || (aa<0)){aa=0;  
                           
                             distance=Math.random()
       batimg[i].style.width=(10-(distance*9))+'%'
    batimg[i].style.opacity=(100-(distance*50))+'%'
                           batimg[i].style.width=(10-(Math.random()*8))+'%';
                              batimg[i].style.top=((Math.random())*100)+"%"
                            speed[i]=(Math.random()+0.2)
        if (Math.random()<0.5){
            speed[i]*=-1
        }
                      if (speed[i]<0){
                         
                           batimg[i].style.transform="scaleX(-1)";
                          aa=100
                      } else { batimg[i].style.transform="scaleX(1)";}
                          }
           batimg[i].style.left=aa+"vw"
         
         }
            
           stall=0
        }
             window.requestAnimationFrame(batMove)
    }
    