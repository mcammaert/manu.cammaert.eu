import styled from 'styled-components';
import { modularScale } from 'polished';

export const Contact = styled.div`
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

export const Link = styled.dd`
  list-style: none;
  padding: 0;
  margin: 0 0 ${modularScale(-1)} 0;
  opacity: 0.85;
  transition: all 400ms;
  &:hover {
    opacity: 1;
  }
`;

export const Label = styled.a`
  margin-left: ${modularScale(-1)};
  font-size: ${modularScale(1)};
  line-height: 1em;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
`;

export default { Contact, DescriptionList, DescriptionListTerm, DescriptionListDescription, Link, Label };
