 // ; nuk o e domosdoshme
 const muaji = 5; // integer
 cmimiMeTvsh1 = 1.2; // float
 cmimiMeTvsh2 = 5.8; // float
 console.log(cmimiMeTvsh1)

 c_d_e = true;// boolean

 d1 = "JavaScript"; //String
 cmimiMeTvsh1 = 78.45;


 data = new Date(); // object
 e = data.getMinutes();//float
//global scope
 {
     //another scope
     //me let merret vetem ne scopin e vet
     e = 789;
     alert("Vlera e ndryshuar; " + e)
    let muaji = 8; // integer
    alert(muaji);
    let x = 123;
    {
        alert(x)
        alert(e)
        //another scope
        let muaji =12;
        alert(muaji)

        
    }
    alert(muaji);
    //me var 8 12 12;
 }
alert("Vlera aktuale " + e)
 alert(muaji)
 console.log(cmimiMeTvsh1)

