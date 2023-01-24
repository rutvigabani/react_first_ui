import {
  Typography,
  Button,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  FormControlLabel,
  Switch,
  Pagination,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  TextField,
  Popover,
} from "@mui/material";
import { useState } from "react";
import ErrorIcon from "@mui/icons-material/Error";

function createData(domainname, tracking, status, action) {
  return { domainname, tracking, status, action };
}

const handlePopoverOpen = (event) => {
  setAnchor(event.currentTarget);
};

const handlePopoverClose = () => {
  setAnchor(null);
};

const rows = [
  createData(
    "connect.domains.google.com",
    <span startIcon={<ErrorIcon />}>Not installed</span>,
    <FormControlLabel control={<Switch defaultChecked />} />,
    <>
      <Typography
        variant="h4"
        aria-owns={open ? "mouse-over-popover" : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        ...
      </Typography>
      <Popover
        id="mouse-over-popover"
        sx={{ pointerEvents: "none" }}
        open={open}
        setAnchor={setAnchor}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <Typography>Edit</Typography>
      </Popover>
    </>
  ),
  createData(
    "userlove.test.in",
    "Already installed",
    <FormControlLabel control={<Switch />} />,
    <Typography variant="h4">...</Typography>
  ),
  createData(
    "tracking.user.com",
    "Already installed",
    <FormControlLabel control={<Switch />} />,
    <Typography variant="h4">...</Typography>
  ),
  createData(
    "design.creation.com",
    "Not installed",
    <FormControlLabel control={<Switch defaultChecked />} />,
    <Typography variant="h4">...</Typography>
  ),
  createData(
    "bussiness.tour.holiday.com",
    "Not installed",
    <FormControlLabel control={<Switch defaultChecked />} />,
    <Typography variant="h4">...</Typography>
  ),
];

export const UiMain = () => {
  //   const open = Boolean(anchorEl);
  const [open, setOpen] = useState(false);
  const [anchor, setAnchor] = useState(null);
  return (
    <>
      <div>
        <span className="left-span">
          <div>
            <Typography fontFamily="sans-serif" variant="h6">
              Manage domain
            </Typography>
          </div>
          <div>
            <Typography variant="subtitle2" fontSize="13px" color="#9b9b96">
              You can add,export,edit and delete your domain
            </Typography>
          </div>
        </span>
        <span className="right-span">
          <div>
            <Button
              onClick={() => setOpen(true)}
              size="small"
              className="header-menu"
              variant="contained"
              color="primary"
            >
              Add domain
            </Button>
            <Dialog
              className="main-dialog"
              open={open}
              onClose={() => setOpen(false)}
            >
              <DialogTitle>Add new domain</DialogTitle>
              <DialogContent>
                <DialogContentText>Domain/Subdomain</DialogContentText>
                <TextField placeholder="ex: www.domain.com subdomain.domain.com" />
              </DialogContent>
              <DialogActions>
                <Button variant="contained" onClick={() => setOpen(false)}>
                  Create
                </Button>
                <Button variant="outlined" onClick={() => setOpen(false)}>
                  Cancel
                </Button>
              </DialogActions>
            </Dialog>
          </div>
        </span>
      </div>
      <div className="main-table">
        <TableContainer component={Paper} className="table-main">
          <Table aria-label="table data">
            <TableHead>
              <TableRow>
                <TableCell>Domain Name</TableCell>
                <TableCell>Tracking</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.domainname}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.domainname}</TableCell>
                  <TableCell>{row.tracking}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{row.action}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <div className="center">
          <div className="pagination">
            <Pagination count={10} color="primary" />
          </div>
        </div>
      </div>
    </>
  );
};
