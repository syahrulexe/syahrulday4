let dataProject = [];

function addProject(event){
    event.preventDefault();

    let projectName = document.getElementById("input-project-name").value;
    let startDate = document.getElementById("input-start").value;
    let endDate = document.getElementById("input-end").value;
    let description = document.getElementById("input-description").value;
    const logoHtml = `<i class="fa-brands fa-html5"></i>`;
    const logoCss = `<i class="fa-brands fa-css3-alt"></i>`;
    const logoJs = `<i class="fa-brands fa-js"></i>`;
    const logoJava = `<i id="java-logo" class="fa-brands fa-java"></i>`;
    let checkboxHtml = document.getElementById("input-check-html").checked ? logoHtml : "";
    let checkboxCss = document.getElementById("input-check-css").checked ? logoCss : "";
    let checkboxJavascript = document.getElementById("input-check-javascript").checked ? logoJs : "";
    let checkboxJava = document.getElementById("input-check-java").checked ? logoJava : "";
    let image = document.getElementById("input-project-image").files;

    if (projectName == "") {
        return alert("nama projectnya isi dulu");
      } else if (startDate == "") {
        return alert("start date belom disi");
      } else if (endDate == "") {
        return alert("end date belom disi");
      } else if (description == "") {
        return alert("isi description");
      } else if (image == "") {
        return alert("masukin file gambar");
      } 
    
      

    image = URL.createObjectURL(image[0]);
    console.log(image);

    let start = new Date(document.getElementById("input-start").value);
    let end = new Date(document.getElementById("input-end").value);
  
    let totalMonths = (end.getFullYear() - start.getFullYear()) * 12;
    totalMonths += end.getMonth() - start.getMonth();
  
    let durationMessage = `Durasi: ${totalMonths} bulan`;
    
    // let checkboxSelected = "";
    //   if (checkboxHtml == true) {
    //     return checkboxSelected += document.getElementById("html-logo");
    //   } else if (checkboxCss == true ) {
    //     return checkboxSelected += document.getElementById("css-logo");
    //   } else if (checkboxJava == true){
    //     return checkboxSelected += document.getElementById("java-logo");
    //   } else if (checkboxJavascript == true){
    //     return checkboxSelected += document.getElementById("js-logo");
    //   }
    
    let project = {
        projectName,
        startDate,
        endDate,
        description,
        checkboxHtml,
        checkboxCss,
        checkboxJavascript,
        checkboxJava,
        image,
        totalMonths,
    };

    
    dataProject.push(project);
    console.log(dataProject);

    renderProject();
}



function renderProject() {
    document.getElementById("contents").innerHTML = "";

    for (let i = 0; i < dataProject.length; i++) {
        document.getElementById("contents").innerHTML += `
        <div class="card">
        <img src="${dataProject[i].image} " alt="inputan test">
        <h4 class="title"><a href="detailproject.html">${dataProject[i].projectName} </a></h4>
        <p class="time">Durasi : ${dataProject[i].totalMonths} bulan</p>
        <p class="about">${dataProject[i].description} </p>
        ${dataProject[i].checkboxHtml}
        ${dataProject[i].checkboxCss}
        ${dataProject[i].checkboxJavascript}
        ${dataProject[i].checkboxJava}
        <div class="button-edit">
            <button>edit</button>
            <button>delete</button>
        </div> 
        `;
        
    }
}