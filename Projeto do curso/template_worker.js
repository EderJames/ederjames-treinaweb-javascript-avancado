self.onmessage = function({data}){
    const template = render(data);
    postMessage(template);
}

function render({listItems, languageTag}){
    let html = '';

    const numberFormatter = Intl.NumberFormat(languageTag);
    const dataFormatter = Intl.DateTimeFormat(languageTag, {
        week: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });

    listItems.forEach(item => {
        
        html += `
        <li>
            <div>
                <b>Name: </b> ${item.full_name}
            </div>
            <div>
                <b>Created At: </b> ${dataFormatter.format(new Date(item.created_at))}
            </div>
            <div>
                <b>Forks: </b> ${numberFormatter.format(item.forks)}
            </div>
        </li>
        `;
    });

    return html;
}

