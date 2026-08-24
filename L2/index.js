// arrowFunc
const greet = () => {
  console.log('This is an arrow function');
}

//obkjct
const student = {
  id: 1,
  name: 'John Doe',
  course: 'Computer Science',
}

//store array-pasok sa bracket. each obj, one {}
const students = [
    { id: 1, name: 'John Doe', course: 'Computer Science' },
    { id: 2, name: 'Jane Smith', course: 'Mathematics' },
    { id: 3, name: 'Bob Johnson', course: 'Physics' }
]
const fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grapes']
const updateFruits = [...fruits, "orange", "kiwi", "watermelon"]
console.log(updateFruits); //gagawa ng new na exiting



