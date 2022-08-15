let myProject = []
function addProject(){
    let title = document.getElementById("input-name").value 
    let startCalendar = document.getElementById("input-start-date").value 
    let endCalendar = document.getElementById("input-end-date").value 
    let message = document.getElementById("input-message").value 
    let image = document.getElementById("input-image").files
    let react = document.getElementById("react").checked
    let javaScript = document.getElementById("javaScript").checked
    let node = document.getElementById("node").checked
    let docker = document.getElementById("docker").checked

    monthIndex = ["Januari", "Febuari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "Nopember", "Desember"]
    
    startCalendar = new Date(startCalendar)
    let date = startCalendar.getDate()
    let month = startCalendar.getMonth()
    month = monthIndex[month]
    let year = startCalendar.getFullYear()

    endCalendar = new Date(endCalendar)
    let endDate = endCalendar.getDate()
    let endMonth = endCalendar.getMonth()
    endMonth = monthIndex[endMonth]
    let endYear = endCalendar.getFullYear()

    let duration = endCalendar - startCalendar
     let milisecond = 1000 
     let secondInHours = 3600 
     let hoursInDay = 24 
     let dayInMonth = 30 

    duration = Math.floor(duration / (milisecond * secondInHours * hoursInDay))
    dayInMonth = Math.floor(duration/( dayInMonth))

    console.log(duration);
    console.log(dayInMonth);

    if (react){
      react = document.getElementById("react").value
    } else {}

    if (javaScript){
      javaScript = document.getElementById("javaScript").value
    } else{}
    
    if (node){
      node = document.getElementById("node").value
    } else{}

    if (docker){
      docker = document.getElementById("docker").value
    } else{}
    
    image = URL.createObjectURL(image[0])

    let project = {
      title, 
      startCalendar,
      date,
      month,
      year, 
      endCalendar,
      endDate,
      endMonth,
      endYear, 
      endCalendar,
      duration,
      dayInMonth,
      message,
      image, 
      react, 
      javaScript, 
      node, 
      docker,
    }
    
    myProject.push(project)
    
    
    postNewBlog()  
}


function postNewBlog(){
    document.getElementById("new-post").innerHTML = ''

    console.log(myProject);

    for (let index = 0; index < myProject.length; index++)  {
        document.getElementById("new-post").innerHTML +=
        ` 
        <div class="card" id="new-post">
          <div class="gallery">
            <img src="${myProject[index].image}" width="100%">
            <div class="desc">
              <h3>${myProject[index].title}</h3>
              <span><p>Duration</p>
                <p>${myProject[index].date} ${myProject[index].month} ${myProject[index].year} - ${myProject[index].endDate} ${myProject[index].endMonth} ${myProject[index].endYear}  (${myProject[index].duration} day)</p>
                <p></p>
              </span><br>
              <p>${myProject[index].message}</p>
        
              <h3>Technologies</h3>
              <div class="icon">
                <span><i class="fa-brands ${myProject[index].react}"></i></span>
                <span><i class="fa-brands ${myProject[index].javaScript}"></i></span>
                <span><i class="fa-brands ${myProject[index].node}"></i></span>
                <span><i class="fa-brands ${myProject[index].docker}"></i></span>
              </div>
              <div class="btn-group">
                <button>Edit</button>
                <button>Delete</button>
              </div>
            </div>
          </div>
        `
    }
}
