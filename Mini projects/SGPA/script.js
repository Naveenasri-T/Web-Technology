// script.js
document.getElementById('numSubjects').addEventListener('input', function() {
    const numSubjects = parseInt(this.value);
    const container = document.getElementById('subjects-container');
    container.innerHTML = '';

    if (numSubjects > 0) {
        for (let i = 1; i <= numSubjects; i++) {
            const subjectDiv = document.createElement('div');
            subjectDiv.className = 'form-group';
            subjectDiv.innerHTML = `
                <label for="grade${i}">Grade for Subject ${i}:</label>
                <input type="number" id="grade${i}" min="0" max="10" step="0.1" required>
            `;
            container.appendChild(subjectDiv);
        }
    }
});

function calculateSGPA() {
    const numSubjects = parseInt(document.getElementById('numSubjects').value);
    let totalGradePoints = 0;

    for (let i = 1; i <= numSubjects; i++) {
        const grade = parseFloat(document.getElementById(`grade${i}`).value) || 0;
        totalGradePoints += grade;
    }

    const sgpa = totalGradePoints / numSubjects;
    document.getElementById('sgpa-value').innerText = sgpa.toFixed(2);
}
