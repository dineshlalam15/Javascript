function one(){
    const username = "syrax"
    let othername = "vhagar"
    function two(){
        const webname = "Rhaneyra"
        console.log(username);
        //username = "Vermithor": gives error because const can't be changed. 
        console.log(othername); 
        othername = "moon dancer"
    }
    //console.log(webname); : gives error because scope of webname ends inside two() only. 
    two()
    console.log(username); // returns syrax only as "Vermithor" can't be assigned as 'username' is const type. 
    console.log(othername);
}
one()

if(true){
    const username = "Corlys Valeryon"
    if(username === "Corlys Valeryon"){
        const othername = "Rhaenys Targaryen"
        console.log(username + " & " + othername);
    }
}
// console.log(username);: username scope ended inside if loop only. 