'use strict';


document.addEventListener('DOMContentLoaded', () => {

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const banner = document.querySelectorAll('.promo__adv img'),
          promoBg = document.querySelector('.promo__bg'),
          promoGenre = promoBg.querySelector('.promo__genre'),
          interectiveList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем в любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, interectiveList);
        }

        event.target.reset();

    });
    
    const deleteAdv = (arr) => {
        arr.forEach (item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        promoGenre.textContent = 'драма';
    
        promoBg.style.backgroundImage = 'url("../img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };
    
    function createMovieList(films, parent) {
        parent.innerHTML = '';
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, films);
            });
        });
    }


    deleteAdv(banner);
    makeChanges();
    createMovieList(movieDB.movies, interectiveList);
    
});






