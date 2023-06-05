const btn= document.querySelectorAll('.btn')
const value= document.querySelector('.value')
let count = 0


btn.forEach(button => {
    button.addEventListener('click', function(e){
        
        
        const styles = e.currentTarget.classList
        console.log(styles)
            if(styles.contains('increase')){
                count++
            }
            else if(styles.contains('decrease')){
                count--
            }
            else{
                count =0
            }
            value.textContent = count
    })
    
    
});