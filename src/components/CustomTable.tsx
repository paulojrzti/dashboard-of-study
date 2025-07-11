import styled from 'styled-components'
import type { CustomTableProps } from '@/types'
import { pxToRem } from '@/utils'

const TableWrapper = styled.div`
  overflow-x: auto;
  width: 100%;
  table {
    width: 100%;
    border-collapse: collapse;

    th,
    td {
      height: ${pxToRem(48)};
      padding: 0 ${pxToRem(8)} 0 0;
      &:last-child {
        text-align: right;
        padding: 0;
      }
    }
    th {
      color: ${(props) => props.theme.typography.subtitle};
      font-weight: 600;
    }
    tr {
      border-bottom: ${(props) => props.theme.appDefaultFont};
      &:last-child {
        border-bottom: none;
      }
    }
  }
`

export default function CustomTable(props: CustomTableProps) {
  const { headers, rows } = props

  return (
    <TableWrapper>
      <table>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th key={index}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableWrapper>
  )
}
