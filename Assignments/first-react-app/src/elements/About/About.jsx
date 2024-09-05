import React from 'react';
import './About.css';
import image from '../../assets/todo.jpeg'

function About() {
  return (
    <div className="m-2 m-sm-5">
      <h1 className="text-center mb-4 mt-4">About Us</h1>
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 text-center">
          <img  src={image} alt=" " className="img-fluid mb-4" />
        </div>
        <div className="col-12 col-md-10">
          <p className="justify-content-center">
            A to-do list is an indispensable tool for anyone looking to enhance their productivity and manage tasks effectively. By compiling tasks in a structured format, it provides clarity on what needs to be accomplished, helping to prioritize activities based on their importance and urgency. This organization not only reduces mental clutter but also enhances focus, allowing individuals to tackle tasks more efficiently. As tasks are completed and checked off, there's a sense of accomplishment and motivation that drives further progress. To-do lists also aid in time management by setting clear deadlines and breaking down complex projects into manageable steps. They are adaptable tools, whether used for daily routines, project planning, or long-term goal tracking. Additionally, in team environments, shared to-do lists foster collaboration, ensuring everyone understands their responsibilities and contributes to achieving collective objectives. Ultimately, whether digital or handwritten, a well-maintained to-do list is a powerful ally in achieving personal and professional goals with efficiency and ease.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;