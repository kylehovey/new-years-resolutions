import React from 'react';

type ProgressBarProps = {
  max: number;
  value: number;
  label: string;
  id: string;
  units?: string;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  max,
  value,
  label,
  id,
  units = '%',
}: ProgressBarProps) => {
  const progId = `progress-${id}`;

  return (
    <div className="progress-bar">
      <label htmlFor={progId}>{label}</label>
      <progress max={max} value={value} id={progId}>
        {value} {units}
      </progress>
    </div>
  );
};

export default ProgressBar;
