import { FC } from 'react';
import './glitch.css';

interface GlitchTextProps {
  text: string;
}
export const GlitchText: FC<GlitchTextProps> = ({ text }) => {
  return (
    <div className="body-style">
      <div className="glitch-text" title={text}>
        {text}
      </div>
    </div>
  );
};
