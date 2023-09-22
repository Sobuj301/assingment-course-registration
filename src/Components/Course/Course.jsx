
import Credit from "../Credit/Credit";
import Name from "../Name/Name";

const Course = ({course}) => {
    
    return (
        <div className="w-72 h-80 bg-slate-100 rounded-2xl p-6">
            <h2 className="mb-3" >Course Name:{course.length}</h2>
            {
              course.map((name,index) => <Name
              key={index}
              name={name}
              ></Name>)
              
            }
            
            <h2 className="mt-10">Total Credit:</h2>
            {
               course.map((credits,index) => <Credit
               key={index}
               credits={credits}
               ></Credit>) 
            }
            
            

        
        </div>
    );
};

export default Course;