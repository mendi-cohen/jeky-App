import React, {useState,useEffect} from 'react';
import Seat from './Seat';
import SpecialArea from './SpecialArea';


const EmptySeat = ({small}) =>  <div dir="rtl" className={`h-8 ${small ? 'w-10' : 'w-10'}`} />;



const Row = ({ children }) => (
    <div className="flex col-x-2 mb-1 h-10">
      {React.Children.map(children, (child) => (
        <div>
          {child}
        </div>
      ))}
    </div>
  );

const SeatMap = () =>{

  const [seats, setSeats] = useState([]);

  useEffect(() => {
    fetchSeats();
  }, []);
  const fetchSeats = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API}/getAllSeats`);
      const data = await response.json();
      if (data.Seats && Array.isArray(data.Seats)) {
        setSeats(data.Seats);
        
      } else {
        console.error('Seats data is not an array:', data);
      }
    } catch (error) {
      console.error('Failed to fetch seats:', error);
    }
  };
  const findSeatData = (id) => {
    return seats.find(seat => seat.id === id) || {};
  };

 
  const renderSeat = (id, small = false) => {
    const seatData = findSeatData(id);
    return (
      <Seat
        name={seatData.name || id} 
        small={small}
        color={seatData.color}
        status={seatData.status}
        owner={seatData.owner}
      />
    );
  };

  
  
  return (
  <div className="font-sans" dir="rtl">

    <EmptySeat />
    <h2 className="text-center mb-4 text-lg font-bold mr-72">ארון קודש</h2>
    <div className="flex flex-col items-center">
        <EmptySeat />
        <Row>
          {renderSeat(1)}
          {renderSeat(2)}
          {renderSeat(3)}
          <EmptySeat />
          {renderSeat(4)}
          {renderSeat(5)}
          {renderSeat(6)}
          <EmptySeat />
          {renderSeat(7)}
          {renderSeat(8)}
          {renderSeat(9)}
          <EmptySeat />
          <SpecialArea name="גבאי" />
          <EmptySeat />
          {renderSeat(10)}
          {renderSeat(11)}
          {renderSeat(12)}
        
          <EmptySeat />
          {renderSeat(13)}
          {renderSeat(14)}
          {renderSeat(15)}
        </Row>
       
      <Row>
      {renderSeat(16)}
      {renderSeat(17)}
      {renderSeat(18)}
        <EmptySeat />
        {renderSeat(19)}
        {renderSeat(20)}
        {renderSeat(21)}
        <EmptySeat />
        {renderSeat(22)}
        {renderSeat(23)}
        {renderSeat(24)}
        <EmptySeat />
        <EmptySeat />
        <EmptySeat />
        <EmptySeat />
        <EmptySeat />
        <EmptySeat />
        <EmptySeat />
        <EmptySeat />

        {renderSeat(25)}
        {renderSeat(26)}
        {renderSeat(27)}
        <EmptySeat />

        

        {renderSeat(28)}
        {renderSeat(29)}
        {renderSeat(30)}
      </Row>
     
     {/* ////////////// */}
     <EmptySeat />
    
      <Row>
      {renderSeat(31)}
        {renderSeat(32)}
        {renderSeat(33)}
        <EmptySeat />
        {renderSeat(34)}
        {renderSeat(35)}
        {renderSeat(36)}
        <EmptySeat />
        {renderSeat(37)}
        {renderSeat(38)}
        {renderSeat(39)}
        <EmptySeat />
        
        <SpecialArea name="בימה" />

        <EmptySeat />
        {renderSeat(40)}
        {renderSeat(41)}
        {renderSeat(42)}
        <EmptySeat />

        

        {renderSeat(43)}
        {renderSeat(44)}
        {renderSeat(45)}
      </Row>
       
      <Row>
      {renderSeat(46)}
        {renderSeat(47)}
        {renderSeat(48)}
        <EmptySeat />
        {renderSeat(49)}
        {renderSeat(50)}
        {renderSeat(51)}
        <EmptySeat />
        {renderSeat(52)}
        {renderSeat(53)}
        {renderSeat(54)}
        <EmptySeat />
        <EmptySeat />
        <EmptySeat />
        <EmptySeat />
        <EmptySeat />
        <EmptySeat />
        <EmptySeat />
        <EmptySeat />
        {renderSeat(55)}
        {renderSeat(56)}
        {renderSeat(57)}
        <EmptySeat />

        

        {renderSeat(58)}
        {renderSeat(59)}
        {renderSeat(60)}
      </Row>
 <EmptySeat />
      {/* //////////////////////// */}


      <Row>
      {renderSeat(61)}
        {renderSeat(62)}
        {renderSeat(63)}
        <EmptySeat />
        {renderSeat(64)}
        {renderSeat(65)}
        {renderSeat(66)}
        <EmptySeat />
        {renderSeat(67)}
        {renderSeat(68)}
        {renderSeat(69)}
    <EmptySeat />
    {renderSeat(70)}
        {renderSeat(71)}
        {renderSeat(72)}
    <EmptySeat />
    
    {renderSeat(73)}
        {renderSeat(74)}
        {renderSeat(75)}
        <EmptySeat />

        

        {renderSeat(76)}
        {renderSeat(77)}
        {renderSeat(78)}
      </Row>

    <EmptySeat />

    <Row>
    {renderSeat(79)}
        {renderSeat(80)}
        {renderSeat(81)}
        <EmptySeat />
        {renderSeat(82)}
        {renderSeat(83)}
        {renderSeat(84)}
        <EmptySeat />
        {renderSeat(85)}
        {renderSeat(86)}
        {renderSeat(87)}
        <EmptySeat />
        {renderSeat(88)}
        {renderSeat(89)}
        {renderSeat(90)}
    <EmptySeat />
    {renderSeat(91)}
        {renderSeat(92)}
        {renderSeat(93)}
        <EmptySeat />

        

        {renderSeat(94)}
        {renderSeat(95)}
        {renderSeat(96)}
      </Row><Row>
      {renderSeat(97)}
        {renderSeat(98)}
        {renderSeat(99)}
        <EmptySeat />
        {renderSeat(100)}
        {renderSeat(101)}
        {renderSeat(102)}
        <EmptySeat />
        {renderSeat(103)}
        {renderSeat(104)}
        {renderSeat(105)}
        <EmptySeat />
        {renderSeat(106)}
        {renderSeat(107)}
        {renderSeat(108)}
    <EmptySeat />
    {renderSeat(109)}
        {renderSeat(110)}
        {renderSeat(111)}
        <EmptySeat />

        

        {renderSeat(112)}
        {renderSeat(113)}
        {renderSeat(114)}
      </Row>

      <div className="w-full border-b border-black" />

      <EmptySeat />
    <h2 className="text-center mb-4 text-lg font-bold mr-60"> עזרת נשים </h2>
    <div className="flex flex-col items-center">

    <EmptySeat small />
        <Row>
        {renderSeat(115, true)}
        {renderSeat(116, true)}
        {renderSeat(117, true)}

        <EmptySeat small />
        {renderSeat(118, true)}
        {renderSeat(119, true)}
        {renderSeat(120, true)}

        <EmptySeat small />
        {renderSeat(121, true)}
        {renderSeat(122, true)}
        {renderSeat(123, true)}

        <EmptySeat small />
        {renderSeat(124, true)}
        {renderSeat(125, true)}
        {renderSeat(126, true)}

        <EmptySeat small />
        {renderSeat(127, true)}
        {renderSeat(128, true)}
        {renderSeat(129, true)}

        <EmptySeat small />
        {renderSeat(130, true)}
        {renderSeat(131, true)}
        {renderSeat(132, true)}

        <EmptySeat small />
        {renderSeat(133, true)}
        {renderSeat(134, true)}
        {renderSeat(135, true)}

        <EmptySeat small />
        {renderSeat(136, true)}
        {renderSeat(137, true)}
        {renderSeat(138, true)}


        </Row>
        <EmptySeat small />
    </div>










    </div>
  </div>
)};

export default SeatMap;