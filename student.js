
        document.getElementById('studentForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const maths = document.getElementById('maths').value;
            const english = document.getElementById('english').value;
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td>${name}</td>
                <td>${email}</td>
                <td>${phone}</td>
                <td>${maths}</td>
                <td>${english}</td>
            `;
            document.getElementById('studentData').appendChild(newRow);
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('maths').value = '';
            document.getElementById('english').value = '';
        });
