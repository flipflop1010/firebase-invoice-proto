import React from 'react'
import { TableCell, Autocomplete, TextField, TableRow, Button } from '@mui/material';
import productService from '../app/services/ProductService';


// const items = [
//     { item: 'item1', price: 50 },
//     { item: 'item2', price: 72 },
//     { item: 'item3', price: 74 },
//     { item: 'item4', price: 28 },
//     { item: 'item5', price: 57 },
//     { item: 'item6', price: 45 },

// ];



const InvoiceTableRow = (props: any) => {

    const {rowId,handleRemoveRow}=props;

    const [items,setItems]=React.useState<any>([])
    const [isDestroyComponent,setDestroyComponent]=React.useState<Boolean>(false);

    const defaultProps = {
        options: items,
        getOptionLabel: (option: any) => option.product_name,
    };

  

    

    

    const selectedItem=(value:any)=>{
        console.log(value);
        
    }

    const handelChangeItemQty=(e:any)=>{

    }

    const itemTotal=false;
    const itemsall={price:12};

    

    const handleClose=(e:any)=>{
        console.log('handleClose', rowId);
        handleRemoveRow(rowId);
        // setDestroyComponent(true);
    }
    // React.useEffect(()=>{
    //     if(isDestroyComponent){
    //         // handleRemoveRow(rowId)
    //         // return ()=>{
    //         //     console.log(`compoenent destroy ${rowId}`);
                
    //         // }
    //     }
    // },[isDestroyComponent])


    const handleItemSearch=async(e:any)=>{
        console.log(e.target.value);
        let keyword=e.target.value
        
        if(keyword && keyword.length>=2){
            console.log('keyword',keyword);
            
            let res=await productService.fetchByName(keyword);
            // console.log('res',res);
            if(res.data){
                setItems(res.data)
            }
            

        }
        
    }

    return (
        <>
        {!isDestroyComponent && (
            <TableRow
                key={rowId}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                   {rowId}
                </TableCell>
                <TableCell component="th" scope="row" sx={{ width: "350px" }}>
                    <Autocomplete
                        fullWidth
                        {...defaultProps}
                        id="clear-on-escape"
                        clearOnEscape
                        onChange={(event, value) => selectedItem(value)}
                        onKeyUp={(event)=>{handleItemSearch(event)}}
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
                <TableCell><Button onClick={(e)=>{handleClose(e)}}>X</Button></TableCell>


            </TableRow>

        )}
        </>
    )
}

export default InvoiceTableRow