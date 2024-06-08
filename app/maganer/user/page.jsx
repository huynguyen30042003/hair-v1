// "use client";
// import Navbar from "components/Navbar";
// import Sidebar from "components/Sidebar";
// import React from "react";
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField, IconButton, Box, Typography, Checkbox, Avatar } from '@mui/material';
// import { Settings, Delete, Info, MoreVert, Edit } from '@mui/icons-material';
// import CircleIcon from '@mui/icons-material/Circle';

// const createData = (avatar, name, email, position, country, status) => {
//   return { avatar, name, email, position, country, status };
// };

// const rows = [
//   createData('path/to/avatar1.png', 'Neil Sims', 'neil.sims@windster.com', 'Front-end developer', 'United States', 'Active'),
//   createData('path/to/avatar2.png', 'Roberta Casas', 'roberta.casas@windster.com', 'Designer', 'Spain', 'Active'),
//   createData('path/to/avatar3.png', 'Michael Gough', 'michael.gough@windster.com', 'React developer', 'United Kingdom', 'Active'),
//   createData('path/to/avatar4.png', 'Jese Leos', 'jese.leos@windster.com', 'Marketing', 'United States', 'Active'),
//   createData('path/to/avatar5.png', 'Bonnie Green', 'bonnie.green@windster.com', 'UI/UX Engineer', 'Australia', 'Offline'),
//   createData('path/to/avatar6.png', 'Thomas Lean', 'thomas.lean@windster.com', 'Vue developer', 'Germany', 'Active'),
//   createData('path/to/avatar7.png', 'Helene Engels', 'helene.engels@windster.com', 'Product owner', 'Canada', 'Active'),
//   createData('path/to/avatar8.png', 'Lana Byrd', 'lana.byrd@windster.com', 'Designer', 'United States', 'Active'),
// ];

// const TableHeader = () => {
//   return (
//     <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
//       <Box>
//         <Typography variant="h6">All users</Typography>
//       </Box>
//       <Box display="flex" alignItems="center">
//         <TextField label="Search for users" variant="outlined" size="small" style={{ marginRight: '16px' }} />
//         <IconButton>
//           <Settings />
//         </IconButton>
//         <IconButton>
//           <Delete />
//         </IconButton>
//         <IconButton>
//           <Info />
//         </IconButton>
//         <IconButton>
//           <MoreVert />
//         </IconButton>
//         <Button variant="contained" color="primary" style={{ marginLeft: '16px' }}>
//           Add user
//         </Button>
//         <Button variant="outlined" color="primary" style={{ marginLeft: '8px' }}>
//           Export
//         </Button>
//       </Box>
//     </Box>
//   );
// };

// const StatusIndicator = ({ status }) => {
//   const color = status === 'Active' ? 'green' : 'red';
//   return (
//     <Box display="flex" alignItems="center">
//       <CircleIcon style={{ color, fontSize: 'small', marginRight: '4px' }} />
//       {status}
//     </Box>
//   );
// };

// const TableService = () => {
//   return (
//     <Paper style={{ padding: '16px' }}>
//       <TableHeader />
//       <TableContainer>
//         <Table aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell padding="checkbox">
//                 <Checkbox />
//               </TableCell>
//               <TableCell>Name</TableCell>
//               <TableCell>Email</TableCell>
//               <TableCell>Position</TableCell>
//               <TableCell>Country</TableCell>
//               <TableCell>Status</TableCell>
//               <TableCell align="center">Actions</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map((row) => (
//               <TableRow key={row.name}>
//                 <TableCell padding="checkbox">
//                   <Checkbox />
//                 </TableCell>
//                 <TableCell component="th" scope="row" style={{ display: 'flex', alignItems: 'center' }}>
//                   <Avatar alt={row.name} src={row.avatar} style={{ marginRight: '8px' }} />
//                   <Box>
//                     <Typography variant="body2">{row.name}</Typography>
//                     <Typography variant="caption">{row.email}</Typography>
//                   </Box>
//                 </TableCell>
//                 <TableCell>{row.email}</TableCell>
//                 <TableCell>{row.position}</TableCell>
//                 <TableCell>{row.country}</TableCell>
//                 <TableCell>
//                   <StatusIndicator status={row.status} />
//                 </TableCell>
//                 <TableCell align="center">
//                   <Box display="flex" justifyContent="center" gap={1}>
//                     <Button variant="contained" color="primary" size="small" startIcon={<Edit />}>
//                       Edit user
//                     </Button>
//                     <Button variant="contained" color="secondary" size="small" startIcon={<Delete />}>
//                       Delete user
//                     </Button>
//                   </Box>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </Paper>
//   );
// };

// const page = () => {
//   return <TableService />;
// };

// export default page;
import TableUser from 'components/TableUser'
import React from 'react'

const page = () => {
  return (
    <div>
      <TableUser/>
    </div>
  )
}

export default page