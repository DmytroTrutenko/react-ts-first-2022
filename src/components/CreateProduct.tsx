import { Button, TextField } from "@mui/material"

export const CreateProduct = ()=>{
    return(
      <form>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" placeholder="Enter product title" />
        <Button type="submit" variant="contained" >Create</Button>
      </form>
    )
}