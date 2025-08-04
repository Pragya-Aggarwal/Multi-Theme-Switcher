import React, { useState } from 'react';
import styled from 'styled-components';

const ContactContainer = styled.main`
  padding: 6rem 2rem 2rem;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.8;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: var(--primary);
  text-align: center;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 2rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const ContactInfo = styled.div`
  background: var(--surface);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

const ContactForm = styled.form`
  background: var(--surface);
  padding: 2rem;
  border-radius: var(--border-radius);
  box-shadow: var(--box-shadow);
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    color: var(--text);
  }
  
  input,
  textarea {
    width: 100%;
    padding: 0.75rem 1rem;
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    background: var(--background);
    color: var(--text);
  }
`;

const SubmitButton = styled.button`
  background: var(--primary);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: var(--border-radius);
  cursor: pointer;
  width: 100%;
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Form submission logic would go here
  };

  return (
    <ContactContainer>
      <PageTitle>Contact Us</PageTitle>
      
      <ContactGrid>
        <ContactInfo>
          <h2>Get in Touch</h2>
          <p>Email: hr@hipster-inc.com</p>
          <p>Phone: +65 8231 4107</p>
          <p>Address: #01-04, 75 Ayer Rajah Crescent, Singapore 139953</p>
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit}>
          <h2>Send us a Message</h2>
          <FormGroup>
            <label>Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <label>Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
          </FormGroup>
          
          <FormGroup>
            <label>Message</label>
            <textarea 
              name="message" 
              rows={5} 
              value={formData.message} 
              onChange={handleChange} 
              required 
            />
          </FormGroup>
          
          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>
      </ContactGrid>
    </ContactContainer>
  );
};

export default Contact;
