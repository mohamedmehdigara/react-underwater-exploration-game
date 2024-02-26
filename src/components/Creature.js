import React, {useState, useEffect} from 'react';
import { CreatureContainer, CreatureImage, Eye, Fin } from './Styled';

function Creature({ type, color, size, onClick }) {
  const [age, setAge] = useState(0); // Track the age of the creature
  const [lifecycleStage, setLifecycleStage] = useState('hatchling');
  const [isReproducing, setIsReproducing] = useState(false);
  const [isDead, setIsDead] = useState(false);

 
  useEffect(() => {
    const ageInterval = setInterval(() => {
      // Increase age over time
      setAge(prevAge => prevAge + 1);

      // Update lifecycle stage based on age
      if (age >= 0 && age < 5) {
        setLifecycleStage('hatchling');
      } else if (age >= 5 && age < 15) {
        setLifecycleStage('juvenile');
      } else if (age >= 15 && age < 30) {
        setLifecycleStage('prime adult');
      } else if (age >= 30 && age < 40) {
        setLifecycleStage('senior');
      } else {
        // Creature dies after reaching maximum age
        setIsDead(true);
        clearInterval(ageInterval);
      }
    }, 1000); // Update age every second

    return () => clearInterval(ageInterval);
  }, [age]);

  useEffect(() => {
    // Implement reproduction logic here
    if (lifecycleStage === 'prime adult' && Math.random() < 0.05) {
      setIsReproducing(true);
      setTimeout(() => {
        setIsReproducing(false);
        // Spawn offspring here
      }, 5000); // Wait for 5 seconds before completing reproduction
    }
  }, [lifecycleStage]);

  function handleClick() {
    if (!isDead) {
      // Handle creature interaction
      onClick();
    }
  }

  return (
    <CreatureContainer>
      <CreatureImage
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        onClick={onClick}
      >
        {type === 'fish' && (
          <>
            {/* Fish body */}
            <circle cx="50" cy="50" r={size} fill={color} />
            {/* Fish eyes */}
            <Eye cx="40" cy="45" />
            <Eye cx="60" cy="45" />
            {/* Fish mouth */}
            <path d="M40 55 Q50 60 60 55" fill="none" stroke="black" strokeWidth="2" />
            {/* Fish tail */}
            <path d="M80 50 Q85 40 85 50 Q85 60 80 50" fill={color} stroke="none" />
            {/* Fish fins */}
            <Fin x1="30" y1="50" x2="20" y2="60" />
            <Fin x1="70" y1="50" x2="80" y2="60" />
            {/* Fish scales */}
            <circle cx="45" cy="50" r="2" fill="#fff" />
            <circle cx="50" cy="45" r="2" fill="#fff" />
            <circle cx="55" cy="50" r="2" fill="#fff" />
          </>
        )}
        {type === 'jellyfish' && (
          <>
            {/* Jellyfish body with gradient color */}
            <defs>
              <radialGradient id="jellyfishGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                <stop offset="0%" style={{ stopColor: '#fff', stopOpacity: 0 }} />
                <stop offset="100%" style={{ stopColor: color, stopOpacity: 1 }} />
              </radialGradient>
            </defs>
            <circle cx="50" cy="50" r={size * 1.5} fill="url(#jellyfishGradient)" />

            {/* Jellyfish tentacles with translucent areas */}
            <g stroke={color} strokeWidth="2">
              {/* Main tentacles */}
              <path
                d={`M ${50 - size * 0.5} ${85 + size * 1.5} 
                  Q ${50 - size * 1.5} ${110 + size * 1.5} ${50 - size * 2.5} ${150 + size * 1.5}`}
                fill="none"
              />
              <path
                d={`M ${50 + size * 0.5} ${85 + size * 1.5} 
                  Q ${50 + size * 1.5} ${110 + size * 1.5} ${50 + size * 2.5} ${150 + size * 1.5}`}
                fill="none"
              />

              {/* Secondary tentacles */}
              <path
                d={`M ${50 - size * 0.3} ${80 + size * 1.5} 
                  Q ${50 - size * 0.9} ${105 + size * 1.5} ${50 - size * 1.8} ${135 + size * 1.5}`}
                fill="none"
              />
              <path
                d={`M ${50 + size * 0.3} ${80 + size * 1.5} 
                  Q ${50 + size * 0.9} ${105 + size * 1.5} ${50 + size * 1.8} ${135 + size * 1.5}`}
                fill="none"
              />
            </g>
          </>
        )}
        {type === 'shark' && (
          <>
            {/* Shark body */}
            <circle cx="50" cy="50" r={size * 2} fill={color} />

            {/* Shark fins */}
            <Fin x1="30" y1="50" x2="20" y2="60" />
            <Fin x1="70" y1="50" x2="80" y2="60" />
            <Fin x1="40" y1="70" x2="30" y2="80" />
            <Fin x1="60" y1="70" x2="70" y2="80" />

            {/* Shark teeth */}
            <circle cx="50" cy="70" r="2" fill="#fff" />
            <circle cx="45" cy="70" r="2" fill="#fff" />
            <circle cx="55" cy="70" r="2" fill="#fff" />
            <circle cx="40" cy="55" r="2" fill="#fff" />
            <circle cx="60" cy="55" r="2" fill="#fff" />

            {/* Shark tail */}
            <path d={`M ${50 - size * 2.5} ${50 + size * 2} L ${50 - size * 3.5} ${50 + size} L ${50 - size * 2.5} ${50 + size * 1.5} Z`} fill={color} />

            {/* Shark gills */}
            <g fill="#fff">
              <circle cx="45" cy="50" r="2" />
              <circle cx="47" cy="53" r="2" />
              <circle cx="49" cy="56" r="2" />
              <circle cx="51" cy="59" r="2" />
            </g>

            {/* Shark dorsal fin */}
            <path d={`M ${50} ${50 - size * 2.5} L ${50 - size} ${50 - size * 3.5} L ${50 + size} ${50 - size * 3.5} Z`} fill={color} />
          </>
        )}
        {type === 'turtle' && (
          <>
            {/* Turtle body */}
            <circle cx="50" cy="50" r={size * 1.5} fill={color} />
            {/* Turtle shell */}
            <circle cx="50" cy="50" r={size * 2} fill="#6b8e23" />
            {/* Turtle head */}
            <circle cx="40" cy="50" r={size / 2} fill={color} />
            {/* Turtle legs */}
            <Fin x1="35" y1="55" x2="30" y2="60" />
            <Fin x1="65" y1="55" x2="70" y2="60" />
            <Fin x1="35" y1="45" x2="30" y2="40" />
            <Fin x1="65" y1="45" x2="70" y2="40" />
          </>
        )}
        {type === 'dolphin' && (
          <>
            {/* Dolphin body */}
            <circle cx="50" cy="50" r={size * 1.5} fill={color} />

            {/* Dolphin fins */}
            <Fin x1="40" y1="50" x2="30" y2="60" />
            <Fin x1="60" y1="50" x2="70" y2="60" />

            {/* Dolphin tail */}
            <Fin x1="30" y1="55" x2="20" y2="50" />
            <Fin x1="70" y1="55" x2="80" y2="50" />

            {/* Dolphin dorsal fin */}
            <path d={`M ${50} ${50 - size * 1.5} L ${50 - size * 0.5} ${50 - size * 2.5} L ${50 + size * 0.5} ${50 - size * 2.5} Z`} fill={color} />

            {/* Dolphin flippers */}
            <g fill={color}>
              <path d={`M ${50 - size * 1.5} ${50 - size * 0.5} L ${50 - size * 2} ${50 + size * 0.5} L ${50 - size * 1.2} ${50 + size * 1} Z`} />
              <path d={`M ${50 + size * 1.5} ${50 - size * 0.5} L ${50 + size * 2} ${50 + size * 0.5} L ${50 + size * 1.2} ${50 + size * 1} Z`} />
            </g>
          </>
        )}
        {type === 'seahorse' && (
          <>
            {/* Seahorse body */}
            <circle cx="50" cy="50" r={size / 2} fill={color} />
            {/* Seahorse tail */}
            <Fin x1="50" y1="50" x2="60" y2="60" />
            <Fin x1="50" y1="50" x2="60" y2="40" />
            {/* Seahorse snout */}
            <circle cx="55" cy="50" r="2" fill="#fff" />
            {/* Seahorse eye */}
            <Eye cx="45" cy="45" />
          </>
        )}
      </CreatureImage>
      {isReproducing && <span>Reproducing...</span>}
      {isDead && <span>☠️ Dead</span>}
      {/* Label each sea animal */}
      <label>{type}</label>
    </CreatureContainer>
  );
}

export default Creature;
