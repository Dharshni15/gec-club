import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./RegistrationForm.css";
import Navbar from '@/components/Navbar';

// Validation schema
type FormData = {
  name: string;
  rollNo: string;
  phone: string;
  email: string;
  year: string;
  department: string;
};

const schema = yup.object({
  name: yup.string().required("Name is required"),
  rollNo: yup.string().required("Roll No is required"),
  phone: yup.string().matches(/^[0-9]{10}$/,"Must be 10 digits").required("Mobile No is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  year: yup.string().oneOf(["1","2","3","4","5"],"Invalid year").required("Year is required"),
  department: yup.string().oneOf([
    "cse","it","ece","eee","eie","aids","aiml","mechatronics","mechanical","civil","bsc","msc","ft","chemical"
  ],"Invalid department").required("Department is required"),
});

export default function RegistrationForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await fetch("https://script.google.com/macros/s/AKfycbwj7olDdeEN0HxQPWK9ATojwPJqdIR1LtWGZyH3Z0M74QZW9Z3QNa4cPiaZOoMwR88J/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      setSubmitted(true);
      reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      alert("Error submitting form");
    } finally {
      setIsSubmitting(false);
    }
  };

  const joinWhatsAppGroup = () => {
    // Replace with your actual WhatsApp group link
    window.open("https://chat.whatsapp.com/yourgrouplink", "_blank");
  };

  return (
    
    <div className="registration-container">
      <Navbar />
      <div className="registration-card">
        <div className="registration-header">
          <i className="fas fa-venus-mars equality-icon"></i>
          <h1>Gender Equality Club Registration</h1>
          <p>Join us in promoting inclusivity and diversity on campus</p>
        </div>
        
        <form onSubmit={handleSubmit(onSubmit)} className="registration-form">
          <div className="form-grid">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input 
                id="name"
                {...register("name")} 
                className={errors.name ? "error" : ""}
                placeholder="Enter your full name"
              />
              {errors.name && (
                <p className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.name.message}
                </p>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="rollNo">Roll No</label>
              <input 
                id="rollNo"
                {...register("rollNo")} 
                className={errors.rollNo ? "error" : ""}
                placeholder="Enter your roll number"
              />
              {errors.rollNo && (
                <p className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.rollNo.message}
                </p>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Mobile No</label>
              <input 
                id="phone"
                {...register("phone")} 
                className={errors.phone ? "error" : ""}
                placeholder="Enter your 10-digit mobile number"
              />
              {errors.phone && (
                <p className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.phone.message}
                </p>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                id="email"
                {...register("email")} 
                className={errors.email ? "error" : ""}
                placeholder="Enter your email address"
              />
              {errors.email && (
                <p className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.email.message}
                </p>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="year">Year</label>
              <select 
                id="year"
                {...register("year")} 
                className={errors.year ? "error" : ""}
              >
                <option value="">Select Year</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </select>
              {errors.year && (
                <p className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.year.message}
                </p>
              )}
            </div>
            
            <div className="form-group">
              <label htmlFor="department">Department</label>
              <select 
                id="department"
                {...register("department")} 
                className={errors.department ? "error" : ""}
              >
                <option value="">Select Department</option>
                <option value="cse">CSE</option>
                <option value="it">IT</option>
                <option value="ece">ECE</option>
                <option value="eee">EEE</option>
                <option value="eie">EIE</option>
                <option value="aids">AIDS</option>
                <option value="aiml">AIML</option>
                <option value="mechatronics">Mechatronics</option>
                <option value="mechanical">Mechanical</option>
                <option value="civil">Civil</option>
                <option value="bsc">BSc</option>
                <option value="msc">MSc</option>
                <option value="ft">FT</option>
                <option value="chemical">Chemical</option>
              </select>
              {errors.department && (
                <p className="error-message">
                  <i className="fas fa-exclamation-circle"></i>
                  {errors.department.message}
                </p>
              )}
            </div>
          </div>
          
          <button 
            type="submit" 
            className={`submit-button ${isSubmitting ? "submitting" : ""}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <i className="fas fa-spinner fa-spin"></i> Processing...
              </>
            ) : (
              <>
                <i className="fas fa-paper-plane"></i> Register Now
              </>
            )}
          </button>
          
          {submitted && (
            <div className="success-message">
              <i className="fas fa-check-circle"></i>
              Form submitted successfully!
            </div>
          )}
        </form>
        
        <div className="whatsapp-section">
          <h3>Join our WhatsApp Group</h3>
          <p>Stay updated with our events and discussions</p>
          <button 
            className="whatsapp-button"
            onClick={joinWhatsAppGroup}
          >
            <i className="fab fa-whatsapp"></i> Join WhatsApp Group
          </button>
        </div>
      </div>
    </div>
  );
}