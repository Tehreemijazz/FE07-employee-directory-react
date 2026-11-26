# Employee Directory (FE07)

Run:  npm install then npm run dev

## Folder structure
'''
src/
  data/employees.js                 employee + department arrays (named exports)
  components/
    ui/                             generic, reusable pieces
      Button/  Avatar/  PageHeader/ (+ index.js barrel)
    employee/                       EmployeeCard, EmployeeList, EmployeeDetails
    department/                     DepartmentCard
  pages/EmployeeDirectoryPage.jsx   page component: state + layout
  App.jsx, main.jsx
'''
