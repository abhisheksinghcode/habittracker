function markAsDone(button) {
    button.textContent = "Done!";
    button.style.backgroundColor = "#4caf50";
    button.style.cursor = "not-allowed";
    button.disabled = true;
}

function addHabit() {
    const habitName = document.getElementById('new-habit').value;
    if (habitName.trim() === '') {
        alert('Please enter a habit name!');
        return;
    }

    const habitsList = document.getElementById('habits-list');

    const newHabit = document.createElement('div');
    newHabit.className = 'habit';

    const habitSpan = document.createElement('span');
    habitSpan.className = 'habit-name';
    habitSpan.textContent = habitName;

    const buttonsDiv = document.createElement('div');

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.onclick = function () {
        editHabit(editButton);
    };

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        deleteHabit(deleteButton);
    };

    const markButton = document.createElement('button');
    markButton.textContent = 'Mark as Done';
    markButton.onclick = function () {
        markAsDone(markButton);
    };

    buttonsDiv.appendChild(editButton);
    buttonsDiv.appendChild(deleteButton);
    buttonsDiv.appendChild(markButton);

    newHabit.appendChild(habitSpan);
    newHabit.appendChild(buttonsDiv);

    habitsList.appendChild(newHabit);

    document.getElementById('new-habit').value = '';
}

function editHabit(button) {
    const habitDiv = button.parentElement.parentElement;
    const habitNameSpan = habitDiv.querySelector('.habit-name');
    const newHabitName = prompt('Edit your habit:', habitNameSpan.textContent);
    if (newHabitName !== null && newHabitName.trim() !== '') {
        habitNameSpan.textContent = newHabitName;
    }
}

function deleteHabit(button) {
    const habitDiv = button.parentElement.parentElement;
    habitDiv.remove();
}
