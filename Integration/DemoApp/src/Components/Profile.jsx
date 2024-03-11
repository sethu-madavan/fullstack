// import React from 'react';
// import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
// import '/Users/mahad/Desktop/Project/DemoApp/src/styles/Logs.css';
// export default function PersonalProfile() {
//   return (
//     <section classNameName="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
//       <MDBContainer classNameName="py-5 h-100">
//         <MDBRow classNameName="justify-content-center align-items-center h-100">
//           <MDBCol lg="6" classNameName="mb-4 mb-lg-0">
//             <MDBCard classNameName="mb-3" style={{ borderRadius: '.5rem' }}>
//               <MDBRow classNameName="g-0">
//                 <MDBCol md="4" classNameName="gradient-custom text-center text-white"
//                   style={{ borderTopLeftRadius: '.5rem', borderBottomLeftRadius: '.5rem' }}>
//                   <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
//                     alt="Avatar" classNameName="my-5" style={{ width: '80px' }} fluid />
//                   <MDBTypography tag="h5">Sethu Madhavan</MDBTypography>
//                   <MDBCardText>Security Analyist</MDBCardText>
//                   <MDBIcon far icon="edit mb-5" />
//                 </MDBCol>
//                 <MDBCol md="8">
//                   <MDBCardBody classNameName="p-4">
//                     <br></br>
//                     <br></br>
//                     <MDBTypography tag="h6">Information</MDBTypography>
//                     <hr classNameName="mt-0 mb-4" />
//                     <MDBRow classNameName="pt-1">
//                       <MDBCol size="6" classNameName="mb-3">
//                         <MDBTypography tag="h6">Email</MDBTypography>
//                         <MDBCardText classNameName="text-muted">sethu@gmail.com</MDBCardText>
//                       </MDBCol>
//                       <MDBCol size="6" classNameName="mb-3">
//                         <MDBTypography tag="h6">Phone</MDBTypography>
//                         <MDBCardText classNameName="text-muted">123 456 789</MDBCardText>
//                       </MDBCol>
//                     </MDBRow>

//                     {/* <MDBTypography tag="h6">Information</MDBTypography>
//                     <hr classNameName="mt-0 mb-4" />
//                     <MDBRow classNameName="pt-1">
//                       <MDBCol size="6" classNameName="mb-3">
//                         <MDBTypography tag="h6">Email</MDBTypography>
//                         <MDBCardText classNameName="text-muted">info@example.com</MDBCardText>
//                       </MDBCol>
//                       <MDBCol size="6" classNameName="mb-3">
//                         <MDBTypography tag="h6">Phone</MDBTypography>
//                         <MDBCardText classNameName="text-muted">123 456 789</MDBCardText>
//                       </MDBCol>
//                     </MDBRow> */}

//                     <div classNameName="d-flex justify-content-start">
//                       <a href="#!"><MDBIcon fab icon="facebook me-3" size="lg" /></a>
//                       <a href="#!"><MDBIcon fab icon="twitter me-3" size="lg" /></a>
//                       <a href="#!"><MDBIcon fab icon="instagram me-3" size="lg" /></a>
//                     </div>
//                   </MDBCardBody>
//                 </MDBCol>
//               </MDBRow>
//             </MDBCard>
//           </MDBCol>
//         </MDBRow>
//       </MDBContainer>
//     </section>
//   );
// }
export default function Profile() {
  return (
    <div className="">
      <div class="w-[50px] h-screen bg-gray-100 px-10 pt-10">
        <div class="relative mt-16 mb-32 max-w-sm mx-auto mt-24">
          <div class="rounded overflow-hidden shadow-md bg-white">
            <div class="absolute -mt-20 w-full flex justify-center">
              <div class="h-32 w-32">
                <img src="https://randomuser.me/api/portraits/women/49.jpg" class="rounded-full object-cover h-full w-full shadow-md" />
              </div>
            </div>
            <div class="px-6 mt-16">
              <h1 class="font-bold text-3xl text-center mb-1">Carole Steward</h1>
              <p class="text-gray-800 text-sm text-center">Chief Executive Officer</p>
              <p class="text-center text-gray-600 text-base pt-3 font-normal">
                Carole Steward is a visionary CEO known for her exceptional leadership and strategic acumen. With a
                wealth of experience in the corporate world, she has a proven track record of driving innovation and
                achieving remarkable business growth.
              </p>
              <div class="w-full flex justify-center pt-5 pb-5">
                <a href="#" class="mx-5">
                  <div aria-label="Github">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" class="feather feather-github">
                      <path
                        d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
                      </path>
                    </svg>
                  </div>
                </a>
                <a href="#" class="mx-5">
                  <div aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" class="feather feather-twitter">
                      <path
                        d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z">
                      </path>
                    </svg>
                  </div>
                </a>
                <a href="#" class="mx-5">
                  <div aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                      fill="none" stroke="#718096" stroke-width="1.5" stroke-linecap="round"
                      stroke-linejoin="round" class="feather feather-instagram">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}