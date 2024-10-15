

const mikra = ({object})=>{

  const close = () => {
    object(false);
  };
return (
    <>
     <div className="flex justify-between items-center">
          <button
            onClick={close}
            className="text-red-500 hover:text-red-700 font-bold"
          >
            סגור
          </button>
        </div>
        <h3 className="text-black-500 font-bold"> מקרא:  </h3>
        <p className="text-green-500 font-bold"> ירוק: כיסא פנוי לרכישה </p>
        <p className="text-blue-500 font-bold"> כחול: כיסא עם זכות קדימה למתפלל משנה שעברה   </p>
        <p className="text-yellow-500 font-bold"> צהוב: כיסא בבדיקה (נתפס אך עדיין לא אושר סופית)</p>
        <p className="text-red-500 font-bold"> אדום: כיסא תפוס </p>
    </>
)}

export default mikra;