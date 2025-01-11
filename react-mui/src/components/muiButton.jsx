import {
  Button,
  Stack,
  Typography,
  IconButton,
  ButtonGroup,
  ToggleButton,
  ToggleButtonGroup,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import { useState } from "react";
export default function MUIButtons() {
  const [toggle, setToggle] = useState([]);
  console.log({
    toggle,
  });
  function handleOnChange(e, updatedFormat) {
    setToggle(updatedFormat);
  }
  return (
    <>
      <Stack direction="column" spacing={7}>
        <Stack direction="row" spacing={2}>
          <Button variant="text" href="https://www.youtube.com">
            {" "}
            Text{" "}
          </Button>
          <Button variant="contained"> Contained </Button>
          <Button variant="outlined"> Outlined </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography variant="h4"> Contained Variants </Typography>
          <Button variant="contained" color="primary">
            {" "}
            Primary{" "}
          </Button>
          <Button variant="contained" color="secondary">
            {" "}
            Secondary{" "}
          </Button>
          <Button variant="contained" color="warning">
            {" "}
            Warning{" "}
          </Button>
          <Button variant="contained" color="info">
            {" "}
            Info{" "}
          </Button>
          <Button variant="contained" color="error">
            {" "}
            Error{" "}
          </Button>
          <Button variant="contained" color="success">
            {" "}
            Success{" "}
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography variant="h4"> Outlined Variants </Typography>
          <Button variant="outlined" color="primary">
            {" "}
            Primary{" "}
          </Button>
          <Button variant="outlined" color="secondary">
            {" "}
            Secondary{" "}
          </Button>
          <Button variant="outlined" color="warning">
            {" "}
            Warning{" "}
          </Button>
          <Button variant="outlined" color="info">
            {" "}
            Info{" "}
          </Button>
          <Button variant="outlined" color="error">
            {" "}
            Error{" "}
          </Button>
          <Button variant="outlined" color="success">
            {" "}
            Success{" "}
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography variant="h4"> Text Variants </Typography>
          <Button variant="text" color="primary">
            {" "}
            Primary{" "}
          </Button>
          <Button variant="text" color="secondary">
            {" "}
            Secondary{" "}
          </Button>
          <Button variant="text" color="warning">
            {" "}
            Warning{" "}
          </Button>
          <Button variant="text" color="info">
            {" "}
            Info{" "}
          </Button>
          <Button variant="text" color="error">
            {" "}
            Error{" "}
          </Button>
          <Button variant="text" color="success">
            {" "}
            Success{" "}
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography variant="h4"> Button sizes </Typography>
          <Button variant="contained" color="primary" size="small">
            {" "}
            Small{" "}
          </Button>
          <Button variant="contained" color="secondary" size="medium">
            {" "}
            Medium{" "}
          </Button>
          <Button variant="contained" color="warning" size="large">
            {" "}
            Large{" "}
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography variant="h4"> Button with Icons </Typography>
          <Button
            variant="contained"
            color="primary"
            size="large"
            startIcon={<SendIcon />}
          >
            {" "}
            Small{" "}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="medium"
            endIcon={<SendIcon />}
            disableRipple
            onClick={() => alert("Button clicked")}
          >
            {" "}
            Medium{" "}
          </Button>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography variant="h4"> Button icons </Typography>
          <IconButton size="large" color="primary">
            <SendIcon />
          </IconButton>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography variant="h4"> Button Group </Typography>
          <ButtonGroup size="small" color="secondary" variant="contained">
            <Button>Left</Button>
            <Button>Center</Button>
            <Button>Right</Button>
          </ButtonGroup>
        </Stack>
        <Stack direction="row" spacing={2}>
          <Typography variant="h4"> Toggle Button Group </Typography>
          <ToggleButtonGroup onChange={handleOnChange} value={toggle}>
            <ToggleButton value="underlined">
              <FormatUnderlinedIcon />
            </ToggleButton>
            <ToggleButton value="bold">
              <FormatBoldIcon />
            </ToggleButton>
            <ToggleButton value="italic">
              <FormatItalicIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </>
  );
}
