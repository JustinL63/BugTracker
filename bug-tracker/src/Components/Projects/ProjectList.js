import React from 'react';
import ProjectSummary from './ProjectSummary'

const ProjectList = (props) => {
    return ( 
        <div className='ProjectList'>
           <ProjectSummary />
           <ProjectSummary />
           <ProjectSummary />
           <ProjectSummary />
        </div>
     );
}
 
export default ProjectList;