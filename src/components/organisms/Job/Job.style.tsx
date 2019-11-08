import styled from 'styled-components';
import { modularScale } from 'polished';
import { animated } from 'react-spring';

import { Copy } from 'components/atoms/Copy';

export const Job = styled.div`
  position: relative;
`;

export const TitleContainer = styled.div`
  margin-bottom: ${modularScale(0)};
`;

export const Date = styled.div`
  font-size: ${modularScale(0)};
  line-height: ${modularScale(2)};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${modularScale(2)};
  display: block;
`;

export const DateSegment = styled.span`
  margin-right: ${modularScale(-3)};
`;

export const TimeAgo = styled.span`
  display: inline-block;
`;

export const Description = styled(Copy)`
  white-space: pre-line;
  margin-bottom: ${modularScale(2)};
`;

export const Label = styled.span``;

export const Roles = styled.ul`
  line-height: ${modularScale(1)};
  margin: 0;
  padding: 0;
  margin-bottom: ${modularScale(-1)};
  font-size: ${modularScale(1)};
  font-weight: 300;
`;

export const Role = styled.li`
  display: inline-block;

  &:after {
    content: '/';
    padding-left: ${modularScale(-4)};
    padding-right: ${modularScale(-4)};
  }
  &:last-child:after {
    content: '';
    padding 0;
  }
`;

export const Projects = styled(animated.div)`
  position: relative;
  overflow: hidden;
`;

export const ProjectContainer = styled.div`
  display: inline-block;
  width: 100%;
`;

export default { Job, TitleContainer, Date, DateSegment, TimeAgo, Description, Label, Roles, Role, Projects, ProjectContainer };
