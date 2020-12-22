

Abd قام بالإرسال اليوم، الساعة 11:42 م
function my () {
    var x =document.getElementById("subject").value;
    var x1 =document.getElementById("email").value;
    var x2 =document.getElementById("id").value;
    var x3 =document.getElementById("url").value;
    var x4 =document.getElementById("message").value;
    
        if(x==""&&x1==""&&x2==""&&x3==""&&x4==""){ 
        alert(" Please The Fields Empty ");
        return false;
        }
         if (x==""){
            alert(" Please The Field  Subject Is Empty ");
        return false;
         }
         
        else if (x1==""){
            alert(" Please The Field  Email Is Empty ");
        return false;
        }
        else if (x2==""){
            alert(" Please The Field  ID Is Empty ");
        return false;
        }
        else if (x3==""){
            alert(" Please The Field  URL Is Empty ");
        return false;
        }
        else if (x4==""){
            alert(" Please The Field  Massage Is Empty ");
        return false;
        }
        for(var i = 0;i<x.length;i++){
            if(!(x[i]>='a'&&x[i]<='z'||x[i]>='A'&&x[i]<='Z')){
            alert(" Error : The Subject Contain A Number ");
            break;
            }
          }
          for(var i = 0;i<x4.length;i++){
         if(!(x4[i]>='a'&&x4[i]<='z'||x4[i]>='A'&&x4[i]<='Z')){
           alert(" Error: The Massage Contain A Number  ");
           break;
           }
         }
        for(var i = 0;i<x2.length;i++){
            if((x2[i]>='a'&&x2[i]<='z'||x2[i]>='A'&&x2[i]<='Z')){
            alert(" Error : The Id Is Contain A Char ");
            break;
            }
          }
          var t = x1;
         var start = x1.indexOf("@");
         var c = "";
         for(var i = start + 1 ; i < t.length ; i++){
         c = c + t[i];
        }
         alert(c);

         var q = x3;
         var end = x3.indexOf(".");
         var b = "";
        for(var i = 0; i < end;i++){
        b = b + q[i];
        }
        alert(b);

     
}