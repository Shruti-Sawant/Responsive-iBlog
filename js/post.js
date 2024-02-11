const state = {
    taskList: [], //to store the tasks, here objesct state is created so that we could also store other things here in future
}

//DOM manupulation
const taskContent = document.querySelector(".task_content");//to store/accesing the content
const taskModal = document.querySelector(".task_modal_body");//to open pop ups for editing nd deleting

//below we are creating inner html that will add the task to our page body
//inner html ends up in html file nd hence all the attached file in main html body works in inner html as well
const htmlTaskContent = ({ id, title, description, type, url }) => ` 
<div class="home-articles max-width-1 m-auto font1 my-2">
<div class="home-article">
            <div class="home-article-img-container">
            ${url ?
        `<img width='100%' src=${url} alt='card image cap' class='img-fluid place_holder_image mb-3' style="height: 40vh"/>`
        : `
                <img width='100%' src="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png" alt='' class='img-fluid place_holder_image mb-3' style="height: 40vh"/>
                `
    }
                
            </div>
            <div class="home-article-content-container font1">
                <div class="home-article-content">
                    <a href=""><B>${type}</B><BR/>${description}</a>
                    <div>By <b>${title}</b> | </div>
                    <div>SEPTEMBER ${id} 6 MIN READ</div>
                </div>
            </div>
        </div>
  </div>
   </div>
   
`;

const htmlModalContent = ({ id, title, description, url }) => {
    const date = new Date(parseInt(id));
    return `
    <div id=${id}>
    ${url ?
            `<img width='100%' src=${url} alt='card image cap' class='img-fluid place_holder_image mb-3'/>`
            : `
        <img width='100%' src="https://reactnativecode.com/wp-content/uploads/2018/02/Default_Image_Thumbnail.png" alt='' class='img-fluid place_holder_image mb-3' style="height: 70vh"/>
        `

        }
    <strong class='text-sm text-muted'>Created on ${date.toDateString()}</strong>
    <h2 class='my-3'>${title}</h2>
    <p class='lead'>
    ${description}
    </p>
    </div>
    `;
};

const updateLocalStorage = () => {
    console.log(state.taskList);
    localStorage.setItem("tasks", JSON.stringify({
        tasks: state.taskList,
    })

    );
};

const loadInitialData = () => {
    const localStorageCopy = JSON.parse(localStorage.tasks);

    if (localStorageCopy) state.taskList = localStorageCopy.tasks;

    state.taskList.map((cardDate) => {
        taskContent.insertAdjacentHTML("beforeend", htmlTaskContent(cardDate));

    });
};

const handleSubmit = (event) => {
    const id = `${Date.now()}`;
    const input = {
        url: document.getElementById("imageurl").value,
        title: document.getElementById("taskTitle").value,
        description: document.getElementById("taskDesription").value,
        type: document.getElementById("tags").value,
    };


    if (input.title === '' || input.description === '' || input.type === '') {
        let alertre = alert("Fill all the fields")
        return alertre;

    };

    taskContent.insertAdjacentHTML(
        "beforeend",
        htmlTaskContent({
            ...input,
            id,
        })
    );

    state.taskList.push({ ...input, id });
    updateLocalStorage();


};













