let data = JSON.parse(localStorage.getItem("toLocalStorageData"));
console.log(data.length);
let mainPanel = document.querySelector('.mainPanel');

function panelBuilder (el) {
    let tableString = document.createElement('tr');
    
    let close = document.createElement('td');
    mainPanel.appendChild(tableString);
    let stringLength = el.length;
    for(let i = 0; i<stringLength; i++){
        let ReportInf = document.createElement('td');
        ReportInf.classList.add('reportElement');
        ReportInf.innerHTML = `${el[i]}`;
        tableString.appendChild(ReportInf);
        if (i === 3){
            ReportInf.style.width = `35%`;
        }
        
    }
    tableString.appendChild(close);
    close.classList.add('close');
    close.innerHTML = "X"
    close.id = `c${j}`
    close.addEventListener('click', (el)=>{
        el.target.parentNode.remove();
        let idNum = el.target.id.toString()[1];
        idNum = +(idNum);
        data.splice(idNum,1);
        localStorage.setItem("toLocalStorageData", JSON.stringify(data));
    })
    
}

for (j=0; j<data.length; j++) {
    panelBuilder(data[j],j);
}