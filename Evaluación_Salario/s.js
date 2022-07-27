let nombre
let salario
let categoria
let up

let formulario = document.getElementById('form')

formulario.addEventListener('submit', (e)=>{
    e.preventDefault(); 
    LeerDatos();
})

function LeerDatos(){
    nombre = document.getElementById('nombre').value
    categoria = Number(document.getElementById('categoria').value)
    up = Number(document.getElementById('unidades').value)
    ope(categoria, up)
}

function ope(categoria, up){
    if(up <= 50){
        salario = 1500000
    }
    else if(categoria == 1 && up > 50){
        salario = 2000000 + (1500000 * 0.05)
    }
    else if(categoria == 2 && up > 50){
        salario = 2100000 + (1500000 * 0.07)
    }
    else if(categoria == 3 && up > 50){
        salario = 2200000 + (1500000 * 0.1)
    }
    else if(categoria == 4 && up > 50){
        salario = 2400000 + (1500000 * 0.15)
    }
    else if(categoria > 4 || categoria < 0){
        alert('Número de categoría no valido')
    }
    document.getElementById('ss').value = salario;
}
