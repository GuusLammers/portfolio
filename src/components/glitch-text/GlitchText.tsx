import { FC } from 'react';
import './glitch.css';

interface GlitchTextProps {
  text: string;
  sizePX: number;
}
export const GlitchText: FC<GlitchTextProps> = ({ text, sizePX }) => {
  return (
    <div className="body-style" style={{ fontSize: `${sizePX}px` }}>
      <div className="glitch-text" title={text}>
        {text}
      </div>
    </div>
  );
};
