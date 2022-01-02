import React from 'react';

import ResolutionItem from './resolution_item';
import { Resolution } from '../types/resolution';

type ResolutionListProps = {
  resolutions: Resolution[];
};

const ResolutionList: React.FC<ResolutionListProps> = ({ resolutions }: ResolutionListProps) => (
  <ul className="resolution-list">
    {resolutions.map(resolution => (
      <ResolutionItem
        resolution={resolution}
        key={resolution.goal}
      />
    ))}
  </ul>
)

export default ResolutionList;
