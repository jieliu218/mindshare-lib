import { Providers } from '../providers';
import { MindshareTreemap as Treemap, MindshareTreemapProps } from './Treemap';

export * from "./Treemap";

export type a = string;

export const MindshareTreemap = ({ ...props }: MindshareTreemapProps) => {
  return (
    <Providers>
      <Treemap {...props} />
    </Providers>
  );
};
