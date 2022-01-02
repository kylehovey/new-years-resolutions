export enum ResolutionType {
  progress = 'progress',
  completion = 'completion',
}

export type ProgressBar = {
  target: number;
  progress: number;
  units: string;
};

export type ProgressResolution = {
  goal: string;
  progressBar: ProgressBar;
  type: ResolutionType.progress;
};

export type CompletionResolution = {
  goal: string;
  done: boolean;
  type: ResolutionType.completion;
};

export type Resolution = ProgressResolution | CompletionResolution;

export function isProgress(resolution: Resolution): resolution is ProgressResolution {
  return resolution.type === ResolutionType.progress;
};

export function isCompletion(resolution: Resolution): resolution is CompletionResolution {
  return resolution.type === ResolutionType.completion;
};
