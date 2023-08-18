quantityPlus('phonePlus' , 'phoneQuantity' , 'phonePrice' , 1100);
quantityMinus('phoneMinus' , 'phoneQuantity' , 'phonePrice' , 1100);
quantityPlus('casePlus' , 'caseQuantity' , 'casePrice' , 50);
quantityMinus('caseMinus' , 'caseQuantity' , 'casePrice' , 50);
 function quantityPlus(itemButton , itemQuantity , itemPrice , fixedPrice){
        document.getElementById(itemButton).addEventListener('click' , function(){
            
        document.getElementById(itemQuantity).value = parseFloat( document.getElementById(itemQuantity).value) + 1 ;
       
        document.getElementById(itemPrice).innerText = parseFloat( document.getElementById(itemQuantity).value) * fixedPrice ;   

        document.getElementById('subTotal' ).innerText = parseFloat(document.getElementById('phonePrice').innerText) + parseFloat(document.getElementById('casePrice').innerText) ;

        document.getElementById('total' ).innerText = parseFloat(document.getElementById('phonePrice').innerText) + parseFloat(document.getElementById('casePrice').innerText) ;
    })
 }

 function quantityMinus(itemButton , itemQuantity , itemPrice , fixedPrice ){
        document.getElementById(itemButton).addEventListener('click' , function(){

        document.getElementById(itemQuantity).value = parseFloat( document.getElementById(itemQuantity).value) - 1 ;

        document.getElementById(itemPrice).innerText = parseFloat( document.getElementById(itemQuantity).value) * fixedPrice ;

        document.getElementById('subTotal' ).innerText = parseFloat(document.getElementById('phonePrice').innerText) + parseFloat(document.getElementById('casePrice').innerText) ;

        document.getElementById('total' ).innerText = parseFloat(document.getElementById('phonePrice').innerText) + parseFloat(document.getElementById('casePrice').innerText) ;
    })    
 }



