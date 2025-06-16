console.log("script js added");

document.getElementById('add').addEventListener('click', function () {
    const main = document.createElement('main');
    main.classList.add('shadow-lg', 'bg-white', 'flex', 'items-center', 'p-4',  'justify-between',  'border-b', 'border-gray-700')
    const inputText = document.getElementById('inputText').value;
    const inputText0 = document.getElementById('inputText');
    inputText0.value = '';
    // console.log(inputText);
    const p = document.createElement('p');
    p.innerText = inputText;
    main.appendChild(p) 

    
    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-trash')
    icon.classList.add('p-2.5', 'text-xl', 'bg-purple-500', 'text-gray-100', 'rounded-sm')
    main.appendChild(icon)
    icon.addEventListener('click', function () {
        
        const parentElement = icon.parentElement;
        parentElement.remove();
    })
    const article = document.getElementById('article');
    const delet = document.getElementById('delet-all');
    article.insertBefore(main ,delet)
    console.log(article);
    const main0 = article.querySelectorAll('main');
    console.log(main0);
        document.getElementById('delet-all').addEventListener('click', function () {
            console.log("delet all clicked");
            for (const main of main0) {
                // console.log(main.innerText);
                main.remove();
            }
        })
})
