
var sell_price;
var amount;

function init () {
    sell_price = document.form.sell_price.value;
    amount = document.form.amount.value;
    document.form.sum.value = sell_price;
    change();
}

function add () {
    hm = document.form.amount;
       if (hm.value < 5) {
    hm.value ++ ;
    var sum_ = parseInt(hm.value) * sell_price;
document.getElementById("my_sum").innerHTML=sum_;
       }

       else {
        alert("구매가능 수량을 초과하였습니다.");
     }
}

function del () {
    hm = document.form.amount;
        if (hm.value > 1) {
            hm.value -- ;
            var sum_ = parseInt(hm.value) * sell_price;
document.getElementById("my_sum").innerHTML=sum_;
        }
}

function change () {
    hm = document.form.amount;

        if (hm.value < 0) {
            hm.value = 0;
        }
    var sum_ = parseInt(hm.value) * sell_price;
document.getElementById("my_sum").innerHTML=sum_;
} 



function buy() {
    if (!document.form.color.value)
    {
        alert("컬러를 선택해주세요");
        return;
    }


    if (!document.form.size.value)
    {
        alert("사이즈를 선택해주세요");
        return;
    }

    else {

        alert("로그인 후 이용 가능합니다.");
       document.form.submit();

     }
    
 };
