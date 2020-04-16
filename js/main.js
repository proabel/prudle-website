(function(){
    var stickyHeader = document.querySelector('.navbar.app-sticky-top');
    var bottomHeaderSticky = document.querySelector('#navBarMobileSticky');
    var bottomHeader = document.querySelector('#navBarMobile');
    document.onscroll = function(e){
        if(window.scrollY >= 120){
            stickyHeader.style.display = 'flex';
            bottomHeader.classList.remove('show');
        }else{
            bottomHeaderSticky.classList.remove('show');
            stickyHeader.style.display = 'none';
        }
    }
})();