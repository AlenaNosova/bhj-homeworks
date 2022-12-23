let interest = document.getElementsByTagName('label');
let interestActive = document.querySelectorAll('.interests_active');

interest.onclick = function(){
    for (let i = 0; i < interestActive.length; i++){
        if(this.checked == true){
            interestActive[i].checked = true;
        } else if(this.checked == false){
            interestActive[i].checked = false;
        }
    }
}