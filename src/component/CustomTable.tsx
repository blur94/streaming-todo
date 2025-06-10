import {
  Skeleton,
  Table,
  TableProps,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core";
import React, { JSX } from "react";

interface CustomTableProps extends TableProps {
  headers: string[];
  rows: JSX.Element[] | JSX.Element;
  loading?: boolean;
}

export const CustomTable = ({ headers, rows, loading }: CustomTableProps) => {
  if (!rows)
    return (
      <div>
        <p>Empty table</p>
      </div>
    );
  return (
    <Table highlightOnHover withTableBorder withColumnBorders>
      <TableThead>
        <TableTr>
          {headers.map((header, index) => {
            return <TableTh key={index}>{header}</TableTh>;
          })}
        </TableTr>
      </TableThead>

      <TableTbody>{loading ? <p>Loading...</p> : rows}</TableTbody>
    </Table>
  );
};

export const DynamicSkeleton = (row: number) => {
  return Array.from({ length: 5 }).map((_, index) => (
    <TableTr key={index}>
      {Array.from({ length: row }).map((_, innerIdx) => (
        <TableTd key={innerIdx}>
          <Skeleton h={20} w={100} />
        </TableTd>
      ))}
    </TableTr>
  ));
};
