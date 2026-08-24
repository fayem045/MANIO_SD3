//dynamic. need value sa home
//tyoeScript
type StudentCardProps ={
    name: string;
    course: string;
};

export default function StudentCard({name, course}: StudentCardProps){
    return(
        <div>
            <h2>Student Card</h2>
            <p>Student Name: {name}</p>
            <p>Course: {course}</p>
        </div>
    )
}

// export default function StudentCard(){
//     return(
//         <div>
//             <h2>Student Card</h2>
//             <p>Student Name: John Doe</p>
//         </div>
//     )
// }