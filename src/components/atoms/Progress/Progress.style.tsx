import styled from 'styled-components';
import { modularScale, rgba } from 'polished';

interface BarProps {
  progress: number;
}

export const Progress = styled.div`
  background-color: ${({ theme }) => rgba(theme.colors.secondary, 0.1)};
  border-radius: 3em;
`;

export const Bar = styled.div<BarProps>`
  background-color: ${({ theme }) => rgba(theme.colors.secondary, 0.8)};
  border-radius: 3em;
  width: ${({ progress }) => `${progress * 100}%`};
  height: ${modularScale(0)};
`;

export default { Progress, Bar };
