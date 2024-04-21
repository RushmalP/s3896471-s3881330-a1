import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./fragments/Navbar";
import Footer from "./fragments/Footer";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import Specials from './pages/Specials';
import SignIn from './pages/SignIn';
import DietPlan from './pages/DietPlan';
import Cart from './pages/Cart';
import { getUser } from "./data/userPass";
import LoginAlert from './fragments/LoginAlert'; 

function App() {
  const [username, setUsername] = useState(getUser());
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [showLoginAlert, setShowLoginAlert] = useState(false);
  
  const loginUser = (username) => {
    setUsername(username);
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    setShowLoginAlert(true);
  };

  const logoutUser = () => {
    setUsername(null);
    localStorage.setItem('isLoggedIn', 'false');
    setIsLoggedIn(false);
  };

  const closeLoginAlert = () => {
    setShowLoginAlert(false);
  };

  useEffect(() => {
    const specials = [
      { id: 'organic_apples', name: 'Organic Apples', description: 'Half a dozen of juicy organic apples.', price: 3.99 },
      { id: 'whole_grain_bread', name: 'Whole Grain Bread', description: 'Fresh and healthy whole grain bread.', price: 3.49 },
      { id: 'greek_yogurt', name: 'Greek Yogurt', description: '1 kg of delicious greek yogurt for gut health.', price: 7.99 },
      { id: 'organic_strawberries', name: 'Organic Strawberries', description: '500 grams of sweet, hand-picked strawberries.', price: 5.99 },
      { id: 'cherry_tomatoes', name: 'Cherry Tomatoes', description: '500 grams of ripe cherry tomatoes.', price: 4.49 },
      { id: 'avocados', name: 'Avocados', description: '500 grams of nutritious avocados.', price: 4.99 },
      { id: 'free_range_eggs', name: 'Free-range Eggs', description: 'A dozen of large eggs.', price: 10.49 },
      { id: 'mushrooms', name: 'Mushrooms', description: '500 grams of organically grown mushrooms.', price: 8.99 },
      { id: 'organic_oranges', name: 'Organic Oranges', description: 'Half a dozen of fresh oranges rich in vitamin C.', price: 4.99 },
    ];
    localStorage.setItem('specials', JSON.stringify(specials));
  }, []);

  const dietPlans = {
    'weight loss': `
      Day 1:
      - Breakfast: Scrambled eggs with spinach
      - Lunch: Grilled chicken salad
      - Dinner: Baked salmon with steamed vegetables
      
      Day 2:
      - Breakfast: Oatmeal with berries
      - Lunch: Quinoa and black bean salad
      - Dinner: Turkey chili with avocado
      
      Day 3:
      - Breakfast: Greek yogurt with mixed fruits
      - Lunch: Lentil soup with whole grain roll
      - Dinner: Grilled chicken breast with roasted sweet potatoes
      
      Day 4:
      - Breakfast: Whole grain toast with avocado
      - Lunch: Vegetable stir-fry with tofu
      - Dinner: Grilled shrimp with quinoa and asparagus
      
      Day 5:
      - Breakfast: Cottage cheese with pineapple
      - Lunch: Chickpea salad with cucumber, tomato, and feta cheese
      - Dinner: Baked cod with quinoa pilaf
      
      Day 6:
      - Breakfast: Smoothie with spinach, banana, and protein powder
      - Lunch: Mixed greens salad with grilled chicken
      - Dinner: Stir-fried tofu with mixed vegetables
      
      Day 7:
      - Breakfast: Poached eggs on whole grain toast
      - Lunch: Greek salad with grilled shrimp
      - Dinner: Baked chicken breast with roasted vegetables
    `,
    'muscle gain': `
      Day 1:
      - Breakfast: Protein pancakes with bananas
      - Lunch: Grilled chicken breast with sweet potatoes
      - Dinner: Beef stir-fry with brown rice
      
      Day 2:
      - Breakfast: Egg white omelette with spinach and feta cheese
      - Lunch: Turkey sandwich on whole grain bread
      - Dinner: Baked cod with quinoa and broccoli
      
      Day 3:
      - Breakfast: Protein smoothie with oats and banana
      - Lunch: Lean beef burger with whole grain bun
      - Dinner: Grilled salmon with sweet potato fries
      
      Day 4:
      - Breakfast: Greek yogurt with honey and mixed berries
      - Lunch: Grilled turkey breast with quinoa salad
      - Dinner: Stir-fried tofu with brown rice
      
      Day 5:
      - Breakfast: Cottage cheese with berries
      - Lunch: Grilled chicken wrap with veggies
      - Dinner: Baked cod with steamed vegetables
      
      Day 6:
      - Breakfast: Protein oatmeal with almond butter
      - Lunch: Turkey and avocado sandwich on whole grain bread
      - Dinner: Beef kebabs with grilled vegetables
      
      Day 7:
      - Breakfast: Scrambled eggs with smoked salmon
      - Lunch: Chicken and quinoa salad with avocado
      - Dinner: Grilled steak with baked potatoes
    `,
    'overall health improvement': `
      Day 1:
      - Breakfast: Overnight oats with chia seeds and mixed berries
      - Lunch: Quinoa salad with mixed greens and grilled veggies
      - Dinner: Baked chicken breast with roasted sweet potatoes and broccoli
      
      Day 2:
      - Breakfast: Whole grain toast with avocado and poached eggs
      - Lunch: Lentil soup with whole grain roll
      - Dinner: Grilled tofu with brown rice and steamed vegetables
      
      Day 3:
      - Breakfast: Smoothie with spinach, banana, almond milk, and protein powder
      - Lunch: Chickpea salad with cucumber, tomato, and feta cheese
      - Dinner: Baked cod with quinoa pilaf and green beans
      
      Day 4:
      - Breakfast: Greek yogurt with granola and mixed fruits
      - Lunch: Mixed greens salad with grilled shrimp
      - Dinner: Grilled chicken breast with quinoa salad
      
      Day 5:
      - Breakfast: Whole grain pancakes with fresh fruit
      - Lunch: Turkey and avocado wrap with veggies
      - Dinner: Vegetable stir-fry with tofu
      
      Day 6:
      - Breakfast: Chia seed pudding with almond milk and berries
      - Lunch: Grilled salmon with sweet potato mash
      - Dinner: Lentil curry with brown rice
      
      Day 7:
      - Breakfast: Poached eggs on whole grain toast with avocado
      - Lunch: Quinoa and black bean salad with grilled chicken
      - Dinner: Baked cod with steamed vegetables
    `,
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Router>
        <Navbar username={username} logoutUser={logoutUser} isLoggedIn={isLoggedIn} />
        <main role="main">
          <div className="container my-3">
            <Routes>
              <Route path="/" element={<Home username={username} />} />
              <Route path="/login" element={<Login loginUser={loginUser} />} />
              <Route path="/profile" element={<Profile logoutUser={logoutUser} />} />
              <Route path="/specials" element={<Specials isLoggedIn={isLoggedIn} />} />
              <Route path="/signIn" element={<SignIn loginUser={loginUser} />} />
              <Route path="/dietplan" element={<DietPlan dietPlans={dietPlans} />} />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </div>
        </main>
        <Footer />
        <LoginAlert show={showLoginAlert} onClose={closeLoginAlert} />
      </Router>
    </div>
  );
}

export default App;

