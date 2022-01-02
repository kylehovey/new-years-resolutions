import React from 'react';

import { Resolution, isProgress, isCompletion } from '../types/resolution';
import ProgressBar from './progress_bar';

type ResolutionProps = {
  resolution: Resolution;
};

const ResolutionItem: React.FC<ResolutionProps> = ({ resolution }: ResolutionProps) => {
  function ResolutionContent() {
    if (isProgress(resolution)) {
      return (
        <ProgressBar
          id={resolution.goal}
          label={resolution.goal}
          max={resolution.progressBar.target}
          value={resolution.progressBar.progress}
          units={resolution.progressBar.units}
        />
      );
    }

    return (
      <span className="goal-text">{resolution.goal}</span>
    );
  }

  function ResolutionValue() {
    if (isProgress(resolution)) {
      const { target, progress } = resolution.progressBar;
      return (
        <span>{progress} / {target}</span>
      );
    }

    return (
      <input
        type="checkbox"
        checked={resolution.done}
      />
    );
  }

  return (
    <li className="resolution">
      <div className="resolution">
        <div className="resolution-value">
          <ResolutionValue />
        </div>
        <div className="resolution-content">
          <ResolutionContent />
        </div>
      </div>
    </li>
  );
};

export default ResolutionItem;
