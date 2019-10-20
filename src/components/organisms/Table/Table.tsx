import React from 'react';

import { TableProps } from './Table.types';

import S from './Table.style';

const Table: React.FC<TableProps> = ({ children, className }) => <S.Table className={className}>{children}</S.Table>;

export default Table;
