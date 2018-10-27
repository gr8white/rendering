
// Creates student div
function createSingleStudent (students) {
  return `
      <div id= 'wrapper' class="text-center mt-5" style= "${shade(students.isPresent)}width: 30%;border-color: black;border-style: solid;margin: 0 auto;">
          <h1>${students.name}</h1>
          <h2>${attendance(students.isPresent)}</h2>
      </div>
`
}

function attendance (value) {
  if (value === true) {
    return 'Present'
  } else if (value === false) {
    return 'Absent'
  }
}
function shade (value) {
  if (value === true) {
    return 'background-color: #00ff00; '
  } else if (value === false) {
    return 'background-color: #ff0000; '
  }
}

function renderStudents (students) {
  return students.map(createSingleStudent).join('')
}

function students () {
  var content = document.getElementById('content')

  var studentsAbstraction = [
    {
      name: 'Kamilah',
      isPresent: true
    },
    {
      name: 'Kim',
      isPresent: true
    },
    {
      name: 'Stuart',
      isPresent: false
    },
    {
      name: 'Ron',
      isPresent: true
    },
    {
      name: 'Krissy',
      isPresent: false
    }
  ]

  content.innerHTML = `<h1 style= "text-align: center">Roll Call!</h1>` + renderStudents(studentsAbstraction)
}
