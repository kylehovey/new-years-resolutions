import { Resolution, ResolutionType } from './types/resolution';

const resolutions: Resolution[] = [
   {
     goal : "Have a six-month emergency fund",
     progressBar: {
       target : 6,
       units : "months",
       progress : 2,
     },
     type: ResolutionType.progress,
   },{
     goal : "Gain 10 pounds",
     progressBar: {
       target : 10,
       units : "lbs",
       progress : 0,
     },
     type: ResolutionType.progress,
   },{
     goal : "Get VO2 max above 50",
     type: ResolutionType.completion,
     done: false,
   },{
     goal : "Get monthly average resting heart rate below 60",
     type: ResolutionType.completion,
     done: false,
   },{
     goal : "Get monthly average HRV above 55",
     type: ResolutionType.completion,
     done: false,
   },{
     goal : "Be flexible enough to do a full forward fold (head to knees)",
     done: false,
     type: ResolutionType.completion,
   },{
     goal : "Learn 3 programming languages",
     progressBar: {
       target : 3,
       units : "languages",
       progress : 0,
     },
     type: ResolutionType.progress,
   },{
     goal : "Read 3 fiction books",
     progressBar: {
       target : 3,
       units : "books",
       progress : 0,
     },
     type: ResolutionType.progress,
   },{
     goal : "Deploy one full-stack application for public use",
     done: false,
     type: ResolutionType.completion,
   },{
     goal : "Design and order a circuit board",
     done: false,
     type: ResolutionType.completion,
   }
];

export default resolutions;
