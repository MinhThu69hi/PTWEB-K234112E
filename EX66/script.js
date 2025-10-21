
document.addEventListener('DOMContentLoaded', function() {

    const xmlString = `
        <student>
            <id>987456</id>
            <name>Marie Curie</name>
            <birthday>7/11/1867</birthday>
            <gender>Woman</gender>
        </student>
    `;

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, "application/xml");

    const studentId = xmlDoc.getElementsByTagName("id")[0].textContent;
    const studentName = xmlDoc.getElementsByTagName("name")[0].textContent;
    const birthday = xmlDoc.getElementsByTagName("birthday")[0].textContent;
    const gender = xmlDoc.getElementsByTagName("gender")[0].textContent;

    document.getElementById("student-id").textContent = studentId;
    document.getElementById("student-name").textContent = studentName;
    document.getElementById("birthday").textContent = birthday;
    document.getElementById("gender").textContent = gender;

    const rows = document.querySelectorAll('.data-row');

    rows.forEach(row => {
        row.addEventListener('mouseover', function() {
            this.style.backgroundColor = 'blue';
            this.style.color = 'white';
        });

        row.addEventListener('mouseout', function() {
            this.style.backgroundColor = 'white';
            this.style.color = 'black';
        });
    });

});