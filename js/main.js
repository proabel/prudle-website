(function(){
    var stickyHeader = document.querySelector('.navbar.app-sticky-top');
    var bottomHeaderSticky = document.querySelector('#navBarMobileSticky');
    var bottomHeader = document.querySelector('#navBarMobile');
    var HBSWrapper = document.querySelector('.header-bottom-sticky-wrapper');
    //var toggleHeaderBottomSticky = false;
    if(window.innerWidth >= 992)
        toggleHeaderBottomSticky = true;
    document.onscroll = function(e){
        if(window.scrollY >= 180){
            stickyHeader.style.display = 'flex';
            if(toggleHeaderBottomSticky)
                HBSWrapper.style.display = 'flex';
            bottomHeader.classList.remove('show');
        }else{
            bottomHeaderSticky.classList.remove('show');
            stickyHeader.style.display = 'none';
            if(toggleHeaderBottomSticky)
                HBSWrapper.style.display = 'none';
        }
    }
})();