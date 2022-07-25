const submit=document.querySelector("input[type=submit]")
submit.addEventListener("click",(e)=>{
    const contra1=document.querySelector("input[name=Contra]");
    const contra2=document.querySelector("input[name=Contra2]");
    console.log(contra1.value,contra2.value);
    if(contra1.value!=contra2.value && document.querySelector(".erroneo")==null){
        let p=document.createElement("p");
        p.classList.add("erroneo");
        p.textContent="Contraseñas diferentes";
        p.style.color="red";
        p.style.marginTop="5px";
        console.log(contra1.value,contra2.value);
        let padre=contra2.parentElement;
        padre.appendChild(p);
        contra2.setCustomValidity("Las contraseñas no coinciden");
        return 1;
    }
    if(contra1.value==contra2.value && document.querySelector(".erroneo")!=null){
        let p=document.querySelector(".erroneo");
        p.remove();
        contra2.setCustomValidity("");
        return 1;
    }
    return 1;
})