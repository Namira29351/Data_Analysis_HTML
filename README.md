# Food Habits 

## Which food idenity do people most ascribe themselves as?
There are many things people can identify as when it comes to eating habits. Vegeterian, Pescaterian, etc. It is important to be able to provide food for anybody with any food indentity. I feel it is important to see what types of food a certain gender eats so any kind of advertising for food can be intentional. Any resturuant or cafe can use this data to see just how much of what food they need.

## Dataset
- Source: https://www.kaggle.com/datasets/sonalishanbhag/dietaryhabitssurvey/data
- Description: A survey was conducted among various to see which ages and genders have what kind of eating habits and opinions. Poeple from teens to senior citizens were surveyed and asked about their opinions when it came to their diets. 
- Size: There are about 78 rows that represent each person that was surveyed. There are 26 columns to represent each question they were asked about. 
- Quality: The survey was done for a medium-sized group of people and was only based off of their opinions.

## Features
1. Interactive Analysis
   - Feature 1: Users are abke to see a list of options that go with viewing data on women and their diets.
   - Feature 2: Users are abke to see a list of options that go with viewing data on men and their diets.
   
2. Data Processing
   - Feature 1: The code takes the entire dataset and only filters out food identities and the female gender.
   - Feature 2: The code counts up the number of woman in each unique food identity and matches them up.
   - Feature 3: The code takes the entire dataset and only filters out food identities and the male gender.
   - Feature 4: The code counts up the number of each man in each unique food identity and matches them up.

3. Visualizations
   - Type 1: A bar graph of the data is shown with the x-axis being the name of the food identity and the y-axis being the number of women and men that have a certain food identity. Men are attributed the blue colored bar graph and women are attributed the pink color bar graph.

## Program Structure
project/
├── README.md
├── Terminal_Analysis       # Javascript terminal data analysis directory 
    └── first_project.js    
├── Visualization           # Data visualization directory 
    └── first_project.html   
└── data/                   # Data directory
    └── dataset.csv