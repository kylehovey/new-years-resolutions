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
     goal : "Gain 10 pounds",
     progressBar: {
       target : 10,
       units : "lbs",
       progress : 0,
     },
     type: ResolutionType.progress,
   },{
     goal : "Learn 3 programming languages",
     progressBar: {
       target : 3,
       units : "languages",
       progress : 0,
     },
     type: ResolutionType.progress,
   },{
     goal : "Deploy one full-stack application for public use",
     done: false,
     type: ResolutionType.completion,
   }
];

export default resolutions;
