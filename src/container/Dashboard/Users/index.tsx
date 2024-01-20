"use client";

import React, { useContext, useEffect, useMemo, useState } from 'react'
import {
    useGlobalFilter,
    usePagination,
    useRowSelect,
    useSortBy,
    useTable,
} from "react-table";
import TableCheckbox from '@/_shared/components/Table/TableCheckbox';
import { Button, MenuItem, Select } from '@mui/material';
import TableSearch from '@/_shared/components/Table/TableSearch';
import Image from 'next/image';
import { plus } from '@/_shared/assets/icons';
import TableLayout from '@/_shared/components/Table/TableLayout';
import TablePagination from '@/_shared/components/Table/TablePagination';
import DataTableCard from '@/_shared/components/DataTableCard';
import AppContext from '@/_lib/contextApi';
import AllUsersTableHeader from './tableColumn';
import Actions from './tableActions';
import { useAppSelector } from '@/store';
import { I_User } from '@/types/user';
import EmptyUserState from './EmptyUserState';
import CreateUser from '../Modal/CreateUser';

const Users = () => {
    const {setBreadcrumbsData, setToggleCreateUser} = useContext(AppContext);
    const [retrieveData, setRetrieveData] = useState<I_User[]>([]);

    const userInfo = useAppSelector(
        (state) => state.user.user_info);

    const data = useMemo(() => {
        if (retrieveData) {
            return retrieveData;
        }
        
        return [{}];
    }, [retrieveData]);

    const [selectedRowValues, setSelectedRowValues] = useState({});

    const columns: any = useMemo(
        () =>
        AllUsersTableHeader((item) => (
            <Actions/>
          )),
        []
    );

    useEffect(() => {
        if (userInfo) {
            setRetrieveData(userInfo);
        }

        setBreadcrumbsData({
            pathName: 'Users',
            length: String(userInfo.length || 0)
        })

    }, [userInfo]);

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        prepareRow,
        state,
        setGlobalFilter,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        pageOptions,
        gotoPage,
        pageCount,
        setPageSize,
        selectedFlatRows,
        state: { selectedRowIds },
        toggleAllRowsSelected,
      } = useTable(
        {
          columns,
          data,
          initialState: { pageIndex: 0 },
        },
        useGlobalFilter,
        useSortBy,
        usePagination,
        useRowSelect,
        (hooks) => {
          hooks.visibleColumns.push((columns) => [
            {
              id: "selection",
              Header: ({ getToggleAllRowsSelectedProps }) => (
                <TableCheckbox {...getToggleAllRowsSelectedProps()} />
              ),
              Cell: ({ row }: any) => (
                <TableCheckbox {...row.getToggleRowSelectedProps()} />
              ),
            },
            ...columns,
          ]);
        }
    );
    
    const { globalFilter, pageIndex, pageSize } = state;

  return (
    <div className='space-y-8'>
        <div className='py-3  flex flex-col md:flex-row md:items-center md:justify-between'>
            
            <div className="mt-3 space-y-4 md:space-y-0 md:space-x-4 lg:mt-0 w-full flex flex-col md:flex-row lg:w-[17.875rem] xl:w-[30rem] lg:ml-auto">
                <div className="flex-1">
                    <TableSearch
                        filter={globalFilter}
                        setFilter={setGlobalFilter}
                        placeholder={"name / acct number"}
                    />
                </div>

                <div className=''>
                    <Button
                        variant="contained"
                        className="[&.MuiButtonBase-root]:h-[40px] text-sm"
                        // fullWidth
                        onClick={()=>setToggleCreateUser(true)}
                        startIcon={
                            <Image
                            height={24}
                            className=""
                            width={24}
                            src={plus}
                            alt="plus_icon"/>
                            }
                    >
                        <span className="text-sm font-semibold">Add New User</span>
                    </Button>
                </div>

            </div>
        </div>

        <DataTableCard>
            <div className="overflow-x-auto w-full">
                <TableLayout
                    getTableProps={getTableProps}
                    headerGroups={headerGroups}
                    getTableBodyProps={getTableBodyProps}
                    retrieveData={data}
                    page={page}
                    prepareRow={prepareRow}
                />
            </div>

            {data?.length! < 1 && (
                <div className="h-[26rem] flex flex-col justify-center">
                    <EmptyUserState />
                </div>
            )}
        
            <TablePagination
                gotoPage={gotoPage}
                previousPage={previousPage}
                nextPage={nextPage}
                canPreviousPage={canPreviousPage}
                canNextPage={canNextPage}
                pageCount={pageCount}
                pageIndex={pageIndex}
                pageOptions={pageOptions}
            />
        </DataTableCard>
        <CreateUser/>
    </div>
  )
}

export default Users