let panes = document.querySelectorAll('.pane');
    let button = document.querySelector('.remove-button');
    console.log(button);
        // <button class="remove-button">[x]</button>
        // button.remove-button

    let button2 = document.querySelector('.remove-button').outerHTML;
    console.log(button2);
        // <button class="remove-button">[x]</button>

    for(let pane of panes){
      pane.insertAdjacentHTML("afterbegin",  button);
    }
    // [object HMTLButtonElement]