import React from 'react';

const ProjectDetails = (props) => {
    const id = props.match.params.id
    console.log(props)
    return ( 
        <div className='ProjectList'>
            <div className='card'>
                <div className='card-body'>
                    <div className='card-title'>Project Title {id}</div>
                    <div className='card-text'>
                        <p>
                            Lorem Ipsum better hope that there are no "tapes"
                            of our conversations before he starts leaking to the press!
                            My placeholder text, I think, is going to end up being very
                            good with women. Be careful, or I will spill the beans on your
                            placeholder text. Does everybody know that pig named Lorem Ipsum?
                            She's a disgusting pig, right?
                            Despite the constant negative ipsum covfefe.
                            I'm speaking with myself, number one, because I have a
                            very good brain and I've said a lot of things. We are 
                            oing to make placeholder text great again. Greater than ever before.
                        </p>
                    </div>
                    <div>Posted by Author</div>
                    <div>March 11, 12:12pm</div>
                </div>    
            </div>
        </div>
     )
}
 
export default ProjectDetails;