import styled from 'styled-components';
import { modularScale, rgba } from 'polished';

export const Resume = styled.div`
  position: absolute;
`;

export const DescriptionList = styled.dl``;

export const DescriptionListTerm = styled.dt`
  font-size: ${modularScale(0)};
  line-height: ${modularScale(1)};
  font-weight: 200;
  margin-bottom: ${modularScale(-2)};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const DescriptionListDescription = styled.dd`
  font-size: ${modularScale(0)};
  line-height: ${modularScale(1)};
  font-weight: 200;
  margin-bottom: ${modularScale(1)};
  margin-left: 0;
`;

export const LabelList = styled.ul`
  padding: 0;
`;

export const LabelListItem = styled.li`
  display: inline-block;
  margin-bottom: ${modularScale(-1)};
  line-height: ${modularScale(2)};
  margin-right: ${modularScale(-2)};
`;

export const Jobs = styled.div`
  margin-top: ${modularScale(1)};
`;

export const Job = styled.div`
  border-top: 1px solid ${({ theme }) => rgba(theme.colors.primary, 0.08)};
  margin-top: ${modularScale(0)};
  padding-top: ${modularScale(2)};
  margin-bottom: ${modularScale(0)};
`;

export default { Resume, DescriptionList, DescriptionListTerm, DescriptionListDescription, LabelList, LabelListItem, Jobs, Job };
