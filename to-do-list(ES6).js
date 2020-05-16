


var inputController=()=>{
	let listvalue,creatli,htmlContent;
	listvalue= document.querySelector('#add').value;
	
	if(listvalue=== ''|| !isNaN(listvalue)){
		document.querySelector('.warning').innerHTML='Confirm format';
		document.querySelector('#add').value = '';
		
	}else{
	creatli = document.createElement('li');
	htmlContent = `${listvalue}<button  class='btndone'  onclick='Done()' >Done </button><button  class='btndel' onclick='deleteBtn()'  >Delete </button>`
	creatli.innerHTML= htmlContent;
	 document.querySelector('.list-content').appendChild(creatli);
	 creatli.className = 'list-event';
	 document.querySelector('#add').value = '';
	 document.querySelector('.warning').innerHTML='';
	}
		
		
};


	



var Done = () =>{
	  let ensurebg,ensureCount,ensure,i ;
	   ensureCount = 0;
	   ensure = document.getElementsByClassName('btndone');
	    for(i = 0; i< ensure.length; i++){
	    ensure[i].onclick = function(){
			 ensurebg = this.parentElement;
			 ensurebg.style.backgroundColor = '#ff793f';
			ensureCount = ensureCount+1;
		    document.querySelector('.done').innerHTML = ensureCount;
		}
		
		}
	
		};
	
	 
		   

var deleteBtn = () =>{
		let btnd,i,div;
	    btnd = document.getElementsByClassName('btndel');
	    for(i = 0; i< btnd.length; i++){
			btnd[i].onclick = function(){
				div = this.parentElement;
				if(div.style.backgroundColor ==='#ffeaa7'){
					alert('To confirm whether the event  is completed or not.');
				}else{
					div.style.display ='none';
				}
				
				
		}
			}
		};
		
        
     
		
		
var courrentTime = () =>{
	let time,year,month,date;
	time = document.querySelector('.time');
	year = new Date().getFullYear();
	month = new Date().getMonth()+1;
	date = new Date().getDate();
    time.innerHTML = `${year}/${month}/${date}`;
	
	
};	

(function ctrl(){
	inputController();
	
	courrentTime();
	
})();
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
