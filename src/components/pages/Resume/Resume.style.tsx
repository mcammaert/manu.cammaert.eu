import styled from 'styled-components';
import { modularScale } from 'polished';

export const Resume = styled.div`
  position: absolute;
`;

export const LabelList = styled.ul`
  padding: 0;
`;

export const LabelListItem = styled.li`
  display: inline-block;
  margin-bottom: ${modularScale(-3)};
  line-height: ${modularScale(2)};
  margin-right: ${modularScale(-3)};
`;

export const Jobs = styled.div`
  margin-top: ${modularScale(1)};
`;

export default { Resume, LabelList, LabelListItem, Jobs };
