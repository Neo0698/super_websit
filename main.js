        //version1
        try{
            var ip=window.location.hostname;
            localStorage.mailfonctionality="false";
            protocol="wss";
            if(ip.search("192.") !=-1){
                ip="192.168.1.12";
                
            }else{
                ip="youlink.ddns.net";
                
            }
            var account="account";
            var isMobile = false; //initiate as false
            // device detection
            if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
                || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
                isMobile = true;
           }
           function home_mail(){
               document.body.innerHTML=localStorage.allhtml;
               
            }
		
           function group_connect(){
               socket = new WebSocket(protocol+"://"+ip+":5678");
                 var e = document.getElementById("groups1");
                
                var gr_name = e.options[e.selectedIndex].value;
                alert(gr_name);
                socket.onopen = function(event) {
                   
                    
                   
                    time=new Date().getMinutes();
                    
                    socket.send("/connect/"+localStorage.user_account+"</+>"+gr_name+"<time>"+time+"]");
                     
                    
                    
                    //changement than can cause error original socket.close(1000, "hello");
                    
                }
                socket.onmessage = function(event) {
                    document.getElementById("datamail").innerHTML=(event.data);
                    
                }
                
               
               
           }
           function new_link(){
               socket = new WebSocket("wss://"+ip+":5678");
                
                socket.onopen = function(event) {
                   socket.send("/new_link/"+document.getElementById("new_link_input").value);
               }
               socket.onmessage=function(event){
                   
                }
               
               
            }
        
            function new_group(){
                var input=document.getElementById("mail_group").value;
                var name=document.getElementById("name_group").value;
                socket = new WebSocket("wss://"+ip+":5678");
                
                socket.onopen = function(event) {
                   
                    
                   
                    time=new Date().getMinutes();
                    
                    socket.send("/add/"+input.replaceAll(" ",";")+"<title>"+name+"<title>"+"<time>"+time+"]");
                     
                    
                    
                    //changement than can cause error original socket.close(1000, "hello");
                    
                }
                socket.onmessage = function(event) {
                    
                }
                
                
            }
            function mybutton() {
              var dots = document.getElementById("dots");
              var moreText = document.getElementById("more");
              var btnText = document.getElementById("myBtn");

              if (dots.style.display === "none") {
                dots.style.display = "inline";
                btnText.innerHTML = "Read more"; 
                moreText.style.display = "none";
              } else {
                dots.style.display = "none";
                btnText.innerHTML = "Read less"; 
                moreText.style.display = "inline";
              }
            }
            var userLang = navigator.language || navigator.userLanguage;
              var d = new Date();
                var globalhours = d.getUTCHours();
                var minutes = d.getMinutes();
            function english(){
                document.getElementById("connectbutton").value="connecter";
                     document.getElementById("videobutton").value="video";
                    document.getElementById("forumbutton").value="forum";
                    
                   document.getElementById("addtext").innerHTML="you can simply improving Trillion by adding a response to <p> a topic where you are an expert on";
                document.getElementById("searchTxt").placeholder="search";
                document.getElementById("new").innerHTML="<p><strong><a href=http://192.168.1.32/exemple.html?searchTxt=https://www.metoffice.gov.uk/] >weather</a></strong></p>";
                document.getElementById("timetext").innerHTML=("l'heure dans certain pays?");
                document.getElementById("apptext").innerHTML=("raccourcit d'application")
                document.getElementById("titleabout").innerHTML="pourquoi pas";
                document.getElementById("chatbotbutton").value="chatbot";
                document.getElementById("timetext").innerHTML=("heure dans certain pays?");
                document.getElementById("timetext").innerHTML=("<div id=blackbox2> heure a chicago"+(globalhours-7).toString()+":"+minutes+"</div>");
                document.getElementById("timetext").innerHTML+=("<div id=blackbox2> heure a washington"+(globalhours-4).toString()+":"+minutes+"</div>");
                document.getElementById("timetext").innerHTML+=("<div id=blackbox2> heure en france/espagne/allemagne"+(globalhours+1).toString()+":"+minutes+"</div>");
                document.getElementById("timetext").innerHTML+=("<div id=blackbox2> heure en angleterre/londre"+(globalhours).toString()+":"+minutes+"</div>");
                
                
                    document.getElementById("addtext").innerHTML=" ";
                    //document.getElementById("program").innerHTML="<p><strong>what about news</strong></p>
                    document.getElementById("apptext").innerHTML=("app shortcut")
                     document.getElementById("new").innerHTML="<p><strong><a href=http://192.168.1.32/exemple.html?searchTxt=https://www.metoffice.gov.uk/] >weather</a></strong></p>";

            }
            function frensh(){
                document.getElementById("connectbutton").value="connecter";
                     document.getElementById("videobutton").value="video";
                    document.getElementById("forumbutton").value="forum";
                    
                   //document.getElementById("addtext").innerHTML="Améliorer Trillion ajoutait une reponse a<p>un sujet dont vout êtes expert";
                document.getElementById("searchTxt").placeholder="chercher";
                document.getElementById("new").innerHTML="<p><strong><a href=http://192.168.1.32/exemple.html?searchTxt=meteo%20france] >la meteo</a></strong></p>";
                document.getElementById("timetext").innerHTML=("l'heure dans certain pays?");
                document.getElementById("apptext").innerHTML=("raccourcit d'application")
                document.getElementById("titleabout").innerHTML="pourquoi pas";
                document.getElementById("chatbotbutton").value="chatbot";
                document.getElementById("timetext").innerHTML=("heure dans certain pays?");
                document.getElementById("timetext").innerHTML=("<div id=blackbox2> heure a chicago"+(globalhours-7).toString()+":"+minutes+"</div>");
                document.getElementById("timetext").innerHTML+=("<div id=blackbox2> heure a washington"+(globalhours-4).toString()+":"+minutes+"</div>");
                document.getElementById("timetext").innerHTML+=("<div id=blackbox2> heure en france/espagne/allemagne"+(globalhours+1).toString()+":"+minutes+"</div>");
                document.getElementById("timetext").innerHTML+=("<div id=blackbox2> heure en angleterre/londre"+(globalhours).toString()+":"+minutes+"</div>");
                
            }
            if(userLang.search("en") !=-1){
                
                english();
            }
            if(userLang.search("ko") !=-1){
               
                korean();
                
            }
            if(userLang.search("fr") != -1){
               frensh();
            }
            function home(){
                document.location="http://"+window.location.hostname+"/exemple.html";
            }
            function val(){
                var e = document.getElementById("countryselector");
                var strUser = e.options[e.selectedIndex].value;
                
                if(strUser=="en"){
                    english();
                }
                if(strUser=="kr"){
                    document.getElementById("connectbutton").value=
                     document.getElementById("searchTxt").placeholder="검색";
                     document.getElementById("connectbutton").value="잇다";
                    localStorage.languages="kr";
                    document.getElementById("addtext").innerHTML="Trillion gaeseon-eun gwihaga e daehan jeonmunga <p>in jujee daehan eungdab-eul chugahaessseubnida.";
                   
                    document.getElementById("chatbotbutton").value="";
                    document.getElementById("new").innerHTML+="<p><strong><a href=http://192.168.1.32/exemple.html?searchTxt=meteo%20france] >nalssi</a></strong></p>";
                    document.getElementById("timetext").innerHTML=("특정 국가에서 시간?");
                    document.getElementById("apptext").innerHTML=("sincheong danchug")
                    document.getElementById("timetext").innerHTML=("teugjeong gugga-eseo sigan?");
                    document.getElementById("titleabout").innerHTML="Wae andwae?";
                    document.getElementById("new").innerHTML="<p><strong><a href=http://192.168.1.32/exemple.html?searchTxt=https://www.weather.go.kr/w/index.do] >유성</a></strong></p>";
                    document.getElementById("videobutton").value="비디오";
                    document.getElementById("forumbutton").value="포럼 시작";
                    document.getElementById("addtext").innerHTML="Trillion gaeseon-eun gwihaga e daehan jeonmunga<p> in jujee daehan eungdab-eul chugahaessseubnida.";
                    document.getElementById("timetext").innerHTML=("<div id=blackbox2> 시카고 시간"+(globalhours-7).toString()+":"+minutes+"</div>");
                    document.getElementById("timetext").innerHTML+=("<div id=blackbox2> 워싱턴 시간"+(globalhours-4).toString()+":"+minutes+"</div>");
                    document.getElementById("timetext").innerHTML+=("<div id=blackbox2> 프랑스 / 독일 / 스페인 시간"+(globalhours+1).toString()+":"+minutes+"</div>");
                    document.getElementById("timetext").innerHTML+=("<div id=blackbox2> 영국 / 런던 시간"+(globalhours).toString()+":"+minutes+"</div>");
                }
                
                if(strUser=="fr"){
                    frensh();
                }
            }
            var htmltext = document.body.innerHTML;
            
            document.addEventListener('click', function (event) {
                console.log(event.target.matches('.searchField'));
                if(event.target.matches('.searchField')==true){
                    var search = document.getElementById("searchTxt");
                    search.style.width = "30%";
                    //var cla = document.getElementById("rightbox");
                    //cla.style.width = "80%";
                    //console.log("put to 80%")
                    var acc = document.getElementById("account");
                    acc.style.width = "80%";
                    acc.style.height = "75px";
                    var pass = document.getElementById("pass2");
                    pass.style.width = "80%";
                    pass.style.height = "75px";
                    
                    
                    
                    
                }
                // If the clicked element doesn't have the right selector, bail
                if (!event.target.matches('account')) return;
            
                // Don't follow the link
                event.preventDefault();

                // Log the clicked element in the console
                console.log(event.target);

            }, false);
            function newoption(){
                var newbtt = document.getElementById("newbtt");
                var signup = document.getElementById("signup");
                document.getElementById("user_name").style.display="block";
                document.getElementById("forget").style.display="none";
                  document.getElementById("connect").style.display="none";
                newbtt.style.display = "block";
                info.style.display="block";
                phone.style.display="block";
                signup.style.display="none";
                option=document.getElementById("mailset");
                option.style.display="block";
                document.getElementById("what_about_you").style.display="block";
            document.getElementById("phone_number").style.display="block";
                
            }
            	
            function fnewbtt(){
                var newbtt = document.getElementById("newbtt");
                newbtt.style.display = "block";
                
            }
            function mailapp(){
                
                document.getElementById("searchTxt").width="40%";
            }
            function mailsearch(){
                var text = localStorage.allhtml;
                var mailbox=("");
                alert(document.getElementById("stextmail").value);
                text=text.split('<div id="mailbox">');
                beforhtml=text[0];
                
                for(el in text){
                    if(el != 0){
                        if(text[el].search(document.getElementById("stextmail").value) !=-1){
                            mailbox+='<div id="mailbox">'+text[el];
                            
                            
                        }
                        
                    }
                 } 
             
                     
                
            
                 
            console.log(mailbox); 
            document.body.innerHTML = beforhtml+mailbox;
            //document.getElementById("userchoise").options.selectedIndex=1;

                
            }
            function userval(){
                
                var e = document.getElementById("userchoise");
                
                var user = e.options[e.selectedIndex].value;
                var text = document.body.innerHTML;
                var mailbox=("");
                text=text.split('<div id="mailbox">');
                beforhtml=text[0];
                if(user != "all"){
                    for(el in text){
                        if(el != 0){
                            if(text[el].search(user) !=-1){
                                mailbox+='<div id="mailbox">'+text[el];
                                
                                
                            }
                            
                        }
                     } 
                 }else{
                     mailbox=localStorage.data;
                     
                     
                }
            choise=(document.getElementById("userchoise").options.selectedIndex);
            alloption=String(e).split("<option>");
            index=0;
            for(el in alloption){
                console.log(alloption[el]);
                if(alloption[el].search(choise) !=-1){
                    index=el;
                    
                }
                
            }
                 
                 console.log(mailbox); 
                 document.body.innerHTML = beforhtml+mailbox;
                 document.getElementById("userchoise").options.selectedIndex=1;

                 
                 
            }
            function group_text(group){
                socket = new WebSocket(protocol+"://"+ip+":5678");
                var message=document.getElementById("text_input").value;
                alert("message group");
                socket.onopen = function(event) {
                   
                    
                   
                    time=new Date().getMinutes();
                    
                    socket.send("/text/"+localStorage.user_account+"</>"+message+"</>"+group);
                     
                    
                    
                    //changement than can cause error original socket.close(1000, "hello");
                    
                }
                socket.onmessage = function(event) {
                    document.getElementById("datamail").innerHTML=(event.data);
                    
                }
                
                
            }
            function myaccount(fonctionality){
                localStorage.mailfonctionality=true;
             var pass = document.getElementById("pass2").value;
             alert(pass.length);
            if( String(document.cookie).search("id")==-1){
            if(pass.length>9 ){
				
				socket = new WebSocket(protocol+"://"+ip+":5678");
                
                
                socket.onopen = function(event) {
                    
                     text.style.display = "block";
                        
                        var name = document.getElementById("account").value;
                        localStorage.user_account=name;
                        var pass = document.getElementById("pass2").value;
                        account=name;
                        time=new Date().getMinutes();
                        sendstuff=false;
                        if(fonctionality==0){
                            var phone = document.getElementById("nb").value;
                            var info = document.getElementById("info").value;
                            var user_name = document.getElementById("user_name").value;
                            alert(user_name);
                            alert(phone);
                            if(pass.length>9){
                                sendstuff=true;
                                socket.send("new[con+"+name+"</+>"+pass+"st<info>"+user_name+"<name>"+phone+"<p>"+info+"<pref>darkmode="+document.getElementById("darkmode2").checked+"<time>"+time+"]t");
                                document.body.innerHTML =(htmltext);
                            }else{
                                document.getElementById("passvalue").innerHTML=("password need to be more than 8 characters");
                            }
                           
                        }
                        if(fonctionality==1){
                            socket.send("[con+"+name+"</+>"+pass+"st<time>"+time+"]t");
                            document.body.innerHTML =(htmltext);
                            sendstuff=true;
                           
                            document.cookie+="<user>"+name+"<user>";
                        } 
                        
                    
                    
                    //changement than can cause error original socket.close(1000, "hello");
                    
                }
                socket.onmessage = function(event) {
                   
                    data=event.data;
                    data=data.replaceAll("<apostrophe>","'")
					data=data.replaceAll('<start>', '<div id="mailbox">');
					data=data.replaceAll('<end>', '</div>');
					
					localStorage.mailfonctionality="true"
					data=data.split("<pref>");
					alert("this is data[1]"+data[1]);
					document.cookie+=data[1]+";domain=mail";
                    alert(document.cookie);
					data=data[0];
					data=data.toString();
					data2=event.data.split("from");
                    choisedata='<option value="all">all</option>';
                    for(el in data2){
                        if(el !=0){
                            console.log(String(data2[el]).split("<p>")[0]);
                            console.log('<option value="'+String(data2[el]).split("<p>")[0]+'">'+String(data2[el]).split("<p>")[0]+'</option>');
                            
                            choisedata+='<option value="'+String(data2[el]).split("<p>")[0]+'">'+String(data2[el]).split("<p>")[0]+'</option>';
                            
                        }

                    }
                    localStorage.data=data;
                    
					console.log(data);
                    data2=data.split("</group/>")[0];
                    alert(String(event.data).search("email wrong"));
                    if(String(event.data).search("email wrong")==-1){
                        document.body.innerHTML =(htmltext.split("<splitop></splitop>")[0]+data2+"<center><select id='groups'><option>group</option></select><font id=ft lang=th size=9;face=verdana; color=grey;> "+'<select id="userchoise" onchange="userval()">'+choisedata+"</select>"+"</font></center>"+'<input type="text" id="stextmail"><input type="button" onclick="mailsearch()" value="search"> <div id="datamail">'+data+"</div>");                
                    }else{
                        docuemnt.getElementById("alertemail").innerHTML="You need a valid emmail address";
                    }
                    localStorage.allhtml=document.documentElement.innerHTML;
                    
                    
                    
                   }
			   }
           }else{
            
            socket=new WebSocket(protocol+"://"+ip+":5678")
            socket.onopen=function(event){
                socket.send("<id>"+String(document.cookie).split("<id>")[1])
            }
            socket.onmessage = function(event) {
                alert(event.data);
                data=event.data;
                data=data.replaceAll("<apostrophe>","'")
                data=data.replaceAll('<start>', '<div id="mailbox">');
                data=data.replaceAll('<end>', '</div>');
                
                localStorage.mailfonctionality="true"
                data=data.split("<pref>");
                
                data=data[0];
                data=data.toString();
                data2=event.data.split("from");
                choisedata='<option value="all">all</option>';
                for(el in data2){
                    if(el !=0){
                        console.log(String(data2[el]).split("<p>")[0]);
                        console.log('<option value="'+String(data2[el]).split("<p>")[0]+'">'+String(data2[el]).split("<p>")[0]+'</option>');
                        
                        choisedata+='<option value="'+String(data2[el]).split("<p>")[0]+'">'+String(data2[el]).split("<p>")[0]+'</option>';
                        
                    }

                }
                localStorage.data=data;
                
                console.log(data);
                data2=data.split("</group/>")[0];
                alert(String(event.data).search("email wrong"));
                if(String(event.data).search("email wrong")==-1){
                    document.body.innerHTML =(htmltext.split("<splitop></splitop>")[0]+data2+"<center><select id='groups'><option>group</option></select><font id=ft lang=th size=9;face=verdana; color=grey;> "+'<select id="userchoise" onchange="userval()">'+choisedata+"</select>"+"</font></center>"+'<input type="text" id="stextmail"><input type="button" onclick="mailsearch()" value="search"> <div id="datamail">'+data+"</div>");                
                }else{
                    docuemnt.getElementById("alertemail").innerHTML="You need a valid emmail address";
                }
                localStorage.allhtml=document.documentElement.innerHTML;
                
                
                
            }
        }
           
            }
		   
                
            function mysend(){
            socket = new WebSocket(protocol+"://"+ip+":5678");
                var address = document.getElementById("username").value;
                socket.onopen = function(event) {
                    
                    time=new Date().getMinutes();
                    
                    var input = document.getElementById("mailtext").value;
                    socket.send("text[con+"+address+"st[+]from "+account+"<p></p>"+input+"<time>"+time+"]t");
                     
                    
                }
                socket.onmessage = function (event) {
                  
                   //document.body.innerHTML +=(event.data);
                  
                    
                    
                };
                 
          }
          
           function hadtext(){
               cookies=document.cookie
            
               if(cookies.split("<user>").length>1){
               var textvalue = '<font size="9px>"'+document.getElementById("questioninput").value+"</font><p></p>"+document.getElementById("textinput").value;
               
               var text = document.getElementById("text");
               text.style.display = "none";
               
                
                socket = new WebSocket(protocol+"://"+ip+":5678");
                    
                    var input = document.getElementById("searchTxt").value;
                    socket.onopen = function(event) {
                        var elem = document.getElementById("myBar");
                        var width=0;
                        while(width<=50){ 
                                width++;
                                console.log(width);
                                elem.style.width = width + "%";
                              
                              
                        }
                        
                        time=new Date().getMinutes();
                        
                        socket.send("adsomstuff"+textvalue+"<time>"+time);
                         
                        
                    }
                        
                     socket.onmessage = function (event) {
                            
                            
                            
                           
                            console.log(event.data);
                            document.getElementById("communitytext").innerHTML=event.data;
                              
                              
                        }
                 }else{
                     document.getElementById("communitytext").innerHTML='please connect<p> <input id="connectbutton2" type="button" onclick="openconnect()" value="connect"></p>';
                            
                     
                 } 
             }  
                              
                        
        function newpassword(){
              user=getUrlParameter('user');
              id=getUrlParameter('id');
              input=document.getElementById("inputchpass").value;
             
              socket = new WebSocket(protocol+"://"+ip+":5678");
                
               
                socket.onopen = function(event) {
                    socket.send(user+"</>"+user+"</+>"+input+"<newpassword")
                socket.onmessage=function(event){
                    alert(event.data);
                    
                }
              
        }
    }
          function changepassword(){
              user=document.getElementById("account").value;
              socket = new WebSocket(protocol+"://"+ip+":5678");
                
                var input = document.getElementById("searchTxt").value;
                socket.onopen = function(event) {
                    socket.send(user+"<changepassword")
                socket.onmessage=function(event){
                    alert(socket.recv());
                    
                }
              
        }
    }
          function video(){
        document.getElementById("buttonmenu").style.display="none";
           
           document.body.innerHTML =(htmltext);
           document.getElementById("program").style.display = "none";
           
           var text = document.getElementById("text");
           text.style.display = "none";
            var width=0;
            document.location = '?searchTxt=<video>]<time>'+new Date().getMinutes();
            
            //socket = new WebSocket("ws://"+ip+":5678");
                
            //    var input = document.getElementById("searchTxt").value;
               // socket.onopen = function(event) {
             //       var elem = document.getElementById("myBar");
                    
             //       while(width<=50){ 
             //               width++;
             //               console.log(width);
             //               elem.style.width = width + "%";
            //socket.send("[<video><time>"+time+"]");
                          
                          
           //         }
             //   }
                    
             //    socket.onmessage=function(event) {
              //          console.log(event.data);
//
              //          document.getElementById("sockettext").innerHTML +=(event.data);
              //          
               // }
            }
                    
                    
            
          
          
          function myimage(){
               var input = document.getElementById("menutext").value;
                
                
                document.location = '?searchTxt='+input+"]<images>%20<time>"+new Date().getMinutes();
                
            }
            function mysearch() {
                
                var input = document.getElementById("searchTxt").value;
                alert(localStorage.mailfonctionality);
                if(localStorage.mailfonctionality==false){
                    if(input.length>3){
                        document.location = '?searchTxt='+input+"]<time>"+new Date().getMinutes();
                    }
                }else{
                    mailsearch();
                    
                }
                    
          }
            
            
           
           
            cookies=document.cookie;
            cookies=cookies.split("<img>")[1];
           
            
            document.getElementById("back2").style.backgroundImage="url('"+cookies+"')";
            //document.getElementById("back2").style.background="transparent";
                
            
            var getUrlParameter = function getUrlParameter(sParam) {
                var sPageURL = window.location.search.substring(1),
                    sURLVariables = sPageURL.split('&'),
                    sParameterName,
                    i;

                for (i = 0; i < sURLVariables.length; i++) {
                    sParameterName = sURLVariables[i].split('=');

                    if (sParameterName[0] === sParam) {
                        return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                    }
                }
            };
           
           tech =getUrlParameter('searchTxt');
           
           img =getUrlParameter('img');
           
           if(typeof img !="undefined"){
               
               document.getElementById("back2").style.backgroundImage="url('"+img+"')";
                //document.getElementById("back2").style.background="transparent";
            }
           
           console.log(tech);
           var i=0;
           function newshome(){
                socket = new WebSocket(protocol+"://"+ip+":5678");
               
                socket.onopen = function(event) {

                    socket.send('<homenews>');
                    
                    }
                    socket.onmessage = function (event) {
                        #document.getElementById("back2").innerHTML+="<h2>start end</h2>;
                    }
               
               
               
            }
           if(typeof tech== "undefined"){
              
               document.getElementById("searchmenu").style.display="none";
               
                document.getElementById("newsblock").style.display="none";
                newshome();
             
              
                
                
           }
           function hadforum(el){
               socket = new WebSocket(protocol+"://"+ip+":5678");
               questiontext=String(localStorage.forum).split("<splitforum>")[el];
                var input = document.getElementById("searchTxt"+el).value;
                socket.onopen = function(event) {

                    socket.send('[change:'+questiontext+"to:"+questiontext+'<+><div id="mailbox">'+input+"</div>]change");
                    socket.close(1000,"hello");
                    var ws = new WebSocket("ws://"+ip+":5677/"),
                        messages = document.createElement('ul');
                    }
                    ws.onmessage = function (event) {
                        console.log(event.data);
                    }
               
               
          }
          function optionselect(){
              
              var e = document.getElementById("moreoption");
                var stroption = e.options[e.selectedIndex].value;
            
              if(stroption=="news"){
                  var input=document.getElementById("menutext").value;
                  document.location="/exemple.html?searchTxt=<news>"+input+"<time>"+new Date().getMinutes();
                  
            } if(stroption=="all wikipedia"){
                  var input=document.getElementById("menutext").value;
                  document.location="/exemple.html?searchTxt="+input+"<allwikipedia><time>"+new Date().getMinutes();
                  
            }
                
              
        }
          function signalement(el){
              socket = new WebSocket(protocol+"://"+ip+":5678");
              text=String(localStorage.forum).split("<forumsplit>")[el];
               socket.onopen = function(event) {
                    socket.send(text);
                }
              
              
        }
        if(String(window.location).search("<video>")!=-1){
           document.getElementById("searchTxt").value="<video>"+document.getElementById("searchTxt").value;
        }
           if(typeof tech !="undefined" && tech.length>1 ){
               search_link(tech);
            }
           function search_link(tech){
                tech=tech.replaceAll("+"," ");
               document.getElementById("buttonmenu").style.display="none";
               document.getElementById("searchtab").style.display="none";
               
               document.getElementById("allbox").style.display="none";
               document.getElementById("sockettext3").innerHTML+='<section id="one2"><button data-long="yes">🔗</button></section><template id="emojis"><button class="happy top" onclick="share(1)"><div id="happytext"></div></button><button class="laughing right" onclick="share(2)"><div id="video2"></div></button><button class="sad bottom">😭</button><button class="clapping left">👏</button>';
               if(tech.search("lan:") !=-1){
                   
                    document.getElementById("menutext").value=String(tech.split("lan:")[0]).replaceAll("<video>","");
                
                }else{
                    
                    document.getElementById("menutext").value=String(tech.split("]")[0]).replaceAll("<video>","");
                
                    
                }
                document.getElementById("program").style.display = "none";
                socket = new WebSocket(protocol+"://"+ip+":5678");
                function move(maxi, width) {
                  if (i == 0) {
                    i = 1;
                    var elem = document.getElementById("myBar");
                    var width = 1;
                    var id = setInterval(frame, 10);
                    function frame() {
                    
                      if (width >= maxi) {
                        clearInterval(id);
                        i = 0;
                      } else {
                        width++;
                        elem.style.width = width + "%";
                      }
                      
                    }
                  }
                }
                move(90,0);
                var input = document.getElementById("searchTxt").value;
                socket.onopen = function(event) {
                    localStorage.datasocket="";
                    move();
                    
                    var time="";
                    var n = tech.indexOf("<time>");
                    if(n==-1){
                        time=new Date().getMinutes();
                    }
                    if(tech.indexOf("lan:") !=-1){
                    
                        socket.send("["+String(tech.split("lan:")[0])+"<time>"+time+"]");
                    }else{
                         socket.send("["+String(tech.split("]")[0])+"<time>"+time+"]");
                        
                    }
                    
                    
                    //changement than can cause error original socket.close(1000, "hello");
                    
                }
                socket.onerror=function(event){
                    
                    document.getElementById("myBar").style.background="#FF0000";
                }
                
                socket.onmessage = function(event) {
                    
                    if(String(event.data).indexOf("<correction>")==-1){
                        move(100,90);
                        
                        //document.body.innerHTML +=(event.data);
                        try{
                            var data=String(event.data).replaceAll("\n","<p>");
                        }catch{
                            var data=String(event.data);
                            
                        }
                        bodypart=data.split("<moteur>")[0];
                        bodypart=bodypart.replaceAll("<center>","");
                        bodypart=bodypart.replaceAll("</center>center>","");
                       // bodypart=bodypart.replaceAll("allink2","");
                       // bodypart=bodypart.replaceAll("allink3","");
                       
                        forumpart=data.split("<moteur>")[1];
                         localStorage.forum=("");
                        forumpart2=("");
                        
                        if(typeof forumpart !="undefined"){
                            for (el in forumpart.split("<splitforum>")){
                                localStorage.forum+=forumpart.split("<splitforum")[el]+"<splitforum>";
                                forumpart2+=forumpart.split("<splitforum")[el]+'<p><input id="searchTxt'+el+'" type="textbox"><input type="button" onclick="hadforum('+el+')"></p>';
                                
                            }
                        }
                       //bodypart=bodypart.replaceAll("img","<img");
                        //bodypart=bodypart.replaceAll("<<","<"   );
                        console.log(bodypart);
                        document.getElementById("communitytext").innerHTML+=(forumpart2);
                        if(tech.search("image")==-1){
                            document.getElementById("sockettext").innerHTML+=(bodypart.split("<lnews>")[0]);
                            localStorage.datasocket+=(bodypart.split("<lnews>")[0]);
                             console.log(bodypart.split("<lnews>")[0]);
                            
                        }else{
                            document.getElementById("sockettext2").innerHTML+=(bodypart.split("<lnews>")[0]);
                            document.getElementById("sockettext3").style.display="none";
                           
                            
                            
                        }
                        
                        
                        var imgs = document.getElementsByTagName('img')
                            for(var i=0,j=imgs.length;i<j;i++){
                                imgs[i].onerror = function(e){
                                this.parentNode.removeChild(this);
                            }
                        }
                        
                        document.getElementById("newsblock").style.display="block";
                      
                        if(bodypart.toString().split("<lnews>").length==2){
                            document.getElementById("newsblock").style.display="none";
                 
                            
                            
                        }
                        
                        try{
                            news1=(bodypart.toString().split("<lnews>")[1]);
                            console.log(news1);
                            
                            document.getElementById("news1").innerHTML=("news:<p></p>"+news1);
                            news2=(bodypart.toString().split("<lnews>")[2]);
                            
                            document.getElementById("news2").innerHTML=("news:<p></p>"+news2);
                            news3=(bodypart.toString().split("<lnews>")[3]);
                            document.getElementById("news3").innerHTML=("news:<p></p>"+news3);
                            news3=(bodypart.toString().split("<lnews>")[4]);
                            document.getElementById("news4").innerHTML=("news:<p></p>"+news4);
                           
                       }catch{
                          console.log("erro");
                       }
                     }else{
                         document.getElementById("correcteur_div").innerHTML=event.data;
                     }
                   
                   }
                   socket.onclose=function(event){
                       document.getElementById("sockettext").innerHTML=localStorage.datasocket;
                }
            }
                    //We add a listener to the worker to get the response and show it in the page
                    
           
           var search = document.getElementById("searchTxt");
           search.style.marginTop = "2cm";
           
           search.style.marginLeft = "5%";
           var d = new Date();
        }catch(error){
            alert(error);
        
    }
    
    function convert(text){
		nb=parseInt(document.getElementById("crypt_number").value);
		
		text=text.toUpperCase();
		text=text.replaceAll("A", "$"+String(nb*1)+"&");
		text=text.replaceAll("B", "$"+String(nb*2)+"&");
		text=text.replaceAll("C", "$"+String(nb*3)+"&");
		text=text.replaceAll("D", "$"+String(nb*4)+"&");
		text=text.replaceAll("E", "$"+String(nb*5)+"&");
		text=text.replaceAll("F", "$"+String(nb*6)+"&");
		text=text.replaceAll("G", "$"+String(nb*7)+"&");
		text=text.replaceAll("H", "$"+String(nb*8)+"&");
		text=text.replaceAll("I", "$"+String(nb*9)+"&");
		text=text.replaceAll("G", "$"+String(nb*10)+"&");
		text=text.replaceAll("K", "$"+String(nb*11)+"&");
		text=text.replaceAll("L", "$"+String(nb*12)+"&");
		text=text.replaceAll("M", "$"+String(nb*13)+"&");
		text=text.replaceAll("N", "$"+String(nb*14)+"&");
		text=text.replaceAll("O", "$"+String(nb*15)+"&");
		text=text.replaceAll("P", "$"+String(nb*16)+"&");
		text=text.replaceAll("Q", "$"+String(nb*17)+"&");
		text=text.replaceAll("R", "$"+String(nb*18)+"&");
		text=text.replaceAll("S", "$"+String(nb*19)+"&");
		text=text.replaceAll("T", "$"+String(nb*20)+"&");
		text=text.replaceAll("U", "$"+String(nb*21)+"&");
		text=text.replaceAll("V", "$"+String(nb*22)+"&");
		text=text.replaceAll("W", "$"+String(nb*23)+"&");
		text=text.replaceAll("X", "$"+String(nb*24)+"&");
		text=text.replaceAll("Y", "$"+String(nb*25)+"&");
		text=text.replaceAll("Z", "$"+String(nb*26)+"&");
		return text
	}
	function deconvert(text){
		nb=parseInt(document.getElementById("crypt_number").value);
		
		text=text.replaceAll("$"+String(nb*1)+"&", "A");
		text=text.replaceAll("$"+String(nb*2)+"&", "B");
		text=text.replaceAll("$"+String(nb*3)+"&", "C");
		text=text.replaceAll("$"+String(nb*4)+"&", "D");
		text=text.replaceAll("$"+String(nb*5)+"&", "E");
		text=text.replaceAll("$"+String(nb*6)+"&", "F");
		text=text.replaceAll("$"+String(nb*7)+"&", "G");
		text=text.replaceAll("$"+String(nb*8)+"&", "H");
		text=text.replaceAll("$"+String(nb*9)+"&", "I");
		text=text.replaceAll("$"+String(nb*10)+"&", "J");
		text=text.replaceAll("$"+String(nb*11)+"&", "K");
		text=text.replaceAll("$"+String(nb*12)+"&", "L");
		text=text.replaceAll("$"+String(nb*13)+"&", "M");
		text=text.replaceAll("$"+String(nb*14)+"&", "N");
		text=text.replaceAll("$"+String(nb*15)+"&", "O");
		text=text.replaceAll("$"+String(nb*16)+"&", "P");
		text=text.replaceAll("$"+String(nb*17)+"&", "Q");
		text=text.replaceAll("$"+String(nb*18)+"&", "R");
		text=text.replaceAll("$"+String(nb*19)+"&", "S");
		text=text.replaceAll("$"+String(nb*20)+"&", "T");
		text=text.replaceAll("$"+String(nb*21)+"&", "U");
		text=text.replaceAll("$"+String(nb*22)+"&", "V");
		text=text.replaceAll("$"+String(nb*23)+"&", "W");
		text=text.replaceAll("$"+String(nb*24)+"&", "X");
		text=text.replaceAll("$"+String(nb*25)+"&", "Y");
		text=text.replaceAll("$"+String(nb*26)+"&", "Z");
		alert(text);
	}
           
        

 
    document.addEventListener('keyup', (e) => {
           
            
            if(e.key=="Enter"){
                
                var getUrlParameter = function getUrlParameter(sParam) {
                    var sPageURL = window.location.search.substring(1),
                        sURLVariables = sPageURL.split('&'),
                        sParameterName,
                        i;

                    for (i = 0; i < sURLVariables.length; i++) {
                        sParameterName = sURLVariables[i].split('=');

                        if (sParameterName[0] === sParam) {
                            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
                        }
                    }
                };
                
               tech =getUrlParameter('searchTxt');
               if(typeof tech=="undefined"){
                 var input = document.getElementById("searchTxt").value;
                }else{
                    
                if(String(window.location).search("%3Cvideo%3E")!=-1){
                        
                       document.getElementById("menutext").value="<video>"+document.getElementById("menutext").value;
                       
                    }
                    
                    var input = document.getElementById("menutext").value;
                }
                
               
                if(localStorage.mailfonctionality=="false"){
                    if(input.length>3){
                        lang=navigator.language;
                        if(lang.search("en") !=-1){
                            lang=".com";
                            
                        }
                        if(lang.search("fr") !=-1){
                            lang=".fr";
                            
                        }
                        if(lang.search("kr") !=-1){
                            lang=".kr";
                            
                        }
                         if(lang.search("jp") !=-1){
                            lang=".jp";
                            
                        }
                        var selectElem = document.getElementById('privacy');
                        var pElem = document.getElementById('p');  
                        var private_mode = selectElem.selectedIndex; 
                        alert(private_mode);
                        if(private_mode==0){
                            document.location = '?searchTxt='+input+"lan:"+lang+"]<time>"+new Date().getMinutes();
                        }else{
                            search_link(input+"lan:"+lang+"]<time>"+new Date().getMinutes());
                            
                        }
                    }
                }else{
                   
                    mailsearch();
                    
                    
                }
                    
            }
            
        });
