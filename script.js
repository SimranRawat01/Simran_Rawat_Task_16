// 1. Array of Student Objects
const students = [
  {
    name: "Salmaan Ahmed",
    marks: "38%",
    class: "3rd",
    address: "India"
  },
  {
    name: "Riya Sharma",
    marks: "85%",
    class: "10th",
    address: "123, ABC Colony, Delhi"
  },
  {
    name: "Rohan Patel",
    marks: "70%",
    class: "12th",
    address: "456, XYZ Street, Mumbai"
  },
  {
    name: "Priya Singh",
    marks: "95%",
    class: "8th",
    address: "789, PQR Nagar, Bangalore"
  },
  {
    name: "Ankit Gupta",
    marks: "60%",
    class: "9th",
    address: "101, LMN Road, Kolkata"
  },
  {
    name: "Neha Verma",
    marks: "80%",
    class: "11th",
    address: "222, DEF Avenue, Chennai"
  },
  {
    name: "Manoj Kumar",
    marks: "75%",
    class: "10th",
    address: "333, GHI Lane, Hyderabad"
  },
  {
    name: "Pooja Mishra",
    marks: "88%",
    class: "12th",
    address: "444, STU Colony, Pune"
  },
  {
    name: "Rajesh Singhania",
    marks: "92%",
    class: "9th",
    address: "555, VWX Street, Jaipur"
  },
  {
    name: "Sunita Jain",
    marks: "78%",
    class: "11th",
    address: "666, YZA Road, Ahmedabad"
  },
  {
    name: "Jennifer Smith",
    marks: "87%",
    class: "10th Grade",
    address: "777, BCD Avenue, Chandigarh"
  },
  {
    name: "Michael Johnson",
    marks: "75%",
    class: "9th Grade",
    address: "888, EFG Street, Lucknow"
  }
];

// DOM references
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const cardsContainer = document.getElementById('cardsContainer');
const searchHeading = document.getElementById('searchHeading');

// 2. Render function using Array.map()
function renderStudents(studentList) {
  if (studentList.length === 0) {
    cardsContainer.innerHTML = '<div class="no-results">No students found matching your search.</div>';
    return;
  }

  const cardsHTML = studentList.map(student => `
    <div class="student-card">
      <div class="student-field field-name">
        Student Name: <span class="field-value">${student.name}</span>
      </div>
      <div class="student-field">
        Marks: <span class="field-value">${student.marks}</span>
      </div>
      <div class="student-field">
        Class: <span class="field-value">${student.class}</span>
      </div>
      <div class="student-field">
        Address: <span class="field-value">${student.address}</span>
      </div>
    </div>
  `).join('');

  cardsContainer.innerHTML = cardsHTML;
}

// 3. Search function using Array.filter() (Executes ONLY on explicit search trigger)
function handleSearch() {
  const query = searchInput.value.trim();

  // If search query is empty, reset heading and show all records
  if (query === "") {
    searchHeading.style.display = "none";
    renderStudents(students);
    return;
  }

  // Show "Search Results for [Query]..." heading
  searchHeading.textContent = `Search Results for ${query}...`;
  searchHeading.style.display = "block";

  // Filter students by name (case-insensitive)
  const lowerQuery = query.toLowerCase();

  const filteredStudents = students
    .filter(student => student.name.toLowerCase().includes(lowerQuery))
    .sort((a, b) => {
      const indexA = a.name.toLowerCase().indexOf(lowerQuery);
      const indexB = b.name.toLowerCase().indexOf(lowerQuery);

      // Sort by the position where the query appears (lowest index first)
      if (indexA !== indexB) {
        return indexA - indexB;
      }

      // Tie-breaker: if both match at the exact same position, sort alphabetically
      return a.name.localeCompare(b.name);
    });
  renderStudents(filteredStudents);
}

// Execute search ONLY on button click
searchBtn.addEventListener('click', handleSearch);

// Initial display of all student records
renderStudents(students);