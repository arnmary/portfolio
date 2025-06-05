import React from 'react';
import skills from '../data/skills.json';
import learnSkills from '../data/learnSkills.json';
import otherSkills from '../data/otherSkills.json';

function SkillCategory({ title, data }) {
  return (
    <>
      <h4 className='blockTitle category'>{title}</h4>
      <div className="cardBlock">
        {data.map((skill, id) => (
          <div className="skillCard" key={id}>
            <img src={skill.image} alt={skill.alt || skill.title} />
            <h5 className="skillTitle">{skill.title}</h5>
          </div>
        ))}
      </div>
    </>
  );
}

export default function Skills() {
  return (
    <>
      <div className="skillsBlock" >
        <h3 className="blockTitle skillBlockTitle"id="skills" >Skills</h3>
      </div>

      <SkillCategory title="USING NOW:" data={skills} />
      <SkillCategory title="LEARNING:" data={learnSkills} />
      <SkillCategory title="OTHER SKILLS:" data={otherSkills} />
    </>
  );
}
