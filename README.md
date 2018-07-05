
# Questions

1. Run npm start

2. What can be done to make this more reusable
    as a component?
  
  The boxes can be made reusable, as they share the same properties in CSS except for the colour, and the Box constructor can them be called and assigned a class based on its colour. (as an example, see './src/Box.js');

3. What can be done to turn this into a
    production-ready product for sale?

  - ensure code is clean;
  - TDD so app does not break at any point and is robust;
  - environment is set as production (not development or test);
  - run npm build to ensure the app is deployment-ready;
  - deploy on a hosting service such as Heroku or AWS.