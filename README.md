# Furst Response  
AI-Powered Multilingual Dog Health Assessment Platform

Furst Response is a web-based healthcare platform designed to help dog owners assess symptoms, understand severity levels, and access reliable multilingual health resources.

The platform provides AI-powered symptom analysis while clearly positioning itself as an advisory tool and not a replacement for professional veterinary care.

---

## Problem Statement

Dog owners often struggle to determine whether their pet's symptoms require:

- Immediate veterinary attention  
- Home-based care  
- Simple monitoring  

This uncertainty leads to:

- Unnecessary emergency vet visits  
- Delayed treatment for serious conditions  
- Difficulty finding reliable, breed-specific information  

Furst Response addresses these challenges using AI-powered symptom assessment and curated health resources.

---

## Key Features

### 1. User Authentication and Profiles
- Secure user registration and login
- Pet profile management including breed, age, and medical history
- Session management

### 2. AI Symptom Assessment
- Natural language symptom input
- Gemini API powered analysis
- Severity classification system:
  - Red – Emergency (Immediate veterinary attention required)
  - Yellow – Monitor condition
  - Green – Low risk or basic care
- Response history tracking

### 3. Multilingual Support
- English and Hindi language toggle
- Persistent language preference
- Improved accessibility for non-English users

### 4. Health Resources
- Categorized dog health tips
- Searchable resource library
- Expandable content sections

### 5. Feedback System
- 1 to 5 star rating system
- Comment submission
- Local storage persistence
- Feedback management interface

### 6. Responsive Design
- Mobile-first user interface
- Cross-browser compatibility
- Accessibility compliance following WCAG guidelines

---

## Tech Stack

### Frontend
- HTML5
- CSS3
- JavaScript (ES6+)

### AI Integration
- Gemini API for natural language processing

### Data Management
- Local storage for user preferences and feedback
- Session-based state handling

### Version Control and Deployment
- Git
- GitHub

---

## Non-Functional Requirements

| Category    | Requirement                                      |
|-------------|--------------------------------------------------|
| Performance | Page load under 3 seconds, AI response under 5 seconds |
| Security    | Input validation and API key protection          |
| Reliability | Graceful error handling                          |
| Scalability | Modular architecture for future expansion        |
| Usability   | Intuitive navigation and minimal clicks          |

---

## Project Architecture

```
furst-response/
│
├── index.html
├── login.html
├── dashboard.html
│
├── css/
│   └── styles.css
│
├── js/
│   ├── app.js
│   ├── auth.js
│   ├── ai.js
│   ├── feedback.js
│   └── translation.js
│
├── assets/
│   └── images/
│
└── README.md
```

---

## Business Objectives

- Reduce unnecessary veterinary visits by 30 percent
- Provide reliable multilingual pet healthcare guidance
- Establish a trusted AI-driven pet health advisory platform
- Enable future premium and veterinary partnership integrations

---

## Future Enhancements

- Veterinary appointment booking integration
- Real-time chat with certified veterinarians
- Breed-specific predictive analytics
- Cloud database integration
- Administrative analytics dashboard

---

## Disclaimer

Furst Response provides AI-generated health guidance for informational purposes only.

It is not a substitute for professional veterinary diagnosis or treatment.

Users should always consult a licensed veterinarian for medical emergencies.

---

## Authors
Vansh Vashist - 23FE10CSE00646
<br>
Vinayak Jajoo - 23FE10CSE00834 

---

## License

This project is developed for academic and demonstration purposes.
