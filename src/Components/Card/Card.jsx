

const Card = ({card}) => {
    const{img,course_name,details,price,credit} = card
    return (
        <div className="bg-slate-100 p-4 rounded-lg">
         <img className="mb-3" src={img} alt="" />
         <h2 className="mb-3 text-xl font-bold">{course_name}</h2>
         <p className="">{details}</p>
         <div className="flex justify-between mb-5">
         <p>$ price:{price}</p>
         <p> credit:{credit} hr</p>
         </div>
         <button className="bg-blue-500 text-white py-1 px-14 rounded-xl  "> select </button>
        </div>
    );
};

export default Card;