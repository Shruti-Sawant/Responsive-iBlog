

// const searchbtn = document.querySelector('.search-btn');
// let closebtn = document.querySelector('.close-btn');
// let searchBox = document.querySelector('.search-Box');
// let navigation = document.querySelector('.navigation');
// let listnav = document.querySelector('.list-nav');
// let menuToggle = document.querySelector('.togglebar');



(
    function () {
        const searchbtn = document.querySelector('.search-btn');
        let closebtn = document.querySelector('.close-btn');
        let searchBox = document.querySelector('.search-Box');
        let navigation = document.querySelector('.navigation');
        let listnav = document.querySelector('.list-nav');
        let menuToggle = document.querySelector('.togglebar');

        searchbtn.addEventListener('click', () => {
            searchBox.classList.add('active');
            closebtn.classList.add('active');
            searchbtn.classList.add('active');
            menuToggle.classList.add('hide')
        })

        menuToggle.addEventListener('click',function(){
            navigation.classList.toggle('open');
            closebtn.classList.remove('active');
            searchbtn.classList.remove('active');
            menuToggle.classList.remove('hide')
        })

        
    }
)()










//  ( searchbtn.onclick = () => {
//      searchBox.classList.remove('active');
//       closebtn.classList.remove('active');
//     searchbtn.classList.remove('active');
//   }
//  )()




