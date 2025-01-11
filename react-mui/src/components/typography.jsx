import { Typography } from '@mui/material'

export default function MultiTypography() {
  return (
    <>
      <Typography variant="h1"> Heading 1 </Typography>
      <Typography variant="h1"> Heading 2 </Typography>
      <Typography variant="h3"> Heading 3 </Typography>
      <Typography variant="h4"> Heading 4 </Typography>

      <Typography variant='body1'> body1: Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quos ex libero sequi praesentium nam mollitia saepe cum similique veritatis molestiae perferendis assumenda eum explicabo, ipsa, quasi neque qui! At.</Typography>
      <Typography variant='body2'> body2: Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti quos ex libero sequi praesentium nam mollitia saepe cum similique veritatis molestiae perferendis assumenda eum explicabo, ipsa, quasi neque qui! At.</Typography>
    </>
  );
}
