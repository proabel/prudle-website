(function(){
    var stickyHeader = document.querySelector('.navbar.app-sticky-top');
    document.onscroll = function(e){
        if(window.scrollY >= 120){
            stickyHeader.style.display = 'flex';
        }else{
            stickyHeader.style.display = 'none';
        }
    }
})();