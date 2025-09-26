import React from 'react'

export interface TableColumn {
  key: string
  label: string
  render?: (value: any, row: any) => React.ReactNode
  className?: string
}

export interface TableProps {
  columns: TableColumn[]
  data: any[]
  className?: string
}

export default function Table({ columns, data, className = '' }: TableProps) {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className='table w-full'>
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} className={column.className}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              {columns.map((column) => (
                <td key={column.key} className={column.className}>
                  {column.render
                    ? column.render(row[column.key], row)
                    : row[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
