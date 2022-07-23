import React from 'react'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useState } from 'react'
import { Paper, styled, SvgIcon, Theme } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles'


export const useStyles = makeStyles((theme: Theme) => ({
  menu: {
    "& .MuiPaper-root": {
      backgroundColor: "#a82824",
      color: "white",
    }
  }
}));
interface Props {
    title: string;
    name: undefined | string;
}

export default function Navbar({ title,name }: Props) {
//   const classes = useStyles();
  const StyledMenuItem = styled(MenuItem)(
    ` 
      &:hover, &.Mui-focusVisible {
        background-color: #a82824
      }`
  );
  
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <div className="flex w-full flex-1 flex-col justify-top">
          <nav className="flex items-center justify-between rounded-b-lg border-b border-gray-500 flex-between p-6 xl:p-10 bg-slate-800 text-white 3xl:px-20">

            <div className="flex items-center flex-shrink-0  mr-6">
              <a className=" inline-block text-2xl text-red-400 rounded py-2 px-4  font-bold">{title}</a>
            </div>

            <div className='hidden md:flex '>

              <div className="w-full block flex- md:flex lg:items-center hidden lg:w-auto " id='menu'>
                <div className="text-sm lg:flex-">
                  
                  <a className="inline-block border border-gray-500 text-sm px-6 py-3 mr-2 rounded  mt-4 lg:inline-block lg:mt-0 "
                      href=".."
                  >
                    home
                  </a>

                  <a className="inline-block border border-gray-500 text-sm px-6 py-3 mr-2 rounded  mt-4 lg:inline-block lg:mt-0 "
                       href="../profile"
                  >
                    {name}
                  </a>

                </div>
                
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="!capitalize flex items-center px-3 py-2 border rounded text-green-300 border-green-300 hover:text-white hover:border-white"
              >
                <svg className="fill-current h-5 w-6 " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                </svg>
              </button>
              
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                //   className={classes.menu}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <StyledMenuItem onClick={handleClose}  >Home</StyledMenuItem>
                  <StyledMenuItem onClick={handleClose} >{name}</StyledMenuItem>
                </Menu>
              
              
            </div>
            
          </nav>
      </div>
  )
}


