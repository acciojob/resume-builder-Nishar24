
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
       <Routes>
      <Route path="/" element={<ProfileForm />} />
      <Route path="/education" element={<EducationForm />} />
      <Route path="/skills" element={<SkillsForm />} />
      <Route path="/projects" element={<ProjectsForm />} />
      <Route path="/social" element={<SocialForm />} />
      <Route path="/resume" element={<ResumePreview />} />
    </Routes>
    </div>
  )
}

export default App
