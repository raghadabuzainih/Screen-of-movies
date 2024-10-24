const listFilms = document.querySelector('.all-films')
const search = document.querySelector('input')

const res = fetch('divFilm.html')
.then(responce => responce.text())
.then(data => {
    listFilms.innerHTML = data
    const li = document.querySelectorAll('li')
    const a = document.querySelectorAll('nav a')
    const images = document.querySelectorAll('img')
    const div = document.querySelectorAll('li div')

    search.addEventListener('input', (e)=>{
        li.forEach(film=>{
            if(film.id.toLowerCase().search(e.target.value) != -1) film.style.display = 'block'
            else film.style.display = 'none'
        })
    })

    a.forEach(section=>{
        section.addEventListener('click', (e)=>{
            e.preventDefault()
            li.forEach(film=>{
                if(section.textContent == 'Screen Of Movies'){
                    film.style.display = 'block'
                }else{
                    if(film.className == section.textContent) film.style.display = 'block'
                    else film.style.display = 'none'
                }
            })
        })
    })

    images.forEach(image=>{
        image.addEventListener('mouseenter', ()=>{
            image.style.cursor = 'pointer'
            div.forEach(divv=>{
                if(divv.className == image.alt) divv.style.display = 'block'
            })
        })
        image.addEventListener('mouseout', ()=>{
            div.forEach(divv=>{
                divv.style.display = 'none'
            })
        })
    })

}
)
.catch(err => console.log(err))