import Name from "../Name/Name";

const Course = ({course}) => {
    
    return (
        <div className="md:w-1/3">
            <h2>Course Name:{course.length}</h2>
            {
              course.map(name => <Name
              key={name.credit}
              name={name}
              ></Name>)
            }
        </div>
    );
};

export default Course;