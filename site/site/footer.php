        <footer class="footer">
           <div class="container">
               <div class="wrap_footer">
                    <div class="logo"> 
                        <a href="">
                            <img src="/img/logo.svg" alt="">
                        </a>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="">Кино</a></li>
                            <li><a href="">Театры</a></li>
                            <li><a href="">Музеи</a></li>
                            <li><a href="">Музыка</a></li>
                        </ul>
                        <ul>
                            <li><a href="">Клубы</a></li>
                            <li><a href="">Юмор</a></li>
                            <li><a href="">Детские</a></li>
                            <li><a href="">Парки</a></li>
                        </ul>
                        <ul>
                            <li><a href="">Спорт</a></li>
                            <li><a href="">Кафе и рестораны</a></li>
                            <li><a href="">Активный отдых</a></li>
                            <li><a href="">Ещё</a></li>
                        </ul>                   
                    </nav>
               </div>
               <p>© ООО "Eventor", 2021. Все права защищены.</p>
           </div>
       </footer>

       
    </div> 


    <script src="/js/main.js"></script>

            
    <script>
        var swiper = new Swiper('.swiper', {
            slidesPerView: 3,
            direction: getDirection(),
            navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
            },
            on: {
            resize: function () {
                swiper.changeDirection(getDirection());
            },
        },
    });

    function getDirection() {
        var windowWidth = window.innerWidth;
        var direction = window.innerWidth <= 760 ? 'vertical' : 'horizontal';

        return direction;
    }</script>
    <script src="https://kit.fontawesome.com/55e4b0dc0d.js" crossorigin="anonymous"></script>
</body>

</html>
