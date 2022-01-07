const input$$ = document.querySelector ('input');
const add_btn$$= document.querySelector ('.add_btn');
const ul$$ = document.querySelector ('ul');
const empty$$ = document.querySelector('.empty');

add_btn$$.addEventListener('click', (e)=>{
    e.preventDefault();
    

    const text = input$$.value;

        if(text !== ""){

            const li$$ = document.createElement('li');
            const p$$ = document.createElement('p');
            p$$.textContent = text;
        
            li$$.appendChild(p$$);
            li$$.appendChild(addDeleteBtn());
            ul$$.appendChild(li$$);
            
        
            input$$.value="";
            empty$$.style.display ="none";

        }


})

function addDeleteBtn (){
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent= 'X'
    deleteBtn.className = "delete_Btn";

    deleteBtn.addEventListener('click', (e) => {
        const item= e.target.parentElement;
        ul$$.removeChild(item);

        const itemsExist=document.querySelectorAll('li');

        if (itemsExist.length === 0){
            empty$$.style.display='block';
        }
    });

    return deleteBtn;
}