import faqItems from './faq-items';

const faqList = document.querySelector("#faq-list");

const toggleFaqItem = title => {
    const content = document.getElementById(title);
    const isClosed = content.classList.contains('collapsed');
    document.querySelectorAll('.faq-item').forEach(item => item.classList.add('collapsed'));
    if (isClosed) {
        content.classList.remove('collapsed');
    }
}

faqItems.forEach(faq => {
    const element = document.createElement("div");
    const template = `
        <div class="faq-title">
            ${faq.title}
            <img class="collapse-icon" src="../../public/assets/images/grey-triangle.png">
        </div>
        <div id="${faq.title}" class="faq-content">${faq.content}</div> 
    `;
    element.innerHTML = template;
    element.className = 'faq-item collapsed';
    element.id = faq.title;
    element.addEventListener('click', () => toggleFaqItem(faq.title));
    faqList.appendChild(element);
});

document.querySelector('.button-information').addEventListener('click', () => {
    document.querySelector('.modal').classList.add('display');
});

document.querySelector('.close-button').addEventListener('click', () => {
    document.querySelector('.modal').classList.remove('display');
});

