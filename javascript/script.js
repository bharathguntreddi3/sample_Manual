function storeData() {
    // Get form values
    var name = document.getElementById('name').value;
    var age = document.getElementById('age').value;

    // Display data below the form
    var dataList = document.getElementById('dataList');
    var listItem = document.createElement('li');
    listItem.textContent = 'Name: ' + name + ', Age: ' + age;
    dataList.appendChild(listItem);

    //Clear form fields after storing data
    document.getElementById('dataForm').reset();
}