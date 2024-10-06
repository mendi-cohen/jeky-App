import React from 'react';
import Seat from './Components/Seat';
import SpecialArea from './Components/SpecialArea';
// import Row from './Components/Row';

const EmptySeat = () => <div dir='rtl' className="h-8 w-16" />;



const Row = ({ children }) => (
    <div className="flex col-x-2 mb-1 h-8">
      {React.Children.map(children, (child) => (
        <div
          className={`flex items-center ${child.type === EmptySeat || child.type === SpecialArea ? '' : 'border-l border-black'}`}
        >
          {child}
        </div>
      ))}
    </div>
  );

const SeatMap = () => (
  <div className="font-sans" dir="rtl">
    <EmptySeat />
    <h2 className="text-center mb-4 text-lg font-bold mr-60">ארון קודש</h2>
    <div className="flex flex-col items-center">
        <EmptySeat />
        <Row>
        <Seat name="א" />
        <Seat name="א" />
        <Seat name="א" />
        <EmptySeat />
        <Seat name="ב" />
        <Seat name="ב" />
        <Seat name="ב" />
        <EmptySeat />
        <Seat name="ג" />
        <Seat name="ג" />
        <Seat name="ג" />
        <EmptySeat />
        <SpecialArea name="גבאי" />
        <EmptySeat />
        <Seat name="ד" />
        <Seat name="ד" />
        <Seat name="ד" />
        <EmptySeat />

        

        <Seat name="ה" />
        <Seat name="ה" />
        <Seat name="ה" />
      </Row>
       
      <Row>
        <Seat name="ו" />
        <Seat name="ו" />
        <Seat name="ו" />
        <EmptySeat />
        <Seat name="ז" />
        <Seat name="ז" />
        <Seat name="ז" />
        <EmptySeat />
        <Seat name="ח" />
        <Seat name="ח" />
        <Seat name="ח" />
        <EmptySeat />
        <EmptySeat />
        <EmptySeat />
        <EmptySeat />
        <EmptySeat />

        <Seat name="ט" />
        <Seat name="ט" />
        <Seat name="ט" />
        <EmptySeat />

        

        <Seat name="י" />
        <Seat name="י" />
        <Seat name="י" />
      </Row>
     
     {/* ////////////// */}
     <EmptySeat />
    
      <Row>
        <Seat name="כ" />
        <Seat name="כ" />
        <Seat name="כ" />
        <EmptySeat />
        <Seat name="ל" />
        <Seat name="ל" />
        <Seat name="ל" />
        <EmptySeat />
        <Seat name="מ" />
        <Seat name="מ" />
        <Seat name="מ" />
        <EmptySeat />
        
        <SpecialArea name="בימה" />

        <EmptySeat />
        <Seat name="נ" />
        <Seat name="נ" />
        <Seat name="נ" />
        <EmptySeat />

        

        <Seat name="ס" />
        <Seat name="ס" />
        <Seat name="ס" />
      </Row>
       
      <Row>
        <Seat name="ע" />
        <Seat name="ע" />
        <Seat name="ע" />
        <EmptySeat />
        <Seat name="פ" />
        <Seat name="פ" />
        <Seat name="פ" />
        <EmptySeat />
        <Seat name="צ" />
        <Seat name="צ" />
        <Seat name="צ" />
        <EmptySeat />
        <EmptySeat />
        <EmptySeat />
        <EmptySeat />
        <EmptySeat />
        <Seat name="ק" />
        <Seat name="ק" />
        <Seat name="ק" />
        <EmptySeat />

        

        <Seat name="ר" />
        <Seat name="ר" />
        <Seat name="ר" />
      </Row>
 <EmptySeat />
      {/* //////////////////////// */}


      <Row>
        <Seat name="ש" />
        <Seat name="ש" />
        <Seat name="ש" />
        <EmptySeat />
        <Seat name="ת" />
        <Seat name="ת" />
        <Seat name="ת" />
        <EmptySeat />
        <Seat name="א א" />
        <Seat name="א א" />
        <Seat name="א א" />
    <EmptySeat />
    <Seat name="BBB" />
    <Seat name="BBB" />
    <Seat name="BBB" />
    <EmptySeat />
    
        <Seat name="ב ב" />
        <Seat name="ב ב" />
        <Seat name="ב ב" />
        <EmptySeat />

        

        <Seat name="ג ג" />
        <Seat name="ג ג" />
        <Seat name="ג ג" />
      </Row>

    <EmptySeat />

    <Row>
        <Seat name="ד ד" />
        <Seat name="ד ד" />
        <Seat name="ד ד" />
        <EmptySeat />
        <Seat name="ה ה" />
        <Seat name="ה ה" />
        <Seat name="ה ה" />
        <EmptySeat />
        <Seat name="ו ו" />
        <Seat name="ו ו" />
        <Seat name="ו ו" />
        <EmptySeat />
        <Seat name="BBB" />
    <Seat name="BBB" />
    <Seat name="BBB" />
    <EmptySeat />
        <Seat name="ז ז" />
        <Seat name="ז ז" />
        <Seat name="ז ז" />
        <EmptySeat />

        

        <Seat name="ח ח" />
        <Seat name="ח ח" />
        <Seat name="ח ח" />
      </Row><Row>
        <Seat name="ט ט" />
        <Seat name="ט ט" />
        <Seat name="ט ט" />
        <EmptySeat />
        <Seat name="י י" />
        <Seat name="י י" />
        <Seat name="י י" />
        <EmptySeat />
        <Seat name="כ כ" />
        <Seat name="כ כ" />
        <Seat name="כ כ" />
        <EmptySeat />
        <Seat name="BBB" />
    <Seat name="BBB" />
    <Seat name="BBB" />
    <EmptySeat />
        <Seat name="ל ל" />
        <Seat name="ל ל" />
        <Seat name="ל ל" />
        <EmptySeat />

        

        <Seat name="מ מ" />
        <Seat name="מ מ" />
        <Seat name="מ מ" />
      </Row>

      <div className="w-full border-b border-black" />












    </div>
  </div>
);

export default SeatMap;