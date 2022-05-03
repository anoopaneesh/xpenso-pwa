import LocalDiningIcon from '@mui/icons-material/LocalDining';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import CategoryIcon from '@mui/icons-material/Category';
import PaidIcon from '@mui/icons-material/Paid';
export const categories = [{
    name:'Travel',
},{
    name:'Food',
},{
    name:'Other',
}]



export const getCategoryIcon = (cat:string) => {
    switch(cat){
        case 'Travel': return ElectricBikeIcon
        case 'Food': return LocalDiningIcon
        case 'Income': return PaidIcon
        default : return CategoryIcon
    }
}