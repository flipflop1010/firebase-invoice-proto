
import React from 'react'
import { Autocomplete, Button, Grid, TextField, } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import InvoiceTableRow from './InvoiceTableRow';




const InvoiceTable = (props: any) => {

    const { handelChangeItemQty, selectedItem, itemsall, itemTotal } = props;

    const [rows,setRows]=React.useState<any[]>([])
    
    
    const handleRemoveRow=(rowId:any)=>{
        console.log('rowId',rowId);
        console.log('rows',rows);
        
        let r=[...rows];
        console.log('r',r);
            // var a=r.splice(rowId,1);
            // console.log('deleted',a);

            // r=r.filter((item)=>{
            //     return item.index!=rowId
            // })
            // console.log('r',r);
            
            // setRows(r);
            // console.log(rows);
            // console.log('rowId',rowId);
            

            // r=rows.filter((row)=>{
            //     return row.index==rowId;
            // })

            

            // setRows(r);

    }
    const handleAddRow=(e:any)=>{
        let current_rows=rows.length;
        setRows([...rows,{index:current_rows+1,component:<InvoiceTableRow handleRemoveRow={handleRemoveRow} key={current_rows+1} rowId={current_rows+1} />}])

        console.log('add-row rows',rows);
        
    }

    


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
                                    <TableCell >Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                {rows  && rows.map(row=>row.component)}

                            </TableBody>
                        </Table>
                    </TableContainer>


                </Grid>
                    <Button onClick={(e)=>{handleAddRow(e)}} variant="outlined" sx={{ boxShadow: "none", borderRadius: "0px" }}>Add Item</Button>

            </Grid>
        </div>
    )
}

export default InvoiceTable