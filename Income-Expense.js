document.addEventListener("DOMContentLoaded", function() {
    const entryForm = document.getElementById('entryForm');
    const entriesBody = document.getElementById('entriesBody');
    const deleteLastEntryButton = document.getElementById('deleteLastEntry');
    let entries = [];

    entryForm.addEventListener('submit', function(event) {
        event.preventDefault();

       
        const date = document.getElementById('date').value;
        const type = document.getElementById('type').value;
        const category = document.getElementById('category').value;
        const amount = document.getElementById('amount').value;

       
        const entry = { date, type, category, amount };
        entries.push(entry); 

        
        entryForm.reset();

        
        updateEntriesTable();
    });


    function updateEntriesTable() {
       
        entriesBody.innerHTML = '';

        entries.forEach((entry, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${entry.date}</td>
                <td>${entry.type}</td>
                <td>${entry.category}</td>
                <td>${entry.amount}</td>
            `;
            entriesBody.appendChild(row);
        });
    }

   
    deleteLastEntryButton.addEventListener('click', function() {
        entries.pop();
        updateEntriesTable(); 
    });
});
