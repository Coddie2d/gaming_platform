export let menuIcon = document.querySelector('.burger_Menu');
export let navBody = document.querySelector('.header__nav_right_side');
export let navButtons = document.querySelectorAll('.nav_link');
export function burgerClick(){
     if(innerWidth > 991){
        menuIcon.remove();
     }
    if(menuIcon){
        
        menuIcon.addEventListener('click',function(e){
            document.body.classList.toggle('lock');
            menuIcon.classList.toggle('active');
            navBody.classList.toggle('active');
        
    
            
        })  
    }
        navButtons.forEach(item =>{
            item.addEventListener('click',function(e){
                console.log(e.target.classList)
                if(e.target.classList.contains('nav_link') ){
                    document.body.classList.remove('lock');
                    menuIcon.classList.remove('active');
                    navBody.classList.remove('active');
                    
                }
            })
        })
}
