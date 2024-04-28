"use client"

import React, { useRef, useState, useEffect } from "react"
import { DataTable, DataTableFilterMeta } from "primereact/datatable"
import { Column } from "primereact/column"
import { FilterMatchMode, FilterOperator } from "primereact/api"
import { InputText } from "primereact/inputtext"
import jsonData from "../../data/csvjson.json"

type Record = {
  "ACT Symbol": string,
  "Company Name": string,
  "Exchange": string,
  "NASDAQ Symbol": string,
  "Round Lot Size": number
}

const TableDataPage = () => {

  const searchField = useRef<HTMLInputElement>(null)
  const [tickers, setTickers] = useState<Record[]>([])
  const [filters, setFilters] = useState<DataTableFilterMeta>({
    'ACT_SYMBOL': { value: null, matchMode: FilterMatchMode.STARTS_WITH },
  })
  const [loading, setLoading] = useState(false)
  const [globalFilterValue, setGlobalFilterValue] = useState("")

  useEffect(() => {
    setTickers(jsonData)
    searchField.current?.focus()
  }, [])

  const onGlobalFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    tickers.filter((record) => {
      setTickers(prev => {
        return prev.filter((record) => {
          return record["ACT Symbol"].toLowerCase().includes(e.target.value.toLowerCase())
        })
      })
    })

    setGlobalFilterValue(e.target.value)

    if (e.target.value === "") {
      setTickers(jsonData)
    }
  }

  
  const renderHeader = () => {
    return(
      <div className="mb-4">
        <InputText
          type="search"
          placeholder="Search by ACT Symbol"
          className="w-full"
          data-testid="search-input"
          ref={searchField}
          value={globalFilterValue}
          onChange={onGlobalFilterChange}
        />
      </div>
    )
  }

  return(
    <main className="flex align-items-center justify-content-center flex-wrap" data-testid="table-data">
      <div className="surface-card p-4 shadow-2 border-round w-full lg:w-10">
        <DataTable
          value={tickers}
          paginator
          rows={10}
          dataKey="ACT Symbol"
          filters={filters}
          filterDisplay="row"
          loading={loading}
          globalFilterFields={["ACT Symbol"]}
          header={renderHeader}
          emptyMessage="No records found"
          stripedRows
        >
          {/* TODO: MAP this*/}
          <Column field="ACT Symbol" header="ACT Symbol" sortable></Column>
          <Column field="Company Name" header="Company Name" sortable></Column>
          <Column field="Exchange" header="Exchange" sortable></Column>
          <Column field="NASDAQ Symbol" header="NASDAQ Symbol" sortable></Column>
          <Column field="Round Lot Size" header="Round Lot Size" sortable></Column>
        </DataTable>
      </div>
      
    </main>
  )
}

export default TableDataPage