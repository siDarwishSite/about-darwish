function sendToWhatsapp(){

    let number = "+601121085279";

    let message =  document.getElementById("message").value;

    var url= "https://wa.me/"+number+"?text="+message;

    window.open(url, '_blank');
}