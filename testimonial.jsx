import { Card } from '@mui/material';
import React, { useState } from 'react';
import "../css/Testimonial.css";
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const TestimonialComponent = ({ testimonials }) => {
  const [startIndex, setStartIndex] = useState(0);

  const showNextTestimonials = () => {
    if (startIndex + 1 < testimonials.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const showPreviousTestimonials = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  // Adjust the number of visible testimonials based on screen width
  const visibleTestimonials = window.innerWidth <= 700 ? testimonials.slice(startIndex, startIndex + 1) : testimonials.slice(startIndex, startIndex + 3);

  return (
    <div className="testimonial-container">
    
      <div className="testimonial-cards-container">
      <button onClick={showPreviousTestimonials}  className="control-button"><LeftOutlined/></button>
        {visibleTestimonials.map((testimonial, index) => (
          <Card elevation={3} key={index} className={`testimonial-card ${index === 1 ? "center" : ""}`} >
            <p style={{ color: "black" }}>{testimonial.content}</p>
            <p className="author" style={{ color: "white" }}>- {testimonial.author}</p>
          </Card>
        ))}
         <button onClick={showNextTestimonials} className="control-button"><RightOutlined /></button>
      </div>
    </div>
  );
};

export default TestimonialComponent;
