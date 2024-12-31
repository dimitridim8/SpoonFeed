# SpoonFeed
🥄 **Project Overview**

SpoonFeed is a full-stack web application designed for food enthusiasts to log meals, share recipes, and maintain a healthy lifestyle through a collaborative and user-friendly platform. It combines meal tracking with recipe sharing to create an engaging experience for users looking to improve their nutrition and culinary skills.

---

## **Features**

1. **Meal Logging:**
   - Users can log their meals by specifying the meal name, calories, protein, carbs, and fat.
   - Logged meals are displayed in chronological order, providing a visual history of their diet.
   - Data is user-specific, ensuring each user can view and manage their own logs.

2. **Recipe Sharing:**
   - Allows users to upload recipes with a title, description, and image.
   - Recipes are displayed in a feed sorted by the most recent uploads.
   - Users can share their creations with others to inspire healthy eating habits.

3. **User Authentication:**
   - Secure user registration and login with hashed passwords.
   - Token-based authentication ensures secure API access.

4. **Responsive Design:**
   - Mobile-first, responsive interface for seamless access across devices.

5. **Image Upload Support:**
   - Users can attach images to recipes, making them visually appealing.

6. **Secure Backend:**
   - Uses MongoDB for data storage with models for Users, Meals, and Recipes.
   - RESTful API design ensures scalability and performance.

---

## 🛠️ **Tech Stack**

### **Frontend:**
- **React.js** - For building a responsive and interactive user interface.
- **CSS** - For styling and layout.

### **Backend:**
- **Node.js** and **Express.js** - For server-side logic and API routes.
- **MongoDB** with **Mongoose** - For database and schema modeling.

### **Authentication:**
- **JWT (JSON Web Tokens)** - For secure user authentication.

---

## **Instructions**
to run backend: <br />
cd server <br />
npm install <br />
npm install multer <br />
npm install express <br />
npm install dotenv <br />
npm install cookie-parser <br />
node server.js <br />

to run frontend: <br />
cd client/src <br />
npm install <br />
npm start <br />

to run mongodb: <br />
mongosh <br />
use spoonfeed; <br />
show collections; <br />

alternative if it has proper installs: <br />
choco install make (as administrator) <br />
make <br />
