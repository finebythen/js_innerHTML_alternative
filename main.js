"use strict"

document.addEventListener("DOMContentLoaded", e => {
    // variables
    const btn_with = document.getElementById('btn-add-with-innerhtml');
    const btn_without = document.getElementById('btn-add-without-innerhtml');
    const tblbody_with = document.getElementById('tblbody-innerHTML');
    const tblbody_without = document.getElementById('tblbody-no-innerHTML');

    btn_with.addEventListener('click', e => {
        // prevent default behaviour
        e.preventDefault();
        // reset data
        tblbody_with.innerHTML = '';
        // insert data
        for (let i=0; i < 20; i++) {
            let item = `
                <tr>
                    <td>${i}</td>
                    <td>Vorname ${i}</td>
                    <td>Nachname ${i}</td>
                </tr>
            `
            tblbody_with.innerHTML += item;
        };
    });

    btn_without.addEventListener('click', e => {
        // prevent default behaviour
        e.preventDefault();
        // reset data
        while (tblbody_without.hasChildNodes()) {
            tblbody_without.removeChild(tblbody_without.firstChild);
        };
        // insert data
        const fragment = document.createDocumentFragment();
        for (let i=0; i < 20; i++) {
            const tr = document.createElement('tr');
            const td_id = document.createElement('td');
            const td_first = document.createElement('td');
            const td_last = document.createElement('td');

            td_id.textContent = `${i}`
            td_first.textContent = `Vorname ${i}`
            td_last.textContent = `Nachname ${i}`
            
            tr.appendChild(td_id)
            tr.appendChild(td_first)
            tr.appendChild(td_last)
            fragment.append(tr);

            tblbody_without.append(fragment);
        };
    });

});
