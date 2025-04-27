document.getElementById('entryForm').addEventListener('submit', function(event) 
{
    event.preventDefault();
    
    
    const date = document.getElementById('date').value;
    const type = document.getElementById('type').value;
    const category = document.getElementById('category').value;
    const amount = document.getElementById('amount').value;

    
    const newRow = document.createElement('tr');
    newRow.innerHTML = 
        <>
        <td>${date}</td>
        <td>${type}</td>
        <td>${category}</td>
        <td>${amount}</td></>;

    
    document.getElementById('ledgerBody').appendChild(newRow);

  
    document.getElementById('entryForm').reset();
});


function openTab(evt, tabName) {
  
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    const tablinks = document.getElementsByClassName("tablinks");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
