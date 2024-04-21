import React, { useState, useEffect } from 'react';
import './DietPlan.css';

function DietPlan({ dietPlans }) {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    activityLevel: '',
    dietaryPreferences: '',
    goal: '',
  });

  const [errors, setErrors] = useState({
    age: '',
    weight: '',
    height: '',
    activityLevel: '',
    goal: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData'));
    if (storedFormData) {
      setFormData(storedFormData);
      setSubmitted(true);
    }
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let formValid = true;
    const newErrors = { ...errors };

    // Form validations
    
    if (!formData.age) {
      newErrors.age = 'Please enter age';
      formValid = false;
    }

    if (!formData.weight) {
      newErrors.weight = 'Please enter weight';
      formValid = false;
    }

    
    if (!formData.height) {
      newErrors.height = 'Please enter height';
      formValid = false;
    }

    if (!formData.activityLevel) {
      newErrors.activityLevel = 'Please select activity level';
      formValid = false;
    }

    if (!formData.goal) {
      newErrors.goal = 'Please select goal';
      formValid = false;
    }

    if (formValid) {
      localStorage.setItem('formData', JSON.stringify(formData));
      setSubmitted(true);
    } else {
      setErrors(newErrors);
    }
  };

  const resetForm = () => {
    localStorage.removeItem('formData');
    setFormData({
      age: '',
      weight: '',
      height: '',
      activityLevel: '',
      dietaryPreferences: '',
      goal: '',
    });
    setErrors({
      age: '',
      weight: '',
      height: '',
      activityLevel: '',
      goal: '',
    });
    setSubmitted(false);
  };

  const activityLevels = ['Inactive', 'Slightly active', 'Moderately active', 'Highly active'];

  return (
    <div>
      <h1>Diet Plan</h1>
      {localStorage.getItem('isLoggedIn') === 'true' && submitted ? (
        <div>
          <h2>Your Weekly Diet Plan</h2>
          <div className="diet-plan">
            <pre>{dietPlans[formData.goal]}</pre>
          </div>
          <button onClick={resetForm}>Reset</button>
        </div>
      ) : (
        <form className="form-container" onSubmit={handleSubmit}>
          <label>
            Age:
            <input type="number" name="age" value={formData.age} onChange={handleInputChange} />
            <span className="error">{errors.age}</span>
          </label>
          <label>
            Weight (kg):
            <input type="number" name="weight" value={formData.weight} onChange={handleInputChange} />
            <span className="error">{errors.weight}</span>
          </label>
          <label>
            Height (cm):
            <input type="number" name="height" value={formData.height} onChange={handleInputChange} />
            <span className="error">{errors.height}</span>
          </label>
          <label>
            Activity Level:
            <select name="activityLevel" value={formData.activityLevel} onChange={handleInputChange}>
              <option value="">Select Activity Level</option>
              {activityLevels.map((level) => (
                <option key={level} value={level}>{level}</option>
              ))}
            </select>
            <span className="error">{errors.activityLevel}</span>
          </label>
          <label>
            Dietary Preferences:
            <input type="text" name="dietaryPreferences" value={formData.dietaryPreferences} onChange={handleInputChange} />
          </label>
          <label>
            Goal:
            <select name="goal" value={formData.goal} onChange={handleInputChange}>
              <option value="">Select Goal</option>
              <option value="weight loss">Weight Loss</option>
              <option value="muscle gain">Muscle Gain</option>
              <option value="overall health improvement">Overall Health Improvement</option>
            </select>
            <span className="error">{errors.goal}</span>
          </label>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default DietPlan;
