import React, { useState } from 'react';
import styled from 'styled-components';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';

const ContactSection = styled.section`
  background-color: #f5f5f5;
`;

const ContactContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 30px;
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  
  @media (max-width: 868px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  padding: 40px;
  box-shadow: var(--box-shadow);
`;

const ContactTitle = styled.h3`
  font-size: 1.6rem;
  color: var(--primary-color);
  margin-bottom: 30px;
`;

const ContactDetails = styled.div`
  margin-bottom: 30px;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  svg {
    font-size: 1.5rem;
    color: var(--primary-color);
    margin-right: 15px;
  }
`;

const ContactText = styled.div`
  h4 {
    font-size: 1.1rem;
    margin-bottom: 5px;
  }
  
  p {
    color: var(--text-secondary);
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 30px;
`;

const FormContainer = styled.div`
  background-color: white;
  border-radius: var(--border-radius);
  padding: 40px;
  box-shadow: var(--box-shadow);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  margin-bottom: 8px;
  font-weight: 500;
`;

const FormInput = styled.input`
  padding: 12px 15px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 1rem;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(3, 102, 214, 0.2);
  }
`;

const FormTextarea = styled.textarea`
  padding: 12px 15px;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  font-family: inherit;
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: var(--transition);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(3, 102, 214, 0.2);
  }
`;

const SubmitButton = styled.button`
  background-color: var(--primary-color);
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: var(--border-radius);
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  transition: var(--transition);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  
  &:hover {
    background-color: #0255b3;
  }
  
  &:disabled {
    background-color: #90b4db;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 15px;
  border-radius: var(--border-radius);
  margin-bottom: 20px;
  text-align: center;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <ContactSection id="contact">
      <ContactContainer>
        <h2 className="section-title">Get In Touch</h2>
        <ContactContent>
          <ContactInfo>
            <ContactTitle>Contact Information</ContactTitle>
            <ContactDetails>
              <ContactItem>
                <FaEnvelope />
                <ContactText>
                  <h4>Email</h4>
                  <p>uc2062@nyu.edu</p>
                </ContactText>
              </ContactItem>
              <ContactItem>
                <FaPhone />
                <ContactText>
                  <h4>Phone</h4>
                  <p>+1 (206) 619-0262</p>
                </ContactText>
              </ContactItem>
              <ContactItem>
                <FaMapMarkerAlt />
                <ContactText>
                  <h4>Location</h4>
                  <p>New York, NY 10012</p>
                </ContactText>
              </ContactItem>
            </ContactDetails>
            <div>
              <p>Feel free to reach out if you have any questions or would like to discuss potential opportunities. I'm always open to new challenges and collaborations!</p>
            </div>
          </ContactInfo>
          
          <FormContainer>
            {submitted && (
              <SuccessMessage>
                Thank you for your message! I'll get back to you as soon as possible.
              </SuccessMessage>
            )}
            <ContactForm onSubmit={handleSubmit}>
              <FormGroup>
                <FormLabel htmlFor="name">Name</FormLabel>
                <FormInput
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="email">Email</FormLabel>
                <FormInput
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="subject">Subject</FormLabel>
                <FormInput
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel htmlFor="message">Message</FormLabel>
                <FormTextarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <SubmitButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send Message'}
                <FaPaperPlane />
              </SubmitButton>
            </ContactForm>
          </FormContainer>
        </ContactContent>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;