// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

// function CustomImageLeft() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         // alignItems: 'center',
//         justifyContent: 'left',
//         width: '100%',
//         marginLeft :'-10%',
//         marginBottom : '-20%'
//       }}
//     >
//       <img src='/Images/sign2.svg' alt="Sign Up Image" width="300" />
//     </Box>
//   );
// }
// function CustomImageRight() {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         // alignItems: 'center',
//         justifyContent: 'right',
//         width: '100%',
//         marginTop :'-25%',
//         marginBottom :'5%',
//         marginRight : '-5%',
//       }}
//     >
//       <img src='/Images/signup.svg' alt="Sign Up Image" width="300" height="750" />
//     </Box>
//   );
// }

// function SignUpForm({ handleSubmit }) {
//   return (
//     <Box
//       sx={{
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         maxWidth: '480px',
//         // border: '1px solid #ccc',
//         // boxShadow : '4px 7px 12px 3px',
//         borderColor : 'grey',
//         p: 3,
//         marginLeft : 8,
//         marginBottom : 5,
//       }}
//     >
//       <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
//         <AccountCircleSharpIcon />
//       </Avatar>
//       <Typography component="h1" variant="h5">
//         Sign up
//       </Typography>
//       <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4, width: '100%' }}>
//         <Grid container spacing={2}>
//           <Grid item xs={12} sm={6}>
//             <TextField autoComplete="given-name" name="firstName" required fullWidth id="firstName" label="First Name" autoFocus />
//           </Grid>
//           <Grid item xs={12} sm={6}>
//             <TextField required fullWidth id="lastName" label="Last Name" name="lastName" autoComplete="family-name" />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
//           </Grid>
//           <Grid item xs={12}>
//             <TextField required fullWidth name="password" label="Password" type="password" id="password" autoComplete="new-password" />
//           </Grid>
//           <Grid item xs={12}>
//             <FormControlLabel control={<Checkbox value="allowExtraEmails" color="primary" />} label="I agree the terms and conditions." />
//           </Grid>
//         </Grid>
//         <Button
//           type="submit"
//           fullWidth
//           variant="contained"
//           sx={{ mt: 3, mb: 2, backgroundColor: 'pink', '&:hover': { backgroundColor: 'purple' } }}
//         >
//           Sign Up
//         </Button>
//         <Grid container justifyContent="flex-end">
//           <Grid item>
//             <Link href="/" variant="body2">
//               Already have an account? Sign in
//             </Link>
//           </Grid>
//         </Grid>
//       </Box>
//     </Box>
//   );
// }

// const defaultTheme = createTheme();

// export default function SignUp() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       email: data.get('email'),
//       password: data.get('password'),
//     });
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <CssBaseline />
//       <Container component="main" maxWidth="lg" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
//         <CustomImageLeft />
//         <SignUpForm handleSubmit={handleSubmit} />
//         <CustomImageRight />
//       </Container>
//     </ThemeProvider>
//   );
// }
export default function SignUp() {
  return (
    <div className="flex justify-center mt-[10%]">
      <div class="flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow  sm:px-6 md:px-8 lg:px-10">
        <div className="flex justify-center mb-3" >
          <img src="/Images/mobile.png" width={50}></img>
        </div>
        <div class="self-center mb-2 text-xl font-light text-gray-800 sm:text-2xl">
          Create a new account
        </div>
        <span class="justify-center text-sm text-center text-gray-500 flex-items-center">
          Already have an account ?
          <a href="/" target="_blank" class="text-sm text-blue-500 underline hover:text-blue-700">
            Log In
          </a>
        </span>
        <div class="p-6 mt-8">
          <form action="#">
            <div class="flex gap-4 mb-2">
              <div class=" relative ">
                <input type="text" id="create-account-first-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="First name" placeholder="First name" />
              </div>
              <div class=" relative ">
                <input type="text" id="create-account-last-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="Last name" placeholder="Last name" />
              </div>
            </div>
            <div class="flex flex-col mb-2">
              <div class=" relative ">
                <input type="text" id="create-account-pseudo" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" name="pseudo" placeholder="username" />
              </div>
            </div>
            <div class="flex flex-col mb-2">
              <div class=" relative ">
                <input type="text" id="create-account-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="password" />
              </div>
            </div>
            <div class="flex flex-col mb-2">
              <div class=" relative ">
                <input type="text" id="create-account-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="confirm password" />
              </div>
            </div>
            <div class="flex w-full my-4">
              <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}