
import React from 'react'
import { Autocomplete, Grid, TextField, } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const items = [
    { item: 'item1', price: 50 },
    { item: 'item2', price: 72 },
    { item: 'item3', price: 74 },
    { item: 'item4', price: 28 },
    { item: 'item5', price: 57 },

];

const InvoiceTable = (props: any) => {

    const { handelChangeItemQty, selectedItem, itemsall, itemTotal } = props;


    const defaultProps = {
        options: items,
        getOptionLabel: (option: any) => option.item,
    };



    return (
        <div>
            <Grid container spacing={2} sx={{ mt: 0.5 }}>
                {/*------- personal Information portion Start--------- */}
                <Grid item md={12} xs={12} sm={12}>

                    <TableContainer >
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>#</TableCell>
                                    <TableCell >ItemName</TableCell>
                                    <TableCell >Qty</TableCell>
                                    <TableCell >Price</TableCell>
                                    <TableCell >Total</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {

                                    items.map((item: any, i: number) => {

                                        return (

                                            <TableRow
                                                key={i}
                                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                            >
                                                <TableCell component="th" scope="row">
                                                    {i + 1}
                                                </TableCell>
                                                <TableCell component="th" scope="row" sx={{ width: "350px" }}>
                                                    <Autocomplete
                                                        fullWidth
                                                        {...defaultProps}
                                                        id="clear-on-escape"
                                                        clearOnEscape
                                                        onChange={(event, value) => selectedItem(value)}
                                                        renderInput={(params) => (
                                                            <TextField {...params} label="Select Item" variant="standard" />
                                                        )}
                                                    />
                                                </TableCell>

                                                <TableCell sx={{ width: "150px" }}>
                                                    <TextField id="standard-basic" sx={{ mt: 1.8 }} onChange={(e) => handelChangeItemQty(e)} variant="standard" />
                                                </TableCell>
                                                <TableCell sx={{ width: "150px" }}>

                                                    <TextField id="standard-basic" disabled sx={{ mt: 1.8 }} value={itemsall?.price} variant="standard" />
                                                </TableCell>
                                                <TableCell>{itemTotal ? itemTotal : 0}</TableCell>


                                            </TableRow>
                                        )

                                    })
                                }


                            </TableBody>
                        </Table>
                    </TableContainer>


                </Grid>

            </Grid>
        </div>
    )
}

export default InvoiceTable