// Mengambil elemen dari HTML
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

const totalTasks = document.getElementById("totalTasks");
const completedTasks = document.getElementById("completedTasks");
const pendingTasks = document.getElementById("pendingTasks");


// Fungsi memperbarui statistik
function updateStatistics() {
    const tasks = taskList.querySelectorAll("li");

    const total = tasks.length;
    const completed = taskList.querySelectorAll(".completed").length;
    const pending = total - completed;

    totalTasks.textContent = total;
    completedTasks.textContent = completed;
    pendingTasks.textContent = pending;
}


// Fungsi menambahkan tugas
function addTask() {
    const taskText = taskInput.value.trim();

    // Validasi input kosong
    if (taskText === "") {
        alert("Tugas tidak boleh kosong!");
        return;
    }

    // Membuat elemen li
    const taskItem = document.createElement("li");

    // Membuat checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Membuat teks tugas
    const taskTextElement = document.createElement("span");
    taskTextElement.textContent = taskText;

    // Membuat tombol hapus
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";


    // Event checkbox
    checkbox.addEventListener("change", function() {
        taskTextElement.classList.toggle("completed");

        updateStatistics();
    });


    // Event tombol hapus
    deleteButton.addEventListener("click", function() {
        taskItem.remove();

        updateStatistics();
    });


    // Memasukkan elemen ke dalam li
    taskItem.appendChild(checkbox);
    taskItem.appendChild(taskTextElement);
    taskItem.appendChild(deleteButton);

    // Memasukkan li ke daftar tugas
    taskList.appendChild(taskItem);

    // Mengosongkan input
    taskInput.value = "";

    // Memperbarui statistik
    updateStatistics();
}


// Tombol Tambah
addButton.addEventListener("click", addTask);


// Menambahkan tugas menggunakan Enter
taskInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});


// Statistik awal
updateStatistics();