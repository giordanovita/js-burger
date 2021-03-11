var priceBtn = document.getElementById('calculate');
    priceBtn.addEventListener('click', function(){

        var burgerName = document.getElementById('burger-name').value;
       // console.log(burgerName);

       if(burgerName.length < 1){
           alert("Inserire il nome del panino per proseguire all'ordine")
       }else{
          var everyCheckboxs = document.getElementsByClassName('ingred');

          var totalPrice = 10;

          for(var i=0; i<everyCheckboxs.length; i++){

            var checkbox = everyCheckboxs[i];
            var isChecked = checkbox.checked;
             var price = parseFloat(checkbox.dataset.price);
           // console.log(checkbox, isChecked, price);

            if(isChecked){
                totalPrice += price ;
            }
          }
         // console.log(totalPrice);

         var coupons = [
             '2345GDSGTHS', '543252SDGS', '45364DGSGH', '453646SDFVBS', '45354FDSFGR'
         ];

         var burgerCoupon = document.getElementById('burger-coupon').value;

         if (coupons.includes(burgerCoupon)){
            totalPrice -= totalPrice * 0.2
         }
         
         
         var spanPrice = document.getElementById('price');
          spanPrice.innerHTML = totalPrice;
       }
    })

    var list = document.getElementsByTagName('li');
        for(i=0; i<list.length; i++){
            var li = list[i];

            li.addEventListener('click', function(){

                var liClicked = this;
                var liClickedChildrens = liClicked.children;
                var clickedCheckbox = liClickedChildrens[1];

                clickedCheckbox.checked = !clickedCheckbox.checked;

                

            })
        }
